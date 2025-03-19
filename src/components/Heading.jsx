import { useLocation } from "react-router-dom";


const Heading = ({title, subtitle, className}) => {
  const {pathname} = useLocation()
  // console.log(pathname)
  
  return (
    <div className={`text-center ${pathname !== '/' && 'lg:pb-44'}`}>
      <h1 className={`font-bold mb-5 text-3xl text-white ${className}`}>{title}</h1>
      <p className="text-white leading-relaxed">{subtitle}</p>
    </div>
  );
};

export default Heading;