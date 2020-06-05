import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { getRestaurants } from '~/api/restaurants';
import Restaurant from '~/models/Restaurant';

@Module({ name: 'restaurants', stateFactory: true, namespaced: true })
export default class extends VuexModule {
  restaurants: Restaurant[] = [];

  @Mutation
  public SET_RESTAURANTS(restaurants: Restaurant[]) {
    this.restaurants = restaurants;
  }

  @Action
  async fetchRestaurants() {
    const restaurants = await getRestaurants();
    this.SET_RESTAURANTS(restaurants ?? []);
  }
}
