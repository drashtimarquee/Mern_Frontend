import React from 'react'
import Light from './Light';
import { NavLink } from 'react-router-dom';

function Homelight() {
    return (
        <div>
            {/* <div className='home-space'></div> */}
            <div className='decor'>
                <img className='home-img' src='Assets/Lighting/Back.webp' alt='' />
            </div>
            <Light />
            <div className='candlestand-decor'>
                <div className='candlestand-image'>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Bedlight'><img src="Assets/Lighting/badroom/Badlight2.jpg" alt='' /><p>price :  ₹ 2200.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Bedlight'> <img src="Assets/Lighting/badroom/Badlight3.jpg" alt='' /><p>price :  ₹ 2100.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Bedlight'> <img src="Assets/Lighting/badroom/Badlight6.jpg" alt='' /><p>price :  ₹ 2400.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Bedlight'> <img src="Assets/Lighting/badroom/Badlight9.jpg" alt='' /><p>price :  ₹ 1700.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Ceilinglight'> <img src="Assets/Lighting/Ceilinglight/ceiling1.jpg" alt='' /><p>price :  ₹ 4500.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Ceilinglight'>  <img src="Assets/Lighting/Ceilinglight/ceiling4.jpg" alt='' /><p>price :  ₹ 5000.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Ceilinglight'> <img src="Assets/Lighting/Ceilinglight/ceiling9.jpg" alt='' /><p>price :  ₹ 4400.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='Ceilinglight/'> <img src="Assets/Lighting/Ceilinglight/ceiling11.jpg" alt='' /><p>price :  ₹ 6000.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Crystallamp'> <img src="Assets/Lighting/Crystal/Crystall2.jpg" alt='' /><p>price :  ₹ 5000.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Crystallamp'> <img src="Assets/Lighting/Crystal/Crystall3.jpg" alt='' /><p>price :  ₹ 5600.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Crystallamp'>  <img src="Assets/Lighting/Crystal/Crystall6.jpg" alt='' /><p>price :  ₹ 5600.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Crystallamp'> <img src="Assets/Lighting/Crystal/Crystall10.jpg" alt='' /><p>price :  ₹ 5000.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Livinglight'><img src="Assets/Lighting/Living/Living2.jpg" alt='' /><p>Price : ₹ 5000.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Livinglight'> <img src="Assets/Lighting/Living/Living4.jpg" alt='' /><p>price :  ₹ 4000.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Livinglight'> <img src="Assets/Lighting/Living/Living6.jpg" alt='' /><p>Price : ₹ 4900.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Livinglight'>  <img src="Assets/Lighting/Living/Living12.jpg" alt='' /><p>Price : ₹ 5500.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Tablelamp'> <img src="Assets/Lighting/Tablelamp/Light1.jpg" alt='' /><p>Price : ₹ 3500.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Tablelamp'><img src="Assets/Lighting/Tablelamp/Light3.jpg" alt='' /><p>Price : ₹ 3500.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Tablelamp'>   <img src="Assets/Lighting/Tablelamp/Light6.jpg" alt='' /><p>Price : ₹ 5600.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Tablelamp'>  <img src="Assets/Lighting/Tablelamp/Light7.jpg" alt='' /><p>Price : ₹ 3700.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Woodlamp'> <img src="Assets/Lighting/Woodlamp/Woodlamp2.jpg" alt='' /><p>Price : ₹ 4000.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Woodlamp'>  <img src="Assets/Lighting/Woodlamp/Woodlamp4.jpg" alt='' /><p>Price : ₹ 3900.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Woodlamp'>  <img src="Assets/Lighting/Woodlamp/Woodlamp6.jpg" alt='' /><p>Price : ₹ 7500.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Woodlamp'><img src="Assets/Lighting/Woodlamp/Woodlamp8.jpg" alt='' /><p>Price : ₹ 4500.00</p></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homelight;
