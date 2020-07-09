import React from "react";
import HeaderPage from "../../components/header";
import Template from "../../components/Template";
import SEO from "../../components/seo";
import Footer from "../../components/footer";
import ImageRow from "../../components/imagerow";

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
    <Footer />
  </div>
);

export default Crux;
