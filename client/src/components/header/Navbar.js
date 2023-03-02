import React, { useEffect, useState } from "react";
import "./Navbar.css";
import amazonLogo from "../../assets/amazonLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MyContextSupply } from "../../Context";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Rightheader from "./Rightheader";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LogoutIcon from "@mui/icons-material/Logout";
import "react-toastify/dist/ReactToastify.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { products } = useSelector((state) => state.getproductsdata);
  const { account, token, cartItems, totalItem, logoutUser } =
    MyContextSupply();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [liHidden, setLiHidden] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { fname, carts } = account && account;

  const toggleBtn = () => {
    setDrawerOpen((value) => !value);
  };

  const getText = (event) => {
    const values = event.target.value;
    setText(values);
    setLiHidden(false);
  };
  console.log(text);

  return (
    <header>
      <nav>
        <div className="left">
          <IconButton onClick={toggleBtn} className="hamburgur">
            <MenuIcon style={{ color: "white" }} />
          </IconButton>
          <Drawer open={drawerOpen} onClick={toggleBtn}>
            <Rightheader />
          </Drawer>
          <div className="navlogo">
            <Link to="/">
              <img
                src="https://png.monster/wp-content/uploads/2022/02/png.monster-764-370x370.png"
                alt=""
                className="nav-logo-s"
              />
            </Link>
          </div>
          <div className="nav_searchbaar">
            <input
              type="text"
              placeholder="Search your product"
              onChange={getText}
            />
            {/* search filter */}
            {text && (
              <List className="extrasearch" hidden={liHidden}>
                {products
                  .filter((product) => {
                    return product.title.longTitle
                      .toLowerCase()
                      .includes(text.toLowerCase());
                  })
                  .map((product) => {
                    return (
                      <ListItem key={product._id}>
                        <NavLink
                          to={`/getproductsone/${product.id}`}
                          onClick={() => {
                            setLiHidden(true);
                            setText("");
                          }}
                        >
                          {product.title.longTitle}
                        </NavLink>
                      </ListItem>
                    );
                  })}
              </List>
            )}
            {/* end of search filter method */}
          </div>
        </div>
        <div className="right">
          <div className="nav_btn">
            <NavLink to="/">Home</NavLink>
          </div>
          {token[0]?.token === undefined && (
            <div className="nav_btn">
              <NavLink to="/login">Signin</NavLink>
            </div>
          )}

          <NavLink to="/buynow">
            <span className="cart-speacing">
              <Badge
                badgeContent={cartItems.length !== 0 ? totalItem : 0 || "0"}
                color="primary"
              >
                <div className="cart_btn">
                  <ShoppingCartIcon id="icon" />
                </div>
              </Badge>
            </span>
          </NavLink>

          {account !== undefined ? (
            <Avatar
              className="avtar"
              style={{ background: "blue" }}
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              {fname && fname[0]?.toUpperCase()}
            </Avatar>
          ) : (
            <Avatar
              className="avtar"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            />
          )}
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {token[0]?.token !== undefined ? (
              <NavLink
                to="/personalinfo"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
                onClick={handleClose}
              >
                <MenuItem> My account</MenuItem>
              </NavLink>
            ) : (
              <MenuItem onClick={handleClose}>My account</MenuItem>
            )}

            {account && (
              <NavLink
                to="/buynow"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
                onClick={handleClose}
              >
                <MenuItem>Order to Purchase</MenuItem>
              </NavLink>
            )}
            {account && (
              <MenuItem
                onClick={() => {
                  handleClose();
                  logoutUser(navigate);
                }}
              >
                <LogoutIcon style={{ fontSize: "16px", marginRight: 3 }} />
                Logout
              </MenuItem>
            )}
          </Menu>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
