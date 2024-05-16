import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";
import axios from 'axios';

function Footer() {
    const [email, setEmail] = useState('');

    const sendEmail = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:1202/subscribe', {
                data: { email: email },
            });
            if (!res.ok) {
                throw new Error(`Server returned status: ${res.status} - ${res.statusText}`);
            } else {
                setEmail('');
            }
            console.log('Subscription email sent successfully!');
        } catch (error) {
            console.error('Error sending subscription email:', error.message);
        }
    };

    return (
        <footer>
            <div className='footer-page'>
                <div>
                    <div className='footer__item-list'>
                        <div>
                            <p> SUPPORTS </p>
                            <div className='footer__item-content'>
                                <ul>
                                    <NavLink to='/Contact' className='footer-item-link'>Contact Us</NavLink>
                                    <NavLink to='/Return' className='footer-item-link'>Returns</NavLink>
                                    <NavLink to='/Condition' className='footer-item-link'>Terms & Conditions</NavLink>
                                    <NavLink to='/Privacy' className='footer-item-link'>Privacy Policy</NavLink>
                                    <NavLink to='/Refund' className='footer-item-link'>Refund Policy</NavLink>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <p>QUICK LINKS</p>
                            <div className='footer__item-content'>
                                <ul>
                                    <NavLink to="/Blocks" className='footer-item-link'>the BLOG</NavLink>
                                    <NavLink to="/About" className='footer-item-link'>About Us</NavLink>
                                    <NavLink to="/Stores" className='footer-item-link'>Stores</NavLink>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <p>Get In Touch</p>
                            <div>
                                <NavLink className='footer-item-link3'><IoCallOutline className='fotter-call' />  9985476210 / 8596385412 </NavLink>
                                <NavLink className='footer-item-link3'><img src='Assets/Email.png' alt='store-logo' />info@thedecorcart.com </NavLink>
                                <NavLink to='/Stores' className='footer-item-link3'><img src='Assets/Storelogo.png' alt='store-logo' />Our Stores </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='footer__logo'>
                        <p>THE </p><p> DECOR </p><p> CART</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer