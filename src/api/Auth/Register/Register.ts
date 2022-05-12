import axios from 'axios';

import { UserRegister } from '@/entity/UserRegister';
import env from '@/utils/env';

const fetchRegister = async (props: UserRegister): Promise<any> => {
  const { data } = await axios.post(`${env.url}auth/local/register`, {
    name: props.name,
    password: props.password,
    email: props.email,
    username: props.username,
  });
  return data;
};
export default fetchRegister;
