import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

/* ================= COLORS ================= */
const PrimaryColor = "#ffcc00"; 
const DarkText = "#101c38";     
const Border = "#e2e8f0";       
const White = "#ffffff";
const TextGray = "#333333";     

/* ================= HEADER ================= */
const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 300;

  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  border-bottom: 1px solid ${Border};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;

const Inner = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
`;

/* ================= LOGO ================= */
const LogoWrapper = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const LogoImg = styled.img`
  height: 40px;
  width: auto;
  display: block;
`;

/* ================= NAV ================= */
const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 900px) {
    position: fixed;
    top: 55px; /* Exact height of header */
    right: 0;
    width: 80%;
    max-width: 320px;
    height: calc(100vh - 55px);
    background: ${White};
    border-left: 1px solid ${Border};
    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
    flex-direction: column;
    align-items: flex-start;
    padding: 2.5rem 2rem;
    gap: 1.5rem;
    transform: translateX(${(p) => (p.$open ? "0" : "100%")});
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

/* ================= LINKS ================= */
const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${(p) => (p.$active ? PrimaryColor : TextGray)};
  position: relative;
  transition: color 0.2s ease;

  &:hover {
    color: ${PrimaryColor};
  }

  @media (max-width: 900px) {
    font-size: 1.1rem;
    width: 100%;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${Border};
  }
`;

/* ================= ACTION WRAPPER ================= */
const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 900px) {
    width: 100%;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 1rem;
    border-top: 1px solid ${Border};
    padding-top: 1.5rem;
  }
`;

const AuthButton = styled(Link)`
  text-decoration: none;
  padding: 0.4rem 1.25rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.85rem;
  text-align: center;
  transition: all 0.2s ease;

  background: ${(p) => (p.$isPrimary ? PrimaryColor : "transparent")};
  color: ${(p) => (p.$isPrimary ? DarkText : DarkText)};
  border: ${(p) => (p.$isPrimary ? "none" : `1px solid ${Border}`)};

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
    background: ${(p) => (p.$isPrimary ? PrimaryColor : "rgba(0,0,0,0.05)")};
  }

  @media (max-width: 900px) {
    width: 100%;
    padding: 0.75rem;
  }
`;

/* ================= HAMBURGER ================= */
const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 28px;
    height: 21px;
  }

  div {
    width: 100%;
    height: 2.5px;
    background: ${DarkText};
    border-radius: 2px;
    transition: all 0.3s ease-in-out;
  }

  &.open div:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
    background: ${PrimaryColor};
  }

  &.open div:nth-child(2) {
    opacity: 0;
  }

  &.open div:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
    background: ${PrimaryColor};
  }
`;

/* ================= OVERLAY ================= */
const Overlay = styled.div`
  display: ${(p) => (p.$open ? "block" : "none")};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  z-index: 99;
  transition: opacity 0.3s ease;
`;

/* ================= COMPONENT ================= */
export default function Header() {
  const [open, setOpen] = useState(false);
 
  const location = useLocation();

  const userData = useSelector(state=>state.userInfo)

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <>
      <Overlay $open={open} onClick={() => setOpen(false)} />

      <HeaderContainer>
        <Inner>
          <LogoWrapper to="/" onClick={handleNavClick}>
            <LogoImg 
              src="/logo.jpeg" 
              alt="Savannah Bananas Logo" 
            />
          </LogoWrapper>

          <Nav $open={open}>
            <NavLink to="/" $active={location.pathname === "/"} onClick={handleNavClick}>
              Home
            </NavLink>

            <NavLink to="/about" $active={location.pathname === "/about"} onClick={handleNavClick}>
              About
            </NavLink>

            <NavLink to="/contact" $active={location.pathname === "/contact"} onClick={handleNavClick}>
              Contact
            </NavLink>

            <NavActions>
              {!userData && (
                <AuthButton 
                  to="/signup" 
                  $isPrimary={false}
                  onClick={handleNavClick}
                >
                  Sign Up
                </AuthButton>
              )}

              <AuthButton 
                to={userData ? "/dashboard" : "/login"} 
                $isPrimary={true}
                onClick={handleNavClick}
              >
                {userData ? "My Dashboard" : "Login"}
              </AuthButton>
            </NavActions>
          </Nav>

          <Hamburger
            onClick={() => setOpen(!open)}
            className={open ? "open" : ""}
            aria-label="Toggle navigation menu"
          >
            <div />
            <div />
            <div />
          </Hamburger>
        </Inner>
      </HeaderContainer>
    </>
  );
}