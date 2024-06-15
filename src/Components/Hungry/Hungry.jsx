import React from 'react'
import './Hungry.css'
import { Link } from 'react-router-dom'

export const Hungry = () => {
  return (
    <div className='Banner_new'>
        <h1>Hungry? We are open now..</h1>
        <div className="buttons_new">
        <Link style = {{textDecoration: "none"}} to='/order'><div className="btn-1">Order Now</div></Link>
        <Link style = {{textDecoration: "none"}} to='/reservation'><div className="btn-2">Reservation</div></Link>
        </div>
    </div>
  )
}
export default Hungry;