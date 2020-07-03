import React from "react"
import { Link } from "gatsby"
import "./success.css"
import logo from "../images/logoblack.svg"
import SEO from "../components/seo"

const SuccessPage = () => (
  <div>
    <SEO title="Thank you for reaching out!" />
    <div className="container2">
      <div className="brand2">
        <Link to="/" className="logo">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="section2">
        <h1>Thank you for reaching out! </h1>
        <h2>I'll get back to you within 1 -3 working days</h2>
        <Link to="/projects/">Meanwhile, view more of my projects!</Link>
      </div>
    </div>
  </div>
)

export default SuccessPage
