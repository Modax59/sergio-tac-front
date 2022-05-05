import React from 'react';

import { useRouter } from 'next/router';

import Base from '@/layout/base';

const DetailProduct = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Base>
      <div className="m-5">
        <div className="text-center">
          <h1>Detail Product {id}</h1>
        </div>
      </div>
    </Base>
  );
};

export default DetailProduct;
