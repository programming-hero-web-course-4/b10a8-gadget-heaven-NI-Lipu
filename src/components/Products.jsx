import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleProduct from "./SingleProduct";



const Products = () => {
  const { category } = useParams();
  const data = useLoaderData()
  // console.log(category ,data)

  const [products, setProducts] = useState([])

  useEffect(()=> {
    if(category){
      const filteredByCategory = [...data].filter(product => product.category === category)
    setProducts(filteredByCategory);
    }else{
      setProducts(data.slice(0, 6))
    }
  }, [data, category])

  return (
   <>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {
        products.map(product => <SingleProduct key={product.product_id} product={product}></SingleProduct>)
      }
    </div>
   
   </>
  );
};

export default Products;