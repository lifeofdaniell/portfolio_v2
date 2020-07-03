import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import "./projects.css"
import Card1 from "../components/card"
import Card2 from "../components/card2"
import Card3 from "../components/card3"
import Card4 from "../components/card4"
import PreFooter from "../components/prefooter"
import Footer from "../components/footer"
import HeaderPage from "../components/header"

const Projects = () => (
  <div>
    <SEO title="Projects" />
    <HeaderPage />
    <div className="Cards">
      <h2>
        Selected Works <b>🎯</b>
      </h2>
      <p className="brief">
        Cross-section of various projects I've embarked on. Enjoy!
      </p>
      <div className="CardGroup">
        <Link to="../crux/">
          <Card1
            title="CRUX Fashion Store App UI Design"
            text="UI Design"
            text2="2020"
            image={require("../images/cover2.jpg")}
          />
        </Link>
        <Link to="../crux/">
          <Card2
            title="University of Lagos Students' Portal"
            text="UX Case Study"
            text2="2020"
            image={require("../images/cover.jpg")}
          />
        </Link>
        <Link to="../crux/">
          <Card3
            title="weCare Charity Organisation Website"
            text="Front End Development"
            text2="2020"
            image={require("../images/cover3.jpg")}
          />
        </Link>
        <Link to="../crux/">
          <Card1
            title="Areola Daniel Personal Website"
            text="Front End Developement"
            text2="2020"
            image={require("../images/cover4.jpg")}
          />
        </Link>
        <Link to="../crux/">
          <Card1 image={require("../images/cover7.jpg")} />
        </Link>
      </div>
      <div className="Cards2">
        <h2>
          Photography Projects <b> 📸</b>
        </h2>
        <div className="CardGroup2">
          <Link to="../crux/">
            <Card4
              title="Events Excerpts"
              text="Photography"
              text2="2020"
              image={require("../images/cover88.jpg")}
            />
          </Link>
          <Link to="../crux/">
            <Card1
              title="Bloodtype: Matte Black"
              text="Photography"
              text2="2019"
              image={require("../images/cover5.jpg")}
            />
          </Link>
          <Link to="../crux/">
            <Card1
              title="Portraits"
              text="Photography"
              text2="2018-2020"
              image={require("../images/cover6.jpg")}
            />
          </Link>
        </div>
      </div>
    </div>
    <PreFooter
      title="Let's Work Together!"
      text="Need a designer or a developer? I'm currently available to work on any project. I'll be happy to discuss new opportunities. Let's get in touch!"
    />
    <Footer />
  </div>
)

export default Projects
