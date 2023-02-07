import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss"
const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="logo">
            <Link to={"/"}>
              <h1>Floral Studio</h1>
            </Link>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}> About us</NavLink>
              </li>
              <li>
                <NavLink to={"/portfolio"}>Portfolio</NavLink>
              </li>
              <li>
                <NavLink to={"/pricing"}>Pricing</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contacts</NavLink>
              </li>
              <li>
                <NavLink to={"/add-flowers"}>Add Flowers</NavLink>
              </li>
              <li>
                <NavLink to={"/wishlist"}>Wishlist</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
