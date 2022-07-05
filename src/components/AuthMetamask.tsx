import React from 'react';

import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react';
import AppButton from './AppButton';

const AuthMetamask = () => {
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnectWallet = useDisconnect();
  if (!address) {
    return (
      <AppButton className="ml-auto" onClick={connectWithMetamask}>
        Connect Wallet
      </AppButton>
    );
  }

  return (
    <div className="ml-auto flex flex-col">
      <AppButton  onClick={disconnectWallet}>Disconnect</AppButton>
      <span>
        Connected to {address.substring(0, 5)}...{address.slice(-4)}
      </span>
    </div>
  );
};

export default AuthMetamask;
