import React from 'react'
import illustration2 from '../assets/img_illustration2.png'
import './famous.css'
import curry1 from '../assets/curryleave.png'
import curry2 from '../assets/curryleave2.png'


export const famous = () => {
  return (
    <div className='famous'>
        <div className="famous-left">
            <img src={illustration2} alt="" />
        </div>
        <div className="curry">
            <img src={curry1} alt="" />
            <img className = "curry2" src={curry2} alt="" />
            </div>
        <div className="famous-right">
            <h1>Our Most <br /> Popular <span className='red'>Dish.</span></h1>
            <p>This dish is full of flavor and nutrition! Quinoa is a complete protein, providing all the essential amino acids your body needs, and is also a good source of fiber.</p>
            <div className="btn">
                <div className='btn1'>Order</div></div>
        </div>
    </div>
  )
}
export default famous;