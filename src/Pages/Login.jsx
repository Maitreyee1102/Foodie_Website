import React, { useState } from 'react'
import './CSS/Login.css'
import image from '../Components/assets/close_24dp_FILL0_wght400_GRAD0_opsz24.png'

export const Login = ({setShowLogin}) => {

  const [currState,setCurrState] = useState("Sign Up");

  return (
    <>
    <div className="loginsignup">
      <form className="loginsignup-conatiner">
        <div className="login-popup-title">
        <h1>{currState}</h1>
        <img className='icon1' onClick={()=>{setShowLogin(false)}} src={image} alt=""/>
        </div>
        <div className="loginsignupfields">
          <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required/>}
          <input type="email" name="" id="email Address" placeholder='email'required/>
          <input type="password" placeholder='Password'required/>
          </div>
          <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
        </div>
      <div className="loginsignup-agree">
        <input type="checkbox" />
        <p>By continuing, I agree to the terms of use & privacy policy</p>
      </div>
      {currState==="Login"?
      <p className='account'>Create a new account? <span onClick={()=>{setCurrState("Sign Up")}}>Click here</span></p>
      :<p className='account'>Already have an account? <span onClick={()=>{setCurrState("Login")}}n>Login here</span></p>}
      </form>
    </div>
    </>
  )
}
export default Login;