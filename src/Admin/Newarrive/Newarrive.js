import React from 'react'
import { NavLink } from 'react-router-dom';

function Newarrive() {
    return (
        <div>
            <div className='new-arrive'>
                <div className='new-arrive-list'>
                    <NavLink to="/Newkitchen" className="arrive-link"><img src="Assets/Kitchen/Klogo.jpg" className='arrive-link-img' alt='klogo' />Kitchen & Dining</NavLink>
                    <NavLink to="/Newligting" className="arrive-link"><img src="Assets/Lighting/Llogo.jpg" className='arrive-link-img' alt='llogo' /> Lighting      </NavLink>
                    <NavLink to="/Newdecor" className="arrive-link"><img src="Assets/Furniture/Flogo.png" className='arrive-link-img' alt='flogo' />   Decor   </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Newarrive;
