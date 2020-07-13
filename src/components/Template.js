import React from "react";
import styled from "styled-components";
import "./layout.css";
import { Link } from "gatsby";

const TemplateGroup = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  margin-top: 200px;
  margin-left: 10%;
  margin-right: 10%;
  align-items: center;

  @media (max-width: 720px) {
    margin-top: 120px;
    margin-left: 5%;
    margin-right: 0;
    align-items: center;
    grid-template-columns: 1fr;
    grid-gap: 20px;
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
const LeftTemp = styled.div``;
const LTHead = styled.h4`
  opacity: 0;
  color: grey;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 4px;
  margin-bottom: 15px;
  animation: CardAnimation 500ms 0.1s forwards cubic-bezier(0.2, 0.8, 0.2, 1);

  @media (max-width: 520px) {
    font-size: 10px;
  }
`;
const LTHead2 = styled.h4`
  opacity: 0;
  color: grey;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 4px;
  margin-bottom: 15px;
  animation: CardAnimation 500ms 0.4s forwards cubic-bezier(0.2, 0.8, 0.2, 1);

  @media (max-width: 520px) {
    font-size: 10px;
  }
`;
const LTHead3 = styled.h4`
  opacity: 0;
  color: grey;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 4px;
  margin-bottom: 15px;
  animation: CardAnimation 500ms 0.7s forwards cubic-bezier(0.2, 0.8, 0.2, 1);

  @media (max-width: 520px) {
    font-size: 10px;
  }
`;
const LTHead4 = styled.h4`
  opacity: 0;
  color: grey;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 4px;
  margin-bottom: 15px;
  animation: CardAnimation 500ms 1s forwards cubic-bezier(0.2, 0.8, 0.2, 1);

  @media (max-width: 520px) {
    font-size: 10px;
  }
`;
const LTlist = styled.ul`
  margin-top: 10px;
  color: black;
  letter-spacing: 0px;
  list-style: none;
  margin-bottom: 30px;
`;
const LT = styled.li`
  font-size: 15px;

  @media (max-width: 520px) {
    font-size: 15px;
  }
`;
const LTText = styled.p`
  margin-top: 10px;
  color: black;
  font-size: 15px;
  letter-spacing: 0px;
  font-weight: 300px;

  @media (max-width: 520px) {
    font-size: 15px;
  }
`;
const LTTitle = styled.h2`
  font-size: 50px;
  color: black;
  letter-spacing: -2px;
  width: 450px;
  line-height: 1;
  margin-top: 10px;
  margin-bottom: 30px;

  @media (max-width: 950px) {
    font-size: 40px;
    width: 350px;
  }
  @media (max-width: 520px) {
    font-size: 30px;
    width: 260px;
  }
`;
const RightTemp = styled.div`
  opacity: 0;
  animation: CardAnimation 500ms 1.3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
`;
const RTText = styled.div`
  color: black;
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 30px;

  @media (max-width: 520px) {
    font-size: 15px;
    width: 95%;
  }
`;

const RTLink = styled.a`
  color: black;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border-bottom: 1px solid black;

  @media (max-width: 520px) {
    font-size: 15px;
  }
`;

const Template = (props) => (
  <TemplateGroup>
    <LeftTemp>
      <LTHead>
        {props.text}
        <LTTitle>{props.title}</LTTitle>
      </LTHead>
      <LTHead2>
        {props.roles}
        <LTlist>
          <LT>{props.list1}</LT>
          <LT>{props.list2}</LT>
          <LT>{props.list3}</LT>
          <LT>{props.list4}</LT>
        </LTlist>
      </LTHead2>
      <LTHead3>
        {props.tools}
        <LTlist>
          <LT>{props.list5}</LT>
          <LT>{props.list6}</LT>
          <LT>{props.list7}</LT>
          <LT>{props.list8}</LT>
        </LTlist>
      </LTHead3>
      <LTHead4>
        {props.year}
        <LTText>{props.text4}</LTText>
      </LTHead4>
    </LeftTemp>
    <RightTemp>
      <RTText>{props.description}</RTText>
      <RTText>{props.description2}</RTText>
      <RTText>{props.description3}</RTText>
      <Link to={props.link} target="_blank" rel="noopener">
        <RTLink>{props.links}</RTLink>
      </Link>
    </RightTemp>
  </TemplateGroup>
);

export default Template;
