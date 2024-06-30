// src/Reservation.js
import React, { useState, useEffect } from 'react';
import image1 from '../Components/assets/reservation.png';
import './CSS/Reservation.css';
import { useNavigate } from 'react-router-dom';

export const Reservation = () => {
  const [inputValue1, setInputValue1] = useState('');
  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
  };

  const [inputValue2, setInputValue2] = useState('');
  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  };

  const [inputValue3, setInputValue3] = useState('');
  const handleInputChange3 = (event) => {
    setInputValue3(event.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting
    navigate('/reservation/details', {
      state: { date: inputValue1, time: inputValue2, partySize: inputValue3 },
    });
  };

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
    <>
      <div className='order'>
        <div className="left">
          <div className="img-container">
            <img src={image1} alt="" />
          </div>
        </div>
        <div className="right">
          <h1>Book a Table</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="date"
              id='userInput1'
              placeholder='Date'
              value={inputValue1}
              onChange={handleInputChange1}
            />
            <input
              type="time"
              id='userInput2'
              placeholder='Time'
              value={inputValue2}
              onChange={handleInputChange2}
            />
            <input
              type="number"
              id='userInput3'
              min={1}
              max={50}
              placeholder='Party-size'
              value={inputValue3}
              onChange={handleInputChange3}
            />
            <button type="submit" className="book">Book Now</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Reservation;
