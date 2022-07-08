import { useQuery } from 'react-query';

import fetchAssets from '@/api/OpenSea/Assets';

export const useAssetsQuery = (id?: number | undefined) =>
  useQuery(['assets'], () => fetchAssets());
