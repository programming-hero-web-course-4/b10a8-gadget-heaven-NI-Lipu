import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Heading2 = ({title, subtitle, className}) => {
  const {pathname} = useLocation()
  return (
    <div className="text-center bg-[#9538e2] w-11/12 lg:w-10/12 mx-auto py-10 px-4">
      <h2 className={`font-bold text-xl mb-5 md:text-3xl text-white ${className}`}>{title}</h2>
      <p className="text-white leading-relaxed">{subtitle}</p>
      {pathname.startsWith('/dashboard') && (
      <div className='mt-9'>
        <NavLink to='/dashboard' end   className={({ isActive }) => 
    `${isActive ? 'bg-white font-bold text-[#9538e2]' : ''} mr-5 py-3 px-12 md:px-16 border-2 rounded-3xl`
  }>Cart</NavLink>
        <NavLink to='/dashboard/wishlist'   className={({ isActive }) => 
    `${isActive ? 'bg-white font-bold text-[#9538e2]' : ''} mr-5 py-3 px-12 md:px-16 border-2 rounded-3xl`
  }>Wishlist</NavLink>
      </div>
      )}
    </div>
  );
};

export default Heading2;