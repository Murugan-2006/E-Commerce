import React from 'react'
import {assets} from '../assets/assets'
import {NavLink,Link} from 'react-router-dom'
import { useState,useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate();
  const [Visible, SetVisible] = useState(false);
  const {purchasedcount,token,setToken,setpurchasedcount}=useContext(ShopContext);
  const logout=()=>{
 
    localStorage.removeItem('token');
       setToken('');
    setpurchasedcount({});
    navigate('/Login');
  }
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to='/'>    <img   src={assets.logo}  className='w-36' alt="logo"></img>
</Link>
        

    <ul className='hidden sm:flex gap-5 text-sm text-gray-700' >
    <NavLink to='/' className='flex flex-col items-center gap-2 '>
      <p>Home</p>
      <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
    </NavLink>
    <NavLink to='/collection' className='flex flex-col items-center gap-2'>
      <p>Collection</p>
      <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
    </NavLink>
    <NavLink to='/about' className='flex flex-col items-center gap-2'>
      <p>About</p>
      <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
    </NavLink>
    
   <NavLink to='/contact' className='flex flex-col items-center gap-2'>
      <p>Contact</p>
      <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
    </NavLink>
    </ul>
    <div className='flex  items-center gap-2'>
          <img src={assets.search} className='w-6 cursor-pointer'alt=""></img>
          <div className='group relative'>
          <Link to='./Login'><img src={assets.profile} alt="" className='w-8 cursor-pointer'></img></Link>  
           {token &&
           <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
          <div className='flex flex-cols gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
            <p className='cursor-pointer  hover:text-black'>Profile</p>
            <p className='cursor-pointer hover:text-black'>Orders</p>
            <p  onClick={logout} className='cursor-pointer  hover:text-black'>Logout</p>
          </div>
        </div>
           } 
          </div>
        <Link to='/cart' className='relative '>
             <img className='w-5 min-w-6' src={assets.cart} alt=""></img>
             <p className='absolute right-[-10px] bottom-[-10px] text-center leading-4 bg-black text-white aspect-square rounded'>{purchasedcount.length}</p>
        </Link>
        <img  onClick={()=>SetVisible(true)} src={assets.menu} className='w-5 cursor-pointer sm:hidden'></img>
      </div>
      {/*  used for phone size window  */}
        <div className={`absolute top-0 bottom-0 right-0 overflow-hidden bg-white transition-all ${Visible? 'w-3/4': 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                          <div onClick={()=>(SetVisible(false))} className='flex items-center gap-4 p-1'>
                            <img src={assets.back}  className='h-6 rotate-180'alt=""></img>
                            <p>Back</p>
                            </div>
                          
                          <NavLink to ='/' onClick={()=>(SetVisible(false))} className='pl-2 py-2'>Home</NavLink>
                          <NavLink to ='/collection' onClick={()=>(SetVisible(false))} className=' pl-2 py-2'>Collection</NavLink>
                          <NavLink to ='/about' onClick={()=>(SetVisible(false))} className=' pl-2 py-2'>About</NavLink>
                          <NavLink to ='/contact' onClick={()=>(SetVisible(false))} className='pl-2 py-2 '>Contact</NavLink>
                       
                </div>
        </div>
      </div>
  

  )
}

export default Navbar
