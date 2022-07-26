import React from 'react';
import './Header.scss';
import { UserOutlined, BarsOutlined } from '@ant-design/icons';
const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <BarsOutlined />
        <h5>
          Gear Focus Admin <i className="fa-regular fa-bell"></i>
        </h5>
      </div>

      <div className="header-right">
        <UserOutlined />
      </div>
    </div>
  );
};

export default Header;
