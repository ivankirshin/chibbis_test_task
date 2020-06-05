import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { getHits } from '~/api/products';
import Product from '~/models/Product';

@Module({ name: 'products', stateFactory: true, namespaced: true })
export default class extends VuexModule {
  hits: Product[] = [];

  @Mutation
  public SET_HITS(products: Product[]) {
    this.hits = products;
  }

  // Есть более лаконичный вариант, но теряется типизация
  // @Action({ commit: 'SET_HITS' })
  @Action
  async fetchHits() {
    const products = await getHits();
    this.SET_HITS(products ?? []);
  }
}
