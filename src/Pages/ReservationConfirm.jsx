// src/ReservationConfirm.js
import React from 'react';
import './CSS/ReservationConfirm.css';
import img from '../Components/assets/check_box_24dp_FILL0_wght400_GRAD0_opsz24.png';
import img2 from '../Components/assets/calendar_month_24dp_FILL0_wght400_GRAD0_opsz24.png';
import img3 from '../Components/assets/schedule_24dp_FILL0_wght400_GRAD0_opsz24.png';
import img4 from '../Components/assets/person_24dp_FILL0_wght400_GRAD0_opsz24.png';
import { useLocation } from 'react-router-dom';
import reservation from '../Components/assets/reservation.png';
import img5 from '../Components/assets/edit_square_24dp_FILL0_wght400_GRAD0_opsz24.png';
import img6 from '../Components/assets/close_24dp_FILL0_wght400_GRAD0_opsz24.png';

export const ReservationConfirm = () => {
  const location = useLocation();
  const { date, time, partySize, firstName, lastName, phone, email, occasion } = location.state || {};

  return (
    <>
      <div className="reserve">
        <div className="confirmation">
          <h1>Reservation has been confirmed!!</h1>
          <div className="div-1">
            <img src={img} alt="" className='icon' />
            <h3>The Confirmation has been sent to your email</h3>
          </div>
          <div className="div-1">
            <img src={img2} alt="" className='icon' />
            <h3>BookingID #123456</h3>
          </div>
        </div>
        <div className="detailedInfo">
          <div className="container-about1">
            <div className="small-container1">
              <img className='circular-image' src={reservation} alt="" />
            </div>
          </div>
          <div className="details1">
            <h2>Reservation Details</h2>
            <div className="div-1">
              <img src={img2} alt="" className="icon" />
              {date || 'Date not selected'}
            </div>
            <div className="div-1">
              <img src={img3} alt="" className="icon" />
              {time || 'Time not selected'}
            </div>
            <div className="div-1">
              <img src={img4} alt="" className="icon" />
              {partySize || 'Party size not specified'}
            </div>
            <div className="div-1">
              <img src={img4} alt="" className="icon" />
              {firstName || 'First Name not provided'}
            </div>
            <div className="div-1">
              <img src={img4} alt="" className="icon" />
              {phone || 'Phone not provided'}
            </div>
            <div className="div-1">
              <img src={img4} alt="" className="icon" />
              {occasion || 'Occasion not provided'}
            </div>
          </div>
          <div className="buttons">
            <div className="btn12">
              <h4>Modify</h4>
              <img src={img5} alt="" className='icon1' />
            </div>
            <div className="btn13">
              <h4>Cancel</h4>
              <img src={img6} alt="" className='icon1' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationConfirm;
