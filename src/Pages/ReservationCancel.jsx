import React, {useEffect} from 'react'
import './CSS/ReservationCancel.css'
import img2 from '../Components/assets/calendar_month_24dp_FILL0_wght400_GRAD0_opsz24.png';
import img3 from '../Components/assets/schedule_24dp_FILL0_wght400_GRAD0_opsz24.png';
import img4 from '../Components/assets/person_24dp_FILL0_wght400_GRAD0_opsz24.png'
import img6 from '../Components/assets/close_24dp_FILL0_wght400_GRAD0_opsz24.png';
import { Link } from 'react-router-dom';
import reservation from '../Components/assets/reservation.png';
import { useLocation } from 'react-router-dom';

export const ReservationCancel = () => {
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
    const location = useLocation();
  const { date, time, partySize, firstName,  phone,  occasion } = location.state || {};
  return (
    <>
        <div className="reserve">
            <div className="cancelation">
                <h1>Are you sure you want to cancel this Reservation?</h1>
                <div className="div-1">
                    <img src={img2} alt="" className='icon' />
                    <h3>BookingID #123456</h3>
                </div>
                </div>
                <div className="detailedInfo1">
          <div className="container-about2">
            <div className="small-container2">
              <img className='circular-image' src={reservation} alt="" />
            </div>
          </div>
          <div className="details2">
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
          <Link style = {{textDecoration: "none"}} to = '/reservation/cancel'><div className="btn13">
              <h4>Cancel</h4>
              <img src={img6} alt="" className='icon1' />
            </div></Link>
          <Link style = {{textDecoration: "none"}} to = '/reservation/detail/confirmation'><div className="btn11">
              <h4>Go Back</h4>
            </div></Link>
          </div>
        </div>
        </div>
    </>
  )
}
export default ReservationCancel;