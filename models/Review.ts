import generateId from '~/utils/generateId';

export default class Review {
  readonly id = generateId();
  readonly date: Date;

  constructor(
    readonly username: string,
    readonly message: string,
    readonly restaurant: string,
    readonly isPositive: boolean,
    date: string,
  ) {
    this.date = new Date(date);
  }
}
