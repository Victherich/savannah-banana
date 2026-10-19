import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaTiktok, FaInstagram, FaYoutube, FaPhoneAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <FooterContainer>
      <TopSection>
        {/* Left Column: Logo & Support info */}
        <LeftColumn>
          <LogoWrapper>
            {/* Replace with actual Savannah Bananas logo path or URL */}
            <LogoImage 
              src="/logo.png"
              alt="Savannah Bananas Logo" 
            />
          </LogoWrapper>
          <SupportText>Thank you for supporting Banana Ball!</SupportText>
          {/* <PhoneLink href="tel:9127122482">
            <FaPhoneAlt size={12} /> (912) 712-2482
          </PhoneLink> */}
        </LeftColumn>

        {/* Middle Column: Store & Directions */}
        <StoreColumn>
          <ColumnTitle>STORE</ColumnTitle>
          <AddressText>
            1401 E Victory Dr.<br />
            Savannah, Georgia 31404<br />
            (Located on the first base side of home plate at Historic Grayson Stadium)
          </AddressText>
          
          <StoreHoursTitle>Store Hours</StoreHoursTitle>
          <StoreHoursText>
            Monday - Friday | 9am - 5pm<br />
            Saturday | 9am - 1pm<br />
            Sunday | CLOSED<br />
            ** Banana Stand closes to the public at 1 pm on gamedays.**
          </StoreHoursText>

          <DirectionsButton href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
            <MapPinIcon>📍</MapPinIcon> GET DIRECTIONS
          </DirectionsButton>
        </StoreColumn>

        {/* Products Column */}
        {/* <LinksColumn>
          <ColumnTitle>PRODUCTS</ColumnTitle>
          <FooterLink href="#">Adults</FooterLink>
          <FooterLink href="#">Kiddos</FooterLink>
          <FooterLink href="#">Jerseys</FooterLink>
          <FooterLink href="#">Hats</FooterLink>
          <FooterLink href="#">Novelties & Gifts</FooterLink>
          <FooterLink href="#">Last of the Banchs</FooterLink>
          <FooterLink href="#">New Arrivals</FooterLink>
        </LinksColumn> */}

        {/* Information Column */}
        <LinksColumn>
          <ColumnTitle>INFORMATION</ColumnTitle>
      
          <FooterLink href="/termsandconditions">Terms of Service</FooterLink>
          <FooterLink href="/privacypolicy">Privacy Policy</FooterLink>
        </LinksColumn>
      </TopSection>

      <Divider />

      <BottomSection>
        <MoreInfoText>For more information visit</MoreInfoText>
        <WebLink href="https://www.bananaball.com" target="_blank" rel="noopener noreferrer">
          WWW.BANANABALL.COM
        </WebLink>

        <SocialIcons>
          <SocialIconLink href="#" aria-label="Facebook"><FaFacebookF /></SocialIconLink>
          <SocialIconLink href="#" aria-label="Twitter"><FaTwitter /></SocialIconLink>
          <SocialIconLink href="#" aria-label="Tiktok"><FaTiktok /></SocialIconLink>
          <SocialIconLink href="#" aria-label="Instagram"><FaInstagram /></SocialIconLink>
          <SocialIconLink href="#" aria-label="Youtube"><FaYoutube /></SocialIconLink>
        </SocialIcons>

        <CopyrightText>
          Copyright 2026, Fans First Entertainment - All Rights Reserved.
        </CopyrightText>
        <SubFooterText>
          Built for Fans by My Project Solution
        </SubFooterText>
      </BottomSection>
    </FooterContainer>
  );
}

// --- STYLED COMPONENTS ---

const FooterContainer = styled.footer`
  background-color: #101c38;
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  padding: 60px 40px 30px 40px;
  width: 100%;
  box-sizing: border-box;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1300px;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 320px;
`;

const LogoWrapper = styled.div`
  width: 260px;
  margin-bottom: 20px;
`;

const LogoImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const SupportText = styled.p`
  font-size: 1rem;
  margin: 0 0 8px 0;
  color: #e0e0e0;
`;

const PhoneLink = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #ffffff;
  font-size: 1rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const StoreColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 340px;
`;

const ColumnTitle = styled.h4`
  font-size: 1.1rem;
  letter-spacing: 1px;
  font-weight: 800;
  margin-bottom: 16px;
  color: #ffffff;
`;

const AddressText = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  color: #cccccc;
  margin: 0 0 16px 0;
`;

const StoreHoursTitle = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 4px;
`;

const StoreHoursText = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  color: #cccccc;
  margin: 0 0 20px 0;
`;

const DirectionsButton = styled.a`
  background-color: #ffcc00;
  color: #101c38;
  font-weight: 600;
  font-size: 1rem;
  padding: 15px 16px;
  border-radius: 4px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
//   max-width: 220px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  transition: background-color 0.2s;

  &:hover {
    background-color: #e6b800;
  }
`;

const MapPinIcon = styled.span`
  font-size: 1rem;
`;

const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FooterLink = styled.a`
  font-size: 0.9rem;
  color: #cccccc;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #ffffff;
    text-decoration: underline;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  max-width: 1300px;
  margin: 50px auto 30px auto;
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 1300px;
  margin: 0 auto;
`;

const MoreInfoText = styled.p`
  font-size: 10px;
  color: #cccccc;
  margin: 0 0 4px 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const WebLink = styled.a`
  font-size: 16px;
  font-weight: 900;
  color: #ffffff;
  letter-spacing: 1px;
  text-decoration: none;
  margin-bottom: 24px;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 24px;
`;

const SocialIconLink = styled.a`
  color: #ffffff;
  font-size: 16px;
  background: rgba(255, 255, 255, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const CopyrightText = styled.p`
  font-size: 0.8rem;
  color: #aaaaaa;
  margin: 0 0 6px 0;
`;

const SubFooterText = styled.p`
  font-size: 0.8rem;
  color: #888888;
  margin: 0;
`;