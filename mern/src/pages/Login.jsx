import React, { useState ,useContext} from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




const Login = () => {
    const navigate = useNavigate();

  const [currentState, setCurrentState] = useState('Sign Up');
  const {backendurl}=useContext(ShopContext);
  
  const {token,setToken}=useContext(ShopContext);
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

   const handlesubmit=async(event)=>{
    event.preventDefault();
    try{
      if(currentState==='Sign Up'){
        const response=await axios.post(`${backendurl}api/user/register`,{name,email,password});
   setToken(response.data.token);
   localStorage.setItem('token',response.data.token);
        console.log(response);
            
      }
      else {
        const response=await axios.post(`${backendurl}api/user/login`,{
          email,
          password
        });
        console.log(response);
        if(response.data.success ){
          setToken(response.data.token);
          localStorage.setItem('token',response.data.token);
        }
        else{
          alert('Invalid Credentials');
        }
        
      }
    } 
    catch(error){
      console.error('Error during authentication:', error);
    }
   
  }
  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);
  return (
    <div className="flex justify-center mt-10">
      <form  onSubmit ={handlesubmit} className="flex flex-col w-80 border p-5 rounded gap-3">

        <p className="text-3xl text-center font-semibold">
          {currentState}
        </p>

        {currentState === 'Sign Up' && (
          <input
            type="text"
            onChange={e=>{setName(e.target.value)}}
            className="w-full px-2 py-2 border"
            placeholder="Name"
            required
          />
        )}

        <input
          type="email"
          onChange={e=>{setEmail(e.target.value)}}

          className="w-full px-2 py-2 border"
          placeholder="Email"
          required
        />

        <input
          type="password"
          onChange={e=>{setPassword(e.target.value)}}

          className="w-full px-2 py-2 border"
          placeholder="Password"
          required
        />

        <button
          type="submit"
          className="mt-4 border rounded px-2 py-2 cursor-pointer 
                     hover:bg-green-500 hover:text-white transition"
        >
          {currentState}
        </button>

        <p
          className="text-sm text-center cursor-pointer text-blue-600"
          onClick={() =>
            setCurrentState(
              currentState === 'Login' ? 'Sign Up' : 'Login'
            )
          }
        >
          {currentState === 'Login'
            ? 'Create account'
            : 'Already have an account? Login'}
        </p>

      </form>
    </div>
  );
};

export default Login