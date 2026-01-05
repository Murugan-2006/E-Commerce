import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendurl } from "../App.jsx";
import toast from "react-hot-toast";
const Add = () => {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [image1, setimage1] = useState(null);
  const [image2, setimage2] = useState(null);
  const [image3, setimage3] = useState(null);
  const [image4, setimage4] = useState(null);
  const [category, setcategory] = useState("");
  const [type, settype] = useState("");
    const handlesubmit=async(e)=>{
      e.preventDefault();
      try{
      const formdata=new FormData();
      formdata.append("name",name);
      formdata.append("price",price);
      formdata.append("category",category);
      formdata.append("image1",image1);   
      formdata.append("image2",image2);   
      formdata.append("image3",image3);   
      formdata.append("image4",image4);
      formdata.append("type",type);
        const token=localStorage.getItem("token") ||"";

      const response=await axios.post(backendurl+"api/products/add",formdata,{headers:{token}});
        console.log(response.data);
      if(response.data.success){
        toast.success(response.data.message);
        setname("");
        setprice("");
        setcategory("");
        setimage1(null);
        setimage2(null);
        setimage3(null);
        setimage4(null);
        settype("");
      }}
      catch(error){
        console.log("this is error",error);
      }
    }

  return (
    <div className="w-full max-w-3xl bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-semibold mb-6">Add Items</h1>
  <form onSubmit={handlesubmit}>
    <div className="mb-4">

        <label className="block mb-1 font-medium">Product Name</label>
        <input
          type="text"
          placeholder="Enter product name"
          value={name}
          onChange={(e) => setname(e.target.value)}
          className="w-full border px-3 py-2 rounded outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Price */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Price</label>
        <input
          type="number"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setprice(e.target.value)}
          className="w-full border px-3 py-2 rounded outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Upload Images */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Upload Images</label>
      
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <label className="block mb-1 text-sm text-gray-600">
          <img src={!image1 ? assets.upload : URL.createObjectURL(image1)} alt="upload" className="h-20 object-cover cursor-pointer" ></img>
          <input
            type="file"
            onChange={(e) => setimage1(e.target.files[0])}
            className="p-2" hidden
          />
      </label>
      <label className="block mb-1 text-sm text-gray-600">
               <img src={!image2 ? assets.upload : URL.createObjectURL(image2)} alt="upload" className="h-20 object-contain cursor-pointer" ></img>
          <input
            type="file"
            onChange={(e) => setimage2(e.target.files[0])}
            className="border p-2" hidden 
          />
          </label>
      <label className="block mb-1 text-sm text-gray-600">
          
        <img src={!image3 ? assets.upload : URL.createObjectURL(image3)} alt="upload" className="h-20 object-contain" ></img>

          <input
            type="file"
            onChange={(e) => setimage3(e.target.files[0])}
            className=" p-2"   hidden 
          />
          </label>
      <label className="block mb-1 text-sm text-gray-600">
          <img src={!image4 ? assets.upload : URL.createObjectURL(image4)} alt="upload" className="h-20 object-contain" ></img>

          <input
            type="file"
            onChange={(e) => setimage4(e.target.files[0])}
            className=" p-2"    hidden
          />
          </label>
        </div>
      </div>

      {/* Category */}
      <div className="mb-6">
        <label className="block mb-1 font-medium">Category</label>
        <select
          value={category}
          onChange={(e) => setcategory(e.target.value)}
          className="w-full border px-3 py-2 rounded outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select Category</option>
          <option value="mobile">Mobile</option>
          <option value="laptop">Laptop</option>
        </select>
      </div>

     {/*  type */}
     <div className="mb-6">
        <label className="block mb-1 font-medium">Type</label>
        <select
          value={type}
          onChange={(e) => settype(e.target.value)}
          className="w-full border px-3 py-2 rounded outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select Type</option>
          <option value="realme">Realme</option>
          <option value="poco">Poco</option>
          <option value="oppo">Oppo</option>
          <option value="dell">Dell</option>
          <option value="lenovo">Lenovo</option>

        </select>
      </div>

      {/* Submit */}
      <button type="submit" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 cursor-pointer">
        ADD PRODUCT
      </button>
   
  </form>
      {/* Product Name */}
    </div>
      
  );
};

export default Add;
