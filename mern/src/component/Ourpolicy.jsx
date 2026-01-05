import React from 'react'
import {assets} from '../assets/assets'

const OurPolicy = () => {
  return (
  
       <div className='flex flex-col sm:flex-row  gap-20 sm:gap-2 py-2' >
          <div className='text-gray-600'>
            <img  src={assets.tf7}  className='w-12 mb-5  ml-20' ></img>
            <p className='font-semibold'>within two week we accept the return policy</p>
        </div>
        <div className='text-gray-600'>
            <img  src={assets.tf7} className='w-12 mb-5 ml-20'></img>
            <p className='font-semibold'>our service will provided 24/7</p>
        </div>
        <div className='text-gray-600' >
            <img  src={assets.tf7} className='w-12 mb-5 ml-20'></img>
            <p className='font-semibold'>thank you to purchase phone</p>
        </div>
    </div>
  )
}

export default OurPolicy
