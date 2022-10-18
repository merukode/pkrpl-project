import React from "react";
import "./Detail.css";
import { persona } from "../img/index";

function Detail() {
  return (
    <div className="main-container">
      <div className="detail">
        <div className="detail-img">
          <img src={persona} />
        </div>

        <div className="detail-text">
          <p className="poster">POSTER FOR MEN</p>
          <h1>A4 SIZE POSTER PHANTOM THIEVES PERSONA 5</h1>
          <div className="price">
            <p>RP.80.000</p>
          </div>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </p>

          <div className="button-top">
            <p>BUY NOW</p>
          </div>

          <div className="button-bottom">
            <p>ADD TO CART</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
