import React, { useContext, useEffect, useState } from 'react'
import './CSS/Order.css'
import { CartContext } from '../Contexts/cartContext';
import axios from "axios"

export const Order = () => {
  const {token,foodList,cartItems,url,calculateTotal} = useContext(CartContext);
  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangeHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }
  const placeOrder = async (event) =>{
    event.preventDefault();    // this function prevents our website from reloading when the details are submitted
    let orderItem = [];
    foodList.map((item)=>{
      if(cartItems[item._id]>0){
        let itemInfo = item;
        console.log("first",itemInfo);
        itemInfo["quantity"] = cartItems[item._id];
        orderItem.push(itemInfo)
        console.log("second",itemInfo,orderItem);
      }
    })
    let orderData = {
      address:data,
      items:orderItem,
      amount:calculateTotal(),
    }
    console.log(orderData.items);
    let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}});
    console.log(response.data);
    if(response.data.success){
      const {session_url} = response.data;
      window.location.replace(session_url);
      console.log(session_url);
    }
    else{
      alert("Error");
    }
  }

  useEffect(()=>{
    console.log(data);
  },[data])

  useEffect(() => {
    const navbar = document.getElementById('Navbar');
    if (navbar) {
      navbar.classList.add('not-home','fixed');
    }

    return () => {
      if (navbar) {
        navbar.classList.remove('not-home','fixed');
      }
    };
  }, []);

  return (
    <>
    <div className='order-page'>
      <form onSubmit={placeOrder} className='place-order'>
        <div className="place-order-left">
          <h1 className='titles'>Delivery Information</h1>
          <div className="multi-fields">
              <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First Name'/>
              <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last Name' id="" />
          </div>
          <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email address'/>
          <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street'/>
          <div className="multi-fields">
            <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City'/>
            <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State'/>
          </div>
          <div className="multi-fields">
            <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip-code'/>
            <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country'/>
          </div>
          <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone'/>
        </div>
        <div className="place-order-right">
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
                            <p>$2</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${calculateTotal()}</h3>
                        </div>
                    </div>
                    <button type='submit'>Proceed to Pay</button>
              </div>
        </div>
      </form>
      <div className="map-container">Space for map</div>
    </div>
    </>
  )
}
export default Order;