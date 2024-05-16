import React from 'react'
import Furniture from './Furniture';
import { NavLink } from 'react-router-dom';

function Homefurniture() {
    return (
        <div className='candle-container'>
            <div className='decor'>
                <img className='home-img' src='Assets/Furniture/Homefurniture.webp' alt='furniture' />
            </div>
            <Furniture />
            <div className='candlestand-decor'>
                <div className='candlestand-image'>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Chair'><img src="Assets/Furniture/Chair/Chair1.jpg" alt='chair' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Chair'><img src="Assets/Furniture/Chair/Chair6.jpg" alt='chair' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Chair'><img src="Assets/Furniture/Chair/Chair3.jpg" alt='chair' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Chair'><img src="Assets/Furniture/Chair/Chair4.jpg" alt='chair' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Chair'> <img src="Assets/Furniture/Chair/Chair7.jpg" alt='chair' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Table'><img src="Assets/Furniture/Table/Table1.jpg" alt='table' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Table'><img src="Assets/Furniture/Table/Table3.jpg" alt='table' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Table'><img src="Assets/Furniture/Table/Table4.jpg" alt='table' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Table'><img src="Assets/Furniture/Table/Table5.jpg" alt='table' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Table'><img src="Assets/Furniture/Table/Table8.jpg" alt='table' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Ottomans'><img src="Assets/Furniture/Ottomans/Ottomans9.jpg" alt='ottomans' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Ottomans'> <img src="Assets/Furniture/Ottomans/Ottomans5.jpg" alt='ottomans' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Ottomans'> <img src="Assets/Furniture/Ottomans/Ottomans3.jpg" alt='ottomans' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Ottomans'> <img src="Assets/Furniture/Ottomans/Ottomans6.jpg" alt='ottomans' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Ottomans'><img src="Assets/Furniture/Ottomans/Ottomans1.jpg" alt='ottomans' /></NavLink><p>See more</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homefurniture;
