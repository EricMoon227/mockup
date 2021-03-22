
import userIcon from '../../public/UserIcon.png'
import { useWallet } from 'use-wallet';
import { useRouter } from 'next/router'
import { Button } from '@windmill/react-ui'
import { AboutBox } from '../AboutBox'
import { GalleryBox } from '../GalleryBox'
import { ModalContext } from '../../contexts';
import { useState, useContext } from 'react';

const NavBar = () => {
  const wallet = useWallet();
  const router = useRouter(); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false)

  const renderConnectWalletButton = () => {
    console.log(wallet);
    if (!wallet?.account) {
      return (
        <Button
          layout="outline"
          className="rounded-md text-sm"
          onClick={() => {
            if (!wallet?.account) {
              wallet.connect();
            } else {
              wallet.reset();
            }
          }}        
        >
          <>Connect Wallet</>
        </Button>
      )
    } else {
      console.log("wa = "+wallet.account);
      const addr = wallet.account.toString();
      var displayAddr = addr.substr(2,4) + "..." + addr.substr(addr.length - 4, addr.length);
      return (
        <div className="inline-flex justify-items-center">
          <div className="inline-flex rounded-l-md bg-gray-600 p-1 pl-2 pr-2 text-white text-sm">
            {displayAddr}
            <img src={userIcon} width="20" height="20"/>
          </div>
          <button 
            onClick={()=>{
              wallet.reset();
            }}
            className="justify-items-center rounded-r-md pr-1 bg-gray-400">
            <svg id="exit_to_app-24px" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path id="Path_315" data-name="Path 315" d="M0,0H24V24H0Z" fill="none"/>
              <path id="Path_316" data-name="Path 316" d="M10.09,15.59,11.5,17l5-5-5-5L10.09,8.41,12.67,11H3v2h9.67ZM19,3H5A2,2,0,0,0,3,5V9H5V5H19V19H5V15H3v4a2,2,0,0,0,2,2H19a2.006,2.006,0,0,0,2-2V5A2.006,2.006,0,0,0,19,3Z" fill="#fec004"/>
            </svg>
          </button>
        </div>
      )
    }
  };
  
  const onAbout =  () => {
    console.log("onAbout");
    setIsModalOpen(true);
  };
  const onGallery = () => {
    console.log("Gallery");
    setIsGalleryModalOpen(true);
  };
  const renderMenuItems = () => {
    const getStyle = href => {
      const baseStyle = 'block px-3 py-2 rounded-none text-small font-medium ';

      if (router.pathname === href) {
        return `${baseStyle} bg-gray-700 text-white`;
      }

      return `${baseStyle} text-gray-300 block  hover:text-white hover:bg-gray-700`;
    }
    return <>
      <button onClick = {onAbout} className={getStyle('/About')}>About</button>
        <AboutBox isModalOpen = {isModalOpen} handleClose={() => setIsModalOpen(false)}></AboutBox>
      <button onClick ={onGallery} className={getStyle('/Gallery')}>Gallery</button>
        <GalleryBox isModalOpen = {isGalleryModalOpen} handleClose = {() => setIsGalleryModalOpen(false)}></GalleryBox>
      <buttton className={getStyle('/FAQ')}>FAQ</buttton>
      <button className={getStyle('/My wallet')}>My wallet</button>
    </>;
  };
  return (
    <div>
      <nav className="bg-black uppercase z-50">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/"><img alt="logo" src="" height="150" width="150" className="w-8/12 md:w-full" /></a>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {renderMenuItems()}
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <div className="ml-3 relative">
                  {renderConnectWalletButton()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
