
import { useWallet } from 'use-wallet';

import { Modal, ModalHeader, ModalBody, ModalFooter } from '@windmill/react-ui'
import { useMintAPixl } from '../../hooks'
import Button from '../Common/Button';
import { Select } from '@windmill/react-ui'


const AboutBox = (props) => {
  const wallet = useWallet(); 
  
  const handlePurchase = () => {
    //buy NFT
        useMintAPixl(100)
    };
  const updateInputValue = (evt) => {  
    }
  return (
  <Modal isOpen={props.isModalOpen} onClose={props.handleClose}>
  <ModalHeader>Buy one or several NFTs</ModalHeader>
  <ModalBody>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et eligendi repudiandae
    voluptatem tempore!
    <div class = "justify-center text-center mt-6">
        <Select valid class ="w-2/5 border-solid border-3 border-gray-900">
            <option>Select number of NFTs</option>
            <option value = "10">10</option>
            <option value = "20" >20</option>
            <option value = "30" >30</option>
            <option value = "40" >40</option>
        </Select>
    </div>
    <div class = "justify-center text-center mt-6">
        <Button
            disabled={false}
            width='w-1/2'
            background='bg-white-300'
            text='text-black text-md font-semibold'
            border='border-4 border-gray-900 border-solid '
            padding='1'
            rounded=''
            shadow = "shadow-2xl"
            onClick={handlePurchase}>
            Complete Purchase
        </Button>
    </div>
    
  </ModalBody>
  <ModalFooter>
    <Button className="w-full sm:w-auto" layout="outline" onClick = {props.handleClose}>
      Cancel
    </Button>
  </ModalFooter>
</Modal>
  );
};

export default AboutBox;
