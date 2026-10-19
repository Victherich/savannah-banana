// import React, { useState } from "react";
// import styled from "styled-components";
// import { Link, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";

// /* ================= COLORS ================= */
// const PrimaryColor = "#ffcc00"; 
// const DarkText = "#101c38";     
// const Border = "#e2e8f0";       
// const White = "#ffffff";
// const TextGray = "#333333";     

// /* ================= HEADER ================= */
// const HeaderContainer = styled.header`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   z-index: 300;

//   background: rgba(255, 255, 255, 0.95);
//   backdrop-filter: blur(14px);
//   -webkit-backdrop-filter: blur(14px);

//   border-bottom: 1px solid ${Border};
//   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
// `;

// const Inner = styled.div`
//   margin: auto;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0.5rem 1rem;
// `;

// /* ================= LOGO ================= */
// const LogoWrapper = styled(Link)`
//   text-decoration: none;
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   cursor: pointer;
// `;

// const LogoImg = styled.img`
//   height: 40px;
//   width: auto;
//   display: block;
// `;

// /* ================= NAV ================= */
// const Nav = styled.nav`
//   display: flex;
//   align-items: center;
//   gap: 2rem;

//   @media (max-width: 900px) {
//     position: fixed;
//     top: 55px; /* Exact height of header */
//     right: 0;
//     width: 80%;
//     max-width: 320px;
//     height: calc(100vh - 55px);
//     background: ${White};
//     border-left: 1px solid ${Border};
//     box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
//     flex-direction: column;
//     align-items: flex-start;
//     padding: 2.5rem 2rem;
//     gap: 1.5rem;
//     transform: translateX(${(p) => (p.$open ? "0" : "100%")});
//     transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//   }
// `;

// /* ================= LINKS ================= */
// const NavLink = styled(Link)`
//   text-decoration: none;
//   font-size: 0.85rem;
//   font-weight: 600;
//   color: ${(p) => (p.$active ? PrimaryColor : TextGray)};
//   position: relative;
//   transition: color 0.2s ease;

//   &:hover {
//     color: ${PrimaryColor};
//   }

//   @media (max-width: 900px) {
//     font-size: 1.1rem;
//     width: 100%;
//     padding-bottom: 0.5rem;
//     border-bottom: 1px solid ${Border};
//   }
// `;

// /* ================= ACTION WRAPPER ================= */
// const NavActions = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1rem;

//   @media (max-width: 900px) {
//     width: 100%;
//     flex-direction: column;
//     gap: 0.75rem;
//     margin-top: 1rem;
//     border-top: 1px solid ${Border};
//     padding-top: 1.5rem;
//   }
// `;

// const AuthButton = styled(Link)`
//   text-decoration: none;
//   padding: 0.4rem 1.25rem;
//   border-radius: 4px;
//   font-weight: 600;
//   font-size: 0.85rem;
//   text-align: center;
//   transition: all 0.2s ease;

//   background: ${(p) => (p.$isPrimary ? PrimaryColor : "transparent")};
//   color: ${(p) => (p.$isPrimary ? DarkText : DarkText)};
//   border: ${(p) => (p.$isPrimary ? "none" : `1px solid ${Border}`)};

//   &:hover {
//     opacity: 0.9;
//     transform: translateY(-1px);
//     background: ${(p) => (p.$isPrimary ? PrimaryColor : "rgba(0,0,0,0.05)")};
//   }

//   @media (max-width: 900px) {
//     width: 100%;
//     padding: 0.75rem;
//   }
// `;

// /* ================= HAMBURGER ================= */
// const Hamburger = styled.button`
//   display: none;
//   background: none;
//   border: none;
//   cursor: pointer;
//   padding: 4px;

//   @media (max-width: 900px) {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     width: 28px;
//     height: 21px;
//   }

//   div {
//     width: 100%;
//     height: 2.5px;
//     background: ${DarkText};
//     border-radius: 2px;
//     transition: all 0.3s ease-in-out;
//   }

//   &.open div:nth-child(1) {
//     transform: translateY(9px) rotate(45deg);
//     background: ${PrimaryColor};
//   }

//   &.open div:nth-child(2) {
//     opacity: 0;
//   }

//   &.open div:nth-child(3) {
//     transform: translateY(-9px) rotate(-45deg);
//     background: ${PrimaryColor};
//   }
// `;

// /* ================= OVERLAY ================= */
// const Overlay = styled.div`
//   display: ${(p) => (p.$open ? "block" : "none")};
//   position: fixed;
//   inset: 0;
//   background: rgba(0, 0, 0, 0.4);
//   backdrop-filter: blur(4px);
//   z-index: 99;
//   transition: opacity 0.3s ease;
// `;

// /* ================= COMPONENT ================= */
// export default function Header() {
//   const [open, setOpen] = useState(false);
 
//   const location = useLocation();

//   const userData = useSelector(state=>state.userInfo)

//   const handleNavClick = () => {
//     setOpen(false);
//   };

//   return (
//     <>
//       <Overlay $open={open} onClick={() => setOpen(false)} />

//       <HeaderContainer>
//         <Inner>
//           <LogoWrapper to="/" onClick={handleNavClick}>
//             <LogoImg 
//               src="/logo.jpeg" 
//               alt="Savannah Bananas Logo" 
//             />
//           </LogoWrapper>

//           <Nav $open={open}>
//             <NavLink to="/" $active={location.pathname === "/"} onClick={handleNavClick}>
//               Home
//             </NavLink>

//             <NavLink to="/about" $active={location.pathname === "/about"} onClick={handleNavClick}>
//               About
//             </NavLink>

//             <NavLink to="/contact" $active={location.pathname === "/contact"} onClick={handleNavClick}>
//               Contact
//             </NavLink>
//                 <NavLink to="/contact" $active={location.pathname === "/contact"} onClick={handleNavClick}>
//               Information
//             </NavLink>

//             <NavActions>
//               {!userData && (
//                 <AuthButton 
//                   to="/signup" 
//                   $isPrimary={false}
//                   onClick={handleNavClick}
//                 >
//                   Sign Up
//                 </AuthButton>
//               )}

//               <AuthButton 
//                 to={userData ? "/dashboard" : "/login"} 
//                 $isPrimary={true}
//                 onClick={handleNavClick}
//               >
//                 {userData ? "My Dashboard" : "Login"}
//               </AuthButton>
//             </NavActions>
//           </Nav>

//           <Hamburger
//             onClick={() => setOpen(!open)}
//             className={open ? "open" : ""}
//             aria-label="Toggle navigation menu"
//           >
//             <div />
//             <div />
//             <div />
//           </Hamburger>
//         </Inner>
//       </HeaderContainer>
//     </>
//   );
// }



import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaChevronDown } from "react-icons/fa";

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

/* ================= LINKS & DROPDOWN ================= */
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

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;

  @media (max-width: 900px) {
    width: 100%;
    border-bottom: 1px solid ${Border};
    padding-bottom: 0.5rem;
  }

  @media (min-width: 901px) {
    &:hover > div {
      display: flex;
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }
`;

const DropdownTrigger = styled.div`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${(p) => (p.$active ? PrimaryColor : TextGray)};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.2s ease;

  &:hover {
    color: ${PrimaryColor};
  }

  svg {
    font-size: 0.75rem;
    transition: transform 0.2s ease;
    transform: rotate(${(p) => (p.$isOpen ? "180deg" : "0deg")});
  }

  @media (max-width: 900px) {
    font-size: 1.1rem;
    justify-content: space-between;
    width: 100%;
  }
`;

const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 901px) {
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 180px;
    background: ${White};
    border: 1px solid ${Border};
    border-radius: 8px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    padding: 8px 0;
    margin-top: 8px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition: all 0.2s ease-in-out;
    z-index: 10;
  }

  @media (max-width: 900px) {
    display: ${(p) => (p.$isOpen ? "flex" : "none")};
    padding-left: 1rem;
    margin-top: 0.5rem;
    gap: 0.5rem;
  }
`;

const DropdownItem = styled(Link)`
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${TextGray};
  padding: 8px 16px;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: rgba(255, 204, 0, 0.15);
    color: ${DarkText};
  }

  @media (max-width: 900px) {
    font-size: 1rem;
    padding: 6px 0;
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
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const location = useLocation();
  const userData = useSelector((state) => state.userInfo);

  const handleNavClick = () => {
    setOpen(false);
    setDropdownOpen(false);
  };

  const isInfoActive = location.pathname === "/terms" || location.pathname === "/privacy";

  return (
    <>
      <Overlay $open={open} onClick={handleNavClick} />

      <HeaderContainer>
        <Inner>
          <LogoWrapper to="/" onClick={handleNavClick}>
            <LogoImg 
              src="/logo.png" 
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

            {/* Dropdown Menu for Information */}
            <DropdownWrapper>
              <DropdownTrigger 
                $active={isInfoActive}$isOpen={dropdownOpen}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Information <FaChevronDown />
              </DropdownTrigger>
              
              <DropdownMenu $isOpen={dropdownOpen}>
                <DropdownItem to="/termsandconditions" onClick={handleNavClick}>
                  Terms & Conditions
                </DropdownItem>
                <DropdownItem to="/privacypolicy" onClick={handleNavClick}>
                  Privacy Policy
                </DropdownItem>
              </DropdownMenu>
            </DropdownWrapper>

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