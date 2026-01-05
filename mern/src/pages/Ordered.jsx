import {React,useContext} from 'react'
import { ShopContext } from '../context/ShopContext';
import Productitems from '../component/Productitems';

const Ordered = (image,name) => {
     const { purchasedcount } = useContext(ShopContext);
  return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
         <img src={image} alt=""></img>
         <p> {name}</p>
         </div>
  )
}

export default Ordered