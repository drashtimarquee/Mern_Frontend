import React from 'react'
import { NavLink } from 'react-router-dom';

function Walldecor() {
    return (
        <div>
            <div className='walldecor'>
                <div className='walldecor-list'>
                    <NavLink to="/Wallplates" className="walldecor-link"><img src='Assets/Wall/Wallplates/Wallplate1.jpg' className='walldecor-list-img' alt='wallplate' /> WALL PLATES <br />& ACCENTS </NavLink>
                    <NavLink to="/Framedart" className="walldecor-link"><img src='Assets/Wall/Framedart/Frame1.jpg' className='walldecor-list-img' alt='wallframe' /> FRAMED <br /> WALL ART </NavLink>
                    <NavLink to="/Olipaint" className="walldecor-link"><img src='Assets/Wall/Olipaint/Oil9.jpg' className='walldecor-list-img' alt='oilframe' /> MODERN OIL<br /> PAINTINGS </NavLink>
                    <NavLink to="/Wallmirror" className="walldecor-link"><img src='Assets/Wall/Wallmirror/Mirror1.jpg' className='walldecor-list-img' alt='wallmirror' />WALL <br /> MIRRORS </NavLink>
                    <NavLink to="/Wallvases" className="walldecor-link"><img src='Assets/Wall/Wallvases/Vas1.jpg' className='walldecor-list-img' alt='wallvas' /> WALL <br /> VASES </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Walldecor;
