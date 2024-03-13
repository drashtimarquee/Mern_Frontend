import React from 'react'
import Decor from './Decor'
import { NavLink } from 'react-router-dom'

function Home() {
    return (
        <div>
            <div className='decor'>
                <img className='home-img' src='Assets/Decor/Back.webp' alt='back' />
            </div>
            <Decor />
            <div className='candlestand-decor'>
                <div className='candlestand-image'>
                    <div className='candlestand-image-column' >
                        <NavLink to='/Candlestand'><img src="Assets/Decor/Candlestand/Candle10.jpg" alt='candle' /><p>price :  ₹ 1800.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Candlestand'><img src="Assets/Decor/Candlestand/Candle14.jpg" alt='candle' /><p>price :  ₹ 3000.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Candlestand'><img src="Assets/Decor/Candlestand/Candle7.jpg" alt='candle' /><p>price :  ₹ 2000.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Candlestand'><img src="Assets/Decor/Candlestand/Candle4.jpg" alt='candle' /><p>price :  ₹ 1900.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Candlestand'><img src="Assets/Decor/Candlestand/Candle11.jpg" alt='candle' /><p>price :  ₹ 1750.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Crystel'><img src="Assets/Decor/Crystel/Crystal3.jpg" alt='crystal' /><p>price :  ₹ 1200.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Crystel'> <img src="Assets/Decor/Crystel/Crystal6.jpg" alt='crystal' /><p>price :  ₹ 1500.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Crystel'> <img src="Assets/Decor/Crystel/Crystal8.jpg" alt='crystal' /><p>price :  ₹ 1300.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Crystel'> <img src="Assets/Decor/Crystel/Crystal10.jpg" alt='crystal' /><p>price :  ₹ 1950.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Decorplates'></NavLink><img src="Assets/Decor/Decorplates/Dplate1.jpg" alt='dplate' /><p>price :  ₹ 900.00</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Decorplates'><img src="Assets/Decor/Decorplates/Dplate9.jpg" alt='dplate' /><p>price :  ₹ 950.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Decorplates'><img src="Assets/Decor/Decorplates/Dplate3.jpg" alt='dplate' /><p>price :  ₹ 800.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Decorstorage'><img src="Assets/Decor/Decorstorage/Dstor9.jpg" alt='dstore' /><p>price :  ₹ 2000.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Decorstorage'><img src="Assets/Decor/Decorstorage/Dstor4.jpg" alt='dstore' /><p>price :  ₹ 900.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Decorstorage'><img src="Assets/Decor/Decorstorage/Dstor13.jpg" alt='dstore' /><p>price :  ₹ 2800.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Fineporcelain'><img src="Assets/Decor/Fineporcelain/Finep4.jpg" alt='finep' /><p>price :  ₹ 1100.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Fineporcelain'><img src="Assets/Decor/Fineporcelain/Finep6.jpg" alt='finep' /><p>price :  ₹ 800.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Fineporcelain'><img src="Assets/Decor/Fineporcelain/Finep8.jpg" alt='finep' /><p>price :  ₹ 1500.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Flowerarrang'><img src="Assets/Decor/Flowerarrang/Flower4.jpg" alt='flower' /><p>price :  ₹ 1800.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Flowerarrang'><img src="Assets/Decor/Flowerarrang/Flower7.jpg" alt='flower' /><p>price :  ₹ 1200.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Flowerarrang'> <img src="Assets/Decor/Flowerarrang/Flower9.jpg" alt='flower' /><p>price :  ₹ 1300.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Gingerjar'><img src="Assets/Decor/Gingerjar/Gjar1.jpg" alt='gjar' /><p>Price : ₹ 2500.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Gingerjar'><img src="Assets/Decor/Gingerjar/Gjar2.jpg" alt='gjar' /><p>Price : ₹ 1500.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Gingerjar'><img src="Assets/Decor/Gingerjar/Gjar6.jpg" alt='gjar' /><p>Price : ₹ 1200.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Photofram'><img src="Assets/Decor/Photofram/Photo3.jpg" alt='pht' /><p>price :  ₹ 700.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Photofram'><img src="Assets/Decor/Photofram/Photo6.jpg" alt='pht' /><p>price :  ₹ 1300.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Photofram'><img src="Assets/Decor/Photofram/Photo7.jpg" alt='pht' /><p>price :  ₹ 950.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Planter'><img src="Assets/Decor/Planter/Plant1.jpg" alt='plant' /><p>price :  ₹ 850.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Planter'><img src="Assets/Decor/Planter/Plant5.jpg" alt='plant' /><p>price :  ₹ 750.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Planter'><img src="Assets/Decor/Planter/Plant7.jpg" alt='plant' /><p>price :  ₹ 1100.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Planter'> <img src="Assets/Decor/Planter/Plant8.jpg" alt='plant' /><p>price :  ₹ 1010.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Tabletopdecor'><img src="Assets/Decor/Tabletopdecor/Decor1.jpg" alt='tbltop' /><p>price :  ₹ 1200.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Tabletopdecor'><img src="Assets/Decor/Tabletopdecor/Decor4.jpg" alt='tbltop' /><p>price :  ₹ 1500.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Tabletopdecor'> <img src="Assets/Decor/Tabletopdecor/Decor5.jpg" alt='tbltop' /><p>price :  ₹ 1000.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Tabletopdecor'><img src="Assets/Decor/Tabletopdecor/Decor8.jpg" alt='tbltop' /><p>price :  ₹ 800.00</p></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home