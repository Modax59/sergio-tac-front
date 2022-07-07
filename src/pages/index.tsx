import React from 'react';


import { UserProvider } from '@/hooks/auth/useUser';
import Base from '@/layout/base';
import List from '@/templates/products/list';

const index = () => {

  return (

      <UserProvider>
        <Base>
          <List />
        </Base>
      </UserProvider>
  );
};

export default index;
