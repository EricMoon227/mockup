
import { Windmill } from '@windmill/react-ui';
import { UseWalletProvider } from 'use-wallet';
import { WalletProvider, YamProvider, Web3Provider, GlobalHooksProvider, ModalProvider } from '../contexts';

import { WEB3_PROVIDER_URL } from '../config';
import '../styles/globals.css';
import theme from '../config/default.theme';

function MyApp({ Component, pageProps }) {
  return (
    <Windmill theme={theme}>
      <Providers {...pageProps}>
        <Component {...pageProps} />
      </Providers>
    </Windmill>
  )
}

const Providers = props => {
  return (
    <>
      <UseWalletProvider
        chainId={4}
        connectors={{
          walletconnect: {
            rpcUrl: WEB3_PROVIDER_URL
          }
        }}
      >
        <WalletProvider>
          <YamProvider>
            <Web3Provider>
              <ModalProvider>
                <GlobalHooksProvider>
                  {props.children}
                </GlobalHooksProvider>
              </ModalProvider>
            </Web3Provider>
          </YamProvider>
        </WalletProvider>
      </UseWalletProvider>
    </>
  )
}

export default MyApp
