import React, { useEffect, useState } from 'react'
import { useAuth } from '../components/Pages/Usercontax';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Edituser() {
  const [userauth, setUserauth] = useAuth();
  const [Fname, setFname] = useState('');
  const [Lname, setLname] = useState('');
  const [Email, setEmail] = useState('');
  const [Address, setAddress] = useState('');
  const navigate = useNavigate();

  const updateuser = async (e) => {
    e.preventDefault();
    const { data } = await axios.put(`http://localhost:1202/edituser`, {
      Fname, Lname, Email, Address
    })
    
    if (data?.error) {
      console.log(data?.error)
    } else {
      setUserauth({ ...userauth, user: data?.updateuser })
      let ls = localStorage.getItem("auth")
      ls = JSON.parse(ls);
      ls.user = data.updateuser;
      localStorage.setItem('auth', JSON.stringify(ls))
      console.log("Profile Updated Successfully",)
      navigate('/Dashboard/user')
    }
  }

  useEffect(() => {
    const { Fname, Lname, Address, Email } = userauth.user;
    setFname(Fname)
    setLname(Lname)
    setAddress(Address)
    setEmail(Email)
  }, [userauth?.user])

  return (
    <div>
      <img className="form-img" src='/Assets/edit_background.jpg' alt="" />
      <div className="form">
        <form onSubmit={updateuser}>
          <div className="user-info">
            <div className='user-input'>
              <label className="form-lable">First name </label>
              <input id="Fname" className="form-input" type="text" placeholder=" First Name" value={Fname} onChange={(e) => setFname(e.target.value)} />
            </div>
            <div className='user-input'>
              <label className="form-lable">Last name </label>
              <input id="Lname" className="form-input" type="text" placeholder=" Last Name" value={Lname} onChange={(e) => setLname(e.target.value)} />
            </div>
          </div>
          <div className="user-input">
            <label className="form-lable">Email </label>
            <input id="email" className="form-input" type="email" placeholder=" Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="user-input">
            <label className="form-lable">Address </label>
            <input id="address" className="form-input" type="text" placeholder=" Address" value={Address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <button className="footer">Update</button>
        </form>
      </div>
    </div>
  )
}

export default Edituser;