import React from 'react'
import foodie from "../assets/img_header_logo.svg"
import "./Nav.css"
import cart_icon from "../assets/cart_icon.png"
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <>
    <div className="Container">
        <img src={foodie} alt="" />
        <ul className='List'>
            <Link to='/'><li>Home</li></Link>
            <li>Menu</li>
            <li>About Us</li>
            <li>Order</li>
            <li>Reservation</li>
            <li>Contact Us</li>
        </ul>
        <div className="nav-login">
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
              <Link to='../Pages/Login'><button>Login</button></Link>
            </div>
    </div>
    </>
  )
}
export default Nav;