import { TiShoppingCart } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import { CartContext, WishlistContext } from "../utils/cardContext";


const Navbar = () => {
  const {pathname} = useLocation()
  const {data} = useContext(CartContext)
  const {wishlist} = useContext(WishlistContext)
  const whitePaths = ['/', '/category/Laptops', '/category/Phones', '/category/Accessories', '/category/Smart Watches','/category/Smart%20Watches'];
 
  return (
    <div className={`navbar w-11/12 lg:w-10/12 mt-5 lg:mt-10 rounded-t-xl mx-auto  ${pathname!=='/' && pathname !== '/category/Laptops' && pathname !== '/category/Phones' && pathname !== '/category/Accessories' && pathname !== '/category/Smart Watches' && pathname !== '/category/Smart%20Watches' ? 'bg-white': 'bg-[#9538e2]'}`}>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className={`${pathname!=='/' && pathname !== '/category/Laptops' && pathname !== '/category/Phones' && pathname !== '/category/Accessories' && pathname !== '/category/Smart%20Watches' ? 'text-black': 'text-white'} lg:hidden  `}>
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
    <a className={`${pathname!=='/' && pathname !== '/category/Laptops' && pathname !== '/category/Phones' && pathname !== '/category/Accessories' && pathname !== '/category/Smart%20Watches' ? 'text-black': 'text-white'} text-xl font-bold ml-10 lg:ml-0 `}>Gadget Heaven</a>
  </div>
  <div className="navbar-center hidden lg:flex">

    <ul className="menu menu-horizontal items-center px-1">

    {/* ${isActive ? 'text-[#9538e2] bg-white p-1 rounded-lg font-extrabold' : 'text-white'} */}
    {/* ({isActive}) =>  */}

        <NavLink to='/' className={({isActive}) => `${isActive && 'bg-black font-bold p-1 rounded-md'} ${whitePaths.includes(pathname) ? 'text-white' : 'text-black'}`}>Home</NavLink>

        <NavLink to='/All-Products' className={({isActive}) => `${isActive && 'text-violet-900 font-bold text-lg'} ${whitePaths.includes(pathname) ? 'text-white mx-5' : 'text-black mx-5'}`}>All Products</NavLink>

        <NavLink to='/dashboard' className={({isActive})=> `${isActive && 'text-violet-900 font-bold text-lg'} ${whitePaths.includes(pathname) ? 'text-white mr-5' : 'text-black mr-5'}`}>Dashboard</NavLink>


        <NavLink to='/statistics' className={({isActive}) =>`${isActive && 'text-violet-900 font-bold text-lg'} ${whitePaths.includes(pathname) ? 'text-white' : 'text-black'}`}>Statistics</NavLink>

                
      </ul>
    {/* {pathname === '/' ? (
        
    // ) : (
    //   <ul className="menu menu-horizontal items-center px-1">
    //   <NavLink to='/' className={({isActive}) => `${isActive ? "text-[#9538e2] bg-white p-1 rounded-lg" : "text-[#545454]"} 
    //     ${pathname !== "/" ? "text-white" : "text-[#545454]"} 
    //     font-bold`}>Home</NavLink>
    //   <NavLink to='/statistics' className={({isActive}) => `${isActive ? 'text-[#9538e2] font-bold ' : 'text-[#545454]'} mx-5 font-bold hover:text-[#9538e2] hover:font-bold`}>Statistics</NavLink>
    //   <NavLink to='/dashboard' className={({isActive}) => `${isActive ? 'text-[#9538e2] font-bold ' : 'text-[#545454]'} font-bold hover:text-[#9538e2] hover:font-bold`}>dashboard</NavLink>
    //   <NavLink to='/All-Products' className={({isActive}) => `${isActive ? 'text-[#9538e2] font-bold ' : 'text-[#545454]'} mx-5 font-bold hover:text-[#9538e2] hover:font-bold`}>All Products</NavLink>
    // </ul>
    // )

    // } */}
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
        <span className="text-red-600 indicator-item">{wishlist.length}</span>
      </div>
    </button>
  </div>
</div>
  );
};

export default Navbar;