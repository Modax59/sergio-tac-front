import React from 'react';

import { useRouter } from 'next/router';

import routes from '@/utils/routes';

type Props = {
  key: number;
  category: {
    id: number;
    name: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
  };
};

const CategoryItemList = (props: Props) => {
  const router = useRouter();
  return (
    <div
      key={props.category.id}
      onClick={() => router.push(routes.category_detail + props.category.id)}
      className="group relative"
    >
      <div className="lg:aspect-none relative w-full overflow-hidden  bg-gray-200 text-center group-hover:opacity-90">
        <img
          src={props.category.imageSrc}
          alt={props.category.imageAlt}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />

        <button className="absolute bottom-0 left-1/2 mb-6 w-3/4 -translate-x-1/2 rounded-lg bg-greenst">
          <h3 className="p-1.5 px-5 text-base font-bold text-blackst">
            <a href={props.category.href}>
              <span aria-hidden="true" className="absolute inset-0 " />
              {props.category.name}
            </a>
          </h3>
        </button>
      </div>
    </div>
  );
};

export default CategoryItemList;
