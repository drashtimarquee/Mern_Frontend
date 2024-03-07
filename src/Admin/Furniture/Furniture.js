import React from 'react'
import { NavLink } from 'react-router-dom';

function Furniture() {
    return (
        <div>
            <div className='furniture'>
                <div className='furniture-list'>
                    <NavLink to="/Chair" className="furniture-link"><img src='Assets/Furniture/Chair/Chair1.jpg' className='furniture-list-img' alt='chair' />Chairs</NavLink>
                    <NavLink to="/Table" className="furniture-link"><img src='Assets/Furniture/Table/Table1.jpg' className='furniture-list-img' alt='furniture' />Tables</NavLink>
                    <NavLink to="/Ottomans" className="furniture-link"><img src='Assets/Furniture/Ottomans/Ottomans1.jpg' className='furniture-list-img' alt='ottomans' />Ottomans</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Furniture;
