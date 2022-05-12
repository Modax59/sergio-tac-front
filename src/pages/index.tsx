import React from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';

import { UserProvider } from '@/hooks/auth/useUser';
import Base from '@/layout/base';
import List from '@/templates/products/list';

const index = () => {
  const queryClient = new QueryClient();

  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <Base>
          <List />
        </Base>
      </QueryClientProvider>
    </UserProvider>
  );
};

export default index;
