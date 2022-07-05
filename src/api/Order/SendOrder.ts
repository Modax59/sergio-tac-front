import axios from 'axios';

import { Order } from '@/entity/Order';
import env from '@/utils/env';


const fetchPostOrders = async (props: any): Promise<any> => {
  console.log(props);
  const { data } = await axios.post(`${env.url + env.orderDetail}`, {
    data: {
      Quantity: props.quantity,
    Price: props.price,
    TotalPrice: props.price,
    product: props.product,
    user_id: props.user
    }
  });
  return data;
};
export default fetchPostOrders;
