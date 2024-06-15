import React, { createContext, useState } from 'react';
import all_product from '../Components/assets/dish_info';

export const CartContext = createContext(null);

const getDefaultCart = ()=>{
  let cart = {};
  for(let index = 0;index<all_product.length+1;index++){
    cart[index] = 0;
  }
  return cart;
}
const CartContextProvider = (props) => {
  const [cartItems,setcartItems] = useState(getDefaultCart);

  const addToCart = (itemId) =>{
    setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    console.log(cartItems);
  }
  const removeFromCart = (itemId) =>{
    setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }
  const getTotalAmount = () => {
    let totalAmout = 0;
    for(const item in cartItems)
    {
      if(cartItems[item]>0){
        let itemInfo = all_product.find((product)=>product.id===Number(item));
        totalAmout += itemInfo.new_price*cartItems[item];
      }
    }
    return totalAmout;
  }
  const getTotalItem = () => {
    let totalItem = 0;
    for(const item in cartItems)
    {
      if(cartItems[item]>0){
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  }
  const contextValue = {getTotalItem,getTotalAmount,all_product,cartItems,addToCart,removeFromCart};
  return(
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  )
}
export default CartContextProvider;
