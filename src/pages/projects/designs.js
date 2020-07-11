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
      link="https://www.twitter.com/lifeofdaniell"
    />

    <VideoRow
      image1="https://res.cloudinary.com/areoladaniel-com/image/upload/v1594477971/GatsbyPortfolio/optimized/Chelsea_xez5bf.jpg"
      image2="https://res.cloudinary.com/areoladaniel-com/image/upload/v1594477968/GatsbyPortfolio/optimized/Arsenal_itrmui.jpg"
      image3="https://res.cloudinary.com/areoladaniel-com/image/upload/v1594477970/GatsbyPortfolio/optimized/Liverpool_yftp7q.jpg"
      image4="https://res.cloudinary.com/areoladaniel-com/image/upload/v1594477980/GatsbyPortfolio/optimized/Spurs_mdngbe.jpg"
      image5="https://res.cloudinary.com/areoladaniel-com/image/upload/v1594477982/GatsbyPortfolio/optimized/ManUtd_cfb0pe.jpg"
      image6="https://res.cloudinary.com/areoladaniel-com/image/upload/v1594477982/GatsbyPortfolio/optimized/ManCity_hklyxs.jpg"
      video1="https://res.cloudinary.com/areoladaniel-com/video/upload/v1594332780/GatsbyPortfolio/optimized/EPL_ikrbmh.mp4"
      video2="https://res.cloudinary.com/areoladaniel-com/video/upload/v1594317689/GatsbyPortfolio/optimized/xdnetflix_2_dgf3l2.mp4"
      image="https://res.cloudinary.com/areoladaniel-com/image/upload/v1594476019/GatsbyPortfolio/optimized/bookshelVES_vrttnv.jpg"
      video3="https://res.cloudinary.com/areoladaniel-com/video/upload/v1594476173/GatsbyPortfolio/optimized/BookAppUI_suducx.mp4"
    />

    <Footer />
  </div>
);

export default Designs;
