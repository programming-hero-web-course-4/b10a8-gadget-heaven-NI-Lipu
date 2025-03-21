import { useLoaderData, useParams } from "react-router-dom";
import Banner from "../components/Banner";
import { useContext, useEffect, useState } from "react";
import { addToCard, getAllData } from "../utils/card";
import { CartContext, MoneyContext, WishlistContext } from "../utils/cardContext";
import { getTotalMoney, setTotalMoney } from "../utils/money";
import { addToWishlist, getAllWishlistData } from "../utils/wishlist";



const ProductDetails = () => {
  const data = useLoaderData()
  const {id} = useParams()
  
  const {setData} = useContext(CartContext)
  const {setMoney} = useContext(MoneyContext)
  const {setWishlist} = useContext(WishlistContext)

// console.log(setData)
  const [product, setProducts] = useState();
  const [isCart, setIsCart] = useState(false);
  const [isWishlist, setIsWishlist] = useState(false)
  
  // console.log(product)

  // USE EFFECT
  useEffect(()=> {
    const singleProduct = data.find(item =>item.product_id == id);
    setProducts(singleProduct);
    setData(getAllData());
    setWishlist(getAllWishlistData())
     // Money Count
   
     setMoney(getTotalMoney())
     

    // Disable Add to Cart Button
    const allData = getAllData()
    const isExist = allData.find(item => item.product_id == singleProduct.product_id);
    if(isExist) setIsCart(true)

    // Disable Add to Wishlist Button  
    const allWishlistData = getAllWishlistData()
    const wishlist = allWishlistData.find(item => item.product_id == singleProduct.product_id);
    if(wishlist) setIsWishlist(true)

  }, [data, id, setData, setMoney, setWishlist])


  // Handle CART BUTTON
  const handleCard=(product)=>{
 
    addToCard(product)
    setData(getAllData())
    // console.log(getAllData().length);

    // Disable Add to Cart Button
    setIsCart(true);

    // Money Count
    setTotalMoney(product.price)
    // setMoney(getTotalMoney().reduce((acc, num)=> acc + num, 0))
    setMoney(getTotalMoney());
  }

  // Handle WishList Button
  const handleWishlist = (product) =>{
    addToWishlist(product)
    setWishlist(getAllWishlistData())

    // Disable Add to Wishlist Button
    setIsWishlist(true)
  }
  return (
    <div>
      <Banner isWishlist={isWishlist} handleWishlist={handleWishlist} handleCard={handleCard} isCart={isCart} product={product} ></Banner>
    </div>
  );
};

export default ProductDetails;