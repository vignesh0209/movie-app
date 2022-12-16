import React from 'react';
import './styles/Footer.css';
import facebook from '../Assets/facebook.svg';
import instagram from "../Assets/instagram.svg";
import twitter from "../Assets/twitter.svg";
import app from "../Assets/app.svg";
import play from "../Assets/play.svg";


const Footer = () => {
  return (
    <>
      
        <div className="line"></div>
      <div className="footer">
        <div className="copyrights-heading">
          <p>
            Home | Terms and Conditions | Privacy Policy | Collection Statement
            | Help | Manage Account
          </p>
          <span>
            Copyright &copy; 2022 <strong>ELITE</strong> Streaming. All Rights
            Reserved.
          </span>
        </div>
        <div className="social">
          <div className="connect">
            <p>Connect With Us</p>
            <div className="social-icon">
              <img src={facebook} alt="facebook" />
              <img src={instagram} alt="instagram" />
              <img src={twitter} alt="twitter" />
            </div>
          </div>
          <div className="app">
            <p>ELITE Streaming App</p>
            <div className="app-img">
              <img src={play} alt="play-store" />
              <img src={app} alt="app-store" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer