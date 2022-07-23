import { useQuery } from 'react-query';

import fetchProduct from '@/api/Product/Product';

export const useProductQuery = (id?: any) =>
  useQuery(['product'], () => fetchProduct({ id }), { enabled: false });
