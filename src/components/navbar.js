import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import logo from "../images/logoblack.svg"

const NavBar = () => {
  const [background, setBackground] = useState(false)

  const navRef = useRef()

  navRef.current = background
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50
      if (navRef.current !== show) {
        setBackground(show)
      }
    }
    document.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const [padding, setPadding] = useState(false)

  const padRef = useRef()

  padRef.current = padding
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50
      if (padRef.current !== show) {
        setPadding(show)
      }
    }
    document.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <StyledHeader background={background} padding={padding}>
      <ul>
        <li>
          <Link to="../">
            <img src={logo} width="40" alt="" />
          </Link>
        </li>
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
    </StyledHeader>
  )
}

export default NavBar

const StyledHeader = styled.header`
@media (max-width:720px){
    display:none;
}
  position: fixed;
  top: 0;
  width: 100%;
  padding: ${({ padding }) => (padding ? "15px 0" : "50px 0")};
  z-index: 100;
  background: ${({ background }) =>
    background ? "rgba(255, 255, 255, 0.98)" : "rgba(255, 255, 255, 0.99)"};
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  ul {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(4, auto);
    align-items: center;
    justify-items: center;
  }

  li{
      list-style: none;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
   
      a {
        font-size 18px;
        color: rgb(133, 133, 133);

        :hover{
            color: black;
        }
      }

      :hover {
        transform: scale(1.25);
    }
  }
}

  

`
