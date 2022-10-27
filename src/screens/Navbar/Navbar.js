import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { logo,profile} from "../img";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { IconButton } from "@mui/material";


function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
        <img src={logo} />
        </Link>
      </div>

      <div className="middle">
        <p>About</p>
        <p>Contact</p>
        <Link to="/store">
          <p>Store</p>
        </Link>
      </div>
      <div className="right">
        <Link to="/cart">
       <ShoppingCartOutlinedIcon/>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
