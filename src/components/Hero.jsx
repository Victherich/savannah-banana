import React from "react";
import styled from "styled-components";
import h1 from '../Images/h1.jpg';

/* ================= HERO SECTION ================= */
export default function HeroSection() {
  return (
    <HeroContainerWrap>
      <HeroContainer>
        <HeroOverlay />
        <HeroContent>
          <HeroTitle>THE SAVANNAH BANANAS OFFICIAL LOTTERY</HeroTitle>
          <HeroSubtitle>The Greatest Show in Sports</HeroSubtitle>
        </HeroContent>
      </HeroContainer>
    </HeroContainerWrap>
  );
}

/* ================= STYLED COMPONENTS ================= */

const HeroContainerWrap = styled.div`
  padding: 70px 100px 10px 100px;
  width: 100%;
  height: 400px;
  box-sizing: border-box;

  /* Responsive Padding Adjustments */
  @media (max-width: 1200px) {
    padding: 70px 60px 10px 60px;
  }

  @media (max-width: 900px) {
    padding: 65px 30px 10px 30px;
    height: 350px;
  }

  @media (max-width: 600px) {
    padding: 60px 15px 10px 15px;
    height: 280px;
  }
`;

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(to right, rgba(200, 215, 30, 0.7), rgba(100, 150, 40, 0.6)), 
              url(${h1}) no-repeat center center / cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  mix-blend-mode: multiply;
  pointer-events: none;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  width: 100%;

  @media (max-width: 600px) {
    padding: 0 10px;
  }
`;

const HeroTitle = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 3.5rem;
  font-weight: 900;
  color: #ffffff;
  letter-spacing: 2px;
  margin: 0 0 10px 0;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

  @media (max-width: 1200px) {
    font-size: 3rem;
  }

  @media (max-width: 900px) {
    font-size: 2.2rem;
    letter-spacing: 1px;
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;
    letter-spacing: 0.5px;
    margin-bottom: 6px;
  }

  @media (max-width: 380px) {
    font-size: 1.25rem;
  }
`;

const HeroSubtitle = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.5px;
  margin: 0;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 900px) {
    font-size: 1rem;
  }

  @media (max-width: 600px) {
    font-size: 0.85rem;
  }

  @media (max-width: 380px) {
    font-size: 0.75rem;
  }
`;