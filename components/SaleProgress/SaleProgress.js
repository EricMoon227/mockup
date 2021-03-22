
import { useWallet } from 'use-wallet';
import { useRouter } from 'next/router'
import Button from '../Common/Button';
import triangleIcon from '../../public/triangle.png'

import { BuyNFTBox } from '../BuyNFTBox'
import { useState, useContext, useEffect } from 'react';
import { useSaleStartTime } from '../../hooks'
import useWeb3 from '../../hooks/useWeb3';

const SaleProgress = () => {

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
    var remainSec = (currentTime - saleStartTime.revealTime*1000)/1000;
   
    setRemainDay(Math.floor(remainSec / 86400));
    remainSec %= 86400; 
    setRemainHour(Math.floor(remainSec / 3600));
    remainSec %= 3600; 
    setRemainMinutes(Math.floor(remainSec / 60));

    
  }, [saleStartTime.revealTime]);
  
 
  
  return (
    <div class = " text-center justify-center h-screen p-48">
        
        <h1 class = "text-4xl">{remainDay}D  {remainHour}H  {remainMinutes}M</h1>
        <h3 class=" font-bold">Until all NFT's will be revealed</h3>
        <table class = "mb-8 m-auto">
            <tbody>
                <tr>
                    <td>10 NFTs</td>
                    <td>100 NFTs</td>
                    <td>100 NFTs</td>
                    <td>100 NFTs</td>
                </tr>
                
                <tr>
                    <td>
                        <div class = "bg-gray-200 m-0 p-0 sale__progress-box-progress" >
                            <div class = "sale__progress-box-bar"></div>
                        </div>
                    </td>
                    <td>
                        <div class = "bg-gray-200 m-0 p-0 sale__progress-box-progress" >
                            <div class = "sale__progress-box-bar"></div>
                        </div>
                    </td>
                    <td>
                        <div class = "bg-gray-200 m-0 p-0 sale__progress-box-progress" >
                            <div class = "sale__progress-box-bar"></div>
                        </div>
                    </td>
                    <td>
                        <div class = "bg-gray-200 m-0 p-0 sale__progress-box-progress" >
                            <div class = "sale__progress-box-bar"></div>
                        </div>
                    </td>
                    
                   
                    
                </tr>
                <tr>
                    <td><img src = {triangleIcon}></img></td>
                    <td><img src = {triangleIcon}></img></td>
                    <td><img src = {triangleIcon}></img></td>
                    <td><img src = {triangleIcon}></img></td>
                    <td><img src = {triangleIcon}></img></td>
                </tr>
                <tr >
                    <td class = "text-left">0.05</td>
                    <td class = "text-left">0.1</td>
                    <td class = "text-left">0.2</td>
                    <td class = "text-left">0.5</td>
                    <td class = "text-left">1.0</td>
                </tr>
               

            </tbody>

        </table>
        <div className="block justify-center text-center">
        <Button
            disabled={false}
            width='w-1/2'
            background='bg-white-300'
            text='text-black text-md font-semibold'
            border='border-4 border-gray-900 border-solid '
            padding='4'
            rounded=''
            shadow = "shadow-2xl"
            onClick={handleBuy}>
            Initate Buy process
          </Button>

        </div>
        <BuyNFTBox isModalOpen = {isModalOpen} handleClose = {() => setIsModalOpen(false)} ></BuyNFTBox>
    </div>
    
  );
};

export default SaleProgress;
