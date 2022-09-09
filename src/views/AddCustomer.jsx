import React from 'react';
import InputGroup from '../components/InputGroup';

function AddCustomer() {
  return (
    <div className='flex flex-col my-20 w-full mx-12 px-10'>
        <h1 className='text-4xl mb-12'>Create a New Customer</h1>
        <form 
            className='h-[80%] flex flex-col justify-between py-16 bg-white rounded' 
        >
            <div className='flex justify-between'>
                <InputGroup
                    label="First Name"
                    type='text'
                    placeholder="James"
                />
                <InputGroup
                    label="Middle Name"
                    type='text'
                    placeholder="Eliah"
                />
                <InputGroup
                    label="Last Name"
                    type='text'
                    placeholder="Jonathan"
                />
            </div>
            <div className='flex justify-between'>
                <InputGroup
                    label="Phone"
                    type='number'
                    placeholder="+255 628 982 262"
                />
                <InputGroup
                    label="Email"
                    type='email'
                    placeholder="jameseliah@gmail.com"
                />
            </div>
            <div className='flex justify-between'>
                <InputGroup
                    label="Birth Date"
                    type='date'
                />
                <InputGroup
                    label="Password"
                    type='password'
                />
            </div>
            <div className='flex justify-between'>
                <InputGroup
                    label="Account Type"
                    type='text'
                    placeholder="Savings"
                />
                <InputGroup
                    label="Branch Name"
                    type='text'
                    placeholder="Kariakoo"
                />
            </div>
            <input type="submit" value="Save" className='w-32 rounded py-3 bg-crdbDark text-white self-end mr-5' />
        </form>
    </div>
  )
}

export default AddCustomer