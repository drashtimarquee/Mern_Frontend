import React, { useState } from 'react';
import axios from 'axios';
import { useCart } from '../components/Pages/Cartcontax';
import { loadStripe } from '@stripe/stripe-js';
import { useAuth } from '../components/Pages/Usercontax';

function Userorderpage() {
  const [userauth, setUserauth] = useAuth();
  const [cart, setCart] = useCart();
  const [Fname, setFname] = useState('');
  const [Lname, setLname] = useState('');
  const [Email, setEmail] = useState('');
  const [Phnno, setPhn] = useState('');
  const [City, setCity] = useState('');
  const [State, setState] = useState('');
  const [Address, setAddress] = useState('');
  const [Zipcode, setZipcode] = useState('');
  const [fnameerr, setFnameerr] = useState('');
  const [lnameerr, setLnameerr] = useState('');
  const [emailerr, setEmailerr] = useState('');
  const [phnerr, setPhnerr] = useState('');
  const [cityerr, setCityerr] = useState('');
  const [stateerr, setStateerr] = useState('');
  const [addresserr, setAdderr] = useState('');
  const [codeerr, setCodeerr] = useState('');
  const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

  const validateForm = () => {
    setFnameerr('');
    setLnameerr('');
    setEmailerr('');
    setPhnerr('');
    setCityerr('');
    setStateerr('');
    setAdderr('');
    setCodeerr('');

    let isValid = true;
    if (!Fname) {
      setFnameerr('Please Enter Your First Name');
      isValid = false;
    }
    if (!Lname) {
      setLnameerr('Please Enter Phone Last Name');
      isValid = false;
    }
    if (!Email) {
      setEmailerr('Please Enter Your Email');
      isValid = false;
    } else if (!emailRegex.test(Email)) {
      setEmailerr('Please Enter Valid Email');
      isValid = false;
    }
    if (!Phnno) {
      setPhnerr('Please Enter Phone number');
      isValid = false;
    }
    if (!Address) {
      setAdderr('Please Enter Your Address');
      isValid = false;
    }
    if (!City) {
      setCityerr('Please Enter Your City');
      isValid = false;
    }
    if (!State) {
      setStateerr('Please Enter Your State');
      isValid = false;
    }
    if (!Zipcode) {
      setCodeerr('Please Enter Your Postal Code');
      isValid = false;
    }
    return isValid;
  };

  const order = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        console.log('userId:', userauth?.user?._id);
        const response = await axios.post("http://localhost:1202/create-checkout-session", {
          cart, Fname, Lname, Email, Phnno, Address, City, State, Zipcode, userId: userauth?.user?._id,
        });
        if (response && response.data && response.data.url) {
          console.log(response.data);
          if (response.data.url) {
            window.location.href = response.data.url;
          }
        } else {
          console.error('Invalid response format:', response);
        }
      } catch (error) {
        console.error('Error:', error.response?.data || error.message);
      }
    }
  };

  const makepayment = async (sessionId) => {
    try {
      const stripe = await loadStripe('pk_test_51OmvqwSJlrYp42kdV3GAUO71VP8CQKl3Au87eSbjs4zJbaJ2QTDxs2A7Af63AcZhQQ4ANOqh9VXjxGZEIh4eCLyN00hNKsdDU0');
      const { error } = await stripe.redirectToCheckout({
        sessionId: sessionId,
      });

      if (error) {
        console.log('Error Details:', error.message);
      }

    } catch (error) {
      console.error('Unexpected error:', error);
    }
  };

  return (
    <div className='order-info'>
      <form onSubmit={order}>
        <div className='user-order'>
          <h1>Customer's Details</h1>
        </div>
        <h6>Sipping Address</h6>
        <div className='user-info'>
          <div className='user-input'>
            <input type='text' id='fname' onChange={(e) => setFname(e.target.value)} /><br />
            <label>First Name</label>
            {fnameerr && <span style={{ color: "red", marginLeft: "47px" }}>{fnameerr}</span>}
          </div>
          <div className='user-input'>
            <input type='text' id='lname' onChange={(e) => setLname(e.target.value)} /><br />
            <label>Last Name</label>
            {lnameerr && <span style={{ color: "red", marginLeft: "47px" }}>{lnameerr}</span>}
          </div>
        </div>
        <div>
          <div className='user-info'>
            <div className='user-input'>
              <h6>Phone Number</h6>
              <input type='text' id='phn' onChange={(e) => setPhn(e.target.value)} /><br />
              {phnerr && <span style={{ color: "red", marginLeft: "47px" }}>{phnerr}</span>}
            </div>
            <div className='user-input'>
              <h6>Email</h6>
              <input type='text' id='email' onChange={(e) => setEmail(e.target.value)} /><br />
              <label>example@example.com</label>
              {emailerr && <span style={{ color: "red", marginLeft: "47px" }}>{emailerr}</span>}
            </div>
          </div>
        </div>
        <div className='order-add'>
          <h6>Sipping Address</h6>
          <div className='user-input'>
            <input type='text' id='add' onChange={(e) => setAddress(e.target.value)} />
            <label>Street Address</label>
            {addresserr && <span style={{ color: "red", marginLeft: "47px" }}>{addresserr}</span>}
          </div>
          <div className='user-info'>
            <div className='user-input'>
              <input type='text' id='city' onChange={(e) => setCity(e.target.value)} /><br />
              <label>City</label>
              {cityerr && <span style={{ color: "red", marginLeft: "47px" }}>{cityerr}</span>}
            </div>
            <div className='user-input'>
              <input type='text' id='state' onChange={(e) => setState(e.target.value)} /><br />
              <label>State</label>
              {stateerr && <span style={{ color: "red", marginLeft: "47px" }}>{stateerr}</span>}
            </div>
          </div>
          <div className='user-input'>
            <input type='text' id='zipcode' onChange={(e) => setZipcode(e.target.value)} />
            <label>Postal / Zip Code</label>
            {codeerr && <span style={{ color: "red", marginLeft: "47px" }}>{codeerr}</span>}
          </div>
        </div>
        <button className='cheak-out-btn' onClick={() => makepayment()}>Checkout</button>

      </form>
    </div>
  );
}

export default Userorderpage;