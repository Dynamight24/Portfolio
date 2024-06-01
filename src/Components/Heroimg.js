import "./HeroimgStyles.css";
import React from "react";
import IntroImg from "../images/intro-bg.jpg";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";


const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Hi, I am Aayush</p>
        <h1> Full Stack Developer.</h1>
        <div className="btn-container">
          <Link to="/About" className="btn">
            About
          </Link>
          <a href="" className="btn btn-light" target="https://drive.google.com/file/d/1xrb9myggFOVBU2xVzrQkc7Gfr3rrNxS2/view?usp=drive_link" rel="noopener noreferrer">
  Resume
</a>

        </div>
      </div>
    </div>
  );
};

export default Heroimg;
