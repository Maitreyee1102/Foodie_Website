import React from 'react'
import './CSS/Menu.css'
export const Menu = () => {
  return (
    <div className='Menu'>
      <h1>Our Popolar Menu</h1>
      <div className="variety">
        <div className="container">
          All Category
        </div>
        <div className="container">
          Indian
        </div>
        <div className="container">
         Continental
        </div>
        <div className="container">
          Desserts
        </div>
        <div className="container">
          Drinks
        </div>
      </div>
      <div className="dishes">
      </div>
    </div>
  )
}
export default Menu;