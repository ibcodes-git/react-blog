import React,{ useState } from 'react'
import Login from './Login';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Alert } from '@mui/material';


const Signup = () => {
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    let [result,setResult] = useState('Please fill all the details');
    let [show,setShow] = useState(false)

    let [status,setstatus] = useState({
      showsignup:true,
      showLogin:false,  
    })

    setTimeout(() =>{
        setShow(false)
      },3000);
    const validateForm = (e) => {
        setShow(true);
        e.preventDefault();
        if(name === ""){
            setResult("Name can't be blank");
        }else if( email==="") {
            setResult("Email must be filled.")
        } else if( password==="" && password.length < 8) {
            setResult("Password must be filled and must be at least 8 characters")
        }else{
            setstatus({
                showsignup:false,
                showLogin:true
            })
        }

    }
    
  return (
    <div>
        {show?<Alert severity="warning">{result}</Alert>:""}
        {status.showsignup?<div className='w-full h-full bg-stone-800 p-8 '>
            <form onSubmit = { (e) => validateForm(e)}>
            <div className=' flex flex-col w-2/3 ml-32 bg-gradient-to-l from-gray-400 to-green-300 justify-center rounded-lg '>
                <h1 className='text-3xl font-bold text-indigo-500 my-5'>Signup</h1>
                <div className='bg-gray-800 flex m-5 rounded-xl'>
                    <AiOutlineUserAdd className='m-3 text-white text-[25px]' />
                    <input  value={name} onChange= {(e)=> setName(e.target.value)}className='border-none outline-none w-auto bg-gray-800 text-white ml-5'  type ='text' placeholder='Enter your name' />
                </div>

                <div className='bg-gray-800 flex m-5 rounded-xl'>
                    <AiOutlineMail className='m-3 text-white text-[25px]' />
                    <input value={email} onChange= {(e)=>{setEmail(e.target.value)}}className='border-none outline-none w-auto bg-gray-800 text-white ml-5'  type ='text' placeholder='Enter your email' 
                    />
                </div>

                <div className='bg-gray-800 flex m-5 rounded-xl'>
                    <RiLockPasswordLine className='m-3 text-white text-[25px]' />
                    <input value={password} onChange={(e)=>{setPassword(e.target.value)}}className='border-none outline-none w-auto bg-gray-800 text-white ml-5' type ='text' placeholder='Enter your password' />
                </div>
                <div className='flex flex-row justify-center'>
                    <input className="h-5 w-5 mr-3" type ="checkbox"/>
                    <p className='text-blue-600 font-semibold '> I agree with the  <span className='text-purple-800'>terms and conditions</span> .</p>
                </div>
                <div>
                    <p className='font-semibold text-violet-600 justify-end items-end flex mr-5 mt-5'>Already have account..?</p>
                    <button onClick={()=>{
                        setstatus({
                            showsignup:false,
                            showLogin:true,
                        })
                    }} className='font-semibold text-xl text-indigo-800 justify-end items-end underline ml-44'>Login Now</button>
                </div>
                <div>
                    <button type='submit' className=' text-xl text-white border-fuchsia-800 bg-gradient-to-b from-violet-400 to-blue-400 rounded-xl m-8 p-2 animate-pulse hover:text-blacks'>SignUp Now</button>
                </div>
            </div>
            </form>
        </div>:<Login />}
    </div>
  )
}

export default Signup