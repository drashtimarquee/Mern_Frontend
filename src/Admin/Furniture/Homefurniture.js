import React from 'react'
import Furniture from './Furniture';
import { NavLink } from 'react-router-dom';

function Homefurniture() {
    return (
        <div>
            {/* <div className='home-space'></div> */}
            <div className='decor'>
                <img className='home-img' src='Assets/Furniture/Homefurniture.webp' alt='furniture' />
            </div>
            <Furniture />
            <div className='candlestand-decor'>
                <div className='candlestand-image'>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Chair'><img src="Assets/Furniture/Chair/Chair1.jpg" alt='chair' /><p>price :  ₹ 2200.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Chair'><img src="Assets/Furniture/Chair/Chair6.jpg" alt='chair' /><p>price :  ₹ 4000.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Chair'><img src="Assets/Furniture/Chair/Chair3.jpg" alt='chair' /><p>price :  ₹ 3300.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Chair'><img src="Assets/Furniture/Chair/Chair4.jpg" alt='chair' /><p>price :  ₹ 3600.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Chair'> <img src="Assets/Furniture/Chair/Chair7.jpg" alt='chair' /><p>price :  ₹ 3400.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Table'><img src="Assets/Furniture/Table/Table1.jpg" alt='table' /><p>price :  ₹ 2500.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Table'><img src="Assets/Furniture/Table/Table3.jpg" alt='table' /><p>price :  ₹ 5000.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Table'><img src="Assets/Furniture/Table/Table4.jpg" alt='table' /><p>price :  ₹ 5400.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Table'><img src="Assets/Furniture/Table/Table5.jpg" alt='table' /><p>price :  ₹ 5100.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Table'><img src="Assets/Furniture/Table/Table8.jpg" alt='table' /><p>price :  ₹ 4000.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Ottomans'><img src="Assets/Furniture/Ottomans/Ottomans9.jpg" alt='ottomans' /><p>price :  ₹ 4000.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Ottomans'> <img src="Assets/Furniture/Ottomans/Ottomans5.jpg" alt='ottomans' /><p>price :  ₹ 5000.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Ottomans'> <img src="Assets/Furniture/Ottomans/Ottomans3.jpg" alt='ottomans' /><p>price :  ₹ 3950.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Ottomans'> <img src="Assets/Furniture/Ottomans/Ottomans6.jpg" alt='ottomans' /><p>Price : ₹ 3500.00</p></NavLink>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Ottomans'><img src="Assets/Furniture/Ottomans/Ottomans1.jpg" alt='ottomans' /><p>Price : ₹ 4500.00</p></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homefurniture;
