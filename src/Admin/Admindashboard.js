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
import Topdeal from './Dashpage/Topdeal';
import Chartbox from './Dashpage/Chartbox';
import Productbox from './Dashpage/Productbox';
import Totalrevenue from './Dashpage/Totalrevenue';
import Totalratio from './Dashpage/Totalratio';
import Totalvisit from './Dashpage/Totalvisit';
import Profileern from './Dashpage/Profileern'
import Piechart from './Dashpage/Piechart';
import Revenuechart from './Dashpage/Revenuechart';

function Admindashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
  };
  return (
    <div>
      <div className='user-sider'>
        <Layout>
          <Sider>
            <div className='logo'>
              <p className='lg-logo '>Home Decor</p>
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
              <NavLink className='admin-signout' onClick={handleLogout} to='/Login'><p>Sign Out</p></NavLink>
            </div>
          </Sider>
          <div className='dashbord'>
            <div className='dash box1'>
              <Topdeal />
            </div>
            <div className='dash box2'>
              <Chartbox />
            </div>
            <div className='dash box3'>
              <Totalrevenue />
            </div>
            <div className='dash box4'>
              <Piechart />
            </div>
            <div className='dash box5'>
              <Productbox />
            </div>
            <div className='dash box6'>
              <Totalratio />
            </div>
            <div className='dash box7'>
              <Revenuechart />
            </div>
            <div className='dash box8'>
              <Totalvisit />
            </div>
            <div className='dash box9'>
              <Profileern />
            </div>
          </div>
        </Layout>
      </div>
    </div>
  )
}

export default Admindashboard;