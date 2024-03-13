import React from 'react'
import { useNavigate } from 'react-router-dom';

function Success() {
  const navigate = useNavigate();
  alert("Payment Succesfully");
  navigate('/Dashboard/user/order');

  return (
    <div>
    </div>
  )
}

export default Success
