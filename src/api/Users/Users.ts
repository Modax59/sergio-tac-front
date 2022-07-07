import axios from 'axios';

import env from '@/utils/env';


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
