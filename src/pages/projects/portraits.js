import React from "react";
import HeaderPage from "../../components/header";
import Template from "../../components/Template";
import SEO from "../../components/seo";

const Portraits = () => (
  <div>
    <SEO title="Portraits" />
    <HeaderPage />
    <Template
      text="PHOTOGRAPHY"
      title="Portraits"
      roles="MY ROLE"
      list1="Portrait Photography"
      list2="Photo Editing"
      year="YEAR"
      text3="2018-2020"
      description="You can find below a selection of expertly curated images that draw attention to the subject of interest while incorporating aspects of their personality with a high degree of attention to detail, telling a different story with each image."
      description2="RAW images from Canon EOS200D with the EF-S18-55mm f/3.5-5.6 III and EF50mm f/1.8STM lens."
    />
  </div>
);

export default Portraits;
