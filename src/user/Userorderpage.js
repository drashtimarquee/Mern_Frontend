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
  const phnregex = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;
  const zipregex = /[0-9]{6}$/;

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
      setFnameerr('Enter Your First Name');
      isValid = false;
    }
    if (!Lname) {
      setLnameerr('Enter Phone Last Name');
      isValid = false;
    }
    if (!Email) {
      setEmailerr('Enter Your Email');
      isValid = false;
    } else if (!emailRegex.test(Email)) {
      setEmailerr('Enter Valid Email');
      isValid = false;
    }
    if (!Phnno) {
      setPhnerr('Enter Your Phone no.');
      isValid = false;
    } else if (!phnregex.test(Phnno)) {
      setPhnerr('Enter Valid Phone Number');
      isValid = false;
    }
    if (!Address) {
      setAdderr('Enter Your Address');
      isValid = false;
    }
    if (!City) {
      setCityerr('Enter Your City');
      isValid = false;
    }
    if (!State) {
      setStateerr('Enter Your State');
      isValid = false;
    }
    if (!Zipcode) {
      setCodeerr('Enter Area Zip Code');
      isValid = false;
    } else if (!zipregex.test(Zipcode)) {
      setCodeerr('Enter Valid Zip Code');
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
            makepayment(response.data.sessionId);
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
          <h1>Billing address</h1>
        </div>
        <div className='user-info'>
          <div className='user-input'>
            <label>First name</label>
            <input type='text' id='fname' onChange={(e) => setFname(e.target.value)} /><br />
            {fnameerr && <span style={{ color: "red", marginLeft: "47px" }}>{fnameerr}</span>}
          </div>
          <div className='user-input'>
            <label>Last name</label>
            <input type='text' id='lname' onChange={(e) => setLname(e.target.value)} /><br />
            {lnameerr && <span style={{ color: "red", marginLeft: "47px" }}>{lnameerr}</span>}
          </div>
        </div>
        <div>
          <div className='user-info'>
            <div className='user-input'>
              <label>Email address</label>
              <input type='text' id='email' onChange={(e) => setEmail(e.target.value)} /><br />
              {emailerr && <span style={{ color: "red", marginLeft: "47px" }}>{emailerr}</span>}
            </div>
            <div className='user-input'>
              <label>Phone number</label>
              <input type='text' id='phn' onChange={(e) => setPhn(e.target.value)} /><br />
              {phnerr && <span style={{ color: "red", marginLeft: "47px" }}>{phnerr}</span>}
            </div>
          </div>
        </div>
        <div className='user-input'>
          <label>Shipping address</label>
          <input type='text' id='add' onChange={(e) => setAddress(e.target.value)} />
          {addresserr && <span style={{ color: "red", marginLeft: "47px" }}>{addresserr}</span>}
        </div>
        <div className=''>
          <div className='user-info'>
            <div className='user-input'>
              <label>City</label>
              <input type='text' id='city' onChange={(e) => setCity(e.target.value)} /><br />
              {cityerr && <span style={{ color: "red", marginLeft: "47px" }}>{cityerr}</span>}
            </div>
            <div className='user-input'>
              <label>State</label>
              <input type='text' id='state' onChange={(e) => setState(e.target.value)} /><br />
              {stateerr && <span style={{ color: "red", marginLeft: "47px" }}>{stateerr}</span>}
            </div>
            <div className='user-input'>
              <label>Zip/postal code</label>
              <input type='text' id='zipcode' onChange={(e) => setZipcode(e.target.value)} />
              {codeerr && <span style={{ color: "red", marginLeft: "47px" }}>{codeerr}</span>}
            </div>
          </div>
        </div>
        <div>
          <button className='footer' onClick={() => makepayment()}>Checkout</button>
        </div>
      </form>
    </div>
  );
}

export default Userorderpage;