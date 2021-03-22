import logo from '../../public/HeaderLogo.svg';
import userIcon from '../../public/UserIcon.png'
import { useWallet } from 'use-wallet';
import { useRouter } from 'next/router'
import Button from '../Common/Button';
import triangleIcon from '../../public/triangle.png'
import { Card, CardBody, Backdrop } from '@windmill/react-ui';
import { BuyNFTBox } from '../BuyNFTBox'
import { useState, useContext, useEffect } from 'react';
import { useSaleStartTime } from '../../hooks'
import useWeb3 from '../../hooks/useWeb3';
import { Input } from '@windmill/react-ui'

const GetNotify = () => {

  const web3 = useWeb3();
  const wallet = useWallet();
  const router = useRouter(); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleBuy = () => {
    setIsModalOpen(true);
  };
  const [remainDay, setRemainDay] = useState(0);
  const [remainHour, setRemainHour] = useState(0);
  const [remainMinutes, setRemainMinutes] = useState(0);
  const saleStartTime = useSaleStartTime();
  useEffect(() => {
    
    if (web3)
        saleStartTime.update();
  }, [web3]);
  
  let hours;
  useEffect(() => {
     
    
    var currentTime = new Date().getTime();
    var remainSec = (currentTime - saleStartTime.saleStartTime*1000)/1000;
   
    setRemainDay(Math.floor(remainSec / 86400));
    remainSec %= 86400; 
    setRemainHour(Math.floor(remainSec / 3600));
    remainSec %= 3600; 
    setRemainMinutes(Math.floor(remainSec / 60));

    console.log("date = "+remainSec);
    console.log("currentDateTime = "+ currentTime);
  }, [saleStartTime.saleStartTime]);
  const handleGetNotified = () => {

  }
 
  
  return (
    <div class = " text-center justify-center bg-gray-600 h-screen  text-white p-48">
        <h3 class = "align-middle text-2xl">The Sale will start Soon</h3>
        <h1 class = "text-4xl">{remainDay}D  {remainHour}H  {remainMinutes}M</h1>
        <div class = "text-center">
            <Input aria-label="Bad" placeholder="" class = "mr-4 w-2/4 p-2" />
            <a href = "/SaleProgress">
            <Button
            disabled={false}
           
            background='bg-white-300'
            text='text-black text-md font-semibold'
            border='border-2 border-gray-900 border-solid '
            padding='2'
            rounded=''
            shadow = "shadow-2xl"
            onClick={handleGetNotified}>
            Get notified
          </Button> </a>
        </div>
       
        
    </div>
    
  );
};

export default GetNotify;
