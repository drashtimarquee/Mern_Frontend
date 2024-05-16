import { useAuth } from '../components/Pages/Usercontax';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Userorderbill({ location = {} }) {
  const [userauth, setUserauth] = useAuth();
  const [orders, setOrders] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const singleorder = async () => {
    try {
      const { data } = await axios.get(`http://localhost:1202/userorderdata/${id}`);
      console.log(data);
      setOrders(data.orders);
    } catch (error) {
      console.error('Error fetching order:', error);
    }
  };

  useEffect(() => {
    if (!userauth.token) {
      navigate('/');
    } else {
      singleorder();
    }
  }, [userauth.token]);

  return (
    <div className='userlist'>
      {userauth.token ? (
        <>
          <h1>{`Hello ${userauth.user?.Fname}, your order is here`}</h1>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>User name</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Zipcode</th>
                </tr>
              </thead>
              <tbody className="userlist-tbody">
                {orders && orders.length > 0 ? (
                  orders.map((order) => (
                    <tr key={order._id}>
                      <td>{order._id}</td>
                      <td>{new Date(order.createdAt).toLocaleString()}</td>
                      <td>{`${order.shippingAddress.firstName} ${order.shippingAddress.lastName}`}</td>
                      <td>{order.shippingAddress.address}</td>
                      <td>{order.shippingAddress.city}</td>
                      <td>{order.shippingAddress.state}</td>
                      <td>{order.shippingAddress.zipcode}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7">No orders available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <h1>Please login to view your orders.</h1>
      )}
    </div>
  );
}

export default Userorderbill;


// import { useAuth } from '../components/Pages/Usercontax';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// function Userorderbill({ location = {} }) {
//   const [userauth, setUserauth] = useAuth();
//   const [orders, setOrders] = useState([]);
//   const { id } = useParams();

//   const singleorder = async () => {
//     const { data } = await axios.get(`http://localhost:1202/userorderdata/${id}`);
//     console.log(data)
//     setOrders(data.orders)
//   }

//   useEffect(() => {
//     singleorder();
//   }, []);

//   return (
//     <div className='userlist'>
//       <h1>{`Hello ${userauth?.token && userauth?.user?.Fname} your order is here`}</h1>
//       <div>
//         <table>
//           <thead>
//             <tr>
//               <th>Order ID</th>
//               <th>Date</th>
//               <th>user name</th>
//               <th>Address</th>
//               <th>City</th>
//               <th>State</th>
//             </tr>
//           </thead>
//           <tbody className="userlist-tbody">
//             {orders && orders.length > 0 ? (
//               orders.map((order) => (
//                 <tr key={order._id}>
//                   <td>{order._id}</td>
//                   <td>{new Date(order.createdAt).toLocaleString()}</td>
//                   <td>{`${order.shippingAddress.firstName} ${order.shippingAddress.lastName}`}</td>
//                   <td>{order.shippingAddress.address}</td>
//                   <td>{order.shippingAddress.city}</td>
//                   <td>{order.shippingAddress.state}</td>
//                   <td>{order.shippingAddress.zipcode}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="15">No orders available</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div >
//   );
// }

// export default Userorderbill;