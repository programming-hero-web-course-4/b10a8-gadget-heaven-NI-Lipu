import toast from 'react-hot-toast';

//  Get all data from Local Storage.
const getAllWishlistData =() =>{
  const allData = localStorage.getItem('wishlist');
  if(allData){
    const data = JSON.parse(allData);
    return data;
  }
  else{
    return [];
  }
}

// Set data to Local Storage.
const addToWishlist = product =>{
  const card = getAllWishlistData();
  const isExist = card.find(item => item.product_id == product.product_id)
  if(isExist) return toast.error('The product already exists!')
  card.push(product);
  localStorage.setItem('wishlist', JSON.stringify(card))
  toast.success('Successfully added!')
}

// Remove data from Local Storage.
const removeFromWishlist = id =>{
  const allData= getAllWishlistData();
  const remainingData = allData.filter(item => item.product_id != id);
  localStorage.setItem('wishlist', JSON.stringify(remainingData));
  toast.success('Successfully remove!');
}

export {getAllWishlistData, addToWishlist, removeFromWishlist}