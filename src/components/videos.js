import React from "react";
import styled from "styled-components";
import "./layout.css";

const VideoRow = (props) => (
  <VideoWrapper>
    <Video src={props.video1} controls="controls" />
    <Video src={props.video2} controls="controls" />
    <Video src={props.video3} />
    <Video src={props.video4} />
    <Video src={props.video5} />
    <Video src={props.video6} />
    <Video src={props.video7} />
    <Video src={props.video8} />
    <Video src={props.video9} />
    <Video src={props.video10} />
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
