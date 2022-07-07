import React from 'react';

import { useRouter } from 'next/router';

import Base from '@/layout/base';
import Link from 'next/link';
import Routes from '@/utils/routes';

const DetailProduct = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Base>
      <div className="m-5">
        <div className="text-center">
          <h1>Detail Product {id}</h1>
          <Link href={Routes.order + id}>Procéder au paiement</Link>
        </div>
      </div>
    </Base>
  );
};

export default DetailProduct;
