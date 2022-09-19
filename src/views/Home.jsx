import React, {useRef, useState} from 'react';
import Sidebar from '../components/Sidebar';
import InputGroup from '../components/InputGroup';
import logo from '../img/crdb-logo.svg';
import axios from 'axios';
import moment from 'moment';
import SignaturePad from 'react-signature-canvas'


function Home() {
        // Define Ref
        const sigCanvas = useRef({});

        const [token, setToken] = useState('');
        const [branch, setBranch] = useState('Kijitonyama');
        const [confirmed, setConfirmed] = useState(false);
        const [accountNumber, setAccountNumber] = useState('');
        const [accountName, setAccountName] = useState('');
        const [accountID, setAccountID] = useState('');
        const [verified, setVerified] = useState(false);
        const [action, setAction] = useState('');
        const [amount, setAmount] = useState('');
        const [transID, setTransID] = useState('');
        const [transactionID, setTransactionID] = useState('');
        const [custName, setCustName] = useState('');
        const [userCreated, setUserCreated] = useState(false);

        const clear = () => sigCanvas.current.clear()


        const formData = {
            'token': token
        }

        const confData = {
            'accountID': accountID,
            'transID': transactionID,
            'type': action,
            'branch': branch,
            'amount': amount
        }

        
    
    
    let handleSubmit = async (e) => {
        e.preventDefault();

        // Using axios
            await axios.post('http://139.162.249.220:9990/api/form_detail', formData, {headers: {
                'authorization': sessionStorage.getItem("token")
            }})
            .then(
                response => {
                    console.log(response.data.result[0]);
                    setAccountName(response.data.result[0].account_name);
                    setAccountNumber(response.data.result[0].account_no);
                    setAmount(response.data.result[0].amount);
                    setAction(response.data.result[0].type);
                    setTransID(response.data.result[0].id_transac);
                    setTransactionID(response.data.result[0].trans_id);
                    setAccountID(response.data.result[0].account_id);
                }
                )
                .catch(
                    error => {
                        console.log('Error::', error.response.data)
                        setVerified(true);
                        console.log(verified);
                        setTimeout(()=>{
                            setVerified(false);
                        }, 3000)
                }
            )

    }

    let handleForm = async (e) => {
        e.preventDefault();

        // Using axios
            await axios.post('http://139.162.249.220:9990/api/form_confirmation', confData, {headers: {
                'authorization': sessionStorage.getItem("token")
            }})
            .then(
                response => {
                    console.log(response);
                    setConfirmed(true);
                    setTimeout(()=>{
                        setConfirmed(false);
                    }, 3000)
                    
                }
            )
            .catch(
                error => {
                    console.log('Error::', error)
                }
            )

    }

  return (
    <div className='flex h-full' >
 <Sidebar />
    
    <div className='flex flex-col rounded w-[100%] min-h-[84%] ml-[450px] mr-16 mt-20 py-10 px-24' >
        <form onSubmit={handleSubmit} > 
            <input type='text' 
            className='h-10 w-[33%] border-2 rounded border-gray-600 text-xl px-5 mb-5 flex ml-auto ' 
            placeholder='Enter Token'
            value={token}
            onChange={(e) => setToken(e.target.value)}
            />
        </form>

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
        
            
            <form className='grid md:grid-cols-2 sm:grid-cols-2 gap-y-6 gap-x-6' 
            onSubmit={handleForm}
            >
                
                    <InputGroup className=''
                        label="Date/Tarehe"
                        type='text'
                        placeholder=""
                        value={moment().format('DD-MM-YYYY')}
                    />
                    <InputGroup
                        label="Branch/Tawi"
                        type='text'
                        placeholder=""
                        value={branch}
                    />
                    <InputGroup
                        label="Account Number/Namba ya Akaunti"
                        type='text'
                        placeholder=""
                        value={accountNumber}

                    />
                    <InputGroup
                        label="Account Holders Name/Jina la Akaunti"
                        type='text'
                        placeholder=""
                        value={accountName}
                    />
                    <InputGroup
                        label="Deposit or withdraw/Kuweka au kutoa"
                        value={action == 1 ? 'DEPOSIT' : 'WITHDRAW'}
                    />  
                    <InputGroup
                        label="Amount / kiasi cha Fedha "
                        type='number'
                        placeholder=""
                        value={amount}
                    />
                    <InputGroup
                        label="Transaction No"
                        type='text'
                        placeholder=""
                        value={transID}
                        
                    />
                    <InputGroup
                        label="Teller ID"
                        type='text'
                        placeholder=""
                        value={ 'Teller ' + sessionStorage.getItem('userID') }
                    />
                    <InputGroup
                        label="Customer/Mteja"
                        type='text'
                        placeholder=""
                        value={accountName}
                    />
                    <div className="flex flex-col">
                            <span className='text-xl pt-2'>Signature/Sahihi</span>
                        <div className="rounded border-2 border-black">
                            <SignaturePad 
                                ref={sigCanvas}
                                // canvasProps={{className: 'h-28'}}
                            />
                        </div>
                        <div
                            className='' 
                         >
                            
                         </div>
                    </div>
                    <input type="submit" value="CONFIRM" className={ confirmed ? 'w-32 rounded cursor-pointer py-3 bg-crdbDark text-white self-end mr-5 pointer-events-none cursor-not-allowed' : 'w-32 rounded cursor-pointer py-3 bg-crdbDark text-white self-end mr-5' }/>
                    <div className={ verified ? 'rounded bg-crdbLight border-2 border-crdbDark py-4 px-24 text-center text-crdbDark text-black fixed top-28 left-[40%]' : 'hidden' } > This Transaction has been served</div>
                    <div className={ confirmed ? 'rounded bg-crdbLight border-2 border-crdbDark py-4 px-24 text-center text-crdbDark text-black fixed top-28 left-[40%]' : 'hidden' } > Transaciton Succesful!</div>
                    <span 
                        onClick={clear}
                        className='w-32 rounded cursor-pointer py-3 bg-crdbLight text-black mr-5 text-center'> Clear 
                    </span>
                    </form>
                   
        </div>
      </div>
      </div>
  )
}

export default Home

