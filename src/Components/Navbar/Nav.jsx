import React, { useState, useEffect, useContext } from 'react';
import foodie from "../assets/img_header_logo.svg";
import cart_icon from "../assets/cart_icon.png";
import { Link, useNavigate } from 'react-router-dom';
import './Nav.css';
import { CartContext } from '../../Contexts/cartContext';
import profile from '../assets/account_circle_20dp_FILL0_wght400_GRAD0_opsz20.png'
import bag_icon from '../assets/local_mall_20dp_FILL0_wght400_GRAD0_opsz20.png'
import logout from '../assets/logout_20dp_FILL0_wght400_GRAD0_opsz20.png'

export const Nav = ({setShowLogin}) => {
  const [menu, setMenu] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const {totalItems,token,setToken} = useContext(CartContext);

  const navigate = useNavigate();

  const Logout = ()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const handleScroll = () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        setScrolled(true);
      } else {
        navbar.classList.remove('scrolled');
        setScrolled(false);
      }
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`Container ${menu !== 'Home' ? 'fixed' : ''} ${menu !== 'Home' ? 'not-home' : ''}`} id='Navbar'>
        <img src={foodie} alt="Foodie Logo" />
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          ☰
        </button>
        <ul className={`List ${dropdownVisible ? 'visible' : ''}`}>
          <Link style={{ textDecoration: "none" }} to='/'><li onClick={() => { setMenu("Home") }}>Home{menu === "Home" ? <hr /> : <></>}</li></Link>
          <Link style={{ textDecoration: "none" }} to='/menu'><li onClick={() => { setMenu("menu") }}>Menu{menu === "menu" ? <hr /> : <></>}</li></Link>
          <Link style={{ textDecoration: "none" }} to='/aboutUs'><li onClick={() => { setMenu("aboutUs") }}>About Us{menu === "aboutUs" ? <hr /> : <></>}</li></Link>
          <Link style={{ textDecoration: "none" }} to='/reservation'><li onClick={() => { setMenu("reservation") }}>Reservation{menu === "reservation" ? <hr /> : <></>}</li></Link>
          <Link style={{ textDecoration: "none" }} to='/contactUs'><li onClick={() => { setMenu("contactUs") }}>Contact Us{menu === "contactUs" ? <hr /> : <></>}</li></Link>
        </ul>
        <div className="nav-login">
        <Link to='/cart'><img src={cart_icon} alt="Cart Icon" /></Link>
          <div className="nav-cart-count">{totalItems}</div>
          {!token?<button onClick={()=>{setShowLogin(true)}}>Login</button>
          :<div className='navbar-profile'>
            <img className='icon1' src={profile} alt="" />
            <ul className="nav-profile-dropdown">
              <li><img className='icon1' src={bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={Logout}><img className='icon1' src={logout} alt="" /><p>Logout</p></li>
            </ul>  
          </div>}
          
        </div>
      </div>
    </>
  );
};

export default Nav;
