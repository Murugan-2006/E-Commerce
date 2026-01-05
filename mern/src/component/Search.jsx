import React, { useContext ,useEffect} from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const Search = () => {
  const location=useLocation();
  const {
    searchvalue,
    setsearchvalue,
    showsearch,
    setshowsearch
  } = useContext(ShopContext);

  useEffect(()=>{
     if(location.pathname.includes('collection')){
      setshowsearch(true);
     }
    else  setshowsearch(false);

     console.log(location.pathname);
  },[location])
  if (!showsearch) return null;

  return (
    <div className="border-t border-b bg-gray-50 text-center py-4">
      
      {/* Search Box */}
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 rounded-full gap-3">
        
        {/* Search Icon */}
        <img
          src={assets.search}
          alt="search"
          className="w-5 h-4"
        />

        {/* Input */}
        <input
          type="text"
          value={searchvalue}
          onChange={(e) => setsearchvalue(e.target.value)}
          placeholder="Search products"
          className="flex-1 outline-none bg-transparent text-sm"
        />
      </div>

      {/* Close Icon */}
      <img
        onClick={() => setshowsearch(false)}
        src={assets.cross}
        alt="close"
        className="inline w-7 ml-4 cursor-pointer"
      />
    </div>
  );
};

export default Search;

