import React from 'react'
import Kitchen from './Kitchen';
import { NavLink } from 'react-router-dom';

function Homekitchen() {
    return (
        <div className='candle-container'>
            <div className='decor'>
                <img className='home-img' src='Assets/Kitchen/Back.webp' alt='backkitchen' />
            </div>
            <Kitchen />
            <div className='candlestand-decor'>
                <div className='candlestand-image'>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Cakestand'><img src="Assets/Kitchen/Desert/Desert1.jpg" alt='desert' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Cakestand'><img src="Assets/Kitchen/Desert/Desert4.jpg" alt='desert' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Cakestand'><img src="Assets/Kitchen/Desert/Desert11.jpg" alt='desert' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Dinnerplates'><img src="Assets/Kitchen/Dinnerplates/Dinnerplate4.jpg" alt='plates' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Dinnerplates'><img src="Assets/Kitchen/Dinnerplates/Dinnerplate2.jpg" alt='plater' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Dinnerplates'><img src="Assets/Kitchen/Dinnerplates/Dinnerplate9.jpg" alt='plates' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Mug'> <img src="Assets/Kitchen/Mug/Mug1.jpg" alt='mug' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Mug'> <img src="Assets/Kitchen/Mug/Mug7.jpg" alt='mug' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Mug'> <img src="Assets/Kitchen/Mug/Mug11.jpg" alt='mug' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Mug'> <img src="Assets/Kitchen/Mug/Mug12.jpg" alt='mug' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Teaware'>   <img src="Assets/Kitchen/Teaware/Tea6.jpg" alt='teaware' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Teaware'> <img src="Assets/Kitchen/Teaware/Tea8.jpg" alt='teaware' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Teaware'> <img src="Assets/Kitchen/Teaware/Tea9.jpg" alt='teaware' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Teaware'> <img src="Assets/Kitchen/Teaware/Tea4.jpg" alt='teaware' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Drinkglass'> <img src="Assets/Kitchen/Drinkglass/Drinkglass3.jpg" alt='drink' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Drinkglass'><img src="Assets/Kitchen/Drinkglass/Drinkglass7.jpg" alt='drink' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Drinkglass'> <img src="Assets/Kitchen/Drinkglass/Drinkglass11.jpg" alt='drink' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Jar'> <img src="Assets/Kitchen/Jar/Jar1.jpg" alt='jar' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Jar'>    <img src="Assets/Kitchen/Jar/Jar4.jpg" alt='jar' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Jar'>  <img src="Assets/Kitchen/Jar/Jar8.jpg" alt='jar' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Doubleglass'>  <img src="Assets/Kitchen/Doubleglass/Double12.jpg" alt='glass' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Doubleglass'> <img src="Assets/Kitchen/Doubleglass/Double5.jpg" alt='glass' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Doubleglass'><img src="Assets/Kitchen/Doubleglass/Double6.jpg" alt='glass' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Doubleglass'> <img src="Assets/Kitchen/Doubleglass/Double9.jpg" alt='glass' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Cakestand'><img src="Assets/Kitchen/Desert/Desert3.jpg" alt='glass' /></NavLink><p>See more</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homekitchen;
