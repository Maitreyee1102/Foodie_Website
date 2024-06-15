// src/Details.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './CSS/Details.css';
import img1 from '../Components/assets/calendar_month_24dp_FILL0_wght400_GRAD0_opsz24.png';
import img2 from '../Components/assets/schedule_24dp_FILL0_wght400_GRAD0_opsz24.png';
import img3 from '../Components/assets/person_24dp_FILL0_wght400_GRAD0_opsz24.png';

export const Details = () => {
  const location = useLocation();
  const { date, time, partySize } = location.state || {};

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const phone = event.target.phone.value;
    const email = event.target.email.value;
    const occasion = event.target.occasion.value;

    navigate('/reservation/detail/confirmation', {
      state: {
        date: date,
        time: time,
        partySize: partySize,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email,
        occasion: occasion,
      },
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="page-whole">
          <div className="left-half">
            <h3>Data Order</h3>
            <div className="input-data">
              <div className="multi-fields">
              <input type="text" name="firstName" placeholder="First Name" />
              <input type="text" name="lastName" placeholder="Last Name" />
              </div>
              <input type="tel" name="phone" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
              <input type="email" name="email" placeholder="Email Address" />
              <input type="text" name="occasion" placeholder="Occasion" />
              <button className="details-btn" type="submit">Confirm Reservation</button>
            </div>
          </div>
          <div className="right-half">
            <div className="details">
              <h2>Reservation Details</h2>
              <div className="div-12">
                <img src={img1} alt="" className="icon" />
                {date || 'Date not selected'}
              </div>
              <div className="div-12">
                <img src={img2} alt="" className="icon" />
                {time || 'Time not selected'}
              </div>
              <div className="div-12">
                <img src={img3} alt="" className="icon" />
                {partySize || 'Party size not specified'}
              </div>
            </div>
            <div className="information">
              <h2>Restaurant Information</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur recusandae asperiores, quod labore reprehenderit nesciunt quam! Numquam optio omnis labore illum perferendis nam eligendi tempore. Labore reiciendis cumque consequuntur placeat.</p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Details;
