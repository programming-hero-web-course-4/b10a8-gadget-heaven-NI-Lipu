import { useLocation } from "react-router-dom";


const Heading = ({title, subtitle, className}) => {
  const {pathname} = useLocation()
  // console.log(pathname)
  const whitePaths = ['/', '/category/Laptops', '/category/Phones', '/category/Accessories', '/category/Smart Watches', '/category/Smart%20Watches'];
  
  return (
    <div className={`text-center ${whitePaths.includes(pathname) ? 'lg:pb-4' : 'lg:pb-40 xl:pb-40 2xl:pb-36 lg:mb-96'}`}>
      <h1 className={`font-bold mb-5 text-3xl text-white ${className}`}>{title}</h1>
      <p className="text-white leading-relaxed">{subtitle}</p>
    </div>
  );
};

export default Heading;