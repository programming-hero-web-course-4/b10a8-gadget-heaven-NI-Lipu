import { TiShoppingCart } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../utils/cardContext";
// import { getAllData } from "../utils/card";
// import { useState } from "react";

const Navbar = () => {
  const {pathname} = useLocation()
  const {data} = useContext(CartContext)
  // const data = getAllData()
  // const [countCart, setCountCart] = useState(data);
  // console.log(pathname)
  return (
    <div className={`navbar w-11/12 lg:w-10/12 mt-5 lg:mt-10 rounded-t-xl mx-auto bg-[#9538e2] ${pathname!=='/' ? 'bg-white': ''}`}>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className={`${pathname !== '/' && 'text-black'} lg:hidden text-white `}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu gap-y-2 menu-sm dropdown-content bg-[#9538e2] rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <NavLink to='/' className={({isActive}) => `${isActive ? 'text-[#9538e2] bg-white p-1 rounded-lg font-extrabold' : 'text-white'} font-medium hover:p-1 hover:bg-white hover:text-[#9538e2] hover:font-bold hover:rounded-lg`}>Home</NavLink>
          <NavLink to='/statistics' className={({isActive})=>`${isActive? 'text-[#9538e2] bg-white p-1 rounded-lg font-extrabold': 'text-white'} font-medium hover:p-1 hover:bg-white hover:text-[#9538e2] hover:font-bold hover:rounded-lg`}>Statistics</NavLink>
          <NavLink to='/dashboard' className={({isActive}) => `${isActive ? 'text-[#9538e2] bg-white p-1 rounded-lg font-extrabold' : 'text-white'} font-medium hover:p-1 hover:bg-white hover:text-[#9538e2] hover:font-bold hover:rounded-lg`}>Dashboard</NavLink>
          <NavLink to='/All-Products' className={({isActive}) => `${isActive ? 'text-[#9538e2] bg-white p-1 rounded-lg font-extrabold' : 'text-white'} font-medium hover:p-1 hover:bg-white hover:text-[#9538e2] hover:font-bold hover:rounded-lg`}>All Products</NavLink>
      </ul>
    </div>
    <a className={`${pathname !== '/'&& 'text-black'} text-xl text-white font-bold ml-10 lg:ml-0 `}>Gadget Heaven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    {pathname === '/' ? (
        <ul className="menu menu-horizontal items-center px-1">
        <NavLink to='/' className={({isActive}) => `${isActive ? 'text-[#9538e2] bg-white p-1 rounded-lg font-extrabold' : 'text-white'} font-medium hover:p-1 hover:bg-white hover:text-[#9538e2] hover:font-bold hover:rounded-lg`}>Home</NavLink>
        <NavLink to='/statistics' className={({isActive})=>`${isActive? 'text-[#9538e2] bg-white p-1 rounded-lg font-extrabold': 'text-white'} font-medium hover:p-1 hover:bg-white hover:text-[#9538e2] hover:font-bold hover:rounded-lg mx-5`}>Statistics</NavLink>
        <NavLink to='/dashboard' className={({isActive}) => `${isActive ? 'text-[#9538e2] bg-white p-1 rounded-lg font-extrabold' : 'text-white'} font-medium hover:p-1 hover:bg-white hover:text-[#9538e2] hover:font-bold hover:rounded-lg mr-5`}>dashboard</NavLink>
        <NavLink to='/All-Products' className={({isActive}) => `${isActive ? 'text-[#9538e2] bg-white p-1 rounded-lg font-extrabold' : 'text-white'} font-medium hover:p-1 hover:bg-white hover:text-[#9538e2] hover:font-bold hover:rounded-lg`}>All Products</NavLink>
      </ul>
    ) : (
      <ul className="menu menu-horizontal items-center px-1">
      <NavLink to='/' className={({isActive}) => `${isActive ? 'text-[#9538e2] bg-white p-1 rounded-lg' : 'text-[#545454]'} font-bold hover:text-[#9538e2] hover:font-bold`}>Home</NavLink>
      <NavLink to='/statistics' className={({isActive}) => `${isActive ? 'text-[#9538e2] font-bold ' : 'text-[#545454]'} mx-5 font-bold hover:text-[#9538e2] hover:font-bold`}>Statistics</NavLink>
      <NavLink to='/dashboard' className={({isActive}) => `${isActive ? 'text-[#9538e2] font-bold ' : 'text-[#545454]'} font-bold hover:text-[#9538e2] hover:font-bold`}>dashboard</NavLink>
      <NavLink to='/All-Products' className={({isActive}) => `${isActive ? 'text-[#9538e2] font-bold ' : 'text-[#545454]'} mx-5 font-bold hover:text-[#9538e2] hover:font-bold`}>All Products</NavLink>
    </ul>
    )

    }
  </div>
  <div className="navbar-end">
    <button className="btn mr-5 btn-circle">
    <div className="indicator">
          <TiShoppingCart size={20} />
        <span className="text-red-600 indicator-item">{data.length}</span>
      </div>
    </button>
    <button className="btn btn-circle">
      <div className="indicator">
      <FaRegHeart size={20} />
        <span className="text-red-600 indicator-item">0</span>
      </div>
    </button>
  </div>
</div>
  );
};

export default Navbar;