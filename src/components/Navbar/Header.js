import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { useAuth } from '../Pages/Usercontax';
import { useCart } from '../../components/Pages/Cartcontax';
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
    const [userauth, setUserauth] = useAuth();
    const [menu, setMenu] = useState("");
    const [cart, setCart] = useCart();

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
    }, [setCart]);

    const handleLogout = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
        setCart([]);
        setUserauth({ token: null, user: null });
        localStorage.removeItem("auth");
    };

    const handleLogin = (userData) => {
        setUserauth({ token: userData.token, user: userData.user });
    };

    return (
        <header className='navbar'>
            <div className='nav-logo'>
                <NavLink to="/">THE DECOR CART</NavLink>
            </div>
            {
                userauth?.user ? (
                    <div className='navigation'>
                        <div className='nav-menu'>
                            <ul className='header-ul'>
                                <li><NavLink to="/Home" className="nav-link" onClick={() => { setMenu("Decor") }}>Decor{menu === "Decor" ? <hr /> : <></>}</NavLink></li>
                                <li><NavLink to="/Homenew" className="nav-link" onClick={() => { setMenu("Newarrival") }}>New Arrival{menu === "Newarrival" ? <hr /> : <></>}</NavLink></li>
                                <li><NavLink to="/Homekitchen" className="nav-link" onClick={() => { setMenu("Kitchen") }}>Kitchen & Dining{menu === "Kitchen" ? <hr /> : <></>}</NavLink></li>
                                <li><NavLink to="/Homelight" className="nav-link" onClick={() => { setMenu("Lighting") }}>Lighting{menu === "Lighting" ? <hr /> : <></>}</NavLink></li>
                                <li><NavLink to="/Homewall" className="nav-link" onClick={() => { setMenu("Walld") }}>Wall Decor{menu === "Walld" ? <hr /> : <></>}</NavLink></li>
                                <li><NavLink to="/Homefurniture" className="nav-link" onClick={() => { setMenu("Furniture") }}>Furniture{menu === "Furniture" ? <hr /> : <></>}</NavLink></li>
                                <li><NavLink to="/Homebathdecor" className="nav-link" onClick={() => { setMenu("Furniture") }}>Bath Decor{menu === "Furniture" ? <hr /> : <></>}</NavLink></li>
                            </ul>
                        </div>
                    </div>
                ) : (
                    <div className='navigation'>
                        <div className='nav-menu'>
                            <ul className='header-ul'>
                                <li><NavLink to="/Home" className="nav-link" onClick={() => { setMenu("Decor") }}>Decor{menu === "Decor" ? <hr /> : <></>}</NavLink></li>
                                <li><NavLink to="/Homenew" className="nav-link" onClick={() => { setMenu("Newarrival") }}>New Arrival{menu === "Newarrival" ? <hr /> : <></>}</NavLink></li>
                                <li><NavLink to="/Homekitchen" className="nav-link" onClick={() => { setMenu("Kitchen") }}>Kitchen & Dining{menu === "Kitchen" ? <hr /> : <></>}</NavLink></li>
                                <li><NavLink to="/Homelight" className="nav-link" onClick={() => { setMenu("Lighting") }}>Lighting{menu === "Lighting" ? <hr /> : <></>}</NavLink></li>
                                <li><NavLink to="/Homewall" className="nav-link" onClick={() => { setMenu("Walld") }}>Wall Decor{menu === "Walld" ? <hr /> : <></>}</NavLink></li>
                                <li><NavLink to="/Homefurniture" className="nav-link" onClick={() => { setMenu("Furniture") }}>Furniture{menu === "Furniture" ? <hr /> : <></>}</NavLink></li>
                                <li><NavLink to="/Homebathdecor" className="nav-link" onClick={() => { setMenu("Furniture") }}>Bath Decor{menu === "Furniture" ? <hr /> : <></>}</NavLink></li>
                            </ul>
                        </div>
                    </div>
                )
            }
            <div className='header-link'>
                <div>
                    <NavLink to='/Wishlist'><FaRegHeart className='wishlistimg' />
                        <div className='header-link-font'>Wishlist</div></NavLink>
                </div>
                <div>
                    <NavLink to="/Cart"><FaShoppingCart className='cartimg' />
                        <div className='nav-cart-count'>{cart?.length}</div>
                        <div className='header-link-font-cart'> cart</div></NavLink>
                </div>
                <div >
                    <NavLink to={`/Dashboard/${userauth?.user?.Role === 1 ? "admin" : "user"}`} onClick={() => { setMenu("Decor") }}>
                        <img src='/Assets/Profile.png' height='33px' width='33px' alt='profile' />
                        <div className='header-link-font-account'>Account</div></NavLink>
                </div>
                {userauth?.user ? (
                    <div>
                        <NavLink onClick={handleLogout} to="/Login" className='log-out'>
                            <img src='/Assets/Logout.png' height='20px' width='20px' alt='signin' />
                        </NavLink>
                        <div className='header-link-font' >Signout</div>
                    </div>
                ) : (
                    <div>
                        <NavLink to="/Login" onClick={handleLogin} className='log-out'>
                            <img src='/Assets/Signin.png' height='20px' width='20px' alt='signout' />
                        </NavLink>
                        <div className='header-link-font'>Signin</div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Navbar;