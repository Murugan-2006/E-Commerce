import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import {backendurl} from '../App.jsx';
import toast from 'react-hot-toast';
const Login = ({settoken}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
   try{ 
    e.preventDefault();
    console.log('Email:', email)
    console.log('Password:', password)
    const response =await axios.post(backendurl+'api/user/admin',{email,password})
    if(response.data.success){  
            console.log(response);

       settoken(response.data.token);
  }
  else{
    toast.error(response.data.message);
  }
}
catch(error){
  console.log("this is eror",error);
  toast.error("Something went wrong");
}
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h1 className='text-2xl font-bold mb-6 text-center text-gray-800'>Admin Login</h1>
        
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className='mb-4'>
            <label className='block text-gray-700 font-semibold mb-2'>Email</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>

          {/* Password Field */}
          <div className='mb-6'>
            <label className='block text-gray-700 font-semibold mb-2'>Password</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter your password'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg  cursor-pointer transition duration-200'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
