import React from "react";
import "./Navbar.css";
import { AiFillPhone, AiOutlineCiCircle, AiOutlineClockCircle } from "react-icons/ai"
import { BsChatSquareDots } from "react-icons/bs"

const Navbar = () => {
  return <div className='navbar'>
    <div className="navbar-left">
      <BsChatSquareDots />
      <h2>WEEKAWAY</h2>
    </div>
    <div className="navbar-right">
      <div className="time">
        <AiOutlineClockCircle />
        <p> 9AM - 5PM </p>
      </div>
      <div className="contact">
        <AiFillPhone />
        <p>1-333-556-32-1</p>
      </div>
      <div className="button">
        <button>Get a Free Quote</button>
      </div>
    </div>
  </div>;
};

export default Navbar;
