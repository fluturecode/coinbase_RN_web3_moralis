import * as eva from '@eva-design/eva';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ApplicationProvider } from '@ui-kitten/components';
import Moralis from 'moralis/react-native';
import React from 'react';
import { MoralisProvider } from 'react-moralis';
import { enableViaWalletConnect } from './Moralis/enableViaWalletConnect';
//import Qrcode from "./Qrcode";
//import { expo } from "../app.json";
import { MoralisDappProvider } from './providers/MoralisDappProvider/MoralisDappProvider';
import WalletConnectProvider, {
  WalletConnectProviderProps
} from './WalletConnect';

interface ProvidersProps {
  readonly children: JSX.Element;
}

/**
 * Initialization of Moralis
 */
const appId = 'zbHrr6JQiPSQ3Odjcx3w9BBPoBWOEx68q7xfOrnt';
const serverUrl = 'https://vtlrikiivgdr.usemoralis.com:2053/server';
const environment = 'native';
// Initialize Moralis with AsyncStorage to support react-native storage
Moralis.setAsyncStorage(AsyncStorage);
// Replace the enable function to use the react-native WalletConnect
// @ts-ignore
Moralis.enable = enableViaWalletConnect;
// console.log(AsyncStorage.getAllKeys(), 'KEYS');

const walletConnectOptions: WalletConnectProviderProps = {
  storageOptions: {
    // @ts-ignore
    asyncStorage: AsyncStorage,
  },
  qrcodeModalOptions: {
    mobileLinks: [
      'rainbow',
      'metamask',
      'argent',
      'trust',
      'imtoken',
      'pillar',
    ],
  },
  // Uncomment to show a QR-code to connect a wallet
  //renderQrcodeModal: Qrcode,
};

export const Providers = ({children}: ProvidersProps) => {
  return (
    <WalletConnectProvider {...walletConnectOptions}>
      <MoralisProvider
        appId={appId}
        serverUrl={serverUrl}
        environment={environment}>
        <MoralisDappProvider>
          <ApplicationProvider {...eva} theme={eva.light}>
            <UserContext.Proivder value={{value, setValue}}>
            {children}
            </UserContext.Proivder>

          </ApplicationProvider>
        </MoralisDappProvider>
      </MoralisProvider>
    </WalletConnectProvider>
  );
};
