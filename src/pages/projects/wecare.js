import React from "react";
import HeaderPage from "../../components/header";
import Template from "../../components/Template";
import SEO from "../../components/seo";
import Footer from "../../components/footer";
import styled from "styled-components";
import PrevNext from "../../components/PrevNext";

const Wecare = () => (
  <div>
    <SEO title="WeCare Charity Organisation Website" />
    <HeaderPage />
    <Template
      text="FRONT-END DEVELOPMENT"
      title="WeCare Charity Organisation Website"
      roles="MY ROLE"
      list1="UX/UI"
      list2="Visual Design"
      list3="Website Design"
      list4="Front End Development"
      tools="TOOLS USED"
      list5="Sketch"
      list6="VueJS (Gridsome)"
      list7="GitHub"
      list8="Netlify"
      year="YEAR"
      text4="2020"
      links="Live website coming soon!"
      description="The WeCare website features a friendly, welcoming design and high
      quality imagery in an easily navigable layout making it easy for 
      visitors and potential donors to find out more about the cause, 
      make donations, purchase merchandise and get involved."
      description2="  The website was designed to include a gallery of images from various past events
      organised by WeCare since they were founded in 2018 and an online store to purchase
      customised souvenirs like t-shirts, face-caps and hoodies with all revenue gotten from
      the sale of those items helping the organization's cause.
      The website includes valuable information about the charity organization
      ranging from how donations are gotten to the appropriate United Nations' Sustainable
      Development Goals the organization is focusing on. "
    />
    <Space>
      <span></span>
    </Space>

    <PrevNext
      prevlink="/projects/designs"
      prevproject="Miscellaneous Designs"
      nextlink="/projects/posterfolio"
      nextproject="Posters & Logos"
    />
    <Footer />
  </div>
);

export default Wecare;

const Space = styled.div`
  margin-bottom: 150px;
  @media (max-width: 520px) {
    margin-bottom: 70px;
  }
`;
