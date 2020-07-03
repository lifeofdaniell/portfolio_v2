import React from "react"
import styled from "styled-components"

const CardGroup = styled.div`
  @media (max-width: 420px) {
    width: 350px;
    height: 350px;
  }
  @media (max-width: 375px) {
    width: 335px;
    height: 335px;
  }
  @media (max-width: 330px) {
    width: 280px;
    height: 280px;
  }
  width: 400px;
  height: 400px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-rows: 0fr 0fr;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  cursor: pointer;

  :hover {
    @media (max-width: 520px) {
      transform: none;
    }
    transform: translateY(-10px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
  }
`
const CardImage = styled.img`
  height: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
`
const CardTitle = styled.h3`
  @media (max-width: 420px) {
    font-size: 18px;
    width: 170px;
    margin: 20px 0 5px 20px;
  }
  @media (max-width: 330px) {
    font-size: 16px;
    width: 160px;
  }
  color: black;
  font-weight: 600;
  font-size: 20px;
  margin: 30px 0 5px 30px;
  letter-spacing: -1px;
  line-height: 1;
  width: 200px;
`
const CardText = styled.p`
  @media (max-width: 420px) {
    margin: 0px 0 0px 20px;
  }
  @media (max-width: 330px) {
    width: 100px;
  }
  padding-top: 5px;
  color: black;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.5px;
  margin: 0 0 0px 30px;
`
const CardText2 = styled.p`
  @media (max-width: 420px) {
    margin: 0px 0 0px 20px;
  }
  padding-top: 5px;
  color: black;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.5px;
  margin: 0 0 0px 30px;
`

const Card1 = props => (
  <CardGroup>
    <CardImage src={props.image} />
    <CardTitle>{props.title}</CardTitle>
    <CardText>{props.text}</CardText>
    <CardText2>{props.text2}</CardText2>
  </CardGroup>
)

export default Card1
