import React from "react";
import "./Footer.css";
import { whiteLogo } from "../img";
import {Facebook as FacebookIcon, Twitter as TwitterIcon, WhatsApp as WhatsAppIcon, Phone as PhoneIcon } from '@mui/icons-material/';



export default function () {
  return (
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">our services</a>
              </li>
              <li>
                <a href="#">privacy policy</a>
              </li>
              <li>
                <a href="#">affiliate program</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>get help</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">shipping</a>
              </li>
              <li>
                <a href="#">returns</a>
              </li>
              <li>
                <a href="#">order status</a>
              </li>
              <li>
                <a href="#">payment options</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>follow us</h4>
            <div class="social-links">
              <a href="#">
                <FacebookIcon/>
              </a>
              <a href="#">
                <TwitterIcon/>
              </a>
              <a href="#">
                <WhatsAppIcon/>
              </a>
              <a href="#">
                <PhoneIcon/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
