import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div>
      <nav class="navbar navbar-expand navbar-light bg-light">
        <ul class="nav navbar-nav">
          <li class="nav-item active">
            <Link class="nav-link" to="/">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/workshops">
              Workshops List
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
