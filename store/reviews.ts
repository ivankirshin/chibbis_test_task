import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { getReviews } from '~/api/reviews';
import Review from '~/models/Review';

@Module({ name: 'reviews', stateFactory: true, namespaced: true })
export default class extends VuexModule {
  reviews: Review[] = [];

  @Mutation
  public SET_REVIEWS(reviews: Review[]) {
    this.reviews = reviews;
  }

  @Action
  async fetchReviews() {
    const reviews = await getReviews();
    this.SET_REVIEWS(reviews ?? []);
  }
}
