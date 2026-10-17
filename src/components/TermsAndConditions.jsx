import React from "react";
import styled from "styled-components";
import { FaFileContract, FaExclamationTriangle, FaTicketAlt, FaShieldAlt, FaGavel, FaSync } from "react-icons/fa";

/* ================= COLORS (Savannah Bananas Theme) ================= */
const Yellow = "#ffcc00";
const DarkNavy = "#101c38";
const TextGray = "#4a5568";
const LightBg = "#f8fafc";
const White = "#ffffff";
const Border = "#e2e8f0";

export default function TermsAndConditions() {
  return (
    <Container>
      {/* ================= HERO BANNER ================= */}
      <HeroSection>
        <HeroOverlay />
        <HeroContent>
          <Badge>⚡ Legal Terms</Badge>
          <HeroTitle>TERMS & CONDITIONS</HeroTitle>
          <HeroSubtitle>Please read these terms carefully before purchasing tickets</HeroSubtitle>
        </HeroContent>
      </HeroSection>

      {/* ================= TERMS CONTENT ================= */}
      <Section>
        <TermsWrapper>
          <LastUpdatedText>Last Updated: October 2026</LastUpdatedText>

          <NoticeBox>
            <FaExclamationTriangle size={24} color={DarkNavy} />
            <div>
              <NoticeTitle>Important Ticket Pricing Notice</NoticeTitle>
              <NoticeDesc>
                Ticket prices start at <strong>$35 for Open Seatings</strong> and <strong>$100 for VIB (Very Important Banana)</strong> tickets. Prices are subject to increase once games start or demand rises.
              </NoticeDesc>
            </div>
          </NoticeBox>

          <TermsArticle>
            <ArticleHeader>
              <IconWrapper><FaFileContract size={18} color={DarkNavy} /></IconWrapper>
              <ArticleTitle>1. Acceptance of Terms</ArticleTitle>
            </ArticleHeader>
            <ArticleText>
              By accessing our website, purchasing tickets, or attending Savannah Bananas matches, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not purchase tickets or access our services.
            </ArticleText>
          </TermsArticle>

          <TermsArticle>
            <ArticleHeader>
              <IconWrapper><FaTicketAlt size={18} color={DarkNavy} /></IconWrapper>
              <ArticleTitle>2. Ticket Purchases & Pricing</ArticleTitle>
            </ArticleHeader>
            <ArticleText>
              All ticket sales are subject to availability. Starting ticket prices are set at <strong>$35 (Open Seatings)</strong> and <strong>$100 (VIB)</strong>. You acknowledge and accept that ticket pricing increases dynamically closer to match day or once game play commences.
            </ArticleText>
            <BulletList>
              <BulletItem>During checkout, customers must select their preferred match date via the date picker selector.</BulletItem>
              <BulletItem>The selected game date determines the specific match and opposing team playing against the Savannah Bananas.</BulletItem>
              <BulletItem>All prices are quoted in USD ($) unless otherwise specified.</BulletItem>
            </BulletList>
          </TermsArticle>

          <TermsArticle>
            <ArticleHeader>
              <IconWrapper><FaSync size={18} color={DarkNavy} /></IconWrapper>
              <ArticleTitle>3. Verification & Ticket Fulfillment</ArticleTitle>
            </ArticleHeader>
            <ArticleText>
              Upon completing checkout, an automated confirmation message will notify you that your payment is being processed and verified.
            </ArticleText>
            <BulletList>
              <BulletItem>Once payment verification is successfully completed, an automated confirmation email will be dispatched to the email provided at checkout.</BulletItem>
              <BulletItem>The email will contain your attached digital ticket(s) or clear instructions on how to access your e-tickets.</BulletItem>
              <BulletItem>If you require further instructions or support regarding ticket fulfillment, you must contact your assigned ticket provider immediately using the contact details provided in your email.</BulletItem>
            </BulletList>
          </TermsArticle>

          <TermsArticle>
            <ArticleHeader>
              <IconWrapper><FaShieldAlt size={18} color={DarkNavy} /></IconWrapper>
              <ArticleTitle>4. Refunds & Cancellation Policy</ArticleTitle>
            </ArticleHeader>
            <ArticleText>
              All ticket sales are final once verified and issued. Refunds are not provided for change of mind or personal scheduling conflicts. In the event of game rescheduling due to severe weather, tickets will remain valid for the makeup date.
            </ArticleText>
          </TermsArticle>

          <TermsArticle>
            <ArticleHeader>
              <IconWrapper><FaGavel size={18} color={DarkNavy} /></IconWrapper>
              <ArticleTitle>5. Ballpark Code of Conduct</ArticleTitle>
            </ArticleHeader>
            <ArticleText>
              Attending a Banana Ball match requires compliance with stadium rules and fan safety standards. Any attendee participating in disruptive behavior, harassment, or unlawful activity will be removed from the stadium without refund.
            </ArticleText>
          </TermsArticle>

          <TermsArticle>
            <ArticleHeader>
              <IconWrapper><FaFileContract size={18} color={DarkNavy} /></IconWrapper>
              <ArticleTitle>6. Limitation of Liability</ArticleTitle>
            </ArticleHeader>
            <ArticleText>
              We are not liable for indirect, incidental, or consequential damages resulting from ticket purchases, match delays, or third-party ticket provider fulfillment issues beyond our direct control.
            </ArticleText>
          </TermsArticle>
        </TermsWrapper>
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

const TermsWrapper = styled.div`
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

const TermsArticle = styled.article`
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