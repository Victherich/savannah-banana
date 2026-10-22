import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaArrowLeft, FaBitcoin, FaYoutube } from "react-icons/fa";

const Yellow = "#ffcc00";
const DarkNavy = "#101c38";
const TextGray = "#4a5568";
const LightBg = "#f8fafc";
const White = "#ffffff";
const Border = "#e2e8f0";

export default function MoonPayTutorial() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    const initPlayer = () => {
      new window.YT.Player("moonpay-player", {
        videoId: "qiuDq765opk",
        playerVars: {
          autoplay: 1,
          controls: 1,
          rel: 0,
          modestbranding: 1,
        },
        events: {
          onReady: (event) => {
            event.target.mute();
            event.target.playVideo();
          },
          onStateChange: (event) => {
            event.target.mute();
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }
  }, []);

  return (
    <Container>
      <TutorialCard>
        <BackLink onClick={() => navigate(-1)}>
          <FaArrowLeft /> Back to Payment Options
        </BackLink>

        <SectionHeader>
          <FaBitcoin color={Yellow} size={26} />
          <Title>Pay Through MoonPay</Title>
        </SectionHeader>

        <ImgStyled src="/moonpay.jpeg" alt="moonpay" />

        <InstructionText>
          You can use MoonPay to securely purchase Bitcoin using debit/credit cards, Apple Pay, or bank transfers and send it directly to the official BTC wallet address.
        </InstructionText>

        <StepList>
          <StepItem>1. <strong>Open MoonPay App:</strong> Launch the MoonPay app or website and log in to your account.</StepItem>
          <StepItem>2. <strong>Tap "Send":</strong> On the Home screen, tap Send (or select Bitcoin and choose send).</StepItem>
          <StepItem>3. <strong>Select Recipient:</strong> Paste the official Bitcoin wallet address provided on your checkout page.</StepItem>
          <StepItem>4. <strong>Enter Amount & Network:</strong> Type the exact BTC amount and ensure the network is set to Bitcoin (BTC).</StepItem>
          <StepItem>5. <strong>Review & Confirm:</strong> Double-check the address and network fee, then confirm the transfer.</StepItem>
        </StepList>

        <VideoContainer>
          <VideoHeader>
            <FaYoutube color="#ff0000" size={20} />
            <span>MoonPay Payment Tutorial Video</span>
          </VideoHeader>
          <IframeWrapper>
            <div id="moonpay-player" />
          </IframeWrapper>
        </VideoContainer>

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

const ImgStyled = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const InstructionText = styled.p`
  font-size: 0.95rem;
  color: ${TextGray};
  line-height: 1.5;
  margin: 0 0 20px 0;
`;

const StepList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
`;

const StepItem = styled.div`
  font-size: 0.9rem;
  color: ${TextGray};
  line-height: 1.4;

  strong {
    color: ${DarkNavy};
  }
`;

const VideoContainer = styled.div`
  background: ${LightBg};
  border: 1px solid ${Border};
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;
`;

const VideoHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  font-weight: 700;
  color: ${DarkNavy};
`;

const IframeWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  border-radius: 6px;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const BottomAction = styled.div`
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