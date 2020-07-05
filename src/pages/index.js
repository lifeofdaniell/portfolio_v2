import React from "react";
import logo from "../images/logoblack.svg";
import "../components/layout.css";
import { Link } from "gatsby";
import SEO from "../components/seo";

const IndexPage = () => (
  <div>
    <SEO title="Portfolio" />
    <div className="container">
      <div className="brand">
        <img src={logo} alt="" />
      </div>

      <div className="section1">
        <h1>Hi! I'm Areola Daniel</h1>
        <p className="designer">DESIGNER</p>
        <p className="developer">DEVELOPER</p>
        <p className="photographer">PHOTOGRAPHER</p>
        <p className="pc">PIXEL CONNOISSEUR</p>
      </div>

      <div className="section2">
        <p>
          I love creating beautiful and functional user interfaces with the most
          comfortable user experience.
        </p>
      </div>
      <div className="links">
        <Link to="/projects">SEE MY WORK</Link>
      </div>
    </div>
  </div>
);

export default IndexPage;
