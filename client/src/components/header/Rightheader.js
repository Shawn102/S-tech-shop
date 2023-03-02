import React from "react";
import Avatar from "@mui/material/Avatar";
import { MyContextSupply } from "../../Context";
import { NavLink, useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import "./rightheader.css";

const Rightheader = () => {
  const { account, token, logoutUser } = MyContextSupply();
  const navigate = useNavigate();
  console.log(token);

  const { fname, carts } = account && account;

  return (
    <>
      <div className="rightheader">
        <div className="right_nav">
          {account !== undefined ? (
            <Avatar className="avtar" style={{ background: "blue" }}>
              {fname && fname[0]?.toUpperCase()}
            </Avatar>
          ) : (
            <Avatar className="avtar" />
          )}
          {account ? <h4>{fname}.</h4> : <h3></h3>}
        </div>
        <div className="nav_btn">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/buynow">Order to Purchase</NavLink>
          {token[0]?.token === undefined && <NavLink to="/login" />}

          <Divider />
          <div className="flag">
            <p>Setting</p>
          </div>

          {token[0]?.token !== undefined ? (
            <>
              <NavLink to="/personalinfo">Personal Info</NavLink>
              <button
                onClick={() => {
                  logoutUser(navigate);
                }}
                className="logout-btn"
              >
                <LogoutIcon />
                Logout
              </button>
            </>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </div>
      </div>
    </>
  );
};

export default Rightheader;
