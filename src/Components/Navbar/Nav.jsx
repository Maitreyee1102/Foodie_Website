import React, { useState, useEffect, useContext } from 'react';
import foodie from "../assets/img_header_logo.svg";
import cart_icon from "../assets/cart_icon.png";
import { Link } from 'react-router-dom';
import './Nav.css';
import { CartContext } from '../../Contexts/cartContext';

export const Nav = ({setShowLogin}) => {
  const [menu, setMenu] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const {getTotalItem} = useContext(CartContext);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
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
      <div className={`Container ${menu !== 'Home' ? 'fixed' : ''} ${scrolled ? 'scrolled' : ''} ${menu !== 'Home' ? 'not-home' : ''}`}>
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
          <div className="nav-cart-count">{getTotalItem()}</div>
          <button onClick={()=>{setShowLogin(true)}}>Login</button>
        </div>
      </div>
    </>
  );
};

export default Nav;
