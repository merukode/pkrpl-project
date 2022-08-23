import React from "react";
import { Link } from "react-router-dom";
import '../Register/Register.css'

function Register() {
  return (
    <div className="container" onload="onload">
      <div className="top"></div>
      <div className="bottom"></div>
      <div className="center">
        <h2>Please Sign Up</h2>
        <div className="sign">
        <input className="email" type="email" placeholder="Email" />
        <input className="user" type="user" placeholder="Username"/>
        </div>
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <Link to='/' className="sign-btn">Sign Up</Link>
      </div>
    </div>
  );
}

export default Register;
