import { Nullable } from '~/types/utilities';
import generateId from '~/utils/generateId';

export default class Product {
  readonly id = generateId();
  readonly ingredients: string[] = [];
  readonly weight: Nullable<string> = null;

  constructor(readonly name: string, readonly image: string, description: string, readonly price: number) {
    const result = description.match(/^(?<ingredients>[^.]+)(\..*?(?<weight>[\d]+))?/);

    if (result && result.groups) {
      const { ingredients = '', weight } = result.groups;
      this.ingredients = ingredients.split(',').map(ingredient => ingredient.trim());
      this.weight = weight;
    }
  }
}
