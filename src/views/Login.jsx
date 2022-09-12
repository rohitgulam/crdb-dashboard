import React from 'react';
import InputGroup from '../components/InputGroup';
import logo from "../img/crdb-logo.svg";


function Login() {
  return (
    <div className='bg-crdbDark h-[100vh] w-full flex flex-col justify-center items-center'>
      <img src={logo} alt="crdb logo" className='pb-20' />
        <div className="w-3/2 bg-white rounded h-[300px] flex flex-col items-center justify-evenly">
        <InputGroup 
            label="Username"
            type="text"
            placeholder="jreece"
        />
        <InputGroup 
            label="Password"
            type="password"
        />
        <input type="submit" value="Login" className='cursor-pointer rounded py-3 px-12 bg-crdbMedium text-white' />
        </div>
    </div>
  )
}

export default Login 