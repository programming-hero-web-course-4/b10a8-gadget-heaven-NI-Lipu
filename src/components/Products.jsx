import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleProduct from "./SingleProduct";



const Products = () => {
  const { category } = useParams();
  const data = useLoaderData()
  
//  console.log(category)
  const [products, setProducts] = useState([])
 
  useEffect(() => {
    if(category){
      document.title= `${category} | Gadget Heaven`
    }
   
  }, [category])

  useEffect(()=> {
    if(category){
      if(category !== 'Smart Watches'){
        const filteredByCategory = [...data].filter(product => product.category === category)
    setProducts(filteredByCategory);
      }
      else{
        setProducts([])
      }
      
    }else{
      setProducts(data.slice(0, 6))
    }
  }, [data, category])

  return (
   <>
     {products.length === 0 && category === 'Smart Watches'? (
      <h2 className="flex justify-center h-full items-center text-center text-3xl font-semibold text-red-500">Sorry! Smart watches are Unavailable</h2>
     ):(
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {
        products.map(product => <SingleProduct key={product.product_id} product={product}></SingleProduct>)
      }
    </div>
     )}
   
   </>
  );
};

export default Products;