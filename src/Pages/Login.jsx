import React from 'react'
import './CSS/Login.css'
export const Login = () => {
  return (
    <>
    <div className="loginsignup">
      <div className="loginsignup-conatiner">
        <h1>Sign Up</h1>
        <div className="loginsignupfields">
          <input type="text" placeholder='Your Name' />
          <input type="email" name="" id="email Address" placeholder='email'/>
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account?<span>Login</span></p>
      <div className="loginsignup-agree">
        <input type="checkbox" />
        <p>By continuing, I agree to the terms of use & privacy policy</p>
      </div>
      </div>
    </div>
    </>
  )
}
export default Login;