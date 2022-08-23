import React from "react";
import styles from './Home.module.css'
import { Link } from "react-router-dom";
import {ads, logo, gambar, profile, ads2} from '../img'
import {Box, Paper, Grid} from '@mui/material'

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src={logo}/>
        </div>

        <div className={styles.middle}>
          <Link to=""><p>About</p></Link>
          <p>Contact</p>
          <p >Store</p>
        </div>

        <div className={styles.right}>
          <img src={profile}/>
        </div>
      </div>

      <div className={styles.banner}>
        <div className={styles.banner_content}>
        <h1>Check Out All Products</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        <button className={styles.banner_btn}>
          More
        </button>
        </div>
      </div>

      <div className={styles.ads}>
        <div className={styles.ads_head}>
        <h1>Judul</h1>
        <p>This is an ads page</p>
        </div>
        <div className={styles.ads_img}>
        <img src={ads}/>
        <img src={ads2}/>
        </div>
      </div>

      <div className={styles.carousel}>
        <div className={styles.carousel_head}>
          <h1>Judul</h1>
          <p>This is an carousel page</p>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
