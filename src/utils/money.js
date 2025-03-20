// get all money from local storage
const getTotalMoney = () => {
  const totalMoney = localStorage.getItem('money');
  if(totalMoney){
    const money = JSON.parse(totalMoney)
    return money;
  }
  else{
    return 0;
  }
  
};

// set money to local storage
const setTotalMoney = (money) => {
  const totalMoney = getTotalMoney() + money;
  localStorage.setItem('money', JSON.stringify(totalMoney));  
};

// remove money from local storage
const decreaseMoney = (money) =>{
  const totalMoney = getTotalMoney() - money;
  localStorage.setItem('money', JSON.stringify(totalMoney));
}


export {setTotalMoney, getTotalMoney, decreaseMoney};


