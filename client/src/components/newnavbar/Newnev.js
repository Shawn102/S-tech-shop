import React from "react";
import "./newnav.css";
import navLogo from "../../assets/nav.jpg";

const Newnev = () => {
  return (
    <div className="new_nav">
      <div className="nav_data">
        <div className="left_data">
          <p>All</p>
          <p>Mobile</p>
          <p>Bestseller</p>
          <p>Fasion</p>
          <p>Customer Service</p>
          <p>Electronics</p>
          <p>Prime</p>
          <p>Today's deal</p>
          <p>Amazon Pay</p>
        </div>
        <div className="right_data">
          <img src={navLogo} alt="nav-data" />
        </div>
      </div>
    </div>
  );
};

export default Newnev;
