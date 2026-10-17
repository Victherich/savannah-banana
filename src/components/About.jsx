import React from "react";
import styled from "styled-components";
import { FaShieldAlt, FaStar, FaUsers, FaTrophy, FaHeart, FaSmileWink } from "react-icons/fa";

/* ================= COLORS (Savannah Bananas Theme) ================= */
const Yellow = "#ffcc00";
const DarkNavy = "#101c38";
const TextGray = "#4a5568";
const LightBg = "#f8fafc";
const White = "#ffffff";
const Border = "#e2e8f0";

export default function AboutUs() {
  return (
    <Container>
      {/* ================= HERO BANNER ================= */}
      <HeroSection>
        <HeroOverlay />
        <HeroContent>
          <Badge>⚡ About Us</Badge>
          <HeroTitle>THE GREATEST SHOW IN SPORTS</HeroTitle>
          <HeroSubtitle>Reinventing Baseball for Fans Everywhere</HeroSubtitle>
        </HeroContent>
      </HeroSection>

      {/* ================= OUR STORY SECTION ================= */}
      <Section>
        <StoryWrapper>
          <StoryContent>
            <SectionTag>Our Origin</SectionTag>
            <SectionTitle>How Banana Ball Was Born</SectionTitle>
            <StoryText>
              The Savannah Bananas aren't just a baseball team—they are a movement. Founded with a mission to make baseball fun, fast-paced, and wildly entertaining, we threw out the traditional rulebook and created <strong>Banana Ball</strong>.
            </StoryText>
            <StoryText>
              Every game features non-stop dancing, professional choreographers, stilt-walking players, surprise guest performers, and strict rules designed to eliminate boring downtime. Whether you're a lifelong baseball fanatic or attending your very first game, you are guaranteed an unforgettable experience.
            </StoryText>
          </StoryContent>
          <StoryCardBox>
            <StatBox>
              <StatNumber>100%</StatNumber>
              <StatLabel>Sold Out Ballparks</StatLabel>
            </StatBox>
            <StatBox>
              <StatNumber>2 Hours</StatNumber>
              <StatLabel>Fast-Paced Action (No Dulls)</StatLabel>
            </StatBox>
            <StatBox>
              <StatNumber>Millions</StatNumber>
              <StatLabel>Fans Worldwide</StatLabel>
            </StatBox>
          </StoryCardBox>
        </StoryWrapper>
      </Section>

      {/* ================= CORE VALUES SECTION ================= */}
      <Section $altBg>
        <SectionHeader>
          <SectionTag>What We Stand For</SectionTag>
          <SectionTitle>The Fans First Philosophy</SectionTitle>
          <SectionSub>Everything we do is centered around creating joy, laughter, and unforgettable memories for our fans.</SectionSub>
        </SectionHeader>

        <ValuesGrid>
          <ValueCard>
            <IconWrapper><FaSmileWink size={24} color={DarkNavy} /></IconWrapper>
            <ValueTitle>Unmatched Entertainment</ValueTitle>
            <ValueDesc>We believe sports should be pure fun. From walk-up dance routines to thrilling trick plays, every moment is designed to amaze.</ValueDesc>
          </ValueCard>

          <ValueCard>
            <IconWrapper><FaHeart size={24} color={DarkNavy} /></IconWrapper>
            <ValueTitle>Fan-First Experience</ValueTitle>
            <ValueDesc>No hidden booking fees, easy automated ticket delivery, and dedicated customer support to ensure your game night is seamless.</ValueDesc>
          </ValueCard>

          <ValueCard>
            <IconWrapper><FaTrophy size={24} color={DarkNavy} /></IconWrapper>
            <ValueTitle>Banana Ball Rules</ValueTitle>
            <ValueDesc>Every inning counts, fans can catch foul balls for outs, and there are no boring walks or delays. Action from the first pitch to the last!</ValueDesc>
          </ValueCard>
        </ValuesGrid>
      </Section>

      {/* ================= CALL TO ACTION ================= */}
      <CtaSection>
        <CtaContent>
          <CtaTitle>Ready to Experience?</CtaTitle>
          <CtaDesc>Secure your seats today before ticket prices increase. Join thousands of fans at the ballpark!</CtaDesc>
          <CtaButton href="/">Get Your Tickets Now</CtaButton>
        </CtaContent>
      </CtaSection>
    </Container>
  );
}

// --- STYLED COMPONENTS ---

const Container = styled.div`
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: ${DarkNavy};
  background-color: ${White};
`;

const HeroSection = styled.div`
  position: relative;
  width: 100%;
  padding: 120px 20px 100px 20px;
  background: linear-gradient(rgba(16, 28, 56, 0.75), rgba(16, 28, 56, 0.85)), 
              url('https://images.unsplash.com/photo-1593341646782-e0b495cffc6d?q=80&w=1600&auto=format&fit=crop') no-repeat center center / cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 204, 0, 0.2) 0%, rgba(16, 28, 56, 0.6) 100%);
  pointer-events: none;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Badge = styled.span`
  background: ${Yellow};
  color: ${DarkNavy};
  font-size: 12px;
  font-weight: 900;
  padding: 6px 16px;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 20px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  color: ${White};
  letter-spacing: 2px;
  margin: 0 0 10px 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${Yellow};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Section = styled.section`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: ${(p) => (p.$altBg ? LightBg : White)};

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

const StoryWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 50px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const StoryContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SectionTag = styled.span`
  font-size: 0.8rem;
  font-weight: 800;
  color: #b7791f;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 900;
  color: ${DarkNavy};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const SectionSub = styled.p`
  font-size: 1rem;
  color: ${TextGray};
  margin: 0;
`;

const StoryText = styled.p`
  font-size: 1rem;
  color: ${TextGray};
  line-height: 1.7;
  margin: 0;
`;

const StoryCardBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StatBox = styled.div`
  background: ${LightBg};
  border: 1px solid ${Border};
  border-radius: 10px;
  padding: 24px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);
`;

const StatNumber = styled.div`
  font-size: 2.2rem;
  font-weight: 900;
  color: ${DarkNavy};
  margin-bottom: 6px;
`;

const StatLabel = styled.div`
  font-size: 0.85rem;
  font-weight: 700;
  color: ${TextGray};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 50px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  background: ${White};
  border: 1px solid ${Border};
  border-radius: 12px;
  padding: 35px 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.03);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const IconWrapper = styled.div`
  width: 55px;
  height: 55px;
  background: ${Yellow};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ValueTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 800;
  color: ${DarkNavy};
  margin: 0;
`;

const ValueDesc = styled.p`
  font-size: 0.95rem;
  color: ${TextGray};
  line-height: 1.6;
  margin: 0;
`;

const CtaSection = styled.section`
  background: ${DarkNavy};
  color: ${White};
  padding: 80px 20px;
  text-align: center;
`;

const CtaContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const CtaTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 900;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const CtaDesc = styled.p`
  font-size: 1.05rem;
  color: #cbd5e0;
  margin: 0;
  line-height: 1.6;
`;

const CtaButton = styled.a`
  background: ${Yellow};
  color: ${DarkNavy};
  font-weight: 900;
  font-size: 1rem;
  padding: 16px 36px;
  border-radius: 6px;
  text-decoration: none;
  margin-top: 10px;
  box-shadow: 0 4px 15px rgba(255, 204, 0, 0.3);
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: #e6b800;
    transform: translateY(-2px);
  }
`;