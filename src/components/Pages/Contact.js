import React from 'react'
import { NavLink } from 'react-router-dom';

function Contact() {
    return (
        <div>
            <div className='contact'>
                <h1>Contact us</h1>
                <div className='contact-page'>
                    <div className='contact1'>
                        <h6>FASTEST WAY TO GET TO US</h6>
                        <h5>Call or Whatsapp us</h5>
                        <p>+91 9999999999</p>
                        <p>+91 9999999999</p>
                        <div className='footer-contact'>
                            LET'S CHAT
                        </div>
                    </div>
                    <div className='contact2'>
                        <h6>WRITE US AT</h6>
                        <h5>Email</h5>
                        <p>We typically reply in 24-48 hours.</p>
                        <p>You can reach us at info@abc.com</p>
                        <div className='footer-contact'>
                            EMAIL US
                        </div>
                    </div>
                    <div className='contact3'>
                        <h5>Contact Stores</h5>
                        <div className='footer'>
                            <NavLink to='/Stores'>CONTACT STORES</NavLink>
                        </div>
                    </div>
                </div>
                <div className='contact-text'>
                    <p>Need help? Have a question about bulk orders, or about collaborations? We would love to hear from you.</p>
                </div>
                <div className='contact-form'>
                    <input type='text' placeholder='Name' />
                    <input type='text' placeholder='Email' />
                    <input type='text' placeholder='Message' />
                    <input className='footer' type="submit" value="SUBMIT" />
                </div>
            </div>
        </div >
    )
}

export default Contact;