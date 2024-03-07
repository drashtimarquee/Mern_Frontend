import React from 'react'
import { NavLink } from "react-router-dom";


function Footer() {
    return (
        <footer>
            <div className='footer-img'>
                <img src='Assets/Home5.jpg' alt='' />
                <div className='footer-form'>
                    <h4>WE WRITE REALLY GREATE EMAILS.</h4>
                    <p>No Spam. Only updates about new launches and sales.<br />dirtectly to your inbox.</p>
                    <form>
                        <input type='text' placeholder='Your Emails' /><button>SUBSCRIPTION</button>
                    </form>
                </div>
            </div>
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
                                <NavLink  className='footer-item-link3'><img src='Assets/whatsapp.png' alt='store-logo' /> 9999999999/9999999999 </NavLink>
                                <NavLink className='footer-item-link3'><img src='Assets/Email.png' alt='store-logo' />info@abc.com </NavLink>
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
