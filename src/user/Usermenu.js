import React from 'react'
import { NavLink } from 'react-router-dom'

function Usermenu() {
  return (
    <div>
      <div className='user-dash-link'>
          <NavLink to={"/Dashboard/user/order"}>Orders</NavLink>
          <NavLink to={"/Dashboard/user/edit"}>Edit-Profile</NavLink>
        </div>
    </div>
  )
}

export default Usermenu
