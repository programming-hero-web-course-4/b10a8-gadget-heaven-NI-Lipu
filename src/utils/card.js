import toast from 'react-hot-toast';

//  Get all data from Local Storage.
const getAllData =() =>{
  const allData = localStorage.getItem('card');
  if(allData){
    const data = JSON.parse(allData);
    return data;
  }
  else{
    return [];
  }
}

// Set data to Local Storage.
const addToCard = product =>{
  const card = getAllData();
  const isExist = card.find(item => item.product_id == product.product_id)
  if(isExist) return toast.error('The product already exists!')
  card.push(product);
  localStorage.setItem('card', JSON.stringify(card))
  toast.success('Successfully added!')
}

// Remove data from Local Storage.
const removeFromCart = id =>{
  const allData= getAllData();
  const remainingData = allData.filter(item => item.product_id != id);
  localStorage.setItem('card', JSON.stringify(remainingData));
  toast.success('Successfully remove!');
}

// Remove AllData From Local Storage
const removeAllData =()=>{
  const removeData = getAllData()
  if(removeData){
    localStorage.removeItem('card');
  }
  
  // console.log(removeData)
}

export { addToCard, getAllData, removeFromCart, removeAllData}