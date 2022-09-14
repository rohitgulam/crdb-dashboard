import React from 'react';
import Sidebar from '../components/Sidebar';
import InputGroup from '../components/InputGroup';
import logo from '../img/crdb-logo.svg';
import SelectBox from '../components/SelectBox';


function Home() {
  return (
    <div className='flex h-full' >
 <Sidebar />
    
    <div className='flex flex-col rounded w-[100%] min-h-[84%] ml-[450px] mr-16 mt-20 py-10 px-24' >
        <input type='text' className='h-10 w-[33%] border-2 rounded border-gray-600 text-xl px-5 mb-5 flex ml-auto ' placeholder='Enter Token'/>

        <div className='flex flex-col m-auto px-10 py-10 bg-white '>
    
    
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
        
            
            <form className='grid md:grid-cols-2 sm:grid-cols-2 gap-y-6 gap-x-6'>
                
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
                    <input type="submit" value="CONFIRM" className='w-32 rounded cursor-pointer py-3 bg-crdbDark text-white self-end mr-5' />
                    </form>
                        
        
        </div>
      </div>
      </div>
  )
}

export default Home

