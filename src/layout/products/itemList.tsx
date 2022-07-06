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
      <div className="lg:aspect-none w-full overflow-hidden bg-gray-200 group-hover:opacity-75 lg:h-96">
        <img
          src={props.product.imageSrc}
          alt={props.product.imageAlt}
          className="h-full w-full object-cover  lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-base text-white">
            <a href={props.product.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {props.product.name}
            </a>
          </h3>
          <p className="text-base font-medium text-white">
            {props.product.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductItemList;
