import React, { useContext } from 'react'
import { useState,useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Productitems from './Productitems'
import Title from '../context/Title'
const ReletedProduct = ({category,type}) => {
  const {Products}=useContext(ShopContext);
  const [reletedproduct,setreletedproduct]=useState([]);
  useEffect(()=>{
     const copyproduct=Products.slice();
     if(copyproduct.length>0){
     copyproduct.filter((items)=> items.category===category || items.type===type);
     
     setreletedproduct(copyproduct.slice(0,5));
     //console.log(reletedproduct);
    }
  },[Products]);
  return (
   
    <div className='my-24'>
      <div className='text-center py-3 text-3xl'>
        <Title text1={'RELETED'} text2={'PRODUCT'}/>
      </div>
        
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 gap-y-6 '>
           {
            reletedproduct.map((items,index)=>(
              <Productitems key={index} _id={items._id} image={items.image}  name={items.name} price={items.price} brand={items.brand}/>
             ))
          }
                        
      </div>
       </div>
   
  )
}

export default ReletedProduct
