import makeRequest from '~/api/makeRequest';
import Review from '~/models/Review';
import { Nullable } from '~/types/utility';

export const getReviews = async (): Promise<Nullable<Review[]>> => {
  const url = new URL(process.env.chibbisApi + 'reviews');
  const data = await makeRequest(url);

  if (Array.isArray(data)) {
    return data.map(
      ({ IsPositive, Message, DateAdded, UserFIO, RestaurantName }) =>
        new Review(UserFIO, Message, RestaurantName, IsPositive, DateAdded),
    );
  }
};
