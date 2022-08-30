import { Search } from "@mui/icons-material";
import React from "react";
import { logo, profile, search } from "../img/index";
import "./Store.css";

export default function Store() {
  return (
    <>
    {/* Navbar */}
      <div className="navbar">
        <img src={logo} />

        <div className="middle">
          <p>Home</p>
          <p>Store</p>
          <p>All Products</p>
        </div>

        <div className="right">
          <input type="search" placeholder={search}/>
          <img src={profile} />
        </div>
      </div>

      {/* End Navbar */}

      {/* Content */}

      <div className="all-products">
        <h2>All Products</h2>
        <p>Semua produk disini sudah terverifikasi oleh ahlinya</p>
      </div>

      {/* End Content */}
    </>
  );
}
