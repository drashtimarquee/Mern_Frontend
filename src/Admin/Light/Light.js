import React from 'react'
import { NavLink } from 'react-router-dom';

function Light() {
    return (
        <div>
            <div className='light'>
                <div className='light-list'>
                    <NavLink to="/Bedlight" className="light-link"> <img src='Assets/Lighting/badroom/Badlight1.jpg' className='light-list-img' alt='bad' />  Bedroom<br /> Light  </NavLink>
                    <NavLink to="/Ceilinglight" className="light-link"> <img src='Assets/Lighting/Ceilinglight/ceiling1.jpg' className='light-list-img' alt='ceiling' />  Ceiling <br />Light</NavLink>
                    <NavLink to="/Crystallamp" className="light-link"> <img src='Assets/Lighting/Crystal/Crystall6.jpg' className='light-list-img' alt='crystal' />  Crystal <br />Light</NavLink>
                    <NavLink to="/Livinglight" className="light-link"> <img src='Assets/Lighting/Living/Living2.jpg' className='light-list-img' alt='living' /> Floor<br /> light</NavLink>
                    <NavLink to="/Tablelamp" className="light-link"> <img src='Assets/Lighting/Tablelamp/Light3.jpg' className='light-list-img' alt='tbllight' /> Table<br />lamp</NavLink>
                    <NavLink to="/Woodlamp" className="light-link"> <img src='Assets/Lighting/Woodlamp/Woodlamp6.jpg' className='light-list-img' alt='wood' /> Wood<br />lamp</NavLink>
                    <NavLink to="/Wallsconses" className="light-link"> <img src='Assets/Lighting/Wallscenses/Wallsc2.jpg' className='light-list-img' alt='wallsconses' /> Wall<br />Sconces</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Light;