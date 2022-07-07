import { useQuery } from 'react-query';

import fetchRegister from '@/api/Auth/Register/Register';
import { UserRegister } from '@/entity/UserRegister';

export const useRegisterQuery = (props: UserRegister) =>
  useQuery(['register'], () => fetchRegister(props), { enabled: false });
