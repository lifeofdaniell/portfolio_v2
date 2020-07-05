import React from "react";
import { Link } from "gatsby";
import HeaderPage from "../../components/header";
import Template from "../../components/Template";
import SEO from "../../components/seo";

const Crux = () => (
  <div>
    <SEO title="CRUX Fashion Store App" />
    <HeaderPage />
    <Template
      text="USER INTERFACE DESIGN"
      title="CRUX Fashion Store App"
      roles="MY ROLE"
      list1="UX/UI"
      list2="Visual Design"
      list3="Icon Design"
      list4="App Design"
      year="YEAR"
      text3="2020"
      description="CRUX is an online fashion store that sells quality tailor made fashion wears and accessories. They are based in Lagos, Nigeria and have the ability of ship all around the world. They current mode of operation is mainly focused on social media marketing.
      "
      description2="Even though they have an operational website, they found the use of Instagram to sell and advertise their products way easier!
      In that light, I designed an app for the online fashion store to help sell their products and not rely on the use of social media."
    />
  </div>
);

export default Crux;
