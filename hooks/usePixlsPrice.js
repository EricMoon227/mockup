import useWeb3 from './useWeb3';
import { useState,useEffect } from 'react';
const PRICE_REFRESH_INTERVAL = 30 * 1000;
const usePixlsPrice = () => {
  const web3 = useWeb3();
  const [PixlsPrice, setPixlsPrice] = useState(0);
  
  
  async function update() {
      
    const pixlsPrice = await web3.contracts.PixlsContract.methods.getPixlPrice().call();

    setPixlsPrice(pixlsPrice);
    

  }
  useEffect(() => {
    let interval;

    if (web3) {
      update();
      interval = setInterval(update, PRICE_REFRESH_INTERVAL);
    }

    return () => clearInterval(interval);
  }, [web3]);

  return PixlsPrice;
};

export default usePixlsPrice;
