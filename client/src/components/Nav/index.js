import React from "react";
import { Link } from "react-router-dom";

function Nav({handleInputChange}) {
  return (
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" href="/dashboard" onClick={handleInputChange}>Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/dashboard" onClick={handleInputChange}>Todays Expense</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/logout" onClick={handleInputChange}>Logout</a>
        </li>
      </ul>
  );
}

export default Nav;
