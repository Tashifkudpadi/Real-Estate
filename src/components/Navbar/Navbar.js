import React, { useState } from "react";
import { MenuData } from "../../data/NavMenuData";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components/macro";

import { FaBars } from "react-icons/fa";
import NavbarButton from "./NavbarButton";

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background: transparent;
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style:italic;
`;

const MenuBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
    // height: 40px;
    // width: 40px;
    // position: absolute;
    // top: 0;
    // right: 0;
    // transform: translate(-50%, 15);
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = (props) => {
  //   const [navbar, setNavbar] = useState(false);

  //   const changeColorHandler = () => {
  //     // console.log(window.scrollY);
  //     if (window.scrollY >= 100) {
  //       setNavbar(true);
  //     } else {
  //       setNavbar(false);
  //     }
  //   };

  //   window.addEventListener("scroll", changeColorHandler);
  return (
    <Nav>
      <Logo to="/">Welcome</Logo>
      <MenuBars onClick={props.toggle} />
      <NavMenu>
        {MenuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <NavbarButton onClick={props.onShowForm} />
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
