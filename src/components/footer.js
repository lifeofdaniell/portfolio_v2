import React from "react";
import { Link } from "gatsby";
import bhicon from "../images/behance.svg";
import igicon from "../images/instagram.svg";
import lnicon from "../images/linkedin.svg";
import mdicon from "../images/medium.svg";
import twicon from "../images/twitter.svg";
import gticon from "../images/github.svg";
import "./footer.css";

const Footer = () => (
  <div className="End">
    <div className="connect">
      <div className="mail">
        <h3>CONNECT WITH ME</h3>
        <a href="mailto:hello@areoladaniel.com" target="_blank" rel="noopener">
          E: <b>hello@areoladaniel.com</b>
        </a>
      </div>
      <div className="IconGroup">
        <Link
          to="https://twitter.com/lifeofdaniell"
          target="_blank"
          rel="noopener"
        >
          <img src={twicon} alt="" />
        </Link>
        <Link
          to="https://instagram.com/lifeofdanielll"
          target="_blank"
          rel="noopener"
        >
          <img src={igicon} alt="" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/areola-daniel-11180115a"
          target="_blank"
          rel="noopener"
        >
          <img src={lnicon} alt="" />
        </Link>
        <Link
          to="https://medium.com/@areoladanielopeyemi"
          target="_blank"
          rel="noopener"
        >
          <img src={mdicon} alt="" />
        </Link>
        <Link
          to="https://www.behance.net/lifeofdaniell"
          target="_blank"
          rel="noopener"
        >
          <img src={bhicon} alt="" />
        </Link>
        <Link
          to="https://github.com/lifeofdaniell"
          target="_blank"
          rel="noopener"
        >
          <img src={gticon} alt="" />
        </Link>
      </div>
    </div>
    <div className="foot">
      <p>
        © Areola Daniel 2020. Designed with <b>Adobe XD</b> and Built with{" "}
        <b>GatsbyJS.</b>
      </p>
    </div>
  </div>
);
export default Footer;
