import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const FooterGroup = styled.div`
  margin: 150px 0 150px 0;
  display: grid;
  grid-template-rows: 100px auto;
  grid-gap: 0px;
  position: relative;
  @media (max-width: 420px) {
    margin: 100px 0 100px 0;
  }
`;
const PreFooters = styled.div`
  align-items: center;
  max-width: 650px;
  margin: 0 auto;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 290px auto;

  @media (max-width: 720px) {
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
  @media (max-width: 420px) {
    grid-gap: 20px;
  }
`;
const PreFooterTitle = styled.h3`
  color: black;
  position: relative;
  cursor pointer;
  font-size: 60px;
  letter-spacing: -3px;
  font-weight: 700;
  margin: 0;
  line-height: 1;
  padding-top: 25px;
  padding-bottom: 13px;
  border-bottom: 6px solid rgba(0, 0, 0, 1);
  transition: all 200ms;

  :after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: -12px;
    height: 6px;
    width: 60%;
    background-color: currentColor;
    transition: width 0.25s ease;
  }

  :hover {
    :after{
      width:100%;
    }
  }

  @media (max-width: 640px) {
    font-size: 40px;
  }
  @media (max-width: 420px) {
    font-size: 30px;
    border-bottom: 4px solid rgba(0, 0, 0, 1);
    padding-bottom: 11px;
    letter-spacing: -2.5px;

    :after{
      bottom: -8px;
      height: 5px;
    }
  }
  @media (max-width: 330px) {
    font-size: 30px;
    letter-spacing: -2px;
  }
`;
const PreFooterText = styled.p`
  color: black;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: -0.5px;
  line-height: 1.5;
  max-width: 330px
  padding-bottom: 25px;

  @media (max-width: 720px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    text-align: center;
    font-size: 15px;
    max-width: 400px;
  }
  @media (max-width: 420px) {
    max-width: 350px;
  }
  @media (max-width: 330px) {
    max-width: 300px;
  }
`;

const PreFooter = (props) => (
  <FooterGroup>
    <PreFooters>
      <Link to="/contact">
        <PreFooterTitle>{props.title}</PreFooterTitle>
      </Link>
      <PreFooterText>{props.text}</PreFooterText>
    </PreFooters>
  </FooterGroup>
);

export default PreFooter;
