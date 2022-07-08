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
        Connexion avec Metamask
      </AppButton>
    );
  }

  return (
    <div className="ml-auto flex flex-col">
      <AppButton  onClick={disconnectWallet}>Déconnexion</AppButton>
      <span>
        Connecté à {address.substring(0, 5)}...{address.slice(-4)}
      </span>
    </div>
  );
};

export default AuthMetamask;
