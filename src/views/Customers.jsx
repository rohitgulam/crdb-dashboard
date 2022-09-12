import React from 'react';
import Button from '../components/Button';
import {AiOutlinePlus} from 'react-icons/ai';
import Sidebar from '../components/Sidebar';

function Customers() {
  return (
    <div className="flex">
    <Sidebar />
    <div className='flex flex-col my-20 w-[90vw] mx-12 px-10 py-4' >
        <div className='flex items-center justify-between py-4' >
            <h1 className='text-xl font-medium'>Customer List</h1>
            <Button 
                LinkLocation="/add-customer" 
                BtnName="Add Customer"
                Icon={ <AiOutlinePlus/> }
                />
        </div>
        <div className='h-full bg-white py-5 px-4' >
          <table className='w-full text-left table-auto' >
            <tr className='border-8 border-transparent' >
              <th >Customer ID</th>
              <th>Name</th>
              <th>Register Date</th>
              <th>Adress</th>
              <th>Balance</th>
              <th>Account Type</th>
            </tr>
            <tr className='border-8 border-transparent text-gray-700' >
              <td>A2008BE</td>
              <td>Jack Sparrow</td>
              <td>02/09/2022</td>
              <td>Caribbean</td>
              <td>Tsh 400,000</td>
              <td>Savings</td>
            </tr>
            <tr className='border-8 border-transparent text-gray-700' >
              <td>A2008BE</td>
              <td>Jack Sparrow</td>
              <td>02/09/2022</td>
              <td>Caribbean</td>
              <td>Tsh 400,000</td>
              <td>Savings</td>
            </tr>
            <tr className='border-8 border-transparent text-gray-700' >
              <td>A2008BE</td>
              <td>Jack Sparrow</td>
              <td>02/09/2022</td>
              <td>Caribbean</td>
              <td>Tsh 400,000</td>
              <td>Savings</td>
            </tr>
            <tr className='border-8 border-transparent text-gray-700' >
              <td>A2008BE</td>
              <td>Jack Sparrow</td>
              <td>02/09/2022</td>
              <td>Caribbean</td>
              <td>Tsh 400,000</td>
              <td>Savings</td>
            </tr>
          </table>
        </div>
    </div>
    </div>
  )
}

export default Customers