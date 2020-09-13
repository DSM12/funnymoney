import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu>
      <a className="NavMenu" href="/">
        Home
      </a>

      <a className="NavMenu" href="/dashboard">
        Dashboard
      </a>

      {/* <a className="NavMenu" href="/">
        Pizzas
      </a>

      <a className="NavMenu" href="/desserts">
        Desserts
      </a> */}
    </Menu>
  );
};