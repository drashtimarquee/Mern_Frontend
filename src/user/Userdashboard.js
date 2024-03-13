import Usermenu from './Usermenu';
import { useAuth } from '../components/Pages/Usercontax';

function Userdashboard() {
  const [userauth, setUserauth] = useAuth();

  return (
    <div className='user-dashboard'>
      <div className='user-dash-details'>
        <h1>User-Details</h1>
        <br />
        <h4><span>FName : </span>{userauth?.user?.Fname}</h4>
        <h4><span>LName : </span>{userauth?.user?.Lname}</h4>
        <h4><span>Email : </span>{userauth?.user?.Email}</h4>
        <h4><span>Address : </span>{userauth?.user?.Address}</h4>
        <div >
          <Usermenu />
        </div>
      </div>
    </div>
  )
}

export default Userdashboard;
