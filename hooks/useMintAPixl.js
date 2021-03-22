import useWeb3 from './useWeb3';
import { useState,useEffect } from 'react';

const useMintAPixl = (amountOfPixls) => {
  const web3 = useWeb3();
  
  //update();
  //console.log("sss");
  async function Mint() {
      
     await web3.contracts.PixlsContract.methods.mintAPixl(amountOfPixls).call();
    
  
  }
  return {
    Mint
   
  };

  
};

export default useMintAPixl;
