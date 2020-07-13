import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import HeaderPage from "../../components/header";
import Template from "../../components/Template";
import SEO from "../../components/seo";
import ImageRow from "../../components/imagerow";
import Footer from "../../components/footer";
import PrevNext from "../../components/PrevNext";

const Unilag = () => (
  <div>
    <SEO title="University of Lagos Student Portal" />
    <HeaderPage />
    <Template
      text="USER EXPERIENCE CASE STUDY"
      title="University of Lagos Student Portal"
      roles="MY ROLE"
      list1="UX/UI"
      list2="Visual Design"
      list3="Website Design"
      list4="App Design"
      tools="TOOLS USED"
      list5="Adobe XD"
      list6="Adobe Photoshop"
      year="YEAR"
      text4="2020"
      description="The University of Lagos Student Portal is one 
      of the most vital tools needed by students of
      the university. It performs various functions
      ranging from payment of tuition and other fees
      to registration and editing of courses, balloting 
      for hostel accommodation and many more."
      description2=" My goal was to redesign the user interface of the portal to serve as a hub for all important information and resources needed by students
      on a day to day basis and to also implement new features and tools 
      to be used by the students for an easier and more
      reliable flow of important information. I also made the portal more accessible by creating a mobile app as most 
      students are usually on their mobile phones."
      links="View full case study here"
      link="https://medium.com/@areoladanielopeyemi/uxcasestudy-unilagportal-88b1b4d2f2f"
    />

    <ImageRow
      image1="https://res.cloudinary.com/areoladaniel-com/image/upload/v1589831019/student_portal_o9zeaf.jpg"
      image2="https://res.cloudinary.com/areoladaniel-com/image/upload/v1589403689/uxcasestudy0_qzhjib.jpg"
      image3="https://res.cloudinary.com/areoladaniel-com/image/upload/v1589403679/uxcasestudy4_jajzfw.jpg"
      image4="https://res.cloudinary.com/areoladaniel-com/image/upload/v1589403695/uxcasestudy6_iqqwku.jpg"
      image5="https://res.cloudinary.com/areoladaniel-com/image/upload/v1589404328/uxcasestudy5_kdzxyw.jpg"
      image6="https://res.cloudinary.com/areoladaniel-com/image/upload/v1589403679/uxcasestudy1_ck5ohe.jpg"
      image7="https://res.cloudinary.com/areoladaniel-com/image/upload/v1589403662/uxcasestudy2_dirssq.jpg"
      image8="https://res.cloudinary.com/areoladaniel-com/image/upload/v1589831864/uxcasestudy3_su10zk.jpg"
    />

    <LagFooter>
      <LagHead>REVIEW</LagHead>
      <LagText>
        "The new student portal design presents a massive upgrade from the
        existing portal. With the introduction of new features and
        functionalities and a more user-friendly interface, it addresses the
        needs of the student population and improves communication within the
        student community making student life easier."
      </LagText>
      <Link
        to="https://xd.adobe.com/view/7945b45e-ec36-4691-563d-6f87418a979c-0f74/"
        target="_blank"
        rel="noopener"
      >
        <LagLink>View App Prototype</LagLink>
      </Link>
    </LagFooter>

    <PrevNext
      prevlink="/projects/crux"
      prevproject="CRUX Fashion Store App"
      nextlink="/projects/designs"
      nextproject="Miscellaneous Designs"
    />
    <Footer />
  </div>
);

export default Unilag;

const LagFooter = styled.div`
  text-align: center;
  width: 600px;
  margin: 100px auto 50px auto;

  @media (max-width: 520px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
const LagHead = styled.h3`
  font-size: 22px;
  letter-spacing: 3px;
  margin-bottom: 20px;
  @media (max-width: 520px) {
    font-size: 18px;
    text-align: left;
    margin: 0px 0 10px 5%;
  }
`;
const LagText = styled.p`
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
const LagLink = styled.button`
  margin: 50px auto;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
`;
