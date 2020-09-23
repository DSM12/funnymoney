import React from "react";
import { slide as Menu } from "react-burger-menu";
import './styles.css';

export default props => {
  return (
    <Menu id="sidebar">
      <a className="NavMenu" href="/">
        Home
      </a>

      <a className="NavMenu" href="/dashboard">
        Dashboard
      </a>
    </Menu>
  );
};