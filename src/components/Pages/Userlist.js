import React from 'react'
import { useEffect, useState } from "react"
import axios from 'axios'
import { ArrowLeftOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

function Userlist() {
  const [user, setUser] = useState([]);

  const alluser = async () => {
    const response = await axios.get("http://localhost:1202/alluser");
    if (response.status === 200) {
      setUser(response.data.user);
    }
  }
  useEffect(() => {
    alluser();
  })

  return (
    <div className='userlist'>
      <NavLink to="/Dashboard/admin" className="icon-link"><ArrowLeftOutlined className='user-icon' /></NavLink>
      <h1>ALL USER LIST</h1>
      <table>
        <thead>
          <tr>
            <th>Sno.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody className="userlist-tbody">
          {
            user.map((val, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{val.Fname}</td>
                <td>{val.Lname}</td>
                <td>{val.Email}</td>
                <td>{val.Address}</td>
                <td>{val.Password}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Userlist;
