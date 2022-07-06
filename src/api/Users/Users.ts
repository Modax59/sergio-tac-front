import axios from 'axios';

import { ProductType } from '@/entity/ProductType';
import env from '@/utils/env';

type Products = ReadonlyArray<ProductType>;

type FetchProductProps = {
  id?: any
};

const fetchUsers = async (
  props: FetchProductProps = { id: undefined }
): Promise<any> => {
  const response = await axios.get(`${env.url + env.userUrl}/${props.id}`);
  return response.data;
};
export default fetchUsers;
