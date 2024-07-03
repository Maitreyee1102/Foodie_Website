import React,{useEffect} from 'react'
import './CSS/ContactUs.css'

export const ContactUs = () => {
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
    <div className='Contact'>
      <div className="headings">
      <h2>Contact Us</h2>
      <h4>We love hearing from our customers. Feel free to share your experience or <br /> ask any questions you may have.</h4>
      </div>
      <div className="contact-container">
      <div className="left-contact">
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14232.969060395273!2d75.8290122!3d26.8958054!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6c363c061b7%3A0x75af5e7a41f47cdb!2sRamada%20by%20Wyndham%20Jaipur!5e0!3m2!1sen!2sin!4v1718468822813!5m2!1sen!2sin" width="100%" height="100%" allowFullScreen="" Loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='none'></iframe>
      </div>
      <div className="right-contact">
        <div className="multi-fields">
        <input type="text" placeholder='First Name'/>
        <input type="text" placeholder='Last Name'/>
        </div>
        <input type="email" placeholder='Email Address'/>
        <input type="text" placeholder='Subject'/>
        <span className='msg'><input type="text" placeholder='Message'/></span>
        <div className="btn-btn-btn">
        Submit
      </div>
      </div>
      </div>
    </div>
  )
}
export default ContactUs;