import axios from 'axios';

import { ProductType } from '@/entity/ProductType';
import env from '@/utils/env';

type Products = ReadonlyArray<ProductType>;

type FetchProductProps = {
  name?: string | undefined;
};

const fetchProductSearch = async (
  props: FetchProductProps = { name: undefined }
): Promise<any> => {
  const response = await axios.get(`${env.url + env.productUrl}?populate=*&filters[Title][$contains]=${props.name}`);
  return response.data;
};
export default fetchProductSearch;
