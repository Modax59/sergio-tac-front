import axios from 'axios';

import { Order } from '@/entity/Order';
import env from '@/utils/env';

type Orders = ReadonlyArray<Order>;

type FetchOrderProps = {
  id?: number | undefined;
};

const fetchOrder = async (
  props: FetchOrderProps = { id: undefined }
): Promise<Orders> => {
  if (props.id) {
    const { data } = await axios.get(
      `${env.url + env.orderUrl}/${props.id}?populate=*`
    );
    return data;
  }
  const response = await axios.get(`${env.url + env.orderUrl}?populate=*`);
  return response.data;
};
export default fetchOrder;
