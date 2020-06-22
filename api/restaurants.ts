import makeRequest from '~/api/makeRequest';
import Restaurant from '~/models/Restaurant';
import { Nullable } from '~/types/utilities';

const parseSpecializations = (data: Array<{ Name: string }>): string[] => data.map(value => value.Name);

export const getRestaurants = async (): Promise<Nullable<Restaurant[]>> => {
  const url = new URL(process.env.chibbisApi + 'restaurants');
  const data = await makeRequest(url);

  if (Array.isArray(data)) {
    return data.map(
      ({ Name, Logo, Specializations, ReviewsCount, PositiveReviews, DeliveryTime, DeliveryCost, MinCost }) => {
        const reviews = {
          reviewsTotal: ReviewsCount,
          reviewsPositive: PositiveReviews,
        };
        const delivery = {
          minutes: DeliveryTime,
          minSum: MinCost,
          cost: DeliveryCost,
        };

        const categories = parseSpecializations(Specializations);

        return new Restaurant(Name, Logo, reviews, delivery, categories);
      },
    );
  }
};
