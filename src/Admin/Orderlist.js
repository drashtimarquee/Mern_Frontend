import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { Table } from 'antd';

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

    const handleStatusChange = async (orderId, newStatus) => {
        try {
            // Update the status in the state
            const updatedOrders = orders.map(order => {
                if (order._id === orderId) {
                    return { ...order, status: newStatus };
                }
                return order;
            });
            setOrders(updatedOrders);
            await axios.put(`http://localhost:1202/updateOrderStatus/${orderId}`, { status: newStatus });
        } catch (error) {
            console.error("Error updating order status:", error);
        }
    };

    const Columns = [
        {
            title: "Order ID",
            dataIndex: "_id"
        },
        {
            title: "User ID",
            dataIndex: "userId"
        },
        {
            title: "Date",
            dataIndex: "createdAt",
            render: (date) => new Date(date).toLocaleString()
        },
        {
            title: "Phn Number",
            dataIndex: ["shippingAddress", "phoneNumber"]
        },
        {
            title: "Address",
            dataIndex: ["shippingAddress", "address"]
        },
        {
            title: "City",
            dataIndex: ["shippingAddress", "city"]
        },
        {
            title: "State",
            dataIndex: ["shippingAddress", "state"]
        },
        {
            title: "Zipcode",
            dataIndex: ["shippingAddress", "zipcode"]
        },
        {
            title: "Product Name",
            dataIndex: "cart",
            render: cart => cart.map(product => product.productName).join(", ")
        },
        {
            title: "Price",
            dataIndex: "cart",
            render: cart => cart.map(product => product.productPrice).join(", ")
        },
        {
            title: "Category",
            dataIndex: "cart",
            render: cart => cart.map(product => product.category).join(", ")
        },
        {
            title: "Qnty",
            dataIndex: "cart",
            render: cart => (cart.map(product => (<div>{product.count}</div>))
            )
        },
        {
            title: "Delivery status",
            dataIndex: "status",
            render: (status, record) => (
                <select defaultValue={status} onChange={e => handleStatusChange(record._id, e.target.value)}>
                    <option value="pending">Pending</option>
                    <option value="success">Success</option>
                </select>
            )
        }
    ];

    return (
        <div>
            <div >
                <NavLink to="/Dashboard/admin" className="icon-link"><ArrowLeftOutlined className='user-icon' /></NavLink>
                <h1 className='userlist'>ALL ORDER LIST</h1>
                <div className='mt-4'>
                    <Table columns={Columns} dataSource={orders} />
                </div>
            </div>
        </div>
    );
}

export default Orderlist;