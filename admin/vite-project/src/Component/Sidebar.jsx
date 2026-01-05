import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets.js'
const Sidebar = () => {
  return (
    <div className='w-[20%] min-h-screen border-r-2'>
    <div className='flex flex-col gap-4 mt-25 mb-2'>
        <NavLink to='/add'>
       <img src={assets.add} alt="Add" className='sm:w-16 sm:ml-10'/>
       <p className="hidden md:block ml-10">Add Items </p>
      </NavLink>
    </div>
    <div className='flex flex-col gap-4 mb-2'>
        <NavLink to='/list'>
       <img src={assets.list} alt="Add"  className='sm:w-16 sm:ml-10'/>
       <p className="hidden md:block ml-10">List Items </p>
      </NavLink>
    </div>
    <div className='flex flex-col gap-4 mb-2 '> 
        <NavLink to='/orders'>
       <img src={assets.order} alt="Add" className='sm:w-16 sm:ml-10'/>
       <p className="hidden md:block ml-10">ordered Items </p>
      </NavLink>
    </div>
    </div>
  )
}

export default Sidebar
