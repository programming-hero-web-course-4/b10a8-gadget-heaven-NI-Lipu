import { useLoaderData } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import Heading2 from "./Heading2";
import { useEffect } from "react";


const AllProducts = () => {

   // Dynamic Title
    useEffect(() => {
      document.title= 'All-Products | Gadget Heaven'
    }, [])
  
  // console.log(pathname)
  const data = useLoaderData()
  return (
   <>
    <Heading2 
      title={'All Products'}
      subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
    ></Heading2>
    <div className="w-11/12 lg:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
      {
        data.map(product => <SingleProduct key={product.product_id} product={product}></SingleProduct>)
      }
    </div>
   </>
  );
};

export default AllProducts;