import { useQuery } from 'react-query';

import fetchLogin from '@/api/Auth/Login/Login';
import { UserAuth } from '@/entity/UserAuth';

export const useLoginQuery = (props: UserAuth) =>
  useQuery(['login'], () => fetchLogin(props),{enabled: false});
