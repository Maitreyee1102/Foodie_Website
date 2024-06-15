import React, { useContext } from 'react';
import './CSS/Cart.css';
import { CartContext } from '../Contexts/cartContext';
import remove_icon from '../Components/assets/close_24dp_FILL0_wght400_GRAD0_opsz24.png';
import { useNavigate } from 'react-router';

export const Cart = () => {
    const { getTotalAmount, all_product, cartItems, removeFromCart } = useContext(CartContext);

    const calculateTotal = () => {
        return all_product.reduce((total, product) => {
            return total + (product.new_price * cartItems[product.id]);
        }, 0).toFixed(2);
    };
    const navigate = useNavigate();

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
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cart-items-format cartitems-format-main">
                                <img src={e.image} alt="" className='cart-icon-product' />
                                <p className='title'>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>${(e.new_price * cartItems[e.id]).toFixed(2)}</p>
                                <img className='cart-items-remove-icon' src={remove_icon} alt="" onClick={() => { removeFromCart(e.id) }} />
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
                            <p>${calculateTotal()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Charges</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${calculateTotal()}</h3>
                        </div>
                    </div>
                   <button onClick={()=>{navigate('/order')}}>Proceed to CheckOut</button>
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
