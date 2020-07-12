import React from "react";
import styled from "styled-components";
import "./layout.css";

const VideoRow = (props) => (
  <VideoWrapper>
    <Image src={props.image} alt="" />
    <Video
      src={props.video3}
      controls="controls"
      poster="https://res.cloudinary.com/areoladaniel-com/image/upload/v1594589632/GatsbyPortfolio/optimized/bookshelfph_fcvx5l.jpg"
    />
    <Image src={props.image5} alt="" />
    <Video
      src={props.video4}
      controls="controls"
      poster="https://res.cloudinary.com/areoladaniel-com/image/upload/v1594589629/GatsbyPortfolio/optimized/CinemaPh_ysivue.jpg"
    />
    <Video
      src={props.video2}
      controls="controls"
      poster="https://res.cloudinary.com/areoladaniel-com/image/upload/v1594495990/GatsbyPortfolio/NetflixPlaceholder_nrod15.png"
    />

    <Image src={props.image3} alt="" />
    <Image src={props.image4} alt="" />
    <Video
      src={props.video1}
      controls="controls"
      poster="https://res.cloudinary.com/areoladaniel-com/image/upload/v1594591761/Screenshot_2020-07-12_at_23.08.49_gx0umw.png"
    />
  </VideoWrapper>
);

export default VideoRow;

const VideoWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 0px 5px;
  max-width: 85%;
  margin: 70px auto 100px auto;
  animation: CardAnimation 500ms 1.6s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;

  @media (max-width: 720px) {
    max-width: 90%;
    margin-top: 30px;
    margin-bottom: 100px;
    align-items: flex-start;
  }
  @keyframes CardAnimation {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

const Video = styled.video`
  max-width: 100%;
  margin-bottom: 20px;
  vertical-align: middle;
  outline: none;
  @media (max-width: 720px) {
    margin-bottom: 5%;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-bottom: 20px;
  vertical-align: middle;

  @media (max-width: 720px) {
    margin-bottom: 5%;
  }
`;
