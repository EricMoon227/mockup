import useWeb3 from './useWeb3';
import { useState,useEffect } from 'react';
const PRICE_REFRESH_INTERVAL = 30 * 1000;
const useSaleStartTime = () => {
  const web3 = useWeb3();
  const [saleStartTime, setSaleStartTime] = useState(0);
  const [revealTime, setRevealTime] = useState(0);
  //update();
  //console.log("sss");
  async function update() {
      
    const saleStartTime = await web3.contracts.PixlsContract.methods.SALE_START_TIMESTAMP().call();
    const revealTime = await web3.contracts.PixlsContract.methods.REVEAL_TIMESTAMP().call();
    setSaleStartTime(saleStartTime);
    setRevealTime(revealTime);

  }
  return {
    update,
    saleStartTime,
    revealTime
  };

  
};

export default useSaleStartTime;
