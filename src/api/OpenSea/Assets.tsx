import axios from 'axios';

import env from '@/utils/env';


const fetchAssets = async (): Promise<any> => {
  const { data } = await axios.get(`${env.open_sea_url + env.open_sea_assets}`);
  return data;
};
export default fetchAssets;
