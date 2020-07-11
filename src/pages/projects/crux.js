import React from "react";
import styled from "styled-components";
import HeaderPage from "../../components/header";
import Template from "../../components/Template";
import SEO from "../../components/seo";
import Footer from "../../components/footer";
import ImageRow from "../../components/imagerow";
import { Link } from "gatsby";

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
      tools="TOOLS USED"
      list5="Adobe XD"
      list6="Adobe Photoshop"
      list7="Adobe Illustrator"
      year="YEAR"
      text4="2020"
      description="CRUX is an online fashion store that sells quality tailor made fashion wears and accessories. They are based in Lagos, Nigeria and have the ability of ship all around the world. They current mode of operation is mainly focused on social media marketing.
      "
      description2="Even though they have an operational website, they found the use of Instagram to sell and advertise their products way easier!
      In that light, I designed an app for the online fashion store to help sell their products and not rely on the use of social media."
      links="View full design on Behance"
      link="https://www.behance.net/gallery/98306165/CRUX-Fashion-Store-App"
    />

    <ImageRow
      image1="https://res.cloudinary.com/areoladaniel-com/image/upload/v1594300072/crux/1_etiuut.jpg"
      image2="https://res.cloudinary.com/areoladaniel-com/image/upload/v1594297748/crux/3_vjnjto.jpg"
      image3="https://res.cloudinary.com/areoladaniel-com/image/upload/v1594297755/crux/4_hpwdnz.gif"
      image4="https://res.cloudinary.com/areoladaniel-com/image/upload/v1594297748/crux/5_mxyfp1.jpg"
      image5="https://res.cloudinary.com/areoladaniel-com/image/upload/v1594297742/crux/7_ktskej.jpg"
      image6="https://res.cloudinary.com/areoladaniel-com/image/upload/v1594297744/crux/9_h08mx2.jpg"
      image7="https://res.cloudinary.com/areoladaniel-com/image/upload/v1594297742/crux/10_aas845.jpg"
    />

    <CruxFooter>
      <Link
        to="https://xd.adobe.com/view/94c96766-56dd-4009-6119-7aea9f437602-e2f8/"
        target="_blank"
        rel="noopener"
      >
        <CruxLink>View Prototype</CruxLink>
      </Link>
    </CruxFooter>
    <Footer />
  </div>
);

export default Crux;

const CruxFooter = styled.div`
  text-align: center;
  width: 600px;
  margin: 0px auto 50px auto;
  @media (max-width: 520px) {
    width: 100%;
  }
`;
const CruxText = styled.p`
  font-size: 16px;
  font-weight: 300;
  text-align: center;
  @media (max-width: 520px) {
    font-size: 15px;
    width: 92%;
    margin: 0px 0 0px 5%;
    text-align: left;
  }
`;
const CruxLink = styled.button`
  margin: 50px auto;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
`;
