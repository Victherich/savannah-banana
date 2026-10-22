import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaArrowLeft, FaBitcoin } from "react-icons/fa";

const Yellow = "#ffcc00";
const DarkNavy = "#101c38";
const TextGray = "#4a5568";
const LightBg = "#f8fafc";
const White = "#ffffff";
const Border = "#e2e8f0";

export default function VenmoTutorial() {
  const navigate = useNavigate();

  return (
    <Container>
      <TutorialCard>
        <BackLink onClick={() => navigate(-1)}>
          <FaArrowLeft /> Back to Payment Options
        </BackLink>

        <SectionHeader>
          <FaBitcoin color={Yellow} size={26} />
          <Title>Pay Using Venmo</Title>
        </SectionHeader>

        <InstructionText>
          You can use Venmo to purchase and send Bitcoin to external wallets by navigating to the Crypto section, tapping <strong>Send to external wallet</strong>, and pasting our official BTC address.
        </InstructionText>

        <ImgStyled src="/venmo.jpeg" alt="venmo" />

        <BottomAction>
          <BackToCheckoutButton onClick={() => navigate(-1)}>
            <FaArrowLeft /> Back to Payment Options
          </BackToCheckoutButton>
        </BottomAction>
      </TutorialCard>
    </Container>
  );
}

/* ================= STYLED COMPONENTS ================= */

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 80px 20px 40px 20px;
  background-color: ${LightBg};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
`;

const TutorialCard = styled.div`
  background: ${White};
  border: 1px solid ${Border};
  border-radius: 16px;
  padding: 35px;
  width: 100%;
  max-width: 700px;
  box-shadow: 0 10px 30px rgba(16, 28, 56, 0.08);
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

const BackLink = styled.button`
  background: none;
  border: none;
  color: ${TextGray};
  font-size: 0.9rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  margin-bottom: 20px;
  padding: 0;

  &:hover {
    color: ${DarkNavy};
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  color: ${DarkNavy};
  font-size: 1.6rem;
  font-weight: 900;
  margin: 0;
`;

const InstructionText = styled.p`
  font-size: 0.95rem;
  color: ${TextGray};
  line-height: 1.5;
  margin: 0 0 20px 0;
`;

const ImgStyled = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const BottomAction = styled.div`
  margin-top: 10px;
  text-align: center;
`;

const BackToCheckoutButton = styled.button`
  background: ${DarkNavy};
  color: ${White};
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 0.95rem;
  font-weight: 800;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: background 0.2s;

  &:hover {
    background: #1e293b;
  }
`;