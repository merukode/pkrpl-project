import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { ads, logo, gambar, profile, ads2 } from "../img";
import Sliders from "../Slider/Slider";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src={logo} />
        </div>

        <div className={styles.middle}>
          <p>About</p>
          <p>Contact</p>
          <Link to="/store">
          <p>Store</p>
          </Link>
        </div>

        <div className={styles.right}>
          <img src={profile} />
        </div>
      </div>

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
