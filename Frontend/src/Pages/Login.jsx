import React, { useContext, useState } from 'react';
import image from '../Components/assets/close_24dp_FILL0_wght400_GRAD0_opsz24.png';
import { CartContext } from '../Contexts/cartContext';
import './CSS/Login.css';
import axios from 'axios';

const Login = ({ setShowLogin }) => {
  const { setToken } = useContext(CartContext);
  const url = "http://localhost:4000";

  const [currState, setCurrState] = useState("Sign Up");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === 'Login') {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    try {
      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="loginsignup">
      <form onSubmit={onLogin} className="loginsignup-container">
        <div className="login-popup-title">
          <h1>{currState}</h1>
          <img className='icon1' onClick={() => setShowLogin(false)} src={image} alt="close" />
        </div>
        <div className="loginsignupfields">
          <div className="login-popup-inputs">
            {currState !== "Login" && (
              <input
                name='name'
                onChange={onChangeHandler}
                value={data.name}
                type="text"
                placeholder='Your Name'
                required
              />
            )}
            <input
              name='email'
              onChange={onChangeHandler}
              value={data.email}
              type="email"
              id="email Address"
              placeholder='Email'
              required
            />
            <input
              name='password'
              onChange={onChangeHandler}
              value={data.password}
              type="password"
              placeholder='Password'
              required
            />
          </div>
          <button type='submit'>
            {currState === "Sign Up" ? "Create Account" : "Login"}
          </button>
        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {currState === "Login" ? (
          <p className='account'>
            Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p className='account'>
            Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
