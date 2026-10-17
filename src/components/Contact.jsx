import React, { useState } from "react";
import styled from "styled-components";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaHeadset, FaCheckCircle, FaPaperPlane } from "react-icons/fa";

/* ================= COLORS (Savannah Bananas Theme) ================= */
const Yellow = "#ffcc00";
const DarkNavy = "#101c38";
const TextGray = "#4a5568";
const LightBg = "#f8fafc";
const White = "#ffffff";
const Border = "#e2e8f0";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Ticket Support",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder submission handler for backend integration
    setSubmitted(true);
  };

  return (
    <Container>
      {/* ================= HERO BANNER ================= */}
      <HeroSection>
        <HeroOverlay />
        <HeroContent>
          <Badge>⚡ Get In Touch</Badge>
          <HeroTitle>WE'RE HERE TO HELP</HeroTitle>
          <HeroSubtitle>Have questions about tickets, games, or support? Reach out to us!</HeroSubtitle>
        </HeroContent>
      </HeroSection>

      {/* ================= CONTACT SECTION ================= */}
      <Section>
        <ContactWrapper>
          {/* Left Info Column */}
          <InfoColumn>
            <SectionTag>Support Center</SectionTag>
            <SectionTitle>Need Assistance With Your Tickets?</SectionTitle>
            <InfoDesc>
              Our dedicated support team is ready to assist you with ticket access, match dates, or general inquiries. Contact your ticket provider anytime using the details below or drop us a message.
            </InfoDesc>

            <InfoCardList>
              <InfoCard>
                <IconBox><FaPhoneAlt size={18} color={DarkNavy} /></IconBox>
                <div>
                  <InfoLabel>Phone Support</InfoLabel>
                  <InfoValue href="tel:9127122482">(912) 712-2482</InfoValue>
                </div>
              </InfoCard>

              <InfoCard>
                <IconBox><FaEnvelope size={18} color={DarkNavy} /></IconBox>
                <div>
                  <InfoLabel>Email Support</InfoLabel>
                  <InfoValue href="mailto:support@bananaball.com">support@bananaball.com</InfoValue>
                </div>
              </InfoCard>

              <InfoCard>
                <IconBox><FaMapMarkerAlt size={18} color={DarkNavy} /></IconBox>
                <div>
                  <InfoLabel>Stadium Location</InfoLabel>
                  <InfoValue as="span">1401 E Victory Dr, Savannah, GA 31404</InfoValue>
                </div>
              </InfoCard>
            </InfoCardList>
          </InfoColumn>

          {/* Right Form Column */}
          <FormColumn>
            {submitted ? (
              <SuccessBox>
                <FaCheckCircle size={50} color={Yellow} />
                <SuccessTitle>Message Received!</SuccessTitle>
                <SuccessDesc>
                  Thank you for reaching out. Our support team will review your inquiry and get back to your email shortly.
                </SuccessDesc>
                <ResetButton onClick={() => setSubmitted(false)}>Send Another Message</ResetButton>
              </SuccessBox>
            ) : (
              <ContactForm onSubmit={handleSubmit}>
                <FormHeader>
                  <FaHeadset size={22} color={Yellow} />
                  <FormHeaderTitle>Send Us a Message</FormHeaderTitle>
                </FormHeader>

                <FormGroup>
                  <Label>Your Full Name</Label>
                  <Input 
                    type="text" 
                    required 
                    placeholder="e.g. Alex Johnson"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Email Address</Label>
                  <Input 
                    type="email" 
                    required 
                    placeholder="e.g. alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Inquiry Subject</Label>
                  <Select 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  >
                    <option>Ticket Support & Verification</option>
                    <option>Match Date & Schedule Inquiry</option>
                    <option>VIB Experience Question</option>
                    <option>General Information</option>
                  </Select>
                </FormGroup>

                <FormGroup>
                  <Label>Message</Label>
                  <TextArea 
                    rows="4" 
                    required 
                    placeholder="Describe how we can help you..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </FormGroup>

                <SubmitButton type="submit">
                  <FaPaperPlane /> Send Message
                </SubmitButton>
              </ContactForm>
            )}
          </FormColumn>
        </ContactWrapper>
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
  max-width: 1200px;
  margin: 0 auto;
  background-color: ${White};

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: flex-start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const InfoColumn = styled.div`
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

const InfoDesc = styled.p`
  font-size: 1rem;
  color: ${TextGray};
  line-height: 1.7;
  margin: 0 0 10px 0;
`;

const InfoCardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InfoCard = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background: ${LightBg};
  border: 1px solid ${Border};
  border-radius: 10px;
  padding: 20px;
`;

const IconBox = styled.div`
  width: 45px;
  height: 45px;
  background: ${Yellow};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const InfoLabel = styled.div`
  font-size: 0.8rem;
  font-weight: 700;
  color: ${TextGray};
  text-transform: uppercase;
  margin-bottom: 2px;
`;

const InfoValue = styled.a`
  font-size: 1rem;
  font-weight: 800;
  color: ${DarkNavy};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const FormColumn = styled.div`
  background: ${DarkNavy};
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    padding: 25px;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  padding-bottom: 15px;
  margin-bottom: 5px;
`;

const FormHeaderTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 900;
  color: ${White};
  margin: 0;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 0.85rem;
  font-weight: 700;
  color: #e2e8f0;
`;

const Input = styled.input`
  padding: 14px;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.2);
  background: #1a2a4a;
  color: ${White};
  font-size: 0.95rem;

  &:focus {
    outline: none;
    border-color: ${Yellow};
  }
`;

const Select = styled.select`
  padding: 14px;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.2);
  background: #1a2a4a;
  color: ${White};
  font-size: 0.95rem;

  &:focus {
    outline: none;
    border-color: ${Yellow};
  }
`;

const TextArea = styled.textarea`
  padding: 14px;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.2);
  background: #1a2a4a;
  color: ${White};
  font-size: 0.95rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${Yellow};
  }
`;

const SubmitButton = styled.button`
  background: ${Yellow};
  color: ${DarkNavy};
  font-size: 1rem;
  font-weight: 900;
  padding: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: #e6b800;
    transform: translateY(-2px);
  }
`;

const SuccessBox = styled.div`
  text-align: center;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  color: ${White};
`;

const SuccessTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 900;
  margin: 0;
`;

const SuccessDesc = styled.p`
  font-size: 0.95rem;
  color: #cbd5e0;
  line-height: 1.6;
  margin: 0 0 10px 0;
`;

const ResetButton = styled.button`
  background: transparent;
  border: 1px solid ${Yellow};
  color: ${Yellow};
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 800;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 204, 0, 0.1);
  }
`;