import React from 'react'
import logo from '../img/crdb-logo.svg';
import {AiFillHome} from 'react-icons/ai';
import {FiLogOut} from 'react-icons/fi';
import {BsPersonCircle} from 'react-icons/bs';
import {BsPersonPlusFill, BsPeopleFill} from 'react-icons/bs';

function Sidebar() {
  return (
    <div className='min-w-[380px] py-14 h-[100vh] bg-crdbDark text-white'>
      <div className=' h-3/5 flex flex-col items-center justify-between'>

        <div>
          <img src={logo} alt="" />
        </div>

        <div className='self-start pl-14'>
          <ul className='list-none text-2xl'>
            <li className='flex items-center py-5'>
              <AiFillHome/> <span className='pl-3' >Home</span>
            </li>
            <li className='flex items-center py-5'>
              <BsPersonPlusFill/> <span className='pl-3' >Add Customer</span>
            </li>
            <li className='flex items-center py-5'>
              <BsPeopleFill/> <span className='pl-3' >Customers</span>
            </li>
            <li className='flex items-center py-5'>
              <FiLogOut/> <span className='pl-3' >Logout</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='fixed bottom-12 mx-12 flex items-center w-72 text-2xl '>
        <BsPersonCircle className='text-5xl'/>
        <span className="pl-6">Profile</span>
      </div>
      
    </div>
  )
}

export default Sidebar

// h-full flex flex-col items-center justify-between