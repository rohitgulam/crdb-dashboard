import React from 'react';
import { useState, useEffect } from 'react';
import Button from '../components/Button';
import {AiOutlinePlus} from 'react-icons/ai';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import Moment from 'moment';
import moment from 'moment';

function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect( () => {
    getCustomers();
  }, [] );

  const getCustomers = async () => {
    // const api = await fetch('http://bankcustomersapi.test/api/customers');
    // const data = await api.json();
    // setCustomers(data);

    // const headers = {
    //   'authorization': sessionStorage.getItem("token")
    // }



    await axios.get('http://139.162.249.220:9990/api/customer_list', 
    {headers:{
      'authorization': sessionStorage.getItem("token")
  }})
            .then(
                response => {
                    setCustomers(response.data.result);
                }
            )
            .catch(
                error => {
                    console.log('Error::', error.response.data)
                }
            )
  }

  return (
    <div className="flex h-full">
    <Sidebar />
    <div className='flex flex-col rounded w-[90%] min-h-[84%] ml-[450px] mr-16 mt-20 py-10 px-24' >
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
              <th className='py-4'>Account Number</th>
              <th>Name</th>
              <th>Register Date</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Balance</th>
              <th>Account Type</th>
            </tr>
            {customers.map( (customer) => {
              return(
                <tr className='border-8 border-transparent text-gray-700'  >
                  <td className='py-4' >{customer.account_no}</td>
                  <td>{customer.first_name + ' ' + customer.last_name }</td>
                  <td>{moment(customer.registration_date).format('DD/MM/YYYY')}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.email}</td>
                  <td>Tsh {customer.balance}</td>
                  <td>{customer.account_type }</td>
                </tr>
              )
            })}
          </table>
        </div>
    </div>
    </div>
  )
}

export default Customers