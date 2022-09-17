import React, { useState, useContext } from 'react';
import InputGroup from '../components/InputGroup';
import logo from "../img/crdb-logo.svg";
import axios from 'axios';
import AuthContext from '../AuthContext';
import { useNavigate } from 'react-router-dom';


function Login() {

  const {isAuth} = useContext(AuthContext);
  const {user} = useContext(AuthContext);
  const {token} = useContext(AuthContext);
  const {assignisAuth} = useContext(AuthContext);
  const {assignUser} = useContext(AuthContext);
  const {assignToken} = useContext(AuthContext);


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();


  function handleSubmit (e){

    e.preventDefault();

    const formData = {
      'email': email,
      'password': password
    }

    const loginUser = async () => {
      await axios.post('http://139.162.249.220:9990/api/staff_auth', formData)
            .then(
                response => {
                  assignUser(response.data.datas[0].data[0].fullname);
                  assignToken(response.data.datas[0].token);
                  assignisAuth(true);
                  sessionStorage.setItem("userID", response.data.datas[0].data[0].id );
                  sessionStorage.setItem("userName", response.data.datas[0].data[0].fullname );
                  sessionStorage.setItem("token", response.data.datas[0].token);
                  sessionStorage.setItem("isAuth", true);
                  navigate('/');
                  // console.log(response.data.datas[0].token);
                  // console.log(response.data.datas[0].data[0].fullname);
                }
            )
            .catch(
                error => {
                    setError(true)
                    setTimeout(()=> {
                      setError(false)
                    }, 2500)

                }
            )
    }

    loginUser();
  }

  return (
    <div className='bg-crdbDark h-[100vh] w-full flex flex-col justify-center items-center'>
      <div className={ error ? 'rounded bg-red-300 border-2 border-red-800 py-4 px-24 text-center text-xl text-black fixed top-28 left-[40%]' : 'hidden' } > Wrong credentials</div>
      <img src={logo} alt="crdb logo" className='pb-20' />
        <form className="w-3/2 px-8 bg-white rounded h-[300px] flex flex-col items-center justify-evenly"
        onSubmit={handleSubmit}
        >
        <InputGroup 
            label="Email"
            type="text"
            placeholder="johnny@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <InputGroup 
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Login" className='cursor-pointer rounded py-3 px-12 bg-crdbMedium hover:bg-crdbDark text-white' />
        </form>
    </div>
  )
}

export default Login 