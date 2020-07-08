import React from "react";
import HeaderPage from "../../components/header";
import Template from "../../components/Template";
import SEO from "../../components/seo";
import Footer from "../../components/footer";
import ImageGrid from "../../components/imagegrid";

const Matteblack = () => (
  <div>
    <SEO title="BloodType: MatteBlack" />
    <HeaderPage />
    <Template
      text="PHOTOGRAPHY"
      title="Bloodtype: MatteBlack"
      roles="MY ROLE"
      list1="Conceptual Photography"
      list2="Photo Editing"
      tools="TOOLS USED"
      list5="Adobe Lightroom"
      list6="Adobe Photoshop"
      year="YEAR"
      text4="2019"
      description="December 2019; I headed out to the beach with some friends, my camera, a white fabric and an oval shaped mirror. I hadn't figured out exactly what I wanted to do with those equipment but I knew once I got to the beach and relaxed a little with J.Cole in the background, it would hit me. 3 hours and a broken mirror later, we created magic!"
      description2="This series of images showcases how boldly the dark skin stands out from any white material, surface or fabric. "
      description3="RAW images from Canon EOS200D with the EF-S18-55mm f/3.5-5.6 III and EF50mm f/1.8STM lens."
    />

    <ImageGrid
      image1="https://res.cloudinary.com/areoladaniel-com/image/upload/v1589735399/adekemi4_mc9gda.jpg"
      image2="https://res.cloudinary.com/areoladaniel-com/image/upload/v1589402425/amos2_m5mzd5.jpg"
      image3="https://res.cloudinary.com/areoladaniel-com/image/upload/v1589402336/adekemi5_u31mgb.jpg"
      image5="https://res.cloudinary.com/areoladaniel-com/image/upload/v1589402398/adekemi_2_lhdgpt.jpg"
      image6="https://res.cloudinary.com/areoladaniel-com/image/upload/v1589735107/adekemi3_oxahik.jpg"
      image9="https://res.cloudinary.com/areoladaniel-com/image/upload/v1589402394/amos6_xpkc23.jpg"
      image10="https://res.cloudinary.com/areoladaniel-com/image/upload/v1589402406/adekemi6_zuzxbh.jpg"
      image11="https://res.cloudinary.com/areoladaniel-com/image/upload/v1589402346/adekemi7_y1plga.jpg"
      image13="https://res.cloudinary.com/areoladaniel-com/image/upload/v1589402371/amos4_c4ugxh.jpg"
      image14="https://res.cloudinary.com/areoladaniel-com/image/upload/v1589402311/0003_ywezoo.jpg"
      image15="https://res.cloudinary.com/areoladaniel-com/image/upload/v1589402363/amos3_px9z8n.jpg"
    />
    <Footer />
  </div>
);

export default Matteblack;
