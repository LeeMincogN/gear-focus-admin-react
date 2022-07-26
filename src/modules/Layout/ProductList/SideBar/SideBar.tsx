import React, { useRef, useState } from 'react';
import './SideBar.scss';
import { Button, Layout, Menu, MenuProps } from 'antd';
import { TagOutlined, CheckCircleOutlined, ScissorOutlined, UserOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
type MenuItem = Required<MenuProps>['items'][number];
const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const history = useHistory();

  const breakPoint = () => {
    if (!collapsed) setCollapsed(!collapsed);
  };
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const keyRef = useRef(0);
  const getKey = () => {
    keyRef.current = keyRef.current + 1;
    return keyRef.current;
  };
  const MenuItems: MenuItem[] = [
    {
      label: 'Catalog',
      key: getKey(),
      icon: <TagOutlined />,
      children: [
        {
          label: 'Products',
          key: getKey(),
          onClick: () => history.push('/pages/products/manage-product'),
        },
      ],
    },
    {
      label: 'User',
      key: getKey(),
      icon: <UserOutlined />,
      children: [
        {
          label: 'User list',
          key: getKey(),
          onClick: () => history.push('/pages/user/manage-user'),
        },
      ],
    },
  ];
  return (
    <div className="sidebar">
      <Menu defaultSelectedKeys={['1']} mode="inline" theme="dark" items={MenuItems} />
    </div>
  );
};

export default SideBar;
