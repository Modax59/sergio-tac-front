import axios from 'axios';

import { OrderDetail } from '@/entity/OrderDetail';
import env from '@/utils/env';

type OrderDetails = ReadonlyArray<OrderDetail>;

type FetchOrderDetailProps = {
  id?: number | undefined;
};

const fetchOrderDetail = async (
  props: FetchOrderDetailProps = { id: undefined }
): Promise<OrderDetails> => {
  
  const response = await axios.get(`${env.url + env.orderDetail}?populate=*`);
  return response.data;
};
export default fetchOrderDetail;
