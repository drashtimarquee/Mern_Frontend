import React, { useEffect, useState } from 'react'
import { useAuth } from '../components/Pages/Usercontax';
import axios from 'axios';

function Edituser() {
  const [userauth, setUserauth] = useAuth();
  const [Fname, setFname] = useState('');
  const [Lname, setLname] = useState('');
  const [Email, setEmail] = useState('');
  const [Address, setAddress] = useState('');

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
    <div className="form">
      {/* <div className='home-space'></div> */}
      <div className="formbody">
        <div className="register">
          <form onSubmit={updateuser}>
            <input className="forminput" type="text" value={Fname} onChange={(e) => setFname(e.target.value)} /><br />
            <input className="forminput" type="text" value={Lname} onChange={(e) => setLname(e.target.value)} /><br />
            <input className="forminput" type="email" value={Email} onChange={(e) => setEmail(e.target.value)} /><br />
            <input className="forminput" type="text" value={Address} onChange={(e) => setAddress(e.target.value)} /><br />
            <br />
            <button className="footer">UPDATE</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Edituser;