import React,{useEffect} from 'react'
import './CSS/About.css'
import { Link } from 'react-router-dom'
import image1 from '../Components/assets/about_chef.png'
import image2 from '../Components/assets/about_food.png'
import image3 from '../Components/assets/about_owner.png'
export const About = () => {
  useEffect(() => {
    const navbar = document.getElementById('Navbar');
    if (navbar) {
      navbar.classList.add('not-home','fixed');
    }

    return () => {
      if (navbar) {
        navbar.classList.remove('not-home','fixed');
      }
    };
  }, []);
  return (
    <div className='about'>
      <div className="upper">
        <div className="left-upper">
          <div className="container-about">
            <div className="small-container">
            <img className='circular-image1' src={image1} alt="" />
            </div>
          </div>
        </div>
        <div className="right-upper">
        <h1>About Our <br /><span className='red'>Restaurant</span></h1>
        <p>This dish is full of flavor and nutrition! Quinoa is a complete protein, providing all the essential amino acids your body needs, and is also a good source of fiber.</p>
        <Link style = {{textDecoration: "none"}} to='/order'><div className='btn1'>Order Now</div></Link>
        </div>
      </div>
      <div className="middle">
        <div className="left-middle">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tempore eos odio quasi magni voluptates tenetur eius illum dolore nostrum dignissimos consequatur rerum, fugit molestiae quae voluptate odit exercitationem officiis.</p>
        </div>
        <div className="right-middle">
          <div className="container-about">
            <div className="small-container">
            <img className='circular-image1' src={image2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-left">
          <img src={image3} alt="" />
        </div>
        <div className="bottom-right">
          <h1><span className='red'>Owner</span> & Executive Chef</h1>
          <h2>Ismail Marzuki</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque aliquam ducimus officia, culpa deserunt omnis incidunt itaque praesentium aperiam similique tenetur. Voluptatum optio quibusdam nulla! Ea vitae impedit delectus vel.</p>
        </div>
      </div>
    </div>
  )
}
export default About;