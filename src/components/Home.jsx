// import React, { useState } from "react";
// import styled from "styled-components";
// import { FaStar, FaCheckCircle } from "react-icons/fa";

// /* ================= COLORS (Savannah Bananas Theme) ================= */
// const Yellow = "#ffcc00";
// const DarkNavy = "#101c38";
// const TextGray = "#4a5568";
// const LightBg = "#f8fafc";
// const White = "#ffffff";
// const Border = "#e2e8f0";

// export default function Home() {
//   const [selectedMatch, setSelectedMatch] = useState(null);

//   // Tickets array with IDs for backend integration
//   const ticketTiers = [
//     {
//       id: 1,
//       title: "Open Seatings",
//       price: 35,
//       priceUnit: "USD",
//       badge: "Best Value",
//       isFeatured: false,
//       isPrimaryButton: false,
//       // note: "⚠️ Price increases once games start",
//       features: [
//         "Unreserved stadium seating",
//         "Full access to all Banana Ball action",
//         "Concessions & store access",
//         "Instant e-ticket delivery",
//       ],
//     },
//     {
//       id: 2,
//       title: "VIB (Very Important Banana)",
//       price: 100,
//       priceUnit: "USD",
//       badge: "Most Popular",
//       isFeatured: true,
//       isPrimaryButton: true,
//       // note: "⚠️ Price increases once games start",
//       features: [
//         "Priority stadium early entrance",
//         "Premium front section seating",
//         "Exclusive meet & greet with players",
//         "Commemorative lanyard & merch pass",
//       ],
//     },
//   ];

//   return (
//     <Container>
//       {/* ================= TICKET TIERS SECTION ================= */}
//       <Section id="tickets">
//         <SectionHeader>
//           <SectionTitle>Select Your Ticket</SectionTitle>
//           <SectionSub>Starting prices before game-day increases. Secure your seats early!</SectionSub>
//         </SectionHeader>

//         <PricingGrid>
//           {ticketTiers.map((ticket) => (
//             <PriceCard key={ticket.id} $featured={ticket.isFeatured}>
//               <PriceBadge $yellow={ticket.isFeatured}>{ticket.badge}</PriceBadge>
//               <CardTitle>{ticket.title}</CardTitle>
//               <PriceTag>
//                 <Currency>$</Currency>
//                 {ticket.price}
//                 <PriceUnit>{ticket.priceUnit}</PriceUnit>
//               </PriceTag>
//               <PriceNote>{ticket.note}</PriceNote>
//               <FeatureList>
//                 {ticket.features.map((feature, idx) => (
//                   <FeatureItem key={idx}>
//                     <FaCheckCircle color={Yellow} /> {feature}
//                   </FeatureItem>
//                 ))}
//               </FeatureList>
//               <SelectButton $primary={ticket.isPrimaryButton} href="#schedule">
//                 Get Ticket
//               </SelectButton>
//             </PriceCard>
//           ))}
//         </PricingGrid>
//       </Section>

//       {/* ================= CONFIRMATION & ORDER PROCESS INFO ================= */}
//       <Section>
//         <SectionHeader>
//           <SectionTitle>How Ticket Delivery Works</SectionTitle>
//           <SectionSub>Automated, secure, and hassle-free ticket fulfillment.</SectionSub>
//         </SectionHeader>

//         <ProcessGrid>
//           <ProcessStep>
//             <StepNumber>1</StepNumber>
//             <StepTitle>Instant Automated Notice</StepTitle>
//             <StepDesc>
//               Immediately after checkout, you'll receive an on-screen confirmation message letting you know that your payment is being processed and verified.
//             </StepDesc>
//           </ProcessStep>

//           <ProcessStep>
//             <StepNumber>2</StepNumber>
//             <StepTitle>Automated Email & Ticket</StepTitle>
//             <StepDesc>
//               Once payment is verified, an email is sent straight to your inbox with your attached digital tickets and clear instructions on how to access them.
//             </StepDesc>
//           </ProcessStep>

//           <ProcessStep>
//             <StepNumber>3</StepNumber>
//             <StepTitle>Full Support Access</StepTitle>
//             <StepDesc>
//               Need additional help or special arrangements? The confirmation email provides direct contact instructions to reach your dedicated ticket provider.
//             </StepDesc>
//           </ProcessStep>
//         </ProcessGrid>
//       </Section>

//       {/* ================= REVIEWS / TRUST ================= */}
//       <Section $altBg>
//         <SectionHeader>
//           <SectionTitle>Why Fans Love Banana Ball</SectionTitle>
//         </SectionHeader>

//         <ReviewsGrid>
//           <ReviewCard>
//             <Stars>
//               <FaStar />
//               <FaStar />
//               <FaStar />
//               <FaStar />
//               <FaStar />
//             </Stars>
//             <ReviewText>"The single best sports event I've ever taken my family to. Non-stop fun from start to finish!"</ReviewText>
//             <Reviewer>- Marcus T., Savannah GA</Reviewer>
//           </ReviewCard>

//           <ReviewCard>
//             <Stars>
//               <FaStar />
//               <FaStar />
//               <FaStar />
//               <FaStar />
//               <FaStar />
//             </Stars>
//             <ReviewText>"VIB tickets were 100% worth it! Meeting the players and getting early access made the night unforgettable."</ReviewText>
//             <Reviewer>- Sarah L., Jacksonville FL</Reviewer>
//           </ReviewCard>

//           <ReviewCard>
//             <Stars>
//               <FaStar />
//               <FaStar />
//               <FaStar />
//               <FaStar />
//               <FaStar />
//             </Stars>
//             <ReviewText>"Tickets were delivered straight to my email right after verification. Flawless experience."</ReviewText>
//             <Reviewer>- David K., Atlanta GA</Reviewer>
//           </ReviewCard>
//         </ReviewsGrid>
//       </Section>
//     </Container>
//   );
// }

// // --- STYLED COMPONENTS ---

// const Container = styled.div`
//   width: 100%;
//   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
//   color: ${DarkNavy};
//   background-color: ${White};
// `;

// const Section = styled.section`
//   padding: 80px 20px;
//   max-width: 1200px;
//   margin: 0 auto;
//   background-color: ${(p) => (p.$altBg ? LightBg : White)};

//   @media (max-width: 768px) {
//     padding: 50px 20px;
//   }
// `;

// const SectionHeader = styled.div`
//   text-align: center;
//   margin-bottom: 50px;
// `;

// const SectionTitle = styled.h3`
//   font-size: 2.2rem;
//   font-weight: 900;
//   color: ${DarkNavy};
//   margin: 0 0 10px 0;
// `;

// const SectionSub = styled.p`
//   font-size: 1rem;
//   color: ${TextGray};
//   margin: 0;
// `;

// const PricingGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 30px;
//   max-width: 900px;
//   margin: 0 auto;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const PriceCard = styled.div`
//   position: relative;
//   border: 2px solid ${(p) => (p.$featured ? Yellow : Border)};
//   border-radius: 12px;
//   padding: 40px 30px;
//   background: ${White};
//   display: flex;
//   flex-direction: column;
//   box-shadow: ${(p) => (p.$featured ? "0 10px 30px rgba(0,0,0,0.08)" : "none")};
// `;

// const PriceBadge = styled.span`
//   position: absolute;
//   top: -14px;
//   right: 20px;
//   background: ${(p) => (p.$yellow ? Yellow : DarkNavy)};
//   color: ${(p) => (p.$yellow ? DarkNavy : White)};
//   font-size: 11px;
//   font-weight: 800;
//   padding: 4px 12px;
//   border-radius: 20px;
//   text-transform: uppercase;
// `;

// const CardTitle = styled.h4`
//   font-size: 1.3rem;
//   font-weight: 800;
//   margin: 0 0 15px 0;
// `;

// const PriceTag = styled.div`
//   font-size: 3rem;
//   font-weight: 900;
//   color: ${DarkNavy};
//   display: flex;
//   align-items: baseline;
//   margin-bottom: 4px;
// `;

// const Currency = styled.span`
//   font-size: 1.8rem;
// `;

// const PriceUnit = styled.span`
//   font-size: 0.85rem;
//   color: ${TextGray};
//   font-weight: 500;
//   margin-left: 8px;
// `;

// const PriceNote = styled.p`
//   font-size: 0.8rem;
//   color: #e53e3e;
//   font-weight: 700;
//   margin: 0 0 25px 0;
// `;

// const FeatureList = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0 0 30px 0;
//   display: flex;
//   flex-direction: column;
//   gap: 12px;
// `;

// const FeatureItem = styled.li`
//   font-size: 0.95rem;
//   color: ${DarkNavy};
//   display: flex;
//   align-items: center;
//   gap: 10px;
// `;

// const SelectButton = styled.a`
//   display: block;
//   text-align: center;
//   padding: 14px;
//   border-radius: 6px;
//   font-weight: 800;
//   text-decoration: none;
//   background: ${(p) => (p.$primary ? Yellow : DarkNavy)};
//   color: ${(p) => (p.$primary ? DarkNavy : White)};
//   transition: opacity 0.2s;

//   &:hover {
//     opacity: 0.9;
//   }
// `;

// const ProcessGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 30px;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const ProcessStep = styled.div`
//   text-align: center;
//   padding: 20px;
// `;

// const StepNumber = styled.div`
//   width: 50px;
//   height: 50px;
//   background: ${Yellow};
//   color: ${DarkNavy};
//   font-size: 1.4rem;
//   font-weight: 900;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 0 auto 20px auto;
// `;

// const StepTitle = styled.h4`
//   font-size: 1.1rem;
//   font-weight: 800;
//   margin: 0 0 10px 0;
// `;

// const StepDesc = styled.p`
//   font-size: 0.9rem;
//   color: ${TextGray};
//   line-height: 1.5;
//   margin: 0;
// `;

// const ReviewsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 20px;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const ReviewCard = styled.div`
//   background: ${White};
//   padding: 25px;
//   border-radius: 10px;
//   border: 1px solid ${Border};
// `;

// const Stars = styled.div`
//   color: ${Yellow};
//   margin-bottom: 12px;
//   display: flex;
//   gap: 2px;
// `;

// const ReviewText = styled.p`
//   font-size: 0.9rem;
//   color: ${DarkNavy};
//   font-style: italic;
//   margin: 0 0 15px 0;
//   line-height: 1.5;
// `;

// const Reviewer = styled.span`
//   font-size: 0.8rem;
//   font-weight: 800;
//   color: ${TextGray};
// `;


import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Swal from "sweetalert2";
import { FaStar, FaCheckCircle } from "react-icons/fa";
import { Context } from "./Context";

/* ================= COLORS (Savannah Bananas Theme) ================= */
const Yellow = "#ffcc00";
const DarkNavy = "#101c38";
const TextGray = "#4a5568";
const LightBg = "#f8fafc";
const White = "#ffffff";
const Border = "#e2e8f0";

export default function Home() {
  const navigate = useNavigate();
  const {ticketTiers}=useContext(Context);
  
  // Retrieve user authentication state from Redux store (or localStorage fallback)
  const user = useSelector((state) => state.userInfo);



  const handleGetTicket = (ticket) => {
    // Check if user is logged in
    const isLoggedIn = user || localStorage.getItem("user");

    if (!isLoggedIn) {
      Swal.fire({
        icon: "warning",
        title: "Authentication Required 🍌",
        text: "Please log in or sign up to purchase tickets.",
        showCancelButton: true,
        confirmButtonText: "Log In",
        cancelButtonText: "Sign Up",
        confirmButtonColor: DarkNavy,
        cancelButtonColor: "#d69e2e",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          navigate("/signup");
        }
      });
      return;
    }

    // If logged in, navigate to checkout route with ticket details
    navigate("/checkout", { state: { ticket } });
  };

  return (
    <Container>
      {/* ================= TICKET TIERS SECTION ================= */}
      <Section id="tickets">
        <SectionHeader>
          <SectionTitle>Select Your Ticket</SectionTitle>
          <SectionSub>Starting prices before game-day increases. Secure your seats early!</SectionSub>
        </SectionHeader>

        <PricingGrid>
          {ticketTiers.map((ticket) => (
            <PriceCard key={ticket.id} $featured={ticket.isFeatured}>
              
              <PriceBadge $yellow={ticket.isFeatured}>{ticket.badge}</PriceBadge>
              <CardTitle>{ticket.title}</CardTitle>
              <PriceTag>
                <Currency>$</Currency>
                {ticket.price}
                <PriceUnit>{ticket.priceUnit}</PriceUnit>
              </PriceTag>
            {ticket.image  &&  <img style={{
                width:"100%",
                borderRadius:"10px",
                marginBottom:"10px"
              }}
              src={ticket.image} alt="logo"/>}
              <FeatureList>
                {ticket.features.map((feature, idx) => (
                  <FeatureItem key={idx}>
                    <FaCheckCircle color={Yellow} /> {feature}
                  </FeatureItem>
                ))}
              </FeatureList>
              <SelectButton 
                $primary={ticket.isPrimaryButton} 
                onClick={() => handleGetTicket(ticket)}
              >
                Get Ticket
              </SelectButton>
            </PriceCard>
          ))}
        </PricingGrid>
      </Section>

      {/* ================= HOW IT WORKS ================= */}
      <Section>
        <SectionHeader>
          <SectionTitle>How Ticket Delivery Works</SectionTitle>
          <SectionSub>Automated, secure, and hassle-free ticket fulfillment.</SectionSub>
        </SectionHeader>

        <ProcessGrid>
          <ProcessStep>
            <StepNumber>1</StepNumber>
            <StepTitle>Crypto Payment</StepTitle>
            <StepDesc>Transfer the exact crypto equivalent to our secure wallet and submit your transaction hash.</StepDesc>
          </ProcessStep>
          <ProcessStep>
            <StepNumber>2</StepNumber>
            <StepTitle>Pending Verification</StepTitle>
            <StepDesc>Your order is instantly saved with a pending status while our system verifies the blockchain transaction.</StepDesc>
          </ProcessStep>
          <ProcessStep>
            <StepNumber>3</StepNumber>
            <StepTitle>Ticket Delivery</StepTitle>
            <StepDesc>Once confirmed, your digital e-tickets are dispatched directly to your registered email.</StepDesc>
          </ProcessStep>
        </ProcessGrid>
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

const Section = styled.section`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: ${(p) => (p.$altBg ? LightBg : White)};

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const SectionTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 900;
  color: ${DarkNavy};
  margin: 0 0 10px 0;
`;

const SectionSub = styled.p`
  font-size: 1rem;
  color: ${TextGray};
  margin: 0;
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PriceCard = styled.div`
  position: relative;
  border: 2px solid ${(p) => (p.$featured ? Yellow : Border)};
  border-radius: 16px;
  padding: 40px 30px;
  background: ${White};
  display: flex;
  flex-direction: column;
  box-shadow: ${(p) => (p.$featured ? "0 10px 30px rgba(16,28,56,0.08)" : "none")};
`;

const PriceBadge = styled.span`
  position: absolute;
  top: -14px;
  right: 20px;
  background: ${(p) => (p.$yellow ? Yellow : DarkNavy)};
  color: ${(p) => (p.$yellow ? DarkNavy : White)};
  font-size: 11px;
  font-weight: 800;
  padding: 4px 12px;
  border-radius: 20px;
  text-transform: uppercase;
`;

const CardTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 800;
  margin: 0 0 15px 0;
  color: ${DarkNavy};
`;

const PriceTag = styled.div`
  font-size: 3rem;
  font-weight: 900;
  color: ${DarkNavy};
  display: flex;
  align-items: baseline;
  margin-bottom: 25px;
`;

const Currency = styled.span`
  font-size: 1.8rem;
`;

const PriceUnit = styled.span`
  font-size: 0.85rem;
  color: ${TextGray};
  font-weight: 500;
  margin-left: 8px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FeatureItem = styled.li`
  font-size: 0.95rem;
  color: ${DarkNavy};
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SelectButton = styled.button`
  width: 100%;
  text-align: center;
  padding: 14px;
  border-radius: 8px;
  font-weight: 900;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  background: ${(p) => (p.$primary ? Yellow : DarkNavy)};
  color: ${(p) => (p.$primary ? DarkNavy : White)};
  transition: all 0.2s;
  box-shadow: 0 4px 12px rgba(16, 28, 56, 0.1);

  &:hover {
    transform: translateY(-1px);
    opacity: 0.95;
  }
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProcessStep = styled.div`
  text-align: center;
  padding: 20px;
`;

const StepNumber = styled.div`
  width: 50px;
  height: 50px;
  background: ${Yellow};
  color: ${DarkNavy};
  font-size: 1.4rem;
  font-weight: 900;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px auto;
`;

const StepTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 800;
  margin: 0 0 10px 0;
  color: ${DarkNavy};
`;

const StepDesc = styled.p`
  font-size: 0.9rem;
  color: ${TextGray};
  line-height: 1.5;
  margin: 0;
`;