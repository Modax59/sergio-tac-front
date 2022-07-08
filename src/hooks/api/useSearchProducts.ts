import { useQuery } from 'react-query';

import fetchProductSearch from '@/api/Product/SearchProducts';

export const useProductsSearchQuery = (name?: string | undefined) =>
  useQuery(['searchProducts'], () => fetchProductSearch({ name }), {enabled : false});
