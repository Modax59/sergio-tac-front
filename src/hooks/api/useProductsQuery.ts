import { useQuery } from 'react-query';

import fetchProduct from '@/api/Product/Product';

export const useProductsQuery = (id?: number | undefined) =>
  useQuery(['products'], () => fetchProduct({ id }));
