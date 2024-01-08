import React from "react";
import Linkedin from "./../../assets/images/linkedin.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Column">
        <h4>Contact Us</h4>
        <p>
          203 Elecon Chamber, Near Sakinaka Telephone Exchange, Kurla Andheri
          Road, Andheri, (E) Mumbai – 400 072
        </p>
        <p>
          +91 – 9820610943 <br />
          +91 – 8879836426
        </p>
        <a href="mailto:shravanidhamane@gmail.com">shravanidhamane@gmail.com</a>
      </div>
      <div className="Column2">
        <h4>Useful Links</h4>
        <a href="/">Home</a>
        <a href="/about-us">About Us</a>
        <a href="/projects">Projects</a>
        <a href="/services">Services</a>
        <a href="/career">Career</a>
        <a href="/contact-us">Contact Us</a>
      </div>
      <div className="Column3">
        <p>© 2023 Shravani Consultant.</p>
        <p>All Rights Reserved.</p>
        <a href="https://www.termsfeed.com/live/5d10959a-770b-448b-84e3-578c4058b694">
          Privacy Policy
        </a>
        <div className="Social_Media">
          <a
            href="https://www.linkedin.com/in/bahubali-dhamane-3420aa40/"
            alt="Linkedin Url"
          >
            <img src={Linkedin} alt="Linkedin Logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
