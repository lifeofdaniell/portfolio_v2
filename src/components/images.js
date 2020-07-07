import React from "react";
import styled from "styled-components";
import "./layout.css";

const ImageGrid = (props) => (
  <ImageGridWrapper>
    <ImageGridColumn>
      <Image src={props.image1} alt="" />
      <Image src={props.image2} alt="" />
      <Image src={props.image3} alt="" />
      <Image src={props.image4} alt="" />
      <Image src={props.image17} alt="" />
      <Image src={props.image18} alt="" />
      <Image src={props.image19} alt="" />
      <Image src={props.image20} alt="" />
    </ImageGridColumn>
    <ImageGridColumn>
      <Image src={props.image5} alt="" />
      <Image src={props.image6} alt="" />
      <Image src={props.image7} alt="" />
      <Image src={props.image8} alt="" />
      <Image src={props.image21} alt="" />
      <Image src={props.image22} alt="" />
      <Image src={props.image23} alt="" />
      <Image src={props.image24} alt="" />
    </ImageGridColumn>
    <ImageGridColumn>
      <Image src={props.image9} alt="" />
      <Image src={props.image10} alt="" />
      <Image src={props.image11} alt="" />
      <Image src={props.image12} alt="" />
      <Image src={props.image25} alt="" />
      <Image src={props.image26} alt="" />
      <Image src={props.image27} alt="" />
      <Image src={props.image28} alt="" />
      <Image src={props.image28b} alt="" />
    </ImageGridColumn>
    <ImageGridColumn>
      <Image src={props.image13} alt="" />
      <Image src={props.image14} alt="" />
      <Image src={props.image15} alt="" />
      <Image src={props.image16} alt="" />
      <Image src={props.image29} alt="" />
      <Image src={props.image30} alt="" />
      <Image src={props.image31} alt="" />
      <Image src={props.image32} alt="" />
    </ImageGridColumn>
  </ImageGridWrapper>
);

export default ImageGrid;

const ImageGridWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 0px 5px;
  width: 85%;
  margin: 70px auto 150px auto;
  animation: CardAnimation 500ms 1.1s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;

  @media (max-width: 720px) {
    padding: 0px 0px;
    width: 90%;
    margin-top: 50px;
    margin-bottom: 50px;
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
const ImageGridColumn = styled.div`
  -ms-flex: 25%;
  flex: 25%;
  max-width: 25%;
  padding: 0px 5px;

  @media (max-width: 720px) {
    -ms-flex: 100%;
    flex: 100%;
    max-width: 100%;
    padding: 0 0;
  }
`;
const Image = styled.img`
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
  transition: all 0.3s ease;

  :hover {
    opacity: 0.7;
  }

  @media (max-width: 720px) {
    margin-bottom: 10px;
    vertical-align: middle;
    width: 100%;
  }
`;
