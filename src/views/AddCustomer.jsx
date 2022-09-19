import React from 'react';
import { useState } from 'react';
import InputGroup from '../components/InputGroup';
import Sidebar from '../components/Sidebar';
import axios from 'axios';

function AddCustomer() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [password, setPassword] = useState('');
    const [account, setAccount] = useState('');
    const [branch, setBranch] = useState('');
    const [userCreated, setUserCreated] = useState(false);

    // function handleSubmit = async (e) => {
    //     // Prevent Default
    //     e.preventDefault();

        const formData = {
            'fname': firstName, 
            'lname': lastName, 
            'pin': password,
            'phone': phone,
            'birth': dob,
            'reg_branch': branch,
            'email': email,
            'acc_type': account
        }

        // console.log(formData);

    //     const pushData = async () => {
    //         console.log(formData);
    //     }

    //     pushData()
    // }

    let handleSubmit = async (e) => {
        e.preventDefault();

        // USing axios
            await axios.post('http://139.162.249.220:9990/api/customer', formData, {headers: {
                'authorization': sessionStorage.getItem("token")
            }})
            .then(
                response => {
                    setUserCreated(true);
                    setTimeout(() => {
                        setUserCreated(false)
                        setFirstName('');
                        setLastName('');
                        setPhone('');
                        setEmail('');
                        setDob('');
                        setPassword('');
                        setAccount('');
                        setBranch('');
                    }, 2500)
                }
            )
            .catch(
                error => {
                    console.log('Error::', error.response.daata)
                }
            )

    }

    
  return (
    <div className="flex h-full">
    <Sidebar />
    <div className="flex flex-col rounded w-[90%] min-h-[84%] bg-white ml-[450px] mr-16 my-20 py-10 px-24">

        <div className={ userCreated ? 'rounded bg-crdbLight text-crdbDark py-4 px-24 text-center text-xl fixed top-24 left-[50%]' : 'hidden'} >Customer Created</div>
        <h1 className='text-4xl mb-6' >Create  Customer</h1>

        <form className='py-10 grid md:grid-cols-2 sm:grid-cols-2 gap-y-6 gap-x-6 '
            onSubmit={handleSubmit}
            >
        <InputGroup
                    label="First Name"
                    type='text'
                    placeholder="James"
                    name='fname'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <InputGroup
                    label="Last Name"
                    type='text'
                    placeholder="Jonathan"
                    name='lname'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <InputGroup
                    label="Phone"
                    type='number'
                    placeholder="+255 628 982 262"
                    name='phone'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <InputGroup
                    label="Email"
                    type='email'
                    placeholder="jameseliah@gmail.com"
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                 <InputGroup
                    label="Birth Date"
                    type='date'
                    name='dob'
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                />
                <InputGroup
                    label="Pin"
                    type='password'
                    name='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <InputGroup
                    label="Account Type"
                    type='text'
                    placeholder="Savings"
                    name='account'
                    value={account}
                    onChange={(e) => setAccount(e.target.value)}
                />
                <InputGroup
                    label="Branch Name"
                    type='text'
                    placeholder="Kariakoo"
                    name='branch'
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                />
                <input type="submit" value="Create" className='w-32 rounded cursor-pointer py-3 bg-crdbDark text-white mt-6' />
        </form>
    </div>

    

    </div>
  )
}

export default AddCustomer