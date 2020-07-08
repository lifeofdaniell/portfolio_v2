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
      <Image src={props.image33} alt="" />
      <Image src={props.image34} alt="" />
      <Image src={props.image35} alt="" />
      <Image src={props.image36} alt="" />
      <Image src={props.image49} alt="" />
      <Image src={props.image50} alt="" />
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
      <Image src={props.image37} alt="" />
      <Image src={props.image38} alt="" />
      <Image src={props.image39} alt="" />
      <Image src={props.image40} alt="" />
      <Image src={props.image51} alt="" />
      <Image src={props.image52} alt="" />
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
      <Image src={props.image41} alt="" />
      <Image src={props.image42} alt="" />
      <Image src={props.image43} alt="" />
      <Image src={props.image44} alt="" />
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
      <Image src={props.image45} alt="" />
      <Image src={props.image46} alt="" />
      <Image src={props.image47} alt="" />
      <Image src={props.image48} alt="" />
      <Image src={props.image53} alt="" />
      <Image src={props.image54} alt="" />
      <Image src={props.image55} alt="" />
      <Image src={props.image56} alt="" />
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
  margin: 70px auto 140px auto;
  animation: CardAnimation 500ms 1.6s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;

  @media (max-width: 720px) {
    padding: 0px 0px;
    width: 90%;
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
const ImageGridColumn = styled.div`
  -ms-flex: 25%;
  flex: 25%;
  max-width: 25%;
  padding: 0px 5px;

  @media (max-width: 720px) {
    -ms-flex: 100%;
    flex: 100%;
    max-width: 100%;
    padding: 0px 0px;
  }
`;
const Image = styled.img`
  margin-top: 8px;
  vertical-align: middle;
  max-width: 100%;
  transition: all 0.3s ease;

  :hover {
    opacity: 0.7;
  }

  @media (max-width: 720px) {
    margin-bottom: 10px;
    vertical-align: middle;
    max-width: 100%;
  }
`;
