/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import filters from '~/store/filters';
import products from '~/store/products';
import restaurants from '~/store/restaurants';
import reviews from '~/store/reviews';

let StoreProducts: products;
let StoreReviews: reviews;
let StoreRestaurants: restaurants;
let StoreFilters: filters;

function initialiseStores(store: Store<any>): void {
  StoreProducts = getModule(products, store);
  StoreReviews = getModule(reviews, store);
  StoreRestaurants = getModule(restaurants, store);
  StoreFilters = getModule(filters, store);
}

export { initialiseStores, StoreProducts, StoreReviews, StoreRestaurants, StoreFilters };
