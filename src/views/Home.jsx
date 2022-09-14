import React from 'react';
import Sidebar from '../components/Sidebar';
import InputGroup from '../components/InputGroup';
import logo from '../img/crdb-logo.svg';
import SelectBox from '../components/SelectBox';


function Home() {
  return (
    <div className=' flex w-screen h-screen ' >
 <Sidebar />

      <div className=' flex-col m-auto w-[70%] h-[90%]  '>
  
   <input type='text' className='h-10 w-[33%] border-2 rounded border-gray-600 text-xl px-5   mb-5 flex ml-auto ' placeholder='Enter Token'/>
   
     <div className=' flex mt-4  mb-3 space-x-32 '>
     <div className='visible md:invisible lg:visible'>
          <img className='mt-16' src={logo} alt="" />
        </div>
        <div className='text-center text-2xl text-green-700'>
        <h1>FOR BANK USE ONLY</h1>
     <h1>(KWA MATUMIZI YA BANK TU)</h1><br></br>
          <h1>CRDB BANK PLC</h1>
          <h1>CASH DEPOSIT / WITHDRAW FORM</h1>
          <h1>FOMU YA KUWEKA / KUTOA FEDHA TASLIM</h1>
        </div>
        </div>
       
        
        <form className='space-y-4 flex flex-col justify-between  rounded  ' >
            <div className='flex justify-between'>
                <InputGroup className=''
                    label="Date/Tarehe"
                    type='date'
                    placeholder=""
                />
                 <InputGroup
                    label="Branch/Tawi"
                    type='text'
                    placeholder=""
                />
                </div>
                <div className='flex justify-between'>
                <InputGroup
                    label="Account Number/Namba ya Akaunti"
                    type='text'
                    placeholder=""

                />
                 <InputGroup
                    label="Account Holders Name/Jina la Akaunti"
                    type='text'
                    placeholder=""
                />
                </div>
                <div className='flex justify-between'>
                <SelectBox
                    label="Deposit or withdraw/Kuweka au kutoa"
                    name1="Deposit/kuweka"
                    name2="Withdraw/kutoa"
                />  
                 <InputGroup
                    label="Amount / kiasi cha Fedha "
                    type='number'
                    placeholder=""
                />
                </div>
                <div className='flex justify-between'>
                <InputGroup
                    label="Transaction No"
                    type='text'
                    placeholder=""
                />
                 <InputGroup
                    label="Teller ID"
                    type='text'
                    placeholder=""
                />
                </div>
                <div className='flex justify-between'>
                <InputGroup
                    label="Customer/Mteja"
                    type='text'
                    placeholder=""
                />
                 <InputGroup
                    label="signature/sahihi"
                    type='text'
                    placeholder=""
                />
                </div>
                <input type="submit" value="CONFIRM" className='w-32 rounded cursor-pointer py-3 bg-crdbDark text-white self-end mr-5' />
                </form>
                     
    
      </div>
      </div>
  )
}

export default Home

