import React from 'react';

import { useRouter } from 'next/router';

import routes from '@/utils/routes';

type Props = {
  key: number;
  product: {
    id: number;
    name: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
    price: string;
    color: string;
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
          src={props.product.imageSrc}
          alt={props.product.imageAlt}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={props.product.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {props.product.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{props.product.color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">
          {props.product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductItemList;
