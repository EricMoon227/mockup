import { useState } from 'react';
import { useWallet } from 'use-wallet';
import { Card, CardBody, Backdrop } from '@windmill/react-ui';
import { Transition } from '@headlessui/react';
import TextTransition, { presets as transitionPresets } from 'react-text-transition';

import InlineToggle from '../Common/InlineToggle';
import Button from '../Common/Button';

import IconDownArrow from '../../public/DownArrow.svg'
import IconCheck from '../../public/Check.png'

const SendBox = () => {
  const wallet = useWallet(); 
  const [assetType , setAssetType] = useState('rETH');
  const [amount, setAmount] = useState(0);
  const [percent, setPercent] = useState(0.5);
  const [step, setStep] = useState('SEND');

  const handleChangeAssetType = (asset) => {
    setAssetType(asset);
  }

  const handleChangePercent = (value) => {
    setPercent(value);
  }

  const handleUpdateAmount = (e) => {
    setAmount(e.target.value);
  }

  const handleSubmit = () => {
    setStep('Review Transaction');
  }
  const handleConfirm = () => {
    setStep('Transaction Details');
  }
  const handleClose = () => {
    setStep('SEND');
  }

  const _renderAssets = () => {
    return (
      <div>
        <p className="text-left text-white text-lg">Assets:</p>
        <div className="block mt-2">
          <InlineToggle width={'w-1/2'} active={assetType=='rETH'} onClick={()=>handleChangeAssetType('rETH')} position={'start'} rounded={'lg'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14.737" height="24" viewBox="0 0 14.737 24" className="mr-2">
              <g id="Group_4717" data-name="Group 4717" transform="translate(-291 -246)">
                <path id="Path_2577" data-name="Path 2577" d="M383.661,0,383.5.548V16.456l.161.161,7.384-4.365Z" transform="translate(-85.313 246)" fill="#d0d0d0"/>
                <path id="Path_2578" data-name="Path 2578" d="M7.384,0,0,12.253l7.384,4.365V0Z" transform="translate(291 246)" fill="#fff"/>
                <path id="Path_2579" data-name="Path 2579" d="M387.331,729.253l-.091.111v5.667l.091.266,7.389-10.406Z" transform="translate(-88.983 -465.296)" fill="#d0d0d0"/>
                <path id="Path_2580" data-name="Path 2580" d="M7.384,735.3v-6.043L0,724.89Z" transform="translate(291 -465.296)" fill="#fff"/>
                <path id="Path_2581" data-name="Path 2581" d="M392.07,480.051l7.384-4.365-7.384-3.357Z" transform="translate(-93.722 -217.466)" fill="#c4c4c4"/>
                <path id="Path_2582" data-name="Path 2582" d="M0,475.687l7.384,4.365V472.33Z" transform="translate(291 -217.466)" fill="#d6d6d6"/>
              </g>
            </svg>
            <p className="text-lg text-white">rETH</p>
          </InlineToggle>
          <InlineToggle width={'w-1/2'} active={assetType=='WEENUS'} onClick={()=>handleChangeAssetType('WEENUS')} position={'end'} rounded={'lg'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="23.061" height="24" viewBox="0 0 23.061 24" className="mr-2">
                <g id="_1f4aa" data-name="1f4aa" transform="translate(-0.837 -0.137)">
                  <path id="Path_2997" data-name="Path 2997" d="M15.977,7.595h2.545a.522.522,0,0,0,.039-.452L15.978,3.982V7.595Z" transform="translate(-4.969 -1.262)" fill="#ef9645"/>
                  <path id="Path_2998" data-name="Path 2998" d="M8.876,15.011a6.175,6.175,0,0,0-.138-.654,8.3,8.3,0,0,1-.617-3.691C8.316,9.6,8.3,7.466,11.133,7.8c.747.088,1.91.623,2.576.611.381-.007.658-.777.683-1.034.034-.353-.581-.954-.838-1.044s-1.352-.424-1.8-.554c-.7-.2-.662-1.145-.706-1.481a.4.4,0,0,1,.2-.4c.141-.083.252-.005.389.084l.595.435c.334.286-.587.833-.338.924a15.24,15.24,0,0,0,1.684.535c.277.05,1.232-1.027,1.288-1.659.044-.5-2.283-2.743-3.941-3.615A2.673,2.673,0,0,0,9.611.138c-.459.021-.6.2-1.174.692C5.852,3.041,3.343,7.822,2.975,8.881a26.983,26.983,0,0,0-1.8,7.919c-.033.4-.051.791-.051,1.181.044,0-.672,3.359,0,4.031s3.578.672,3.578.672c6.718,2.68,19.193,1.98,19.193-4.859,0-8.177-12.639-7.092-15.021-2.814Z" transform="translate(0 0)" fill="#ffdc5d"/>
                  <path id="Path_2999" data-name="Path 2999" d="M18.586,29.674a9.806,9.806,0,0,1-3.874-1.323.672.672,0,0,1,.722-1.133A7.6,7.6,0,0,0,20.7,28.2a5.658,5.658,0,0,0,3.478-3.091.672.672,0,1,1,1.189.626A6.94,6.94,0,0,1,21.041,29.5,6.807,6.807,0,0,1,18.586,29.674Z" transform="translate(-4.452 -8.079)" fill="#ef9645"/>
                </g>
              </svg>
            <p className="text-lg text-white">WEENUS</p>
          </InlineToggle>
        </div>
        <p className="text-left text-gray-400 text-xs mt-2">Available Balance: 20,000.00 WEENUS</p>
      </div>
    );
  };

  const _renderAmount = () => {
    return (
      <div>
        <p className="text-left text-white text-lg">Amount:</p>
        <div className="inline-flex justify-between bg-white p-1 rounded-lg  items-center mt-2">
          <input className="w-3/5 text-right border-none p-1 focus:outline-none" onChange={handleUpdateAmount} value={amount}></input>

          <div className="w-2/5 justify-center transition">
            <TextTransition text={assetType} springConfig={ transitionPresets.default } className="text-center"/>
          </div>
        </div>
        <div className="block mt-3">
          <InlineToggle width={'w-1/5'} active={percent==0.1} onClick={()=>handleChangePercent(0.1)} position={'start'} rounded={'md'}>{'10%'}</InlineToggle>
          <InlineToggle width={'w-1/5'} active={percent==0.25} onClick={()=>handleChangePercent(0.25)}>{'25%'}</InlineToggle>
          <InlineToggle width={'w-1/5'} active={percent==0.5} onClick={()=>handleChangePercent(0.5)}>{'50%'}</InlineToggle>
          <InlineToggle width={'w-1/5'} active={percent==0.75} onClick={()=>handleChangePercent(0.75)}>{'75%'}</InlineToggle>
          <InlineToggle width={'w-1/5'} active={percent==1} onClick={()=>handleChangePercent(1)} position={'end'} rounded={'md'}>{'100%'}</InlineToggle>
        </div>
      </div>
    );
  };

  const _renderSendTo = () => {
    return (
      <div>
        <p className="text-left text-white text-lg">Send To:</p>
        <input placeholder="Type or Paste Address" className="w-full p-2 mt-2 text-center hover:border-blue-400 rounded-lg focus:outline-none" />
      </div>
    );
  };

  const _renderSendBox = () => {
    return (
      <div>
        <div className="block justify-items-center">
          <p className="mb-6 font-semibold text-3xl text-center text-white">SEND</p>
        </div>
        <div className="block justify-start">
          <div className="mb-8">
            { _renderAssets() }
          </div>
          <div className="mb-8">
            { _renderAmount() }
          </div>
          <div className="mb-8">
            { _renderSendTo() }
          </div>
        </div>
        <div className="block justify-center text-center">
          <Button
            disabled={false}
            width='w-1/2'
            background='bg-yellow-300'
            text='text-black text-md font-semibold'
            border='border-yellow-300'
            padding='1'
            rounded='lg'
            onClick={handleSubmit}>
            SUBMIT
          </Button>
        </div>
      </div>
    );
  };
  
  const _renderConfirmBox = () => {
    return (
      <>  
        <div className="block justify-items-center">
          <p className="mb-6 font-semibold text-xl text-center text-white">Review Transaction</p>
        </div>
        <div className="w-full justify-items-center text-center text-white">
          <p>SEND</p>
          <p>10,000.00 WEENUS</p>
        </div>
        <p className="text-xs mt-10 text-white">From: 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</p>
        <div className="w-full mt-1 justify-center text-center">
          <img alt="logo" src={IconDownArrow} height="30" width="30" className="m-auto"/>
        </div>
        <p className="text-xs mt-1 text-white">To: 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</p>
        <div className="justify-items-center text-center text-white mt-10 text-sm">
          <p>Tx Fee: 0.0123rBTC</p>
        </div>
        <div className="block justify-center text-center mt-10">
          <Button
            disabled={false}
            width='w-1/2'
            background='bg-yellow-300'
            text='text-black text-md font-semibold'
            border='border-yellow-300'
            padding='1'
            rounded='lg'
            onClick={handleConfirm}>
            CONFIRM
          </Button>
        </div>
      </>
    );
  }

  const _renderDetail = () => {
    return (
      <>
        <div className="block justify-items-center">
          <p className="mb-6 font-semibold text-xl text-center text-white">Transaction Details</p>
        </div>
        <div className="w-full mt-1 justify-center text-center">
          <img alt="logo" src={IconCheck} height="40" width="40" className="m-auto"/>
        </div>
        <p className="text-xs mt-1 text-white">To: 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</p>
        <div className="w-full inline-flex justify-center text-center text-white mt-10 text-sm">
          <p className="w-1/4">Tx Hash:</p>
          <p className="w-3/4 text-yellow-300">0x410x4133...890x413413</p>
        </div>
        <div className="block justify-center text-center mt-10">
          <Button
            disabled={false}
            width='w-1/2'
            background='bg-transparent'
            text='text-yellow-300 text-md font-semibold'
            border='border-yellow-500'
            padding='1'
            rounded='lg'
            onClick={handleClose}>
            CLOSE
          </Button>
        </div>
      </>
    );
  }
  return (
    <div>
      <Card colored className="border border-green-900 rounded-3xl bg-black bg-opacity-50">
        <CardBody className="p-8">
          { step == 'SEND' && _renderSendBox() }
          { step == 'Review Transaction' && _renderConfirmBox() }
          { step == 'Transaction Details' && _renderDetail() }
        </CardBody>
      </Card>
    </div>
  );
};

export default SendBox;
