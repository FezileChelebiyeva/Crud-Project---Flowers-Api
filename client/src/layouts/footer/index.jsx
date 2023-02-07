import React from "react";
import "./index.scss";
import logo from "../../assets/images/signature.png";
const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <div className="form">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="input">
              <input type="text" placeholder="Your Email" />
              <button>Send</button>
            </div>
          </div>
          <nav>
            <ul>
              <h4>About</h4>
              <li><a href="">About Us</a></li>
              <li><a href="">Our Partners</a></li>
              <li><a href="">Our Services</a></li>
            </ul>
            <ul>
              <h4>Contact</h4>

              <li><a href="">Contact Us</a></li>
              <li><a href="">FAQ Page</a></li>
              <li><a href="">About Me</a></li>
            </ul>
            <ul>
              <h4>Follow Us</h4>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
