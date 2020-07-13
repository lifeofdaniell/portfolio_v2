import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledLink = styled((props) => <Link {...props} />)`
  text-decoration: none;
  position: relative;
  color: inherit;
  display: block;
  line-height: 1em;

  :hover {
    .spantitle1 {
      :after {
        width: 100%;
      }
    }
    .spantext1 {
      visibility: visible;
      opacity: 1;
      transform: translate3d(0, 12px, 0);
    }
  }
  @media (max-width: 520px) {
    :hover {
      .spantext1 {
        visibility: hidden;
        opacity: 0;
      }
    }
  }
`;

const PrevNext = (props) => (
  <Container>
    <Previous>
      <StyledLink to={props.prevlink}>
        <SpanTitle className="spantitle1">Previous Project</SpanTitle>
        <SpanText className="spantext1">{props.prevproject}</SpanText>
      </StyledLink>
    </Previous>
    <Next>
      <StyledLink to={props.nextlink}>
        <SpanTitle2 className="spantitle1"> Next Project </SpanTitle2>
        <SpanText className="spantext1">{props.nextproject}</SpanText>
      </StyledLink>
    </Next>
  </Container>
);

export default PrevNext;

const Container = styled.div`
  margin: 30px 0 150px 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: -1px;
  position: relative;
  color: inherit;

  @media (max-width: 520px) {
    width: 80%;
    justify-content: space-between;
    margin: 30px auto 70px auto;
    font-size: 16px;
  }
`;
const Previous = styled.div`
  width: 50%;
  padding: 0 3% 0 27%;
  @media (max-width: 520px) {
    width: 80%;
    padding: 0 0% 0 0%;
  }
`;
const Next = styled.div`
  width: 50%;
  padding: 0 27% 0 3%;
  @media (max-width: 520px) {
    width: 80%;
    padding: 0 0% 0 10%;
  }
`;

const SpanTitle = styled.span`
  padding-bottom: 20px;
  position: relative;
  display: block;
  border-bottom: 2px solid currentColor;

  :after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    bottom: -5px;
    height: 4px;
    width: 60%;
    background-color: currentColor;
    transition: width 0.25s ease;
  }
`;
const SpanTitle2 = styled.span`
  padding-bottom: 20px;
  position: relative;
  display: block;
  border-bottom: 2px solid currentColor;

  :after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: -5px;
    height: 4px;
    width: 60%;
    background-color: currentColor;
    transition: width 0.25s ease;
  }

  :hover {
    :after {
      width: 100%;
    }
  }
`;
const SpanText = styled.span`
  padding-top: 12px;
  line-height: 1;
  letter-spacing: -1px;
  font-size: 24px;
  position: absolute;
  left: 0;
  transform: translate3d(0, -12px, 0);
  width: 100%;
  cursor: default;
  opacity: 0;
  visibility: hidden;
  transition: transform 0.25s ease, opacity 0.25s ease;
  transition-delay: 0s;
  word-wrap: break-word;
`;
