import React from "react";
import "./footer.css";
import gpt3Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step into the future before others
        </h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="" />
          <p>thecoderwiz Sagar, All Rights Reserved</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Terms & Conditions</h4>
          <p>Privacy Policy</p>
          <p>Social Media</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>thecoderwiz</p>
          <p>+91 8420928825</p>
          <p>sagarghosh0610@gamil.com</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p> &copy; 2023 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
