import { useContext, useEffect, useState } from "react";
import { getAllData, removeFromCart } from "../utils/card";
import Card from "./Card";
import { PiSortDescendingBold } from "react-icons/pi";
import { CartContext, MoneyContext } from "../utils/cardContext";
import { decreaseMoney, getTotalMoney } from "../utils/money";
// import { decreaseMoney, getTotalMoney } from "../utils/money";



const Cards = () => {
  const data = getAllData();
  const [remainData, setRemainData] = useState(data)
  const {setData} = useContext(CartContext)
  // const {money} = useContext(MoneyContext);
  const {money, setMoney} = useContext(MoneyContext)

  useEffect(()=> {
    setData(getAllData())
    setMoney(getTotalMoney)
  }, [setData, setMoney])
  
  const handleRemoveFromCart = product =>{
    removeFromCart(product.product_id)
    setRemainData(getAllData())
    setData(getAllData())
    // Decrease Money
    decreaseMoney(product.price)
    setMoney(getTotalMoney)
    
    
  }
  return (
    <div className="my-10">
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-bold text-xl">Cart</h3>
        <div className="flex items-center">
          <p className="font-bold text-xl">Total cost: <span>${money}</span></p>
          <button className="font-semibold text-lg flex items-center mx-3 gap-1 text-[#9538e2] py-1 px-3 border-2 border-[#9538e2] rounded-3xl"><span>Sort by Price</span> <PiSortDescendingBold size={'20'} /></button>
          <button className="font-medium text-lg text-white py-1 px-3 rounded-3xl bg-[#9538e2]">Purchase</button>
        </div>
      </div>
      {
        remainData.map(item => <Card handleRemoveFromCart={handleRemoveFromCart} key={item.product_id} item={item}></Card>)
      }
    </div>
  );
};

export default Cards;