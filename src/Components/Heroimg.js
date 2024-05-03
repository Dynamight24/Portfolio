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
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/Skills" className="btn btn-light">
            {" "}
            Skills{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
