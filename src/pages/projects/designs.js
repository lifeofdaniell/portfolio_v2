import React from "react";
import HeaderPage from "../../components/header";
import Template from "../../components/Template";
import SEO from "../../components/seo";
import Footer from "../../components/footer";
import VideoRow from "../../components/videos";
import PrevNext from "../../components/PrevNext";

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
      links="Follow me on social media."
      link="https://www.twitter.com/lifeofdaniell"
    />

    <VideoRow
      image1="https://res.cloudinary.com/areoladaniel-com/image/upload/v1594477971/GatsbyPortfolio/optimized/Chelsea_xez5bf.jpg"
      image2="https://res.cloudinary.com/areoladaniel-com/image/upload/v1594477968/GatsbyPortfolio/optimized/Arsenal_itrmui.jpg"
      image3="https://res.cloudinary.com/areoladaniel-com/image/upload/v1594477970/GatsbyPortfolio/optimized/Liverpool_yftp7q.jpg"
      image4="https://res.cloudinary.com/areoladaniel-com/image/upload/v1594477980/GatsbyPortfolio/optimized/Spurs_mdngbe.jpg"
      image6="https://res.cloudinary.com/areoladaniel-com/image/upload/v1594477982/GatsbyPortfolio/optimized/ManCity_hklyxs.jpg"
      video1="https://res.cloudinary.com/areoladaniel-com/video/upload/v1594332780/GatsbyPortfolio/optimized/EPL_ikrbmh.mp4"
      video2="https://res.cloudinary.com/areoladaniel-com/video/upload/v1594317689/GatsbyPortfolio/optimized/xdnetflix_2_dgf3l2.mp4"
      image="https://res.cloudinary.com/areoladaniel-com/image/upload/v1594476019/GatsbyPortfolio/optimized/bookshelVES_vrttnv.jpg"
      video3="https://res.cloudinary.com/areoladaniel-com/video/upload/v1594589781/GatsbyPortfolio/optimized/BookShelfUI_znjzcc.mp4"
      image5="https://res.cloudinary.com/areoladaniel-com/image/upload/v1594589626/GatsbyPortfolio/optimized/bookshelf_yi4d9o.jpg"
      video4="https://res.cloudinary.com/areoladaniel-com/video/upload/v1594589787/GatsbyPortfolio/optimized/CinemassUI_s95zwi.mp4"
    />

    <PrevNext
      prevlink="/projects/unilag"
      prevproject="University of Lagos Students' Portal"
      nextlink="/projects/wecare"
      nextproject="WeCare Charity Organisation Website"
    />
    <Footer />
  </div>
);

export default Designs;
