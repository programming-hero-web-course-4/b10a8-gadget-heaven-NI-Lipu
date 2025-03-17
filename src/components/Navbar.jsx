import { TiShoppingCart } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar w-11/12 lg:w-10/12 mt-5 lg:mt-10 rounded-t-xl mx-auto bg-[#9538e2]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="lg:hidden text-white">
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
        className="menu menu-sm dropdown-content bg-[#9538e2] rounded-box z-[1] mt-3 w-52 p-2 shadow">
      <li className="text-white font-medium"><a>Home</a></li>
      <li className="text-white font-medium"><a>Statistics</a></li>
      <li className="text-white font-medium"><a>Dashboard</a></li>
      </ul>
    </div>
    <a className="text-xl text-white font-bold ml-10 lg:ml-0">Gadget Heaven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className="text-white font-medium"><a>Home</a></li>
      <li className="text-white font-medium"><a>Statistics</a></li>
      <li className="text-white font-medium"><a>Dashboard</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <button className="btn mr-5 btn-circle">
    <div className="indicator">
          <TiShoppingCart size={20} />
        <span className="text-red-600 indicator-item">0</span>
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