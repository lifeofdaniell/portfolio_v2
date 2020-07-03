import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import logo from "../images/logoblack.svg";
import bhicon from "../images/behance.svg";
import igicon from "../images/instagram.svg";
import lnicon from "../images/linkedin.svg";
import mdicon from "../images/medium.svg";
import twicon from "../images/twitter.svg";
import gticon from "../images/github.svg";

const MobileNavMenu = () => {
  const [menuOpen, toggleMenuOpen] = useState(false);

  return (
    <MenuBar>
      <MenuLogo>
        <Link to="../">
          <img className="logo" src={logo} width="40" alt="" />
        </Link>
      </MenuLogo>
      <MenuIconContainer>
        <MenuIcon menuOpen={menuOpen} onClick={() => toggleMenuOpen(!menuOpen)}>
          <div />
          <div />
          <div />
        </MenuIcon>
      </MenuIconContainer>
      <MenuLinksContainer menuOpen={menuOpen}>
        <MenuLinks menuOpen={menuOpen}>
          <ul>
            <li>
              <Link to="/projects">projects</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
          <IconGroup>
            <Link
              to="https://twitter.com/lifeofdaniell"
              target="_blank"
              rel="noopener"
            >
              <img src={twicon} alt="" />
            </Link>
            <Link
              to="https://instagram.com/lifeofdanielll"
              target="_blank"
              rel="noopener"
            >
              <img src={igicon} alt="" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/areola-daniel-11180115a"
              target="_blank"
              rel="noopener"
            >
              <img src={lnicon} alt="" />
            </Link>
            <Link
              to="https://medium.com/@areoladanielopeyemi"
              target="_blank"
              rel="noopener"
            >
              <img src={mdicon} alt="" />
            </Link>
            <Link
              to="https://www.behance.net/lifeofdaniell"
              target="_blank"
              rel="noopener"
            >
              <img src={bhicon} alt="" />
            </Link>
            <Link
              to="https://github.com/lifeofdaniell"
              target="_blank"
              rel="noopener"
            >
              <img src={gticon} alt="" />
            </Link>
          </IconGroup>
          <Foot>
            <p>
              © Areola Daniel 2020. Designed with <b>Adobe XD</b> and Built with{" "}
              <b>React.</b>
            </p>
          </Foot>
        </MenuLinks>
      </MenuLinksContainer>
    </MenuBar>
  );
};

export default MobileNavMenu;

const MenuBar = styled.header`
  display: none;
  @media (max-width: 720px) {
    padding: 40px 25px;
    height: 30px;
    width: 30px;
    top: 0;
    position: fixed;
    width: 100%;
    background: white;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const MenuLogo = styled.div`
  z-index: 11;
`;

const MenuIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const MenuIcon = styled.div`
  cursor: pointer;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 25px;
  z-index: 11;
  outline: none;

  div {
    width: 25px;
    height: 2px;
    background: black;
    border-radius: 5px;
    transform-origin: 1px;
    transition: opacity 500ms, transform 500ms;

    :first-child {
      transform: ${({ menuOpen }) =>
        menuOpen ? "rotate(45deg)" : "rotate(0)"};
    }

    :nth-child(2) {
      opacity: ${({ menuOpen }) => (menuOpen ? "0" : "1")};
      transform: ${({ menuOpen }) =>
        menuOpen ? "translateX(-20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ menuOpen }) =>
        menuOpen ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`;

const MenuLinksContainer = styled.nav`
  background: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  position: absolute;
  z-index: 5;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  transform: ${({ menuOpen }) =>
    menuOpen ? "translateY(0)" : "translateY(100%)"};
`;

const MenuLinks = styled.nav`
  @media (max-width: 330px) {
    top: 14%;
  }
  position: absolute;
  text-align: center;
  top: 15%;

  ul {
    width: 100%;
    margin: 0;

    li {
      list-style: none;

      :not(first-child) {
        margin-top: 50px;
        @media (max-width: 330px) {
          margin-top: 25px;
        }
      }

      a {
        @media (max-width: 330px) {
          font-size: 20px;
          letter-spacing: -1px;
        }
        text-decoration: none;
        color: black;
        font-size: 25px;
        font-weight: 600;
        letter-spacing: -1.5px;
      }
    }
  }
`;

const IconGroup = styled.div`
  margin: 40px auto 30px auto;
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
const Foot = styled.div`
  @media (max-width: 420px) {
    width: 45%;
  }
  margin: 20px auto;
  text-align: center;
  width: 35%;
  p {
    @media (max-width: 330px) {
      font-size: 12px;
    }
    text-align: center;
    font-size: 14px;
    font-weight: 300;
    letter-spacing: -0.5px;
  }
`;
