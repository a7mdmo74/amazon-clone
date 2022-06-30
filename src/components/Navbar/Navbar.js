import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../assets/img/amazon_logo.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

import "./navbar.scss";
const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const cartLen = useSelector((state) => state.products.cart.length);
  return (
    <div className="amazon__navbar">
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-sm-around justify-content-between">
          <div className="amazon__logo">
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="amazon logo" />
            </Link>
          </div>
          <div className="amazon__navbar-search d-md-flex d-none">
            <input type="text" className="form-control" />
            <div className="search-icon">
              <SearchIcon />
            </div>
          </div>
          <div
            className={
              isToggle ? "amazon__navbar-collapse" : "d-none d-lg-flex"
            }
          >
            <ul className={isToggle ? "navbar-nav" : "navbar-nav flex-row"}>
              <li className="nav-item text-light">
                <span className="nav-item__first">Hello, Guest</span>
                <span className="nav-item__second"> Sign In</span>
              </li>
              <li className="nav-item text-light">
                <span className="nav-item__first">Returns</span>
                <span className="nav-item__second"> & Orders</span>
              </li>
              <li className="nav-item text-light">
                <span className="nav-item__first">Your</span>
                <span className="nav-item__second"> Prime</span>
              </li>
              <li>
                <span className="nav-item__cart">
                  <Badge badgeContent={cartLen} color="primary">
                    <Link to="/cart" className="text-light">
                      <ShoppingCartIcon />
                    </Link>
                  </Badge>
                </span>
              </li>
            </ul>
          </div>
          <div className="amazon__navbar-toggle d-block d-lg-none">
            <button
              className="btn togle-icon text-light"
              onClick={() => setIsToggle(!isToggle)}
            >
              <MenuIcon fontSize="large" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
