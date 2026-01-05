import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../context/Title'
import CartTotal from './CartTotal'

const Cart = () => {
  const { purchasedcount, setpurchasedcount, Products } = useContext(ShopContext)
  const navigate = useNavigate()

  const deleteitems = (id) => {
    const updatedCart = purchasedcount.filter(
      (item) => item._id !== id
    )
    setpurchasedcount(updatedCart)
  }

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1="YOUR" text2="CART" />
      </div>

      <div>
        {purchasedcount.map((item, index) => {
          const productData = Products.find(
            (product) => product._id === item._id
          )

          if (!productData) return null

          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-1 sm:grid-cols-5 gap-4"
            >
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={productData.image[0]}
                  alt={productData.name}
                />
                <div>
                  <p className="text-sm sm:text-lg font-medium">
                    {productData.name}
                  </p>
                  <p className="text-medium">₹{productData.price}</p>
                </div>
              </div>

              <img
                src={assets.delete1}
                alt="delete"
                onClick={() => deleteitems(item._id)}
                className="w-4 sm:w-5 ml-10 cursor-pointer"
              />
            </div>
          )
        })}
      </div>

      {purchasedcount.length > 0 && (
        <div className="w-full mt-8 lg:w-1/3 border p-6 rounded-md h-fit">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate('/Placeorder')}
              className="bg-black text-white border rounded px-4 py-2 cursor-pointer"
            >
              CHECK TO PAY
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
