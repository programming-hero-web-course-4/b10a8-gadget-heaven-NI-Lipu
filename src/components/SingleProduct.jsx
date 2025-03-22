
import { Link, useLocation } from "react-router-dom";



const SingleProduct = ({product}) => {
  const {product_id, product_title, product_image, category, price, description, Specification, availability, rating} = product;

  const {pathname} = useLocation()



  
  return (
    <div className="shadow-md card bg-[#d9d9d9]">
    <figure className={`${pathname === '/All-Products' ? 'h-64 px-10 pt-10 2xl:h-96':'px-10 md:px-5 pt-10 md:pt-5 h-64 md:h-48 2xl:h-72'}`}>
      <img
        src={product_image}
        className="rounded-xl h-full object-cover w-full" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{product_title}</h2>
      <p>Price: {price}$</p>
      <div className="card-actions">
        <Link to={`/product/${product_id}`} className="btn btn-outline bg-white">View Details</Link>
      </div>
    </div>
  </div>
  );
};

export default SingleProduct;