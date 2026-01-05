import React, { useEffect, useState, useContext } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import Title from '../context/Title.jsx'
import Productitems from './Productitems.jsx'

const Latestcollection = () => {
  const {Products} = useContext(ShopContext)
  const [LatestProduct, SetLatestProduct] = useState([])
  //console.log(Products);
  useEffect(() => {
    SetLatestProduct(Products.slice(0, 10))
  }, [Products])

  return (
    <div className='my-10'>
      <div className='text-center py-8'>
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className='w-3/4 text-gray-600 m-auto text-xs sm:text-sm md:text-base'>
          In our service is successfully running in past 5 years
        </p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-4'>
        {LatestProduct.map((item, index) => (
          <Productitems
            key={index}
            _id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
            brand={item.brand}
          />
        ))}
      </div>
    </div>
  )
}

export default Latestcollection
