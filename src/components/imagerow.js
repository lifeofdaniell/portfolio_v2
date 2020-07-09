import React from "react";
import styled from "styled-components";
import "./layout.css";

const ImageRow = (props) => (
  <ImageRowWrapper>
    <ImageColumn>
      <Image src={props.column} alt="" />
    </ImageColumn>
    <ImageColumn>
      <Image src={props.column2} alt="" />
    </ImageColumn>
    <Image src={props.image1} alt="" />
    <Image src={props.image2} alt="" />
    <Image src={props.image3} alt="" />
    <Image src={props.image4} alt="" />
    <Image src={props.image5} alt="" />
    <Image src={props.image6} alt="" />
    <Image src={props.image7} alt="" />
    <Image src={props.image8} alt="" />
    <Image src={props.image9} alt="" />
    <Image src={props.image10} alt="" />
    <Image src={props.image11} alt="" />
    <Image src={props.image12} alt="" />
    <Image src={props.image13} alt="" />
    <Image src={props.image14} alt="" />
    <Image src={props.image15} alt="" />
  </ImageRowWrapper>
);

export default ImageRow;

const ImageRowWrapper = styled.div`
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 0px 5px;
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

const ImageColumn = styled.div`
  -ms-flex: 50%;
  flex: 50%;
  max-width: 50%;
  padding: 0px 5px;

  @media (max-width: 720px) {
    -ms-flex: 100%;
    flex: 100%;
    max-width: 100%;
    padding: 0px 0px;
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
