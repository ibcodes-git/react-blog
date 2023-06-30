import React,{ useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import Blog from './Blog';
import { Alert } from '@mui/material'


const Login = () => {

  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('')
  const[state,setState] = useState({
    showLogin:true,
    showBlog:false
});
  
    return (
    state.showLogin?<div>
        <div className='w-full h-full bg-stone-800 p-8 '>
            <form>
            <div className=' flex flex-col w-2/3 ml-32 bg-gradient-to-l from-gray-400 to-green-300 justify-center rounded-lg '>
                <h1 className='text-3xl font-bold text-indigo-500 my-5'>Login</h1>
                    <div className='bg-gray-800 flex m-5 rounded-xl'>
                    <AiOutlineMail className='m-3 text-white text-[25px]' />
                    <input onChange={(e)=>{setEmail(e.target.value)}}className='border-none outline-none w-auto bg-gray-800 text-white ml-5'  type ='text' placeholder='Enter your email' 
                    />
                </div>

                <div className='bg-gray-800 flex m-5 rounded-xl'>
                    <RiLockPasswordLine className='m-3 text-white text-[25px]' />
                    <input className='border-none outline-none w-auto bg-gray-800 text-white ml-5'  type ='text' placeholder='Enter your password' />
                </div>
                
                <div>
                    <button type='submit' className=' text-xl text-white border-fuchsia-800 bg-gradient-to-b from-violet-400 to-blue-400 rounded-xl m-8 p-2 animate-pulse hover:text-blacks' onClick = {() => {
                        setState ({
                            showLogin:false,
                            showBlog: true,
                        })
                    }}>Login Now</button>
                </div>
            </div>
            </form>
        </div>
    </div>: <Blog />
    
  )
}

export default Login