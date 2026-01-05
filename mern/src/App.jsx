import React from 'react'
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Collection from "./pages/Collection.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";
import Navbar from "./component/Navbar.jsx";
import Footer from './component/Footer.jsx';
import Search from './component/Search.jsx';
 import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Placeorder from './pages/Placeorder';


  


const App = () => {
  return (
  
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
     <ToastContainer/>
      <Navbar/>
       <Search/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/Placeorder" element={<Placeorder />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
          <Footer/>
     
    </div>
    
  );
};

export default App;
