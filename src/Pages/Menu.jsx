import React, { useContext, useState, useEffect } from 'react';
import './CSS/Menu.css';
import { CartContext } from '../Contexts/cartContext';

export const Menu = () => {
  const url = "http://localhost:4000";
  const categories = ['All Category', 'Indian', 'Continental', 'Dessert', 'Drinks'];
  const [selectedCategory, setSelectedCategory] = useState('All Category');

  const { foodList, addToCart } = useContext(CartContext);

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const navbar = document.getElementById('Navbar');
    if (navbar) {
      navbar.classList.add('not-home', 'fixed');
    }
    return () => {
      if (navbar) {
        navbar.classList.remove('not-home', 'fixed');
      }
    };
  }, []);

  const filteredProducts = selectedCategory === 'All Category'
    ? foodList
    : foodList.filter(product => product.category.toLowerCase() === selectedCategory.toLowerCase());

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
        {foodList && foodList.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product._id} className="dish">
              <div className="img">
                <img src={url + "/images/" + product.image} alt={product.name} />
              </div>
              <h4>{product.name.toUpperCase()}</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.</p>
              <div className="order">
                <div className="price">
                  <h3>Price: ${product.price}</h3>
                </div>
                <div className="btn-3" onClick={() => { addToCart(product._id) }}>
                  <h5>Add to cart</h5>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Menu;
