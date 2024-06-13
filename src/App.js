import React from 'react'
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

export const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/aboutUs' element = {<AboutUs/>}/>
        <Route path='/contactUs' element = {<Contact/>}/>
        <Route path='/menu' element = {<Menu/>}/>
        <Route path='/order' element = {<Order/>}/>
        <Route path='/reservation' element = {<Reservation/>}/>
        <Route path='/Login' element = {<Login/>}/>
        <Route path='/reservation/details' element = {<Details/>}/>
        <Route path='/reservation/detail/confirmation' element = {<ReservationConfirm/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}
export default App;