import React, { useContext } from 'react'
import {useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import ReletedProduct from '../component/ReletedProduct';
import { toast } from 'react-toastify';
const Product = () => {
  const {id} =useParams();
  const {Products,purchasedcount,setpurchasedcount}=useContext(ShopContext);
   const [ProductsData,setProductData]=useState('');
   const [image1,setimage]=useState([]);
   const [mainImage, setMainImage] = useState('');
   const [defaultImage, setdefaultImage] = useState('');
  
   const fetchdata=async()=>{
    Products.map((items)=>{
     if(items._id === Number(id) || items._id === id ){
     setProductData(items);
      setdefaultImage(items.image[0]);
    setimage(items.image);
      
      return null;}
    });
   }

   useEffect(()=>{
    fetchdata();
   // console.log(ProductsData);
   },[ProductsData,id,image1,mainImage,Product]);
   const addtocart=(prod)=>{
      setpurchasedcount(prev=> [...prev,prod]);
      toast.success("add to your purchase")
     // console.log(purchasedcount);
   }
   return (
    ProductsData ? (
      <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      
        {/* Product Data */}
        <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">

          {/* Product Images */}
          <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">

            {/* Thumbnails */}
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between">
              {ProductsData.image.map((item, index) => (
                <img
                  key={index}
                  src={item}
                  alt="product" onClick={()=>{setMainImage(item)}} 
                  className="w-[24%] sm:w-50 sm:mb-3 flex-shrink-0 cursor-pointer border"
                />
              ))}
            </div>
           {/* Main Image */}
           
          </div>

          {/* Product Details */}
          <div className="flex-1">
             <div >
              <img
                src={mainImage || defaultImage}
                alt="main product"
                className="w-80 h-auto border"
              />
            </div>

            <h1 className="text-medium text-2xl  mt-2">{ProductsData.name}</h1>
            <div className='flex  item-center gap-1 mt-2 w-3'>
              <img src={assets.star} ></img> 
                <img src={assets.star} ></img> 
                  <img src={assets.star} ></img> 
                    <img src={assets.star} ></img> 
                      <img src={assets.star} ></img> 
            </div>
            <p className="text-xl text-green-600 mt-2">
              ₹{ProductsData.price}
            </p>

            <button className="mt-6 px-6 py-3 bg-black text-white hover:bg-gray-800" onClick={()=>addtocart(ProductsData)}>
              Add to Cart
            </button>
            <hr className='mt-8 sm:w-4/5'></hr>
            <div className='mt-2 text-sm gap-2'>
              <p>This is good quality product build with high quality devices </p>
              <p>100% original price as well as quality product </p>
              <p> Thank you to visit our web page</p>
            </div>
          </div>

        </div>
        <div className='mt-20 text-sm flex '>
          <p className='border px-5 py-4 '>Description</p>
          <p className='border px-5 py-4'> Review(122)</p>
        </div>
        <div className='text-sm  text-gray flex flex-col '>
           <p className='mt-2'>This is good quality product build with high quality devices </p>
              <p className='mt-3'>100% original price as well as quality product </p>
              <p className='mt-3'> Thank you to visit our web https://leetcode.com/u/KISHORE_M_13/age</p>
              <ReletedProduct  category={ProductsData.category} type={ProductsData.type}/>
        </div>
      </div>
    ) : (
      <div className="opacity-0">Loading...</div>
    )
  );
}

export default Product
