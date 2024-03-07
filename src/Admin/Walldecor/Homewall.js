import React from 'react'
import Walldecor from './Walldecor';
import { NavLink } from 'react-router-dom';

function Homewall() {
    return (
        <div>
            {/* <div className='home-space'></div> */}
            <div className='decor'>
                <img className='home-img' src='Assets/Wall/Back.webp' alt='' />
            </div>
            <Walldecor />
            <div className='candlestand-decor'>
                <div className='candlestand-image'>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Wallplates'><img src="Assets/Wall/Wallplates/Wallplate8.jpg" alt='' /><p>price :  ₹ 2000.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Framedart'> <img src="Assets/Wall/Framedart/Frame1.jpg" alt='' /><p>price :  ₹ 2000.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Wallplates'><img src="Assets/Wall/Wallplates/Wallplate3.jpg" alt='' /><p>price :  ₹ 3950.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Olipaint'> <img src="Assets/Wall/Olipaint/Oil4.jpg" alt='' /><p>price :  ₹ 4600.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Wallplates'> <img src="Assets/Wall/Wallplates/Wallplate10.jpg" alt='' /><p>price :  ₹ 2800.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Wallmirror'> <img src="Assets/Wall/Wallmirror/Mirror1.jpg" alt='' /><p>Price : ₹ 3100.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Wallplates'> <img src="Assets/Wall/Wallplates/Wallplate11.jpg" alt='' /><p>price :  ₹ 3500.00</p></NavLink>
                    </div>

                    <div className='candlestand-image-column'>
                        <NavLink to='/Framedart'> <img src="Assets/Wall/Framedart/Frame2.jpg" alt='' /><p>price :  ₹ 2300.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Olipaint'>  <img src="Assets/Wall/Olipaint/Oil7.jpg" alt='' /><p>price :  ₹ 7000.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Framedart'> <img src="Assets/Wall/Framedart/Frame5.jpg" alt='' /><p>price :  ₹ 3800.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Wallmirror'> <img src="Assets/Wall/Wallmirror/Mirror10.jpg" alt='' /><p>Price : ₹ 4050.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Framedart'> <img src="Assets/Wall/Framedart/Frame8.jpg" alt='' /><p>price :  ₹ 3820.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Olipaint'> <img src="Assets/Wall/Olipaint/Oil2.jpg" alt='' /><p>price :  ₹ 3400.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Wallvases'> <img src="Assets/Wall/Wallvases/Vas6.jpg" alt='' /><p>Price : ₹ 1800.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Olipaint'> <img src="Assets/Wall/Olipaint/Oil9.jpg" alt='' /><p>price :  ₹ 3300.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Wallmirror'> <img src="Assets/Wall/Wallmirror/Mirror6.jpg" alt='' /><p>price :  ₹ 7500.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Wallvases'> <img src="Assets/Wall/Wallvases/Vas1.jpg" alt='' /><p>Price : ₹ 2200.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Wallvases'> <img src="Assets/Wall/Wallvases/Vas3.jpg" alt='' /><p>Price : ₹ 5600.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Wallmirror'> <img src="Assets/Wall/Wallmirror/Mirror9.jpg" alt='' /><p>Price : ₹ 4000.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Wallvases'><img src="Assets/Wall/Wallvases/Vas8.jpg" alt='' /><p>Price : ₹ 2700.00</p></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homewall;
