import { useState } from 'react'
import foodie from "../assets/img_header_logo.svg"
import "./Nav.css"
import cart_icon from "../assets/cart_icon.png"
import { Link } from 'react-router-dom'

export const Nav = () => {
  const [menu, setMenu] = useState("Home"); 
  return (
    <>
    <div className="Container">
        <img src={foodie} alt="" />
        <ul className='List'>
        <Link style = {{textDecoration: "none"}} to='/'><li onClick={() => { setMenu("Home") }}>Home{menu === "Home" ? <hr /> : <></>}</li></Link>
            <Link style = {{textDecoration: "none"}} to='/menu'><li onClick={() => { setMenu("menu") }}>Menu{menu === "menu" ? <hr /> : <></>}</li></Link>
            <Link style = {{textDecoration: "none"}} to='/aboutUs'><li onClick={() => { setMenu("aboutUs") }}>About Us{menu === "aboutUs" ? <hr /> : <></>}</li></Link>
            <Link style = {{textDecoration: "none"}} to='/order'><li  onClick={() => { setMenu("order") }}>Order{menu === "order" ? <hr /> : <></>}</li></Link>
            <Link style = {{textDecoration: "none"}} to='/reservation'><li  onClick={() => { setMenu("reservation") }}>Reservation{menu === "reservation" ? <hr /> : <></>}</li></Link>
            <Link style = {{textDecoration: "none"}} to='contactUs'><li  onClick={() => { setMenu("contactUs") }}>Contact Us{menu === "contactUs" ? <hr /> : <></>}</li></Link>
        </ul>
        <div className="nav-login">
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
              <Link to='/Login'><button>Login</button></Link>
            </div>
    </div>
    </>
  )
}
export default Nav;