import { useQuery } from 'react-query';

import fetchAssets from '@/api/OpenSea/Assets';

export const useAssetsQuery = () =>
  useQuery(['assets'], () => fetchAssets());
