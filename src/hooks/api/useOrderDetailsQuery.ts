import { useQuery } from 'react-query';

import fetchOrderDetail from '@/api/OrderDetail/OrderDetail';

export const useOrderDetailsQuery = (id?: number | undefined) =>
  useQuery(['orderDetails'], () => fetchOrderDetail({ id }));
