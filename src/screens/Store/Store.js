import React from "react";
import { logo, profile, search } from "../img/index";
import "./store.css";
import { Link } from "react-router-dom";
import Content from '../content.json'
import Footer from '../Footer/Footer'

export default function Store() {
  return (
    <>
    {/* Navbar */}
      <div className="navbar">
        <img src={logo} />

        <div className="middle">
          <Link to="/">
          <p>Home</p>
          </Link>
          <p>Store</p>
          <p>All Products</p>
        </div>

        <div className="right">
          
          <img src={profile} />
        </div>
      </div>

      {/* End Navbar */}

      {/* Content */}

      <div className="all-products">
        <h2>All Products</h2>
        <p>Semua produk disini sudah terverifikasi oleh ahlinya</p>
      </div>

      

      <div className="main-products">
      {/* <input type="search" placeholder="Search"/> */}
      <div className="products">
        {
          Content.map(content => {
            return(
              <div className="box">
                <img src={content.Img}/>
                <p>{content.Title}</p>
                <p>{content.Price}</p>
              </div>
            )
          })
        }
      </div>
      </div>

      {/* End Content */}

      {/* Footer */}
      <Footer/>
      {/* End Footer */}
    </>
  );
}
