import { useState } from 'react';
import { useWallet } from 'use-wallet';
import { Card, CardBody, Backdrop } from '@windmill/react-ui';
import { Transition } from '@headlessui/react';
import TextTransition, { presets as transitionPresets } from 'react-text-transition';
import { Modal, ModalHeader, ModalBody, ModalFooter } from '@windmill/react-ui'
import InlineToggle from '../Common/InlineToggle';
import Button from '../Common/Button';
import crossIcon from '../../public/cross.png'



const AboutBox = (props) => {
  const wallet = useWallet(); 
  

  return (
    <Modal isOpen={props.isModalOpen} onClose={props.handleClose}>
  <ModalHeader>Gallery Box</ModalHeader>
  <ModalBody>
    <div class = "grid grid-cols-3 gap-4" >
        <div class = ""><img src = {crossIcon}></img></div>
        <div class = ""><img src = {crossIcon}></img></div>
        <div class = ""><img src = {crossIcon}></img></div>
        <div class = ""><img src = {crossIcon}></img></div>
        <div class = ""><img src = {crossIcon}></img></div>
        <div class = ""><img src = {crossIcon}></img></div>
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
