import Head from 'next/head';
import { NavBar } from '../NavBar';
import { useWallet } from 'use-wallet';
import { Backdrop } from '@windmill/react-ui';
import { Transition } from '@headlessui/react';
import { usePixlsPrice } from '../../hooks'

const MainLayout = ({ children }) => {
  const wallet = useWallet(); 
  const price  = usePixlsPrice() ;
  return <>
    <Head>
      <title>Logotype</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <NavBar />
    
    <div className="w-full  justify-center ">
      <div className="w-full self-center  justify-center "  >
        {children}
      </div>

      <Transition
        show={!wallet?.account}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        
      </Transition>

    </div>
  </>;
};

export default MainLayout;