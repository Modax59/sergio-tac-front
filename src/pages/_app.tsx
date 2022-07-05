import { AppProps } from 'next/app';

import '../styles/global.css';

import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import { QueryClient, QueryClientProvider } from 'react-query';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();

  const AnyComponent = Component as any;
  return  <QueryClientProvider client={queryClient}><ThirdwebProvider desiredChainId={ChainId.Mainnet}><AnyComponent {...pageProps} /> </ThirdwebProvider> </QueryClientProvider>;
};

export default MyApp;
