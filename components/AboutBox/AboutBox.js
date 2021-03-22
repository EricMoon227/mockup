import { useState } from 'react';
import { useWallet } from 'use-wallet';
import { Card, CardBody, Backdrop } from '@windmill/react-ui';
import { Transition } from '@headlessui/react';
import TextTransition, { presets as transitionPresets } from 'react-text-transition';
import { Modal, ModalHeader, ModalBody, ModalFooter } from '@windmill/react-ui'
import InlineToggle from '../Common/InlineToggle';
import Button from '../Common/Button';

import IconDownArrow from '../../public/DownArrow.svg'
import IconCheck from '../../public/Check.png'

const AboutBox = (props) => {
  const wallet = useWallet(); 
  

  return (
    <Modal isOpen={props.isModalOpen} onClose={props.handleClose}>
  <ModalHeader>About Box</ModalHeader>
  <ModalBody>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et eligendi repudiandae
    voluptatem tempore!
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
