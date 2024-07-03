import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import { CartContext } from '../../Contexts/cartContext'
import axios from 'axios'
import parcel_icon from "../../Components/assets/package_2_20dp_FILL0_wght400_GRAD0_opsz20.png"

const MyOrders = () => {

//logic to get user's order data
 const {url,token} = useContext(CartContext);
 const [data,setData] = useState([]);

 const fetchOrders = async () =>{
    const response = await axios.post(url+"/api/order/userOrder",{},{headers:{token}});
    setData(response.data.data);
    console.log(response.data.data);
 }
 useEffect(()=>{
    if(token){
        fetchOrders();
    }
 },[token])
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
    <div className='my-orders'>
        <h2>My Orders</h2>
        <div className="container">
            {data.map((order,index)=>{
                return(
                    <div key={index} className="my-orders-order">
                        <img className='icon1' src={parcel_icon} alt="" />
                        <p>{order.items.map((item,index)=>{
                            if(index===order.items.length-1){
                                return item.name + "x"+item.quantity
                            }
                            else{
                                return item.name + "x"+item.quantity+","
                            }
                        })}</p>
                        <p>${order.amount}.00</p>
                        <p>Items: {order.items.length}</p>
                        <p><span>&#x25cf;</span><b>{order.status}</b></p>
                        <button onClick={fetchOrders}>Track Order</button>
                    </div>
                )
            })}
        </div>

    </div>
  )
}

export default MyOrders