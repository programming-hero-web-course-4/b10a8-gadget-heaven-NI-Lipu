import { IoTrashBinSharp } from "react-icons/io5";
import { useLocation } from "react-router-dom";


const Card = ({item, handleRemoveFromCart, handleRemoveFromWishlist}) => {
  const {product_id, product_title, product_image, category, price, description, Specification, availability, rating} = item || {};
  // console.log(item)

  const {pathname} = useLocation()
  
  return (
    <div className='md:flex items-center w-full bg-[#f6f6f6] px-6 py-4 rounded-lg gap-6 mb-5'>
      <div className="mb-5 md:mb-0"><img className='w-48 mx-auto md:mx-0 h-36 rounded-lg' src={product_image} alt="" /></div>
      <div className='md:flex text-center md:text-left items-center w-full justify-between'>
        <div className="">
          <h3 className='font-semibold text-xl'>{product_title}</h3>
          <p className='text-[#6c6b6f] my-1'>{description}</p>
          <p className='font-semibold text-lg'>Price: ${price}</p>
        </div>
        {pathname === '/dashboard'?(
           <button onClick={()=> handleRemoveFromCart(item)} className="text-red-600 mt-5 md:mt-0 text-4xl md:text-2xl 2xl:mr-20"><IoTrashBinSharp /></button>
        ):(
          <button onClick={()=> handleRemoveFromWishlist(product_id)} className="text-red-600 mt-5 md:mt-0 text-4xl md:text-2xl 2xl:mr-20"><IoTrashBinSharp /></button>
        )}
       
      </div>
    </div>
  );
};

export default Card;