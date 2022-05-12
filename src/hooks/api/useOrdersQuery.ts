import { useQuery } from 'react-query';

import fetchOrder from '@/api/Order/Order';

export const useOrdersQuery = (id?: number | undefined) =>
  useQuery(['orders'], () => fetchOrder({ id }));
