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
    <div className="ml-auto flex-col">
      <AppButton className="ml-auto"  onClick={disconnectWallet}>Déconnexion</AppButton>
      <span className="ml-10 text-gray-300">
        Connecté à l'adresse {address.substring(0, 5)}...{address.slice(-4)}
      </span>
    </div>
  );
};

export default AuthMetamask;
