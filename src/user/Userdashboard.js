import { useAuth } from '../components/Pages/Usercontax';
import Usermenu from './Usermenu';

function Userdashboard() {
  const [userauth, setUserauth] = useAuth();

  return (
    <div>
      <img className='form-img' src='/Assets/user_profile_background.jpg' alt='' />
      <div className='user-dashboard'>
        <div className='user-dash-details'>
          <img src='/Assets/user.png' alt="" /><br /><br />
          <h5><span>Name: </span>{userauth?.user?.Fname} {userauth?.user?.Lname}</h5 >
          <h5><span>Email: </span>{userauth?.user?.Email}</h5>
          <h5><span>Address: </span>{userauth?.user?.Address}</h5>
          <div >
            <Usermenu />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Userdashboard;
