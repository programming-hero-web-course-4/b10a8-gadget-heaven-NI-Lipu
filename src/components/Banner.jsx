import Heading from "./Heading";
import BannerImg from "../assets/banner.jpg"
import { useLocation, useNavigate } from "react-router-dom";
import { FcRating } from "react-icons/fc";
import { GrCart } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa6";


const Banner = ({product, handleCard, isCart}) => {
  const navigate = useNavigate()
  const {pathname} = useLocation()

  
  const {product_id, product_title, product_image, category, price, description, Specification, availability, rating} = product || {};
  return (
    <div className="relative w-11/12 lg:w-10/12 rounded-b-xl mx-auto bg-[#9538e2] pt-5">
      {pathname == `/product/${product_id}` ? (
      <Heading
        title={'Product Details'}
        subtitle={
          <>
          'Explore the latest gadgets that will take your experience to <br></br> the next level. From smart devices to the coolest accessories, we have it all!'
          </>
        }
        className='text-2xl md:text-3xl lg:text-4xl leading-normal'
      ></Heading>
    ):(   
    <Heading
      title={'Upgrade Your Tech Accessorize with Gadget Heaven Accessories'}
      subtitle={
        <>
        'Explore the latest gadgets that will take your experience to <br></br> the next level. From smart devices to the coolest accessories, we have it all!'
        </>
      }
      className='text-2xl md:text-3xl lg:text-4xl leading-normal'
    ></Heading>)}

        {pathname == `/product/${product_id}` || (
        <div className="text-center">
        <button onClick={()=> navigate('/dashboard')} className="text-xl text-[#9538e2] font-bold rounded-[32px] bg-white py-3 px-7 mt-8 mb-28 md:mb-48 lg:mb-56 xl:mb-56 2xl:mb-60">Shop Now</button>
        </div>)
        }
     
        {pathname == `/product/${product_id}` ? (
          <div className="bg-base-200 mt-10 lg:mt-0 lg:absolute rounded-xl border-2 border-[#ffffff] p-3 lg:w-11/12 xl:w-10/12 2xl:w-7/12 -bottom-24 md:-bottom-48 lg:-bottom-[320px] xl:-bottom-72 2xl:-bottom-[320px] left-20 md:left-32 lg:left-9 xl:left-24 2xl:left-80">
          <div className="flex justify-around items-center flex-col lg:flex-row">
            <img
              src={product_image}
              className="mb-10 lg:mr-10 lg:mb-0 lg:w-60 xl:w-72 rounded-lg shadow-2xl" />
            <div className="">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">{product_title}</h2>
              <p className="py-2 font-semibold">Price: $ {price}</p>
              <p className="p-1 font-medium text-sm text-[#309C08] border-2 border-[#309C08] w-fit rounded-2xl bg-[#eaf5e6] mb-2">{availability? 'In Stock': 'Stock Out'}</p>
              <p className="text-[#6c6b6f] mb-2">{description}</p>
              <div className="mb-2">
                <h3 className="font-bold text-lg mb-2">Specification:</h3>
                <ol className="list-decimal list-inside text-[#6c6b6f]">
                  {
                    Specification.map((item, idx)=> <li key={idx}>{item}</li>)
                  }
                </ol>
              </div>
              <p className="flex items-center gap-1 mb-2"><span className="font-bold text-lg">Rating</span> <FcRating size={'18'} /></p>
              
              <div className="flex items-center gap-3 mb-3">
                <div className="rating">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-500"
                    defaultChecked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 border-2" />
                 
                </div>
                <p className="px-2 bg-gray-300 rounded-2xl font-semibold">{rating}</p>
              </div>

                  {/* Button */}

              <div className="flex items-center gap-3">
                <button disabled={isCart} onClick={()=>handleCard(product)} className="btn bg-[#8b35d2] rounded-3xl text-white text-lg">Add To Card <GrCart className="ml-1" size={'19'} /></button>
                <button className="btn rounded-full border-2"><FaRegHeart size={'25'} /></button>
              </div>
            </div>
          </div>
        </div>
        ) : (<div className="absolute rounded-xl border-2 border-[#ffffff] p-3 w-7/12 -bottom-24 md:-bottom-48 lg:-bottom-64 left-20 md:left-32 lg:left-48 xl:left-56 2xl:left-80">
          <img className="h-[150px] md:h-[300px] lg:h-[400px] w-full rounded-xl" src={BannerImg} alt="" />
          </div>)}
      
          
     
      
    </div>
  );
};

export default Banner;