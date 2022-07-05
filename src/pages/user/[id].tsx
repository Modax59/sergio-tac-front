import React from 'react';

import { useRouter } from 'next/router';

import Base from '@/layout/base';

const Account = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Base>
      <div className="m-5">
        <div className="text-center">
          <h1>Account {id}</h1>
        </div>
      </div>
    </Base>
  );
};

export default Account;
