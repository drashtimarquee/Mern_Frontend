import React from 'react'
import Kitchen from './Kitchen';
import { NavLink } from 'react-router-dom';

function Homekitchen() {
    return (
        <div>
            {/* <div className='home-space'></div> */}
            <div className='decor'>
                <img className='home-img' src='Assets/Kitchen/Back.webp' alt='' />
            </div>
            <Kitchen />
            <div className='candlestand-decor'>
                <div className='candlestand-image'>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Cakestand'><img src="Assets/Kitchen/Desert/Desert1.jpg" alt='' /><p>price :  ₹ 800.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Cakestand'><img src="Assets/Kitchen/Desert/Desert4.jpg" alt='' /><p>price :  ₹ 900.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Cakestand'><img src="Assets/Kitchen/Desert/Desert11.jpg" alt='' /><p>price :  ₹ 650.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Dinnerplates'><img src="Assets/Kitchen/Dinnerplates/Dinnerplate4.jpg" alt='' /><p>price :  ₹ 900.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Dinnerplates'><img src="Assets/Kitchen/Dinnerplates/Dinnerplate2.jpg" alt='' /><p>price :  ₹ 400.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Dinnerplates'><img src="Assets/Kitchen/Dinnerplates/Dinnerplate9.jpg" alt='' /><p>price :  ₹ 500.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Mug'> <img src="Assets/Kitchen/Mug/Mug1.jpg" alt='' /><p>price :  ₹ 790.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Mug'> <img src="Assets/Kitchen/Mug/Mug7.jpg" alt='' /><p>price :  ₹ 100.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Mug'> <img src="Assets/Kitchen/Mug/Mug11.jpg" alt='' /><p>price :  ₹ 80.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Mug'> <img src="Assets/Kitchen/Mug/Mug12.jpg" alt='' /><p>price :  ₹ 350.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Teaware'>   <img src="Assets/Kitchen/Teaware/Tea6.jpg" alt='' /><p>price :  ₹ 750.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Teaware'> <img src="Assets/Kitchen/Teaware/Tea8.jpg" alt='' /><p>price :  ₹ 1050.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Teaware'> <img src="Assets/Kitchen/Teaware/Tea9.jpg" alt='' /><p>Price : ₹ 950.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Teaware'> <img src="Assets/Kitchen/Teaware/Tea4.jpg" alt='' /><p>price :  ₹ 500.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Drinkglass'> <img src="Assets/Kitchen/Drinkglass/Drinkglass3.jpg" alt='' /><p>Price : ₹ 100.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Drinkglass'><img src="Assets/Kitchen/Drinkglass/Drinkglass7.jpg" alt='' /><p>Price : ₹ 200.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Drinkglass'> <img src="Assets/Kitchen/Drinkglass/Drinkglass11.jpg" alt='' /><p>Price : ₹ 140.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Jar'> <img src="Assets/Kitchen/Jar/Jar1.jpg" alt='' /><p>Price : ₹ 350.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Jar'>    <img src="Assets/Kitchen/Jar/Jar4.jpg" alt='' /><p>Price : ₹ 400.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Jar'>  <img src="Assets/Kitchen/Jar/Jar8.jpg" alt='' /><p>Price : ₹ 750.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Doubleglass'>  <img src="Assets/Kitchen/Doubleglass/Double12.jpg" alt='' /><p>Price : ₹ 500.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Doubleglass'> <img src="Assets/Kitchen/Doubleglass/Double5.jpg" alt='' /><p>Price : ₹ 150.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Doubleglass'><img src="Assets/Kitchen/Doubleglass/Double6.jpg" alt='' /><p>Price : ₹ 100.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Doubleglass'> <img src="Assets/Kitchen/Doubleglass/Double9.jpg" alt='' /><p>Price : ₹ 350.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Cakestand'><img src="Assets/Kitchen/Desert/Desert3.jpg" alt='' /><p>price :  ₹ 850.00</p></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homekitchen;
