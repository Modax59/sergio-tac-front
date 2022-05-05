import { useQuery } from 'react-query';

import fetchCategory from '@/api/Category';

export const useCategoriesQuery = () =>
  useQuery(['categories'], () => fetchCategory());
