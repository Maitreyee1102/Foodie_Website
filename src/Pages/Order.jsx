import React, { useContext } from 'react'
import './CSS/Order.css'
import { CartContext } from '../Contexts/cartContext';
export const Order = () => {
  const {getTotalAmount} = useContext(CartContext);
  return (
    <div className='order-page'>
      <form className='place-order'>
        <div className="place-order-left">
          <h1 className='titles'>Delivery Information</h1>
          <div className="multi-fields">
              <input type="text" placeholder='First Name'/>
              <input type="text" placeholder='Last Name' id="" />
          </div>
          <input type="email" placeholder='Email address'/>
          <input type="text" placeholder='Street'/>
          <div className="multi-fields">
            <input type="text" placeholder='Zip-code'/>
            <input type="text" placeholder='Country'/>
          </div>
          <input type="text" placeholder='Phone'/>
        </div>
        <div className="place-order-right">
        <div className="cart-items-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Charges</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalAmount()}</h3>
                        </div>
                    </div>
                    <button>Proceed to Pay</button>
              </div>
        </div>
      </form>
      <div className="map-container">Space for map</div>
    </div>
  )
}
export default Order;