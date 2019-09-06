import React from 'react';
import './Header.scss';
import Input from "./components/Input/Input";

const Header = () => {
  return (
    <div className='header'>
      <div className="header--container">
        <div className="logo">
          <span>US News</span>
        </div>
        <Input />
      </div>
    </div>
  )
}

export default Header;
