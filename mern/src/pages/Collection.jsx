import React, { useContext, useState ,useEffect} from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../context/Title';
import Productitems from '../component/Productitems';

import { toast } from 'react-toastify';

const Collection = () => {
   const {searchvalue,showsearch,purchasedcount}=useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);
  const [productmapping,setproductmaping]=useState([]);
  const [category,setcategory]=useState([]);
  const [type,settype]=useState([])
  const [sorttype,setsorttype]=useState('relevent');
  const {Products}=useContext(ShopContext);
  const filter=()=>{
     let productcopy=Products.slice();
     if(showsearch && searchvalue )
      productcopy= productcopy.filter(items=> items.name.toLowerCase().includes(searchvalue.toLowerCase()));
     if(category.length>0){
      productcopy=productcopy.filter(items=> category.includes(items.category));
     }
     if(type.length>0){
      productcopy=productcopy.filter(items=> type.includes(items.brand));
     }
     setproductmaping(productcopy)
   
  }
   const sorting = () => {
  switch (sorttype) {
    case 'high-to-low':
      setproductmaping(prev =>
        [...prev].sort((a, b) => b.price - a.price)
      );
      break;

    case 'low-to-high':
      setproductmaping(prev =>
        [...prev].sort((a, b) => a.price - b.price)
      );
      break;

    default:
      break;
  }
};

  useEffect(()=>{
    const filter=()=>{
     let productcopy=Products.slice();
     if(category.length>0){
      productcopy=productcopy.filter(items=> category.includes(items.category));
     }
     setproductmaping(productcopy)
  }
    setproductmaping(Products);
    sorting();
  },[Products,sorttype]);
  const toggle=(e)=>{
    if(category.includes(e.target.value)){
      setcategory(prev =>prev.filter(items=> items!=e.target.value));

    }
    else{
      setcategory(prev =>[...prev,e.target.value]);
    }
  }
   const toggletype=(e)=>{
    if(type.includes(e.target.value)){
      settype(prev =>prev.filter(items=> items!=e.target.value));

    }
    else{
      settype(prev =>[...prev,e.target.value]);
    }
  }
  useEffect(()=>{
   filter();
  
 

  },[category,type,searchvalue,Products]);
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
     
      {/* Filter Options */}
      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2 ' >
          FILTERS
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'}`}>
          <p className='mb-3 text-sm font-medium'>
            CATEGORIES
          </p>

          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3'  type="checkbox"  value={'phone'} onChange={toggle}/>Mobile  
            </p>
            <p className='flex gap-2'>
              <input className='w-3'  type="checkbox"  value={'laptop'} onChange={toggle}/>Laptop
            </p>
            <p className='flex gap-2'>
              <input className='w-3'  type="checkbox"  value={'headset'} onChange={toggle}/>Headset 
            </p>
          </div>

        </div>
          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'}`}>
          <p className='mb-3 text-sm font-medium'>
           TYPE
          </p>

          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3'  type="checkbox"  value={'realme'} onChange={toggletype}/>Realme 
            </p>
            <p className='flex gap-2'>
              <input className='w-3'  type="checkbox"  value={'oppo'} onChange={toggletype}/>Oppo
            </p>
            <p className='flex gap-2'>
              <input className='w-3'  type="checkbox"  value={'lenovo'} onChange={toggletype}/>Lenovo
            </p>
               <p className='flex gap-2'>
              <input className='w-3'  type="checkbox"  value={'dell'} onChange={toggletype}/>DEll
            </p> 
              <p className='flex gap-2'>
              <input className='w-3'  type="checkbox"  value={'poco'} onChange={toggletype}/>Poco
              </p>
          </div>

        </div>
      </div>
      <div className='flex-1'>
{/*    right side part in collection  */}
  <div className='flex justify-between text-base sm:text-2xl mb-4'>
    <Title text1={'ALL'} text2={'COLLECTIONS'} />
    <select onChange={(e)=>setsorttype(e.target.value)} className='border-2 border-gray-300 text-sm px-2 '>
      <option value='relevent'>sort by relevent</option>
      <option value='low-to-high'>low to high</option>
      <option value='high-to-low'>high to low</option>

    </select>
  </div>

   {/*map product */}
   <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {
      productmapping.map((items,index)=>(
        <Productitems key={index} id={items._id} image={items.image} name={items.name} 
        price={items.price} category={items.category}/> 
      ))
    }
    </div>
    </div>
    </div>
  )
}

export default Collection
