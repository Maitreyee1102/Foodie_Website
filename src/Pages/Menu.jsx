import React, { useContext, useState } from 'react';
import './CSS/Menu.css';
import all_product from '../Components/assets/dish_info';
import { CartContext } from '../Contexts/cartContext';

export const Menu = () => {
  const categories = ['All Category', 'Indian', 'Continental', 'Dessert', 'Drinks'];
  const [selectedCategory, setSelectedCategory] = useState('All Category');

  const {addToCart} = useContext(CartContext);

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory === 'All Category'
    ? all_product
    : all_product.filter(product => product.category === selectedCategory.toLowerCase());

  return (
    <div className='Menu'>
      <h1>Our Popular Menu</h1>
      <div className="variety">
        {categories.map((category) => (
          <div
            key={category}
            className={selectedCategory === category ? 'toggled' : 'default'}
            onClick={() => handleClick(category)}
          >
            <h4>{category}</h4>
          </div>
        ))}
      </div>
      <div className="dishes">
        {filteredProducts.map(product => (
          <div key={product.id} className="dish">
            <div className="img">
            <img src={product.image} alt={product.name} />
            </div>
            <h4>{product.name}</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.</p>
            <div className="order">
              <div className="price">
                <h3>Price: ${product.new_price.toFixed(2)}</h3>
                <h3><s>${product.old_price.toFixed(2)}</s></h3>
              </div>
              <div className="btn-3" onClick={()=>{addToCart(product.id)}}><h5>Add to cart</h5></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
