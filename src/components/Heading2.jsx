import React from 'react';

const Heading2 = ({title, subtitle, className}) => {
  return (
    <div className="text-center bg-[#9538e2] w-11/12 lg:w-10/12 mx-auto py-10 px-4">
      <h2 className={`font-bold text-xl mb-5 md:text-3xl text-white ${className}`}>{title}</h2>
      <p className="text-white leading-relaxed">{subtitle}</p>
    </div>
  );
};

export default Heading2;