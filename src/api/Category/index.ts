import axios from 'axios';

import { Category } from '@/entity/Category';
import env from '@/utils/env';

type Categories = ReadonlyArray<Category>;

type FetchCategoryProps = {
  id?: number | undefined;
};

const fetchCategory = async (
  props: FetchCategoryProps = { id: undefined }
): Promise<Categories> => {
  if (props.id) {
    const { data } = await axios.get(
      `${env.url + env.categoryUrl}/${props.id}`
    );
    return data;
  }
  const response = await axios.get(`${env.url + env.categoryUrl}`);
  return response.data;
};
export default fetchCategory;
