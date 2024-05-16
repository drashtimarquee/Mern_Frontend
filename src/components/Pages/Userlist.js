import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { Table } from 'antd';

function Userlist() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:1202/alluser");
      if (response.status === 200) {
        setUsers(response.data.user);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const columns = [
    {
      title: "Sno.",
      dataIndex: "index",
    },
    {
      title: "First Name",
      dataIndex: "Fname",
    },
    {
      title: "Last Name",
      dataIndex: "Lname",
    },
    {
      title: "Email",
      dataIndex: "Email",
    },
    {
      title: "Address",
      dataIndex: "Address",
    },
  ];

  const data = users.map((user, index) => ({
    ...user,
    index: index + 1,
  }));

  return (
    <div >
      <NavLink to="/Dashboard/admin" className="icon-link">
        <ArrowLeftOutlined className='user-icon' />
      </NavLink>
      <div className="mt-4">
        <h2 className="mb-4 text-center pb-3">USER LIST</h2>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
}

export default Userlist;