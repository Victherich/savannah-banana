

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaArrowLeft, FaBitcoin, FaYoutube } from "react-icons/fa";

/* ================= COLORS (Savannah Bananas Theme) ================= */
const Yellow = "#ffcc00";
const DarkNavy = "#101c38";
const TextGray = "#4a5568";
const LightBg = "#f8fafc";
const White = "#ffffff";
const Border = "#e2e8f0";

export default function PaymentTutorial() {
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Load YouTube Iframe API Script dynamically if not present
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    // Function to initialize players once API is ready
    const initPlayers = () => {
      // Setup Cash App Player
      new window.YT.Player("cashapp-player", {
        videoId: "uqklYk2bs1o",
        playerVars: {
          autoplay: 1,
          controls: 1, // Keep all controls visible
          rel: 0,
          modestbranding: 1,
        },
        events: {
          onReady: (event) => {
            event.target.mute();
            event.target.playVideo();
          },
          onStateChange: (event) => {
            // Keep muted on play/pause/seek interactions
            event.target.mute();
          },
        },
      });

      // Setup MoonPay Player
      new window.YT.Player("moonpay-player", {
        videoId: "qiuDq765opk",
        playerVars: {
          autoplay: 1,
          controls: 1, // Keep all controls visible
          rel: 0,
          modestbranding: 1,
        },
        events: {
          onReady: (event) => {
            event.target.mute();
            event.target.playVideo();
          },
          onStateChange: (event) => {
            // Keep muted on play/pause/seek interactions
            event.target.mute();
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayers();
    } else {
      window.onYouTubeIframeAPIReady = initPlayers;
    }
  }, []);

  return (
    <Container>
      <TutorialCard>
        <BackLink onClick={() => navigate(-1)}>
          <FaArrowLeft /> Back to Checkout
        </BackLink>

        <Title>How to Pay with Bitcoin</Title>
        <Subtitle>Step-by-step instructions, images, and video tutorials for various payment methods</Subtitle>

        {/* SECTION 1: CASH APP */}
        <SectionBlock>
          <SectionHeader>
            <FaBitcoin color={Yellow} size={22} />
            <h3>Option One: Pay Using Cash App</h3>
          </SectionHeader>
          <img 
            style={{
              width: "100%",
              borderRadius: "8px",
              marginBottom: "14px"
            }}
            src="/cashapp.jpeg" 
            alt="cashapp"
          />
          <InstructionText>
            You can use Cash App to purchase Bitcoin with your cash balance or linked card and send it directly to the official BTC wallet address displayed on the checkout page.
          </InstructionText>

          <StepList>
            <StepItem>1. <strong>Open Bitcoin Tab:</strong> Tap the Bitcoin tab on your Cash App home screen.</StepItem>
            <StepItem>2. <strong>Enter Details:</strong> Enter the recipient's wallet address (copied from checkout) and the required USD/BTC amount.</StepItem>
            <StepItem>3. <strong>Choose Speed:</strong> Select your preferred transfer speed (Standard, Rush, or Priority).</StepItem>
            <StepItem>4. <strong>Confirm & Send:</strong> Review all details and tap Authorize to complete your Bitcoin payment.</StepItem>
          </StepList>

          <VideoContainer>
            <VideoHeader>
              <FaYoutube color="#ff0000" size={20} />
              <span>Cash App Payment Tutorial Video</span>
            </VideoHeader>
            <IframeWrapper>
              <div id="cashapp-player" />
            </IframeWrapper>
          </VideoContainer>
        </SectionBlock>

        {/* SECTION 2: MOONPAY */}
        <SectionBlock>
          <SectionHeader>
            <FaBitcoin color={Yellow} size={22} />
            <h3>Option Two: Pay Through MoonPay</h3>
          </SectionHeader>
             <img 
            style={{
              width: "100%",
              borderRadius: "8px",
              marginBottom: "14px"
            }}
            src="/moonpay.jpeg" 
            alt="cashapp"
          />
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
        </SectionBlock>

        {/* SECTION 3: OTHER SUPPORTED METHODS (PAYPAL & VENMO) */}
        <SectionBlock>
          <SectionHeader>
            <FaBitcoin color={Yellow} size={22} />
            <h3>Other Supported Methods: PayPal & Venmo</h3>
          </SectionHeader>
          <InstructionText>
            You can also use PayPal or Venmo to purchase and send Bitcoin to external wallets by navigating to their respective Crypto sections, tapping <strong>Send to external wallet</strong>, and pasting our official BTC address.
          </InstructionText>

              <img 
            style={{
              width: "100%",
              borderRadius: "8px",
              marginBottom: "14px"
            }}
            src="/paypal.jpeg" 
            alt="cashapp"
          />

              <img 
            style={{
              width: "100%",
              borderRadius: "8px",
              marginBottom: "14px"
            }}
            src="/venmo.jpeg" 
            alt="cashapp"
          />
        </SectionBlock>

        <BottomAction>
          <BackToCheckoutButton onClick={() => navigate(-1)}>
            <FaArrowLeft /> Return to Checkout Page
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

const Title = styled.h2`
  color: ${DarkNavy};
  font-size: 1.8rem;
  font-weight: 900;
  margin: 0 0 6px 0;
`;

const Subtitle = styled.p`
  color: ${TextGray};
  font-size: 0.9rem;
  margin: 0 0 28px 0;
`;

const SectionBlock = styled.div`
  background: ${LightBg};
  border: 1px solid ${Border};
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;

  h3 {
    color: ${DarkNavy};
    font-size: 1.1rem;
    font-weight: 800;
    margin: 0;
  }
`;

const InstructionText = styled.p`
  font-size: 0.9rem;
  color: ${TextGray};
  line-height: 1.5;
  margin: 0 0 14px 0;
`;

const StepList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;

const StepItem = styled.div`
  font-size: 0.85rem;
  color: ${TextGray};
  line-height: 1.4;

  strong {
    color: ${DarkNavy};
  }
`;

const VideoContainer = styled.div`
  background: ${White};
  border: 1px solid ${Border};
  border-radius: 8px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
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
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
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