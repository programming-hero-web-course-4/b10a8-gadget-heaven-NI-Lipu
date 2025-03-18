import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {
  const data = useLoaderData()
  console.log(data)
  return (
    <div>
      Product Details
    </div>
  );
};

export default ProductDetails;