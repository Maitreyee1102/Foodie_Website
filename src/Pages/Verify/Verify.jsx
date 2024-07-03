import React, { useContext, useEffect } from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { CartContext } from '../../Contexts/cartContext';
import axios from "axios"

const Verify = () => {

    //here we are creating logic to get the parameter like success=true and orderId
    const [searchParams,setSearchParams] = useSearchParams();
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    const {url} = useContext(CartContext);
    const navigate = useNavigate();

    const verifyPayment = async() => {
        const response = await axios.post(url+"/api/order/verify",{success,orderId});
        if(response.data.success){
            navigate("/order");
        }
        else{
            navigate("/");
        }
    }

    useEffect(()=>{
        verifyPayment();
    },[])
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
    <div className='verify'>
        <div className="spinner">

        </div>

    </div>
  )
}

export default Verify