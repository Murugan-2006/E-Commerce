import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { backendurl } from '../App.jsx'
import { assets } from '../assets/assets.js'

const List = () => {
  const [list, setlist] = useState([])

  // ✅ FETCH PRODUCTS (ONCE)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem("token") || ""
        const response = await axios.get(
          backendurl + "api/products/list",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )

        if (response.data.success) {
          setlist(response.data.products)
        }
        else{
          console.log("Failed to fetch products")
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchProducts()
  }, []) // ✅ CORRECT

  // ✅ DELETE PRODUCT (ON CLICK)
  const removeproduct = async (id) => {
    try {
      const token = localStorage.getItem("token") || ""
      const response = await axios.delete(
        backendurl + "api/products/remove/" + id,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      if (response.data.success) {
        setlist(prev => prev.filter(item => item._id !== id))
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {list.map((item) => (
        <div key={item._id} className="border p-4 mb-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
          <p className="text-gray-700 mb-2">Price: ₹{item.price}</p>

          <div className="grid grid-cols-2 gap-4">
            {item.image?.map((imgUrl, index) => (
              <img
                key={index}
                src={imgUrl}
                alt={`Product ${index + 1}`}
                className="w-75 h-auto rounded"
              />
            ))}
          </div>

          <p>{new Date(item.date).toLocaleDateString()}</p>
          <p>{item.category}</p>
          <p>{item.type}</p>
          <button  onClick={() => removeproduct(item._id)} className="ml-2 border bg-black text-white px-4 py-2 rounded">Delete</button>
        </div>
      ))}
    </div>
  )
}

export default List
