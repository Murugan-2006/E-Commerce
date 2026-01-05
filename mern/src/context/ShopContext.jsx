import React,{useEffect} from 'react'
import {createContext,useState} from 'react'
import axios from 'axios'
export const ShopContext =createContext();

const ShopContextProvider = (props) => {
    
    const delevery_charge=500;
    const currency='$';
    const [showsearch,setshowsearch]=useState(false);   
    const [searchvalue,setsearchvalue]=useState('');
    const [purchasedcount,setpurchasedcount]=useState([]);
    const backendurl=import.meta.env.VITE_BACKEND_URL;
    const [Products,setProducts]=useState([]);
    const [token,setToken]=useState('');
    
    const fetchProducts=async()=>{
    try {
    

    const response = await axios.get(`${backendurl}api/products/list`);


    if (response.data.success) {
      setProducts(response.data.products);
    } else {
      console.log(response.data.message);
    }
  } catch (error) {
    console.log("FETCH ERROR:", error);
  }
    }

    useEffect(()=>{
        fetchProducts();
    },[Products]);
    useEffect(()=>{
        if(!token && localStorage.getItem('token')){
            setToken(localStorage.getItem('token'));
        }
    },[])

    const value={
        Products,currency,delevery_charge,showsearch,setshowsearch,searchvalue,setsearchvalue,purchasedcount,setpurchasedcount, backendurl,token,setToken
    }
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  )
}

export default ShopContextProvider;
