import React from 'react';
import './Carousel.css'
import { Carousel } from 'react-bootstrap';
import firstImage from '../assets/image4.png';
/*import secondImage from '../assets/image4.png';
import thirdImage from '../assets/image4.png';*/

function Customer() {
  return (
    <div className="App">
      <h1>What Our Customers Say</h1>
      <div className="carousel">
      <Carousel style={{ width: '80%', height: '400px', margin: '0 auto', border: 'none' }}>
        <Carousel.Item>
          <p className='styled-quote'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,<br /> commodi cum sequi doloremque, repellendus earum at nulla beatae magni ea eaque,<br /> distinctio ex aliquid. Voluptatibus voluptate obcaecati cumque inventore officiis?</p>
          <div className="photo">
              <div className="photo-container">
                <img src={firstImage} alt="" className="contianer" />
              </div>
              <h3 className='font2'>Jean Milbourn <br /> <p className='font'>Financial Advisor</p></h3>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <p className='styled-quote'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,<br /> commodi cum sequi doloremque, repellendus earum at nulla beatae magni ea eaque,<br /> distinctio ex aliquid. Voluptatibus voluptate obcaecati cumque inventore officiis?</p>
        <div className="photo">
              <div className="photo-container">
                <img src={firstImage} alt="" className="contianer" />
              </div>
              <h3 className='font2'>Jean Milbourn <br /> <p className='font'>Financial Advisor</p></h3>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <p className='styled-quote'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,<br /> commodi cum sequi doloremque, repellendus earum at nulla beatae magni ea eaque,<br /> distinctio ex aliquid. Voluptatibus voluptate obcaecati cumque inventore officiis?</p>
        <div className="photo">
              <div className="photo-container">
                <img src={firstImage} alt="" className="contianer" />
              </div>
              <h3 className='font2'>Jean Milbourn <br /> <p className='font'>Financial Advisor</p></h3>
          </div>      
        </Carousel.Item>
      </Carousel>
      </div>
    </div>
  );
}

export default Customer;
