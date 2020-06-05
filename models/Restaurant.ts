import generateId from '~/utils/generateId';

interface Reviews {
  reviewsTotal: number;
  reviewsPositive: number;
}

interface Delivery {
  minutes: number;
  minSum: number;
  cost: number;
}

export default class Restaurant {
  readonly id = generateId();

  // eslint-disable-next-line no-useless-constructor
  constructor(
    readonly title: string,
    readonly logo: string,
    readonly reviews: Reviews,
    readonly delivery: Delivery,
    readonly categories: string[],
  ) {}
}
