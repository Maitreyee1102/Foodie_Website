import React, { useContext, useEffect } from 'react';
import './CSS/Cart.css';
import { CartContext } from '../Contexts/cartContext';
import remove_icon from '../Components/assets/close_24dp_FILL0_wght400_GRAD0_opsz24.png';
import { useNavigate } from 'react-router';

export const Cart = () => {
  const url = "https://foodie-website-backend.onrender.com";
  const { foodList, cartItems, removeFromCart, calculateTotal } = useContext(CartContext);

  // Debugging logs
  console.log('foodList:', foodList);
  console.log('cartItems:', cartItems);

  useEffect(() => {
    const navbar = document.getElementById('Navbar');
    if (navbar) {
      navbar.classList.add('not-home', 'fixed');
    }

    return () => {
      if (navbar) {
        navbar.classList.remove('not-home', 'fixed');
      }
    };
  }, []);

  const navigate = useNavigate();

  // Handle empty or undefined lists
  if (!foodList || !cartItems) {
    return <p>Loading...</p>;
  }

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Dishes</p>
        <p className='dish1'>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <br />
      <hr />
      {foodList.map((item) => {
        if (cartItems[item._id] > 0) {
          return (
            <div key={item._id}>
              <div className="cart-items-format cartitems-format-main">
                <img src={url + "/images/" + item.image} alt="" className='cart-icon-product' />
                <p className='title'>{item.name}</p>
                <p>${item.price}</p>
                <button className='cartitems-quantity'>{cartItems[item._id]}</button>
                <p>${(item.price * cartItems[item._id]).toFixed(2)}</p>
                <img className='cart-items-remove-icon' src={remove_icon} alt="" onClick={() => removeFromCart(item._id)} />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cart-items-down">
        <div className="cart-items-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${calculateTotal().toFixed(2)}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Charges</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${calculateTotal().toFixed(2)}</h3>
            </div>
          </div>
          <button onClick={() => navigate('/order')}>Proceed to CheckOut</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, apply it here</p>
          <div className="cartitems-promobox">
            <input type="text" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
