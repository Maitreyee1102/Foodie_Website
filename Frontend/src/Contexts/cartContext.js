import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const CartContext = createContext(null);

const CartContextProvider = (props) => {
  const url = "https://foodie-website-backend.onrender.com";
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");
  const [foodList, setFoodList] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  const addToCart = async (itemId) => {
    setCartItems((prev) => {
      const quantity = prev[itemId] || 0;
      return { ...prev, [itemId]: quantity + 1 };
    });
    try {
      if(token){
        await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => {
      const quantity = prev[itemId] || 0;
      if (quantity <= 1) {
        const newCart = { ...prev };
        delete newCart[itemId];
        return newCart;
      }
      return { ...prev, [itemId]: quantity - 1 };
    });
    try {
      if(token){
        await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
      }
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  const calculateTotal = () => {
    return foodList.reduce((total, item) => {
      const quantity = cartItems[item._id] || 0;
      if (item && item.price && quantity) {
        return total + item.price * quantity;
      }
      return total;
    }, 0);
  };

  const calculateTotalItems = () => {
    let total = 0;
    for (const itemId in cartItems) {
      total += cartItems[itemId];
    }
    setTotalItems(total);
  };

  const fetchFoodList = async () => {
    try {
      const response = await axios.get(url + '/api/food/list');
      setFoodList(response.data.data);
    } catch (error) {
      console.error("Error fetching food list:", error);
    }
  };

  const loadCartData = async (token) => {
    try {
      const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
      setCartItems(response.data.cartData);
    } catch (error) {
      console.error("Error loading cart data:", error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    console.log('Cart Items Updated:', cartItems);
    calculateTotalItems();
  }, [cartItems]);

  const contextValue = {
    url,
    totalItems,
    token,
    setToken,
    foodList,
    cartItems,
    addToCart,
    removeFromCart,
    calculateTotal
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
