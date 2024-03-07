import React from 'react'
import { NavLink } from 'react-router-dom';

function Bathdecor() {
    return (
        <div>
            <div className='furniture'>
                <div className='furniture-list'>
                    <NavLink to='/Homebathdecor' className="furniture-link"><img src='Assets/Furniture/Ottomans/Ottomans1.jpg' className='furniture-list-img' alt='ottomans' />All Bath<br />Decor</NavLink>
                    <NavLink to='/Bathset' className="furniture-link"><img src='Assets/Bathdecor/Bathset/Bathset3.jpg' className='furniture-list-img' alt='chair' />Bathset<br />Decor</NavLink>
                    <NavLink to='/Basin' className="furniture-link"><img src='Assets/Bathdecor/Basin/Basin1.jpg' className='furniture-list-img' alt='furniture' />Basins &<br /> Accessories</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Bathdecor;