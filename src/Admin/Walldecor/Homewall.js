import React from 'react'
import Walldecor from './Walldecor';
import { NavLink } from 'react-router-dom';

function Homewall() {
    return (
        <div className='candle-container'>
            <div className='decor'>
                <img className='home-img' src='Assets/Wall/Back.webp' alt='' />
            </div>
            <Walldecor />
            <div className='candlestand-decor'>
                <div className='candlestand-image'>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Wallplates'><img src="Assets/Wall/Wallplates/Wallplate8.jpg" alt='wallp' /></NavLink><p>See More</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Framedart'> <img src="Assets/Wall/Framedart/Frame1.jpg" alt='wallframe' /></NavLink><p>See More</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Wallplates'><img src="Assets/Wall/Wallplates/Wallplate3.jpg" alt='wallplates' /></NavLink><p>See More</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Olipaint'> <img src="Assets/Wall/Olipaint/Oil4.jpg" alt='oilframed' /></NavLink><p>See More</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Wallplates'> <img src="Assets/Wall/Wallplates/Wallplate10.jpg" alt='wallplate' /></NavLink><p>See More</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Wallmirror'> <img src="Assets/Wall/Wallmirror/Mirror1.jpg" alt='wallmirror' /></NavLink><p>See More</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Wallplates'> <img src="Assets/Wall/Wallplates/Wallplate11.jpg" alt='wallplates' /></NavLink><p>See More</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Framedart'> <img src="Assets/Wall/Framedart/Frame2.jpg" alt='framed' /></NavLink><p>See More</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Olipaint'>  <img src="Assets/Wall/Olipaint/Oil7.jpg" alt='oilframe' /></NavLink><p>See More</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Framedart'> <img src="Assets/Wall/Framedart/Frame5.jpg" alt='frame' /></NavLink><p>See More</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Wallmirror'> <img src="Assets/Wall/Wallmirror/Mirror10.jpg" alt='wallmirror' /></NavLink><p>See More</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Framedart'> <img src="Assets/Wall/Framedart/Frame8.jpg" alt='wallframe' /></NavLink><p>See More</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Olipaint'> <img src="Assets/Wall/Olipaint/Oil2.jpg" alt='oilframe' /></NavLink><p>See More</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Wallvases'> <img src="Assets/Wall/Wallvases/Vas6.jpg" alt='wallvas' /></NavLink><p>See More</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Olipaint'> <img src="Assets/Wall/Olipaint/Oil9.jpg" alt='oilframe' /></NavLink><p>See More</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Wallmirror'> <img src="Assets/Wall/Wallmirror/Mirror6.jpg" alt='wallmirror' /></NavLink><p>See More</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Wallvases'> <img src="Assets/Wall/Wallvases/Vas1.jpg" alt='wallvas' /></NavLink><p>See More</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Wallvases'> <img src="Assets/Wall/Wallvases/Vas3.jpg" alt='wallvas' /></NavLink><p>See More</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Wallmirror'> <img src="Assets/Wall/Wallmirror/Mirror9.jpg" alt='wallmirror' /></NavLink><p>See More</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Wallvases'><img src="Assets/Wall/Wallvases/Vas8.jpg" alt='wallvas' /></NavLink><p>See More</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homewall;
