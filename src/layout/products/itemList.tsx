import React from 'react';

import { useRouter } from 'next/router';

import routes from '@/utils/routes';
import env from '@/utils/env';

type Props = {
  key: number;
  product: {
    id: number;
    title: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
    price: string;
    color: string;
    category: string;
  };
};

const ProductItemList = (props: Props) => {
  const router = useRouter();
  return (
    <div
      key={props.product.id}
      onClick={() => router.push(routes.product_detail + props.product.id)}
      className="group relative"
    >
      <div className="lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
        <img
          src={env.url2 + props.product.imageSrc}
          alt={props.product.imageAlt}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">

            <button onClick={() => router.push(routes.product_detail+props.product.id)}>
              <span aria-hidden="true" className="absolute inset-0" />
              {props.product.title}
            </button>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{props.product.category}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">
          {props.product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductItemList;
