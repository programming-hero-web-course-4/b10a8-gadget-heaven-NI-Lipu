import { useContext, useEffect, useRef, useState } from "react";
import { getAllData, removeAllData, removeFromCart } from "../utils/card";
import Card from "./Card";
import { PiSortDescendingBold } from "react-icons/pi";
import { CartContext, MoneyContext, WishlistContext} from "../utils/cardContext";
import { decreaseMoney, getTotalMoney, removeTotalMoney } from "../utils/money";
import modalImage from "../assets/Group.png";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllWishlistData, removeFromWishlist } from "../utils/wishlist";




const Cards = () => {
  const data = getAllData();
  const [remainData, setRemainData] = useState(data)
  const {setData} = useContext(CartContext)
  const {money, setMoney} = useContext(MoneyContext)
  const modalRef = useRef(null);
  const navigate = useNavigate();
  const [isPurchase, setIsPurchase] = useState(false)
  const {pathname} = useLocation()
  const {wishlist, setWishlist} = useContext(WishlistContext)
  console.log(wishlist)
 
  
  

  useEffect(()=> {
    setData(getAllData())
    setMoney(getTotalMoney())
    setWishlist(getAllWishlistData())

    if (getAllData().length === 0) {
      setIsPurchase(true);
    }
  }, [setData, setMoney, setWishlist])

 
  
  // HANDLE REMOVE
  const handleRemoveFromCart = product =>{
    removeFromCart(product.product_id)
    setRemainData(getAllData())
    setData(getAllData())

    // Decrease Money
    decreaseMoney(product.price)
    setMoney(getTotalMoney())  
  }

  // Handle Remove From Wishlist
  const handleRemoveFromWishlist = id =>{
    removeFromWishlist(id)
    setWishlist(getAllWishlistData())
  }

  // HANDLE SORT
  const handleSort = (sortBy) => {
    if (sortBy === 'price') {
      const sortedData = [...data].sort((a, b) => b.price - a.price);
      setRemainData(sortedData);
      
    }
  };

  // HANDLE PURCHASE
  const handlePurchase = () =>{
    if(modalRef.current){
      modalRef.current.showModal()
    }
    // console.log('ddd');
  }

  // HANDLE MODAL BUTTON
  const handleModalButton = () =>{
    removeAllData()
    setRemainData(getAllData())
    setData(getAllData())
    removeTotalMoney()
    setMoney(getTotalMoney())
    navigate("/")
    // console.log(getAllData())
  }
  
  return (
    <>
    {pathname === '/dashboard' ? (
      <div className="my-10">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-bold text-xl">Cart</h3>
          <div className="flex items-center">
            <p className="font-bold text-xl">
              Total cost: <span>${money}</span>
            </p>
  
            <button
              onClick={() => handleSort('price')}
              className="font-semibold text-lg flex items-center mx-3 gap-1 text-[#9538e2] py-1 px-3 border-2 border-[#9538e2] rounded-3xl"
            >
              <span>Sort by Price</span> <PiSortDescendingBold size={'20'} />
            </button>
  
            <button
              disabled={isPurchase}
              onClick={handlePurchase}
              className={`font-medium text-lg text-white py-1 px-3 rounded-3xl bg-[#9538e2] ${
                isPurchase ? 'opacity-30 cursor-not-allowed' : ''
              }`}
            >
              Purchase
            </button>
  
            {/* Modal */}
            <dialog ref={modalRef} className="modal">
              <div className="modal-box text-center">
                <img className="mx-auto mb-6" src={modalImage} alt="" />
                <h3 className="font-bold text-2xl border-b-2 pb-2 w-fit mx-auto">
                  Payment Successfully
                </h3>
                <p className="py-4 text-[#6b6b6f]">Thanks for purchasing.</p>
                <p className="text-[#6b6b6f] font-bold">Total: ${money}</p>
                <div className="w-full mt-5">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button
                      onClick={handleModalButton}
                      className="btn w-full font-bold text-lg rounded-3xl"
                    >
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
  
        {/* Render Cart Items */}
        {remainData.length > 0 ? (
          remainData.map((item) => (
            <Card
              handleRemoveFromCart={handleRemoveFromCart}
              key={item.product_id}
              item={item}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No items in cart.</p>
        )}
      </div>
    ) : (
      // ✅ This block is now correctly formatted
      <div className="my-10">
        <h3 className="font-bold text-xl mb-5">Wishlist</h3>
        {wishlist.length > 0 ? (
          wishlist.map((item) => (
            <Card
              handleRemoveFromWishlist={handleRemoveFromWishlist}
              key={item.product_id}
              item={item}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No items in wishlist.</p>
        )}
      </div>
    )}
  </>
  
 
  );
};

export default Cards;