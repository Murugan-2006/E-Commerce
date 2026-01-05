import React, { useEffect } from 'react'
import Navbar from './Component/Navbar.jsx'
import Sidebar from './Component/Sidebar.jsx'
 import { Routes, Route } from 'react-router-dom'
  import Add from './Pages/Add.jsx'
  import List from './Pages/List.jsx'
  import Order from './Pages/Order.jsx'
 import Login from './Component/Login.jsx'
  import { useState } from 'react'
  import {Toaster} from 'react-hot-toast'
 export const backendurl=import.meta.env.VITE_BACKEND_URL;
const App = () => {
   const  [token,settoken]=useState(localStorage.getItem("token") ||"");

   useEffect(()=>{
    if(token!==""){
      localStorage.setItem("token",token);
    }
    },[token]);
    return (
      <>  
      <Toaster position="top-right" reverseOrder={false} />
      {
        token === "" ? <Login settoken={settoken}/>:
       <>
        <div className="min-h-screen bg-gray-100">
            <Navbar settoken={settoken} />
            <hr />

            {/* Sidebar + Page Content */}
            <div className="flex">
              
              {/* LEFT: Sidebar */}
              <Sidebar />

              {/* RIGHT: Page Rendering Area */}
              <div className="flex-1 p-6">
                <Routes>
                  <Route path="/add" element={<Add />} />
                  <Route path="/list" element={<List />} />
                  <Route path="/orders" element={<Order />} />
                </Routes>
              </div>

            </div>
</div>
</>
      }
      </>
        
    )
  
}

export default App
