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
          <a href="https://drive.google.com/file/d/1AEyt296Ay39mq67qIs3mOCgtfJe1QzW7/view?usp=drive_link" className="btn btn-light" target="blank" rel="noopener noreferrer">
  Resume
</a>

        </div>
      </div>
    </div>
  );
};

export default Heroimg;
