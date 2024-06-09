import React from 'react'
import './chef.css'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'

export const chef = () => {
  return (
    <>
    <div className='popular-chef'>
    <h1 className='title'>Our Popular Chef</h1>
    <div className="container">
        <div className="image-container">
            <img src={image1} alt="" />
            <h1>Otis</h1>
            <h2>Head Chef</h2>
        </div>
            <div className="image-container">
                <img src={image2} alt="" />
                <h1>Jean</h1>
                <h2>Chef</h2>
            </div>
        <div className="image-container">
            <img src={image3} alt="" />
            <h1>Melbourn</h1>
            <h2>Chef</h2>
        </div>
        </div>
        <div className="btn1">
           View All
        </div>
    </div>
    </>
  )
}
export default chef;