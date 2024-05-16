import React from 'react'
import Light from './Light';
import { NavLink } from 'react-router-dom';

function Homelight() {
    return (
        <div className='candle-container'>
            <div className='decor'>
                <img className='home-img' src='Assets/Lighting/Back.webp' alt='' />
            </div>
            <Light />
            <div className='candlestand-decor'>
                <div className='candlestand-image'>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Bedlight'><img src="Assets/Lighting/badroom/Badlight2.jpg" alt='bad' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Bedlight'> <img src="Assets/Lighting/badroom/Badlight3.jpg" alt='bad' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Bedlight'> <img src="Assets/Lighting/badroom/Badlight6.jpg" alt='bad' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Bedlight'> <img src="Assets/Lighting/badroom/Badlight9.jpg" alt='bad' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Ceilinglight'> <img src="Assets/Lighting/Ceilinglight/ceiling1.jpg" alt='ceiling' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Ceilinglight'>  <img src="Assets/Lighting/Ceilinglight/ceiling4.jpg" alt='ceiling' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Ceilinglight'> <img src="Assets/Lighting/Ceilinglight/ceiling9.jpg" alt='ceiling' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Ceilinglight'> <img src="Assets/Lighting/Ceilinglight/ceiling11.jpg" alt='ceiling' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Crystallamp'> <img src="Assets/Lighting/Crystal/Crystall2.jpg" alt='crys' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Crystallamp'> <img src="Assets/Lighting/Crystal/Crystall3.jpg" alt='crys' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Crystallamp'>  <img src="Assets/Lighting/Crystal/Crystall6.jpg" alt='crys' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Crystallamp'> <img src="Assets/Lighting/Crystal/Crystall10.jpg" alt='crys' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Livinglight'><img src="Assets/Lighting/Living/Living2.jpg" alt='living' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Livinglight'> <img src="Assets/Lighting/Living/Living4.jpg" alt='living' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Livinglight'> <img src="Assets/Lighting/Living/Living6.jpg" alt='living' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Livinglight'>  <img src="Assets/Lighting/Living/Living12.jpg" alt='living' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Tablelamp'> <img src="Assets/Lighting/Tablelamp/Light1.jpg" alt='tbllmp' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Tablelamp'><img src="Assets/Lighting/Tablelamp/Light3.jpg" alt='tbllmp' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Tablelamp'>   <img src="Assets/Lighting/Tablelamp/Light6.jpg" alt='tbllmp' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Tablelamp'>  <img src="Assets/Lighting/Tablelamp/Light7.jpg" alt='tbllmp' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Woodlamp'> <img src="Assets/Lighting/Woodlamp/Woodlamp2.jpg" alt='wood' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Woodlamp'>  <img src="Assets/Lighting/Woodlamp/Woodlamp4.jpg" alt='wood' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Woodlamp'>  <img src="Assets/Lighting/Woodlamp/Woodlamp6.jpg" alt='wood' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Woodlamp'><img src="Assets/Lighting/Woodlamp/Woodlamp8.jpg" alt='wood' /></NavLink><p>See more</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homelight;
