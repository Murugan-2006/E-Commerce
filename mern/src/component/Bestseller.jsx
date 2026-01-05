import React, {useState,useEffect } from 'react'
import {ShopContext} from '../context/ShopContext'
import { useContext } from 'react';
import Title from '../context/Title';
import Productitems from './Productitems';
const Bestseller = () => {
    const [bestsel,setBestseller]=useState([]);
    const {Products}=useContext(ShopContext);
    useEffect(()=>{
         const bestsell=Products.filter((item)=>(item.Bestseller))
         setBestseller(bestsell.slice(0,5));
},[])
  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'COLLECTION'}/>
             <p className='w-3/4 text-gray-600 m-auto text-xs sm:text-sm md:text-base'>
          In our service is successfully running in past 5 years
        </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-4'>
                { bestsel.map((item, index) => (
                  <Productitems
                    key={index}
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    brand={item.brand}/>
                  
                ))}
            </div>
      
    </div>
  )
}

export default Bestseller
