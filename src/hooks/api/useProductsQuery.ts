import { useQuery } from 'react-query';

import fetchProduct from '@/api/Products/Product';

export const useProductsQuery = () =>
  useQuery(['products'], () => fetchProduct());
