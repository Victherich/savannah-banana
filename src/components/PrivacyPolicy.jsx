import React from "react";
import styled from "styled-components";
import { FaUserShield, FaLock, FaEnvelope, FaCookieBite, FaServer, FaHandshake } from "react-icons/fa";

/* ================= COLORS (Savannah Bananas Theme) ================= */
const Yellow = "#ffcc00";
const DarkNavy = "#101c38";
const TextGray = "#4a5568";
const LightBg = "#f8fafc";
const White = "#ffffff";
const Border = "#e2e8f0";

export default function PrivacyPolicy() {
  return (
    <Container>
      {/* ================= HERO BANNER ================= */}
      <HeroSection>
        <HeroOverlay />
        <HeroContent>
          <Badge>⚡ Data Protection</Badge>
          <HeroTitle>PRIVACY POLICY</HeroTitle>
          <HeroSubtitle>How we collect, protect, and handle your information</HeroSubtitle>
        </HeroContent>
      </HeroSection>

      {/* ================= PRIVACY POLICY CONTENT ================= */}
      <Section>
        <PolicyWrapper>
          <LastUpdatedText>Last Updated: October 2026</LastUpdatedText>

          <NoticeBox>
            <FaUserShield size={24} color={DarkNavy} />
            <div>
              <NoticeTitle>Your Privacy Matters to Us</NoticeTitle>
              <NoticeDesc>
                We are committed to protecting your personal information and ensuring full transparency regarding how your data is processed during ticket purchases and account creation.
              </NoticeDesc>
            </div>
          </NoticeBox>

          <PolicyArticle>
            <ArticleHeader>
              <IconWrapper><FaLock size={18} color={DarkNavy} /></IconWrapper>
              <ArticleTitle>1. Information We Collect</ArticleTitle>
            </ArticleHeader>
            <ArticleText>
              When you purchase tickets, create an account, or contact support through our website, we collect information necessary to verify your transaction and deliver your digital tickets.
            </ArticleText>
            <BulletList>
              <BulletItem><strong>Personal Identification:</strong> Full name, email address, and phone number.</BulletItem>
              <BulletItem><strong>Match Selection Data:</strong> Selected match dates, opponent teams, and chosen seating tier (Open Seatings or VIB).</BulletItem>
              <BulletItem><strong>Payment Verification Details:</strong> Transaction timestamps and payment confirmation status (credit card numbers are processed via secure third-party payment gateways and are never stored on our servers).</BulletItem>
            </BulletList>
          </PolicyArticle>

          <PolicyArticle>
            <ArticleHeader>
              <IconWrapper><FaEnvelope size={18} color={DarkNavy} /></IconWrapper>
              <ArticleTitle>2. How We Use Your Information</ArticleTitle>
            </ArticleHeader>
            <ArticleText>
              The information we collect is strictly used to fulfill your ticket orders and provide reliable customer support.
            </ArticleText>
            <BulletList>
              <BulletItem>To send automated on-screen and email payment verification notices after checkout.</BulletItem>
              <BulletItem>To deliver your attached digital e-tickets and clear instructions on how to access them.</BulletItem>
              <BulletItem>To connect you with your designated ticket provider if assistance or further instructions are needed.</BulletItem>
              <BulletItem>To communicate essential game updates, stadium policy changes, or match schedule shifts.</BulletItem>
            </BulletList>
          </PolicyArticle>

          <PolicyArticle>
            <ArticleHeader>
              <IconWrapper><FaHandshake size={18} color={DarkNavy} /></IconWrapper>
              <ArticleTitle>3. Data Sharing & Ticket Providers</ArticleTitle>
            </ArticleHeader>
            <ArticleText>
              We do not sell, rent, or trade your personal information to third parties. We only share necessary ticket details with designated ticket fulfillment providers and venue authorities strictly for verification, e-ticket issuance, and stadium entry access.
            </ArticleText>
          </PolicyArticle>

          <PolicyArticle>
            <ArticleHeader>
              <IconWrapper><FaServer size={18} color={DarkNavy} /></IconWrapper>
              <ArticleTitle>4. Data Security & Storage</ArticleTitle>
            </ArticleHeader>
            <ArticleText>
              We implement robust technical and organizational security measures to protect your personal data against unauthorized access, loss, or alteration. All communication between your browser and our site is encrypted using Secure Sockets Layer (SSL) technology.
            </ArticleText>
          </PolicyArticle>

          <PolicyArticle>
            <ArticleHeader>
              <IconWrapper><FaCookieBite size={18} color={DarkNavy} /></IconWrapper>
              <ArticleTitle>5. Cookies & Tracking Technologies</ArticleTitle>
            </ArticleHeader>
            <ArticleText>
              Our website uses essential cookies to remember your session state, maintain items in your ticket checkout flow, and optimize performance. You can disable non-essential cookies via your browser settings at any time.
            </ArticleText>
          </PolicyArticle>

          <PolicyArticle>
            <ArticleHeader>
              <IconWrapper><FaUserShield size={18} color={DarkNavy} /></IconWrapper>
              <ArticleTitle>6. Your Rights & Contact Us</ArticleTitle>
            </ArticleHeader>
            <ArticleText>
              You have the right to request access to the personal data we hold about you, request corrections, or ask for account deletion where applicable. If you have any questions regarding this Privacy Policy or your data, please reach out to our team at <a href="mailto:privacy@bananaball.com" style={{ color: DarkNavy, fontWeight: "800" }}>privacy@bananaball.com</a>.
            </ArticleText>
          </PolicyArticle>
        </PolicyWrapper>
      </Section>
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
  max-width: 900px;
  margin: 0 auto;
  background-color: ${White};

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

const PolicyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

const LastUpdatedText = styled.span`
  font-size: 0.85rem;
  font-weight: 700;
  color: ${TextGray};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const NoticeBox = styled.div`
  background: ${Yellow};
  border-radius: 10px;
  padding: 20px 25px;
  display: flex;
  align-items: flex-start;
  gap: 15px;
  color: ${DarkNavy};
`;

const NoticeTitle = styled.h4`
  font-size: 1.05rem;
  font-weight: 900;
  margin: 0 0 4px 0;
`;

const NoticeDesc = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
`;

const PolicyArticle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-bottom: 1px solid ${Border};
  padding-bottom: 30px;

  &:last-child {
    border-bottom: none;
  }
`;

const ArticleHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const IconWrapper = styled.div`
  width: 36px;
  height: 36px;
  background: ${Yellow};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const ArticleTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 800;
  color: ${DarkNavy};
  margin: 0;
`;

const ArticleText = styled.p`
  font-size: 0.95rem;
  color: ${TextGray};
  line-height: 1.7;
  margin: 0;
`;

const BulletList = styled.ul`
  margin: 8px 0 0 0;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const BulletItem = styled.li`
  font-size: 0.95rem;
  color: ${TextGray};
  line-height: 1.6;
`;