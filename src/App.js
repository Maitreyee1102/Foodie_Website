import React, { useState } from 'react'
import Navbar from "./Components/Navbar/Nav"
import Home from "./Pages/Home"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AboutUs from "./Pages/About"
import Contact from "./Pages/ContactUs"
import Menu from "./Pages/Menu"
import Order from "./Pages/Order"
import Reservation from "./Pages/Reservation"
import Login from "./Pages/Login"
import { Footer } from './Components/Footer/Footer'
import {Details} from './Pages/Details'
import { ReservationConfirm } from './Pages/ReservationConfirm'
import {ReservationCancel} from './Pages/ReservationCancel'
import {Cart} from './Pages/Cart'
import Verify from './Pages/Verify/Verify'
import MyOrders from './Pages/MyOrders/MyOrders'


export const App = () => {
  const [showLogin,setShowLogin] = useState(false);
  return (
    <div>
      {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
     
      <BrowserRouter>
      <Navbar setShowLogin = {setShowLogin}/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/aboutUs' element = {<AboutUs/>}/>
        <Route path='/contactUs' element = {<Contact/>}/>
        <Route path='/menu' element = {<Menu/>}/>
        <Route path='/order' element = {<Order/>}/>
        <Route path='/reservation' element = {<Reservation/>}/>
        <Route path='/reservation/details' element = {<Details/>}/>
        <Route path='/reservation/detail/confirmation' element = {<ReservationConfirm/>}/>
        <Route path='/reservation/cancel' element = {<ReservationCancel/>}/>
        <Route path='/cart' element = {<Cart/>}/>
        <Route path='/verify' element = {<Verify/>}/>
        <Route path='myorders' element={<MyOrders/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}
export default App;