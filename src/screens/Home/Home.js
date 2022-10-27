import React from "react";
import styles from "./Home.module.css";
import { ads, logo, gambar, profile, ads2 } from "../img";
import Sliders from "../Slider/Slider";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar"

function Home() {
  return (
    <div className={styles.container}>
      <Navbar/>
      <div className={styles.banner}>
        <div className={styles.banner_content}>
          <h1>Check Out All Products</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <button className={styles.banner_btn}>More</button>
        </div>
      </div>

      <div className={styles.ads}>
        <div className={styles.ads_head}>
          <h1>Judul</h1>
          <p>This is an ads page</p>
        </div>
        <div className={styles.ads_img}>
          <img src={ads} />
          <img src={ads2} />
        </div>
      </div>

      <Sliders />
      <Sliders />
      <Footer />
    </div>
  );
}

export default Home;
