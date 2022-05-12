import axios from 'axios';

import { UserAuth } from '@/entity/UserAuth';
import env from '@/utils/env';

const fetchLogin = async (props: UserAuth): Promise<any> => {
  const { data } = await axios.post(`${env.url}auth/local`, {
    identifier: props.identifier,
    password: props.password,
  });
  return data;
};
export default fetchLogin;
