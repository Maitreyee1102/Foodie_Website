import React from 'react'
import './Hungry.css'

export const Hungry = () => {
  return (
    <div className='Banner'>
        <h1>Hungry? We are open now..</h1>
        <div className="buttons">
        <div className="btn-1">Order Now</div>
        <div className="btn-2">Reservation</div>
        </div>
    </div>
  )
}
export default Hungry;