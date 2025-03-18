import { Link } from "react-router-dom";


const SingleProduct = ({product}) => {
  const {product_id, product_title, product_image, category, price, description, Specification, availability, rating} = product
  return (
    <div className="shadow-md card bg-slate-400">
    <figure className="px-10 pt-10 h-52">
      <img
        src={product_image}
        className="rounded-xl bg-slate-500 h-full object-cover w-full" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{product_title}</h2>
      <p>Price: {price}$</p>
      <div className="card-actions">
        <Link to={`/product/${product_id}`} className="btn btn-outline btn-">View Details</Link>
      </div>
    </div>
  </div>
  );
};

export default SingleProduct;