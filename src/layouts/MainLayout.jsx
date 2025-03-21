import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from 'react-hot-toast';
import { useState } from "react";
import { CartContext, MoneyContext, WishlistContext} from "../utils/cardContext";
import { getTotalMoney } from "../utils/money";




const MainLayout = () => {
  const [data, setData] = useState([]);
  const [money, setMoney] = useState(getTotalMoney())
  const [wishlist, setWishlist] = useState([])
 
  return (
    <div>
      
        <WishlistContext.Provider value={{wishlist, setWishlist}}>
          <MoneyContext.Provider value={{money, setMoney}}>
            <CartContext.Provider value={{data, setData}}>
              <Toaster />
              <Navbar></Navbar>
              <div className="min-h-[calc(100vh-360px)]">
                <Outlet></Outlet>
              </div>
              <Footer></Footer>
            </CartContext.Provider>
          </MoneyContext.Provider>
        </WishlistContext.Provider>
      
    </div>
  );
};

export default MainLayout;