import Pixls from '../contracts/Pixls.json';
import { addressMap } from '../config';
export class Contracts {
  constructor(web3) {
    this.web3 = web3;
    this.PixlsContract = new web3.eth.Contract(Pixls.abi, addressMap.Pixls);
    this._updateContractAddresses();
  }

  
  _updateContractAddresses() {
     
  }
}
