import React from "react";
import styled from "styled-components";
import "./layout.css";

const ImageRow = (props) => (
  <ImageRowWrapper>
    <Image src={props.image1} alt="" width="2000" />
    <Image src={props.image2} alt="" width="2000" />
    <Image src={props.image3} alt="" width="2000" />
    <Image src={props.image4} alt="" width="2000" />
    <Image src={props.image5} alt="" width="2000" />
    <Image src={props.image6} alt="" width="2000" />
    <Image src={props.image7} alt="" width="2000" />
    <Image src={props.image8} alt="" width="2000" />
    <Image src={props.image9} alt="" width="2000" />
    <Image src={props.image10} alt="" width="2000" />
    <Image src={props.image11} alt="" width="2000" />
    <Image src={props.image12} alt="" width="2000" />
    <Image src={props.image13} alt="" width="2000" />
    <Image src={props.image14} alt="" width="2000" />
    <Image src={props.image15} alt="" width="2000" />
  </ImageRowWrapper>
);

export default ImageRow;

const ImageRowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 70px auto 140px auto;
  max-width: 85%;
  justify-content: center;
  align-items: center;
  animation: CardAnimation 500ms 1.6s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;

  @media (max-width: 720px) {
    max-width: 90%;
    margin-top: 50px;
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
const Image = styled.img`
  max-width: 100%;
  margin-bottom: 20px;
  vertical-align: middle;

  @media (max-width: 720px) {
    margin-bottom: 5%;
  }
`;
