import React from 'react'
import Title from '../context/Title';
import CartTotal from './CartTotal';
const Placeorder = () => {
  return (
    <div className='flex-row mb-4 mx-3 my-4'>
      <Title text1={'PAYMENT'} text2={'METHODE'}/>
        <div className='mt-5 flex -cols mb-4 '>
          <button className='border rounded  mx-3 px-2 py-2 cursor-pointer  hover:bg-green-500 hover:text-white 
             transition duration-200"'>Phonepe</button>
          <button className='border rounded  mx-3 px-2 py-2 cursor-pointer  hover:bg-green-500 hover:text-white 
             transition duration-200"'>Cash On Delivery</button>
          </div>



        <CartTotal/> 
      
       
    </div>
  )
}

export default Placeorder
