import React from "react";
import { Link } from "gatsby";
import PreFooter from "../components/prefooter";
import Footer from "../components/footer";
import "../styles/about.css";
import xd from "../images/xd.svg";
import iv from "../images/invision.svg";
import sk from "../images/sketch.svg";
import fg from "../images/figma.svg";
import html from "../images/html.svg";
import css from "../images/css.svg";
import tw from "../images/tailwind.svg";
import js from "../images/js.svg";
import vue from "../images/vue.svg";
import gs from "../images/gridsome.svg";
import react from "../images/react.svg";
import gatsby from "../images/gatsby.svg";
import SEO from "../components/seo";
import HeaderPage from "../components/header";

const AboutPage = () => (
  <div>
    <SEO title="About" />
    <HeaderPage />
    <div className="about">
      <h2>A Bit More About Me</h2>
      <h4>
        I'm Areola Daniel, a multifaceted designer based in Lagos, Nigeria who
        focuses on telling clients' stories visually by creating pixel perfect
        screen designs and beautiful images. I specialize in creating functional
        user interfaces and making the user experience as comfortable as
        possible.
      </h4>
      <img
        className="image"
        src="https://res.cloudinary.com/areoladaniel-com/image/upload/v1593794283/GatsbyPortfolio/optimized/bio_qwipuo.jpg"
        alt=""
      />
      <p>
        Over the past 3 years, I have expanded my areas of expertise from
        graphics design and photography to user interface and experience design
        and most recently, front-end development .
      </p>
    </div>
    <div className="tools">
      <h3> SOFTWARE {"&"} TECHNOLOGIES </h3>
      <p>
        Here are some of the design software packages, programming languages and
        frameworks that I use frequently. I'm always looking to learn new things
        everyday!
      </p>
      <div className="IconGroup2">
        <Link
          to="https://www.adobe.com/products/xd.html"
          target="_blank"
          rel="noopener"
        >
          <img src={xd} alt="" />
        </Link>
        <Link
          to="https://www.invisionapp.com/studio"
          target="_blank"
          rel="noopener"
        >
          <img src={iv} alt="" />
        </Link>
        <Link to="https://www.sketch.com/" target="_blank" rel="noopener">
          <img src={sk} alt="" />
        </Link>
        <Link to="https://www.figma.com/" target="_blank" rel="noopener">
          <img src={fg} alt="" />
        </Link>
        <Link
          to="https://www.w3schools.com/html/"
          target="_blank"
          rel="noopener"
        >
          <img src={html} alt="" />
        </Link>
        <Link
          to="https://www.w3schools.com/css/"
          target="_blank"
          rel="noopener"
        >
          <img src={css} alt="" />
        </Link>
        <Link to="https://tailwindcss.com/" target="_blank" rel="noopener">
          <img src={tw} alt="" />
        </Link>
        <Link
          to="https://www.w3schools.com/js/default.asp"
          target="_blank"
          rel="noopener"
        >
          <img src={js} alt="" />
        </Link>
        <Link to="https://vuejs.org/" target="_blank" rel="noopener">
          <img src={vue} alt="" />
        </Link>
        <Link to="https://gridsome.org/" target="_blank" rel="noopener">
          <img src={gs} alt="" />
        </Link>
        <Link to="https://reactjs.org/" target="_blank" rel="noopener">
          <img src={react} alt="" />
        </Link>
        <Link to="https://www.gatsbyjs.org/" target="_blank" rel="noopener">
          <img src={gatsby} alt="" />
        </Link>
      </div>
    </div>
    <div className="clients">
      <h3> EXPERIENCE {"&"} CLIENTS </h3>
      <p>
        I have established fruitful and lasting relationships with amazing
        clients, ranging from individuals to startups and non-profit
        organizations. For more details, view my résumé or head over to my{" "}
        <a
          href="https://www.linkedin.com/in/areola-daniel-11180115a"
          target="_blank"
        >
          LinkedIn profile.
        </a>
      </p>
      <a
        href="https://drive.google.com/file/d/1uPxUbj_6jTXP4cZFXrP5LOtJdocpyFHG/view?usp=sharing"
        className="resume"
      >
        View Résumé
      </a>
    </div>
    <PreFooter
      title="Let's Work Together!"
      text="Need a designer or a developer? I'm currently available to work on any project. I'll be happy to discuss new patnerships. Let's get in touch!"
    />
    <Footer />
  </div>
);

export default AboutPage;
