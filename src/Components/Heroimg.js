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
          <a href="https://docs.google.com/document/d/1DN4CgwQ-I4vP7Ee6Gckmy1BfTk2pksSzgtIb56a44RA/edit?usp=sharing" className="btn btn-light" target="blank" rel="noopener noreferrer">
  Resume
</a>

        </div>
      </div>
    </div>
  );
};

export default Heroimg;
