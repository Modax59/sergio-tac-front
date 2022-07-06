import React from 'react';

import { useRouter } from 'next/router';

import routes from '@/utils/routes';

type Props = {
  collection: {
    id: number;
    name: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
  };
};

const CollectionItemList = (props: Props) => {
  const router = useRouter();
  return (
    <div
      key={props.collection.id}
      onClick={() =>
        router.push(routes.collection_detail + props.collection.id)
      }
      className="group relative"
    >
      <div className="lg:aspect-none h-80  w-full overflow-hidden bg-gray-200 text-center group-hover:opacity-90">
        <img
          src={props.collection.imageSrc}
          alt={props.collection.imageAlt}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <h3 className="p-1.5 px-5 text-center text-2xl uppercase text-white">
        <a href={props.collection.href}>
          <span aria-hidden="true" className="absolute inset-0 " />
          {props.collection.name}
        </a>
      </h3>
    </div>
  );
};

export default CollectionItemList;
