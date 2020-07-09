import React from "react";
import HeaderPage from "../../components/header";
import Template from "../../components/Template";
import SEO from "../../components/seo";
import Footer from "../../components/footer";
import VideoRow from "../../components/videos";

const Designs = () => (
  <div>
    <SEO title="Miscellaneous UI Designs" />
    <HeaderPage />
    <Template
      text="USER INTERFACE DESIGN"
      title="Miscellaneous Designs"
      roles="MY ROLE"
      list1="UX/UI"
      list3="UI Animation"
      list4="App Design"
      tools="TOOLS USED"
      list5="Adobe XD"
      list6="Sketch"
      list7="Invision Studio"
      year="YEAR"
      text4="2020"
      description="From recreations to animations, you can find a compilation of various single UI design shots, animations and videos below."
      description2="I will continue to update these designs as I post them on my social media accounts"
      links="Follow me on social media."
      link="https://www.twitter.com/lifeofdanielll"
    />

    <VideoRow
      video1="https://res.cloudinary.com/areoladaniel-com/video/upload/v1594316424/GatsbyPortfolio/optimized/First_Dribble_Shot_sr1wg6.mov"
      video2="https://res.cloudinary.com/areoladaniel-com/video/upload/v1594317689/GatsbyPortfolio/optimized/xdnetflix_2_dgf3l2.mp4"
    />

    <Footer />
  </div>
);

export default Designs;
