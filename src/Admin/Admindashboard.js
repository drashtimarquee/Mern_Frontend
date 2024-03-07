import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import {
  DashboardOutlined,
  UserOutlined,
  OrderedListOutlined,
} from '@ant-design/icons';
import { FaClipboardList } from "react-icons/fa";
import { Layout, Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { FaBorderAll } from "react-icons/fa";

function Admindashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
  };
  return (
    <div>
      {/* <div className='home-space2'></div> */}
      <div className='user-sider'>
        <Layout>
          <Sider>
            <div className='logo'>
              <span className='sm-logo '>HD</span>
              <span className='lg-logo '>Home Decor</span>
            </div>
            <div className='dash-link'>
              <Menu
                theme="dark"
                mode="inline"
                className='w-300'
                defaultSelectedKeys={['1']}
                onClick={({ key }) => {
                  if (key === 'Dashbord') {
                    navigate(key);
                  } else {
                    navigate(key);
                  }
                }}
                items={[
                  {
                    key: '/admin',
                    icon: <DashboardOutlined className='fs-4' />,
                    label: 'DASHBOARD',
                  },
                  {
                    key: 'users',
                    icon: <UserOutlined className='fs-4' />,
                    label: 'USER',
                    children: [
                      {
                        key: '/Dashboard/admin/Userlist',
                        icon: <UserOutlined className='fs-4' />,
                        label: 'USER LIST',
                      },
                    ]
                  },
                  {
                    key: 'product',
                    icon: <FaClipboardList className='fs-4' />,
                    label: 'PRODUCT',
                    children: [
                      {
                        key: '/Dashboard/admin/productlist',
                        icon: <FaClipboardList className='fs-4' />,
                        label: 'ALL PRODUCT',
                      },
                      {
                        key: '/Dashboard/admin/Addproduct',
                        icon: <FaClipboardList className='fs-4' />,
                        label: 'ADD PRODUCT',
                      },
                      {
                        key: '/Categ',
                        icon: <FaClipboardList className='fs-4' />,
                        label: 'PRODUCT CATEGORY',
                      },
                    ]
                  },
                  {
                    key: 'order',
                    icon: <FaBorderAll className='fs-4' />,
                    label: 'ORDER',
                    children: [
                      {
                        key: '/Dashboard/admin/Orderlist',
                        icon: <OrderedListOutlined className='fs-4' />,
                        label: 'ORDER LIST',
                      },
                    ]
                  },
                ]}
              />
              <NavLink className='admin-signout' onClick={handleLogout} to='/'><p>Sign Out</p></NavLink>
            </div>
          </Sider>
        </Layout>
      </div>
    </div>
  )
}

export default Admindashboard;