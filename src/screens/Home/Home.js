import React from "react";
import styles from "./Home.module.css";
import { sale, ads, logo, gambar, profile, ads2 } from "../img";
import SlideItems from "../Slider/SlideItems";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar"

function Home() {
  return (
    <div className={styles.container}>
      <Navbar/>
      <div className={styles.banner}>
        <div className={styles.banner_content}>
          <h1>Nicastore</h1>
          <p>
          Low-cost, high-quality Thrift.
          </p>
          <Link to="/store">
          <button  className={styles.banner_btn}>More</button>
          </Link>
        </div>
      </div>

      <div className={styles.ads}>
        <div className={styles.ads_head}>
          <h1>Promo</h1>
          <p>Best Offer Today</p>
        </div>
        <div className={styles.ads_img}>
          <img src={sale} />
        </div>
      </div>

      <div className={styles.responsive}>
      <SlideItems />
      <SlideItems />
      <Footer />
      </div>
    </div>
  );
}

export default Home;
