import makeRequest from '~/api/makeRequest';
import Product from '~/models/Product';
import { Nullable } from '~/types/utilities';

export const getHits = async (): Promise<Nullable<Product[]>> => {
  const url = new URL(process.env.chibbisApi + 'hits');
  const data = await makeRequest(url);

  if (Array.isArray(data)) {
    return data.map(
      ({ ProductName, ProductImage, ProductPrice, ProductDescription }) =>
        new Product(ProductName, ProductImage, ProductDescription, ProductPrice),
    );
  }
};
