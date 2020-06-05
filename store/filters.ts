import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

export enum Categories {
  PIZZA = 'Пицца',
  SUSHI = 'Суши',
  BURGERS = 'Бургеры',
  PIES = 'Пироги',
}

type SetCategoryPayload = { category: Categories; value: boolean };

@Module({ name: 'filters', stateFactory: true, namespaced: true })
export default class extends VuexModule {
  isFreeDelivery: boolean = false;

  // Сделал категории, как указано в тестовом. В идеале нужно собрать их из ресторанов, которые мы получили
  categories = {
    [Categories.PIZZA]: false,
    [Categories.BURGERS]: false,
    [Categories.SUSHI]: false,
    [Categories.PIES]: false,
  };

  @Mutation
  SET_FREE_DELIVERY(value: boolean) {
    this.isFreeDelivery = value;
  }

  @Mutation
  SET_CATEGORY({ category, value }: SetCategoryPayload) {
    this.categories[category] = value;
  }

  @Action
  setFreeDelivery(value: boolean) {
    this.SET_FREE_DELIVERY(value);
  }

  @Action
  setCategory(payload: SetCategoryPayload) {
    this.SET_CATEGORY(payload);
  }
}
