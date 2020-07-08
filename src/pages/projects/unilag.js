import React from "react";
import HeaderPage from "../../components/header";
import Template from "../../components/Template";
import SEO from "../../components/seo";
import ImageRow from "../../components/imagerow";
import Footer from "../../components/footer";

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

    <Footer />
  </div>
);

export default Unilag;
