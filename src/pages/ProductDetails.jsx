import { useLoaderData, useParams } from "react-router-dom";
import Banner from "../components/Banner";
import { useEffect, useState } from "react";



const ProductDetails = () => {
  const data = useLoaderData()
  const {id} = useParams()
  // console.log(data, id)

  const [product, setProducts] = useState();
  // console.log(product)
  useEffect(()=> {
    const singleProduct = data.find(item =>item.product_id == id);
    setProducts(singleProduct);
  }, [data, id])
  return (
    <div>
      <Banner product={product} ></Banner>
    </div>
  );
};

export default ProductDetails;