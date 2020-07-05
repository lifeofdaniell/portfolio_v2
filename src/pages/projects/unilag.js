import React from "react";
import { Link } from "gatsby";
import HeaderPage from "../../components/header";
import Template from "../../components/Template";

const Unilag = () => (
  <div>
    <HeaderPage />
    <Template
      text="USER EXPERIENCE CASE STUDY"
      title="University of Lagos Student Portal"
      roles="MY ROLE"
      list1="UX/UI"
      list2="Visual Design"
      list3="Website Design"
      list4="App Design"
      year="YEAR"
      text3="2020"
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
    />
  </div>
);

export default Unilag;
