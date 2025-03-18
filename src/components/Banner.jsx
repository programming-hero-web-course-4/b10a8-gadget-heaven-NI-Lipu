import Heading from "./Heading";
import BannerImg from "../assets/banner.jpg"
import { useLocation, useNavigate } from "react-router-dom";


const Banner = () => {
  const navigate = useNavigate()
  const {pathname} = useLocation()
  // console.log(pathname)
  return (
    <div className="relative w-11/12 lg:w-10/12 rounded-b-xl mx-auto bg-[#9538e2] pt-5">
      <Heading
        title={'Upgrade Your Tech Accessorize with Gadget Heaven Accessories'}
        subtitle={
          <>
          'Explore the latest gadgets that will take your experience to <br></br> the next level. From smart devices to the coolest accessories, we have it all!'
          </>
        }
        className='text-2xl md:text-3xl lg:text-4xl leading-normal'
      ></Heading>

      <div className="text-center">
        <button onClick={()=> navigate('/dashboard')} className="text-xl text-[#9538e2] font-bold rounded-[32px] bg-white py-3 px-7 mt-8 mb-28 md:mb-48 lg:mb-56 xl:mb-56 2xl:mb-60">Shop Now</button>
      </div>

      
          <div className="absolute rounded-xl border-2 border-[#ffffff] p-3 w-7/12 -bottom-24 md:-bottom-48 lg:-bottom-64 left-20 md:left-32 lg:left-48 xl:left-56 2xl:left-80">
          <img className="h-[150px] md:h-[300px] lg:h-[400px] w-full rounded-xl" src={BannerImg} alt="" />
        </div>
     
      
    </div>
  );
};

export default Banner;