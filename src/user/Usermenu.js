import React from 'react'
import { NavLink } from 'react-router-dom'

function Usermenu() {
  return (
    <div>
      <div className='user-dash-link'>
          <NavLink className='footer' to={"/Dashboard/user/order"}>Orders</NavLink>
          <NavLink className='footer' to={"/Dashboard/user/edit"}>Update</NavLink>
        </div>
    </div>
  )
}

export default Usermenu
