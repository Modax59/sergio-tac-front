import axios from 'axios';

import { ProductType } from '@/entity/ProductType';
import env from '@/utils/env';

type Products = ReadonlyArray<ProductType>;

type FetchProductProps = {
  id?: number | undefined;
};

const fetchProduct = async (
  props: FetchProductProps = { id: undefined }
): Promise<Products> => {
  if (props.id) {
    const { data } = await axios.get(
      `${env.url + env.productUrl}/${props.id}?populate=*`
    );
    return data;
  }
  const response = await axios.get(`${env.url + env.productUrl}?populate=*`);
  return response.data;
};
export default fetchProduct;
