import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

function Orderlist() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchOrders = async () => {
        try {
            const response = await axios.get("http://localhost:1202/allorder");
            if (response.status === 200) {
                setOrders(response.data.order);
            }
        } catch (error) {
            console.error("Error fetching orders:", error);
            setError("Error fetching orders. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <div>
            <div className='userlist'>
                <NavLink to="/Dashboard/admin" className="icon-link"><ArrowLeftOutlined className='user-icon' /></NavLink>
                <h1>ALL ORDER LIST</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Status</th>
                            <th>User ID</th>
                            <th>Date</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Phn Number</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zipcode</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>Payment status</th>
                        </tr>
                    </thead>
                    <tbody className="userlist-tbody">
                        {orders && orders.length > 0 ? (
                            orders.map((order) => (
                                <tr key={order._id}>
                                    <td>{order._id}</td>
                                    <td></td>
                                    {/* <td><select bordered={false} onChange={(value) => handlechange(order._id, value)}>
                                    {status.map((s, i) => {
                                        <option>{s.status}</option>
                                    })}
                                </select></td> */}
                                    <td>{order.userId}</td>
                                    <td>{new Date(order.createdAt).toLocaleString()}</td>
                                    <td>{`${order.shippingAddress.firstName} ${order.shippingAddress.lastName}`}</td>
                                    <td>{order.shippingAddress.email}</td>
                                    <td>{order.shippingAddress.phoneNumber}</td>
                                    <td>{order.shippingAddress.address}</td>
                                    <td>{order.shippingAddress.city}</td>
                                    <td>{order.shippingAddress.state}</td>
                                    <td>{order.shippingAddress.zipcode}</td>
                                    {order.cart.map((product, index) => (
                                        <React.Fragment key={index}>
                                            <td>{product.productName}</td>
                                            <td>{product.productPrice}</td>
                                            <td>{product.category}</td>
                                            <td>{product.count}</td>
                                        </React.Fragment>
                                    ))}
                                    <td>{order.status.success ? "success" : "pending"}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="15">No orders available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Orderlist;