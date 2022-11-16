import React from "react";
import "./Footer.css";
import { whiteLogo } from "../img";
import {Facebook as FacebookIcon, Twitter as TwitterIcon, WhatsApp as WhatsAppIcon, Phone as PhoneIcon, Instagram as InstagramIcon } from '@mui/icons-material/';



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
            </ul>
          </div>
          <div class="footer-col">
            <h4>follow us</h4>
            <div class="social-links">
              <a href="https://wa.link/dmhgdh" target="blank">
                <WhatsAppIcon/>
              </a>
              <a href="https://www.instagram.com/nicastore_id/" target="blank">
                <InstagramIcon/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
