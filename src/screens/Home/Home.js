import React from "react";
import styles from "./Home.module.css";
import { ads, logo, gambar, profile, ads2 } from "../img";
import SlideItems from "../Slider/SlideItems";
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

      <div className={styles.responsive}>
      <SlideItems />
      <SlideItems />
      <Footer />
      </div>
    </div>
  );
}

export default Home;
