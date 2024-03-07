import React from 'react'
import { NavLink } from 'react-router-dom';

function Kitchen() {
    return (
        <div className='kitchen-dining'>
            <div className='kitchen-dining-list'>
                <NavLink className="kitchen-link" to="/Cakestand"><img src="Assets/Kitchen/Desert/Desert1.jpg" className='kitchen-dining-img' alt='' />CAKE & TIERD <br />STAND</NavLink>
                <NavLink className="kitchen-link" to="/Dinnerplates"><img src="Assets/Kitchen/Dinnerplates/Dinnerplate2.jpg" className='kitchen-dining-img' alt='' />DINNER <br />PLATES</NavLink>
                <NavLink className="kitchen-link" to="/Mug"><img src="Assets/Kitchen/Mug/Mug1.jpg" className='kitchen-dining-img' alt='' />TEACUPS &<br /> MUGS</NavLink>
                <NavLink className="kitchen-link" to="/Teaware"><img src="Assets/Kitchen/Teaware/Tea1.jpg" className='kitchen-dining-img' alt='' />TEAWARE <br />SERIES</NavLink>
                <NavLink className="kitchen-link" to="/Drinkglass"><img src="Assets/Kitchen/Drinkglass/Drinkglass4.jpg" className='kitchen-dining-img' alt='' />DRINKING<br /> GLASSES</NavLink>
                <NavLink className="kitchen-link" to="/Jar"><img src="Assets/Kitchen/Jar/Jar1.jpg" className='kitchen-dining-img' alt='' />KITCHEN <br />JARS</NavLink>
                <NavLink className="kitchen-link" to="/Doubleglass"><img src="Assets/Kitchen/Doubleglass/Double1.jpg" className='kitchen-dining-img' alt='' />DOUBLE WALLED <br />SERIES</NavLink>
            </div>
        </div>
    )
}

export default Kitchen;
