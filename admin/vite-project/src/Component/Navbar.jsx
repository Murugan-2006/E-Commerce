import React from 'react'
import {assets} from '../assets/assets'

const Navbar = ({settoken}) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-gray-200">
        <img  className='mt-6' src={assets.logo} alt="Logo" />
      <h2 className="text-black   mt-6 text-xl">Admin Panel</h2>
      <button className="bg-black text-white px-4 py-2 rounded cursor-pointer ml-auto" onClick={() => settoken("")}>
        Logout
      </button>
    </div>
  )
}
export default Navbar
