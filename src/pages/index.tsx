import React from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';

import Base from '@/layout/base';
import List from '@/templates/products/list';

const index = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Base>
        <List />
      </Base>
    </QueryClientProvider>
  );
};

export default index;
