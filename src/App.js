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
/*import { Footer } from './Components/Footer/Footer'*/

export const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/AboutUs' element = {<AboutUs/>}/>
        <Route path='/ContactUs' element = {<Contact/>}/>
        <Route path='/Menu' element = {<Menu/>}/>
        <Route path='/Order' element = {<Order/>}/>
        <Route path='/Reservation' element = {<Reservation/>}/>
        <Route path='/LoginSignup' element = {<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;