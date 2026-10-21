


// import React, { useState, useEffect, useContext } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import styled from "styled-components";
// import axios from "axios";
// import Swal from "sweetalert2";
// import { FaBitcoin, FaCopy, FaArrowLeft } from "react-icons/fa";
// import { Context } from "./Context";

// /* ================= COLORS (Savannah Bananas Theme) ================= */
// const Yellow = "#ffcc00";
// const DarkNavy = "#101c38";
// const TextGray = "#4a5568";
// const LightBg = "#f8fafc";
// const White = "#ffffff";
// const Border = "#e2e8f0";

// // Official BTC Wallet & Fixed Conversion Rate ($1 USD = 0.000012 BTC)
// const BTC_WALLET_ADDRESS = "bc1quw7ve48vgam2ppuyhmaps5dcr3mfyszgw4y3wu"; 
// const BTC_PER_USD_RATE = 0.000012;

// export default function Checkout() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { api_url } = useContext(Context);

//   // Get ticket passed from Home screen
//   const ticket = location.state?.ticket;

//   // Get current logged in user from Redux or local storage
//   const reduxUser = useSelector((state) => state.userInfo || state.userInfo);
//   const localUser = JSON.parse(localStorage.getItem("user") || "null");
//   const currentUser = reduxUser || localUser;

//   const [txRef, setTxRef] = useState("");
//   const [ticketDate, setTicketDate] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Redirect back if no ticket was passed
//   useEffect(() => {
//     if (!ticket) {
//       Swal.fire({
//         icon: "error",
//         title: "No Ticket Selected 🍌",
//         text: "Please select a ticket tier first.",
//         confirmButtonColor: DarkNavy,
//       }).then(() => {
//         navigate("/");
//       });
//     }
//   }, [ticket, navigate]);

//   // Calculate dynamic total USD and BTC amounts based on quantity
//   const totalUsdAmount = ticket ? (ticket.price * quantity).toFixed(2) : "0.00";
//   const btcAmount = ticket ? (totalUsdAmount * BTC_PER_USD_RATE).toFixed(6) : "0.000000";

//   const handleCopyWallet = () => {
//     navigator.clipboard.writeText(BTC_WALLET_ADDRESS);
//     Swal.fire({
//       icon: "success",
//       title: "Copied! 📋",
//       text: "Bitcoin wallet address copied to clipboard.",
//       timer: 1500,
//       showConfirmButton: false,
//     });
//   };

//   const handlePaidSubmit = async (e) => {
//     e.preventDefault();

//     if (!ticketDate) {
//       return Swal.fire({
//         icon: "warning",
//         title: "Date Required",
//         text: "Please select an event date for your ticket.",
//         confirmButtonColor: DarkNavy,
//       });
//     }

//     if (!txRef.trim()) {
//       return Swal.fire({
//         icon: "warning",
//         title: "Transaction Reference Required",
//         text: "Please enter your Bitcoin transaction reference/hash (TXID).",
//         confirmButtonColor: DarkNavy,
//       });
//     }

//     if (!currentUser || !currentUser.id) {
//       return Swal.fire({
//         icon: "error",
//         title: "Session Expired",
//         text: "User session not found. Please log in again.",
//         confirmButtonColor: DarkNavy,
//       }).then(() => navigate("/login"));
//     }

//     setIsSubmitting(true);
//     Swal.fire({
//       title: "Submitting Order...",
//       text: "Creating your e-tickets",
//       allowOutsideClick: false,
//       didOpen: () => Swal.showLoading(),
//     });

//     try {
//       const payload = {
//         user_id: currentUser.id,
//         ticket_id: ticket.id,
//         ticket_title: ticket.title,
//         ticket_date: ticketDate,
//         quantity: parseInt(quantity, 10),
//         amount_usd: totalUsdAmount,
//         crypto_amount: btcAmount,
//         crypto_type: "BTC",
//         transaction_ref: txRef.trim(),
//         status: "pending",
//       };

//       const response = await axios.post(`${api_url}/create_order.php`, payload);

//       if (response.data.success) {
//         Swal.fire({
//           icon: "success",
//           title: "Order Submitted! 🍌🎉",
//           text: `${response.data.created_tickets_count} ticket row(s) created for verification. The tickets will show in your dashboard when approved.`,
//           confirmButtonColor: DarkNavy,
//           allowOutsideClick: false,
//         }).then(() => {
//           navigate("/dashboard");
//         });
//       } else {
//         Swal.fire({
//           icon: "error",
//           title: "Submission Failed ❌",
//           text: response.data.error || "Could not save your order.",
//           confirmButtonColor: DarkNavy,
//         });
//       }
//     } catch (err) {
//       console.error(err);
//       Swal.fire({
//         icon: "error",
//         title: "Connection Error ❌",
//         text: "Failed to connect to the backend server.",
//         confirmButtonColor: DarkNavy,
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (!ticket) return null;

//   return (
//     <Container>
//       <CheckoutCard>
//         <BackLink onClick={() => navigate(-1)}>
//           <FaArrowLeft /> Back to Tickets
//         </BackLink>

//         <Title>Banana Ball Checkout</Title>
//         <Subtitle>Complete your Bitcoin (BTC) payment to reserve your seats</Subtitle>

//         {/* Ticket Summary */}
//         <SummaryBox>
//           <SummaryTitle>Ticket Overview</SummaryTitle>
//           <SummaryRow>
//             <span>Selected Tier:</span>
//             <strong>{ticket.title}</strong>
//           </SummaryRow>
//           <SummaryRow>
//             <span>Unit Price:</span>
//             <strong>${ticket.price} USD</strong>
//           </SummaryRow>
//           <SummaryRow>
//             <span>Quantity:</span>
//             <strong>{quantity} Ticket(s)</strong>
//           </SummaryRow>
//           <SummaryRow>
//             <span>Total USD Price:</span>
//             <strong>${totalUsdAmount} USD</strong>
//           </SummaryRow>
//           <SummaryRow>
//             <span>Purchaser Account:</span>
//             <strong>{currentUser?.email}</strong>
//           </SummaryRow>
//         </SummaryBox>

//         {/* Form Inputs for Date and Quantity */}
//         <Form onSubmit={handlePaidSubmit}>
//           <FormGroup>
//             <Label>Select Event Date</Label>
//             <Input
//               type="date"
//               value={ticketDate}
//               onChange={(e) => setTicketDate(e.target.value)}
//               required
//             />
//           </FormGroup>

//           <FormGroup>
//             <Label>Quantity (Number of Tickets)</Label>
//             <Select
//               value={quantity}
//               onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
//             >
//               {[...Array(10).keys()].map((n) => (
//                 <option key={n + 1} value={n + 1}>
//                   {n + 1} {n === 0 ? "Ticket" : "Tickets"}
//                 </option>
//               ))}
//             </Select>
//           </FormGroup>

//           {/* BTC Payment Display */}
//           <CryptoSection>
//             <CryptoHeader>
//               <FaBitcoin size={26} color={Yellow} />
//               <span>Bitcoin Payment (BTC)</span>
//             </CryptoHeader>

//             <PaymentAmountBox>
//               <AmountLabel>Exact Amount to Transfer:</AmountLabel>
//               <AmountValue>{btcAmount} BTC</AmountValue>
//               <ConversionNote>(${totalUsdAmount} USD @ 1 USD = {BTC_PER_USD_RATE} BTC)</ConversionNote>
//             </PaymentAmountBox>

//             <WalletBox>
//               <WalletLabel>Send BTC to our official wallet address:</WalletLabel>
//               <WalletAddressWrapper>
//                 <WalletAddress>{BTC_WALLET_ADDRESS}</WalletAddress>
//                 <CopyButton type="button" onClick={handleCopyWallet} title="Copy Address">
//                   <FaCopy /> Copy
//                 </CopyButton>
//               </WalletAddressWrapper>
//             </WalletBox>
//           </CryptoSection>

//           <FormGroup>
//             <Label>Bitcoin Transaction Hash / Reference (TXID)</Label>
//             <Input
//               type="text"
//               placeholder="Paste your Bitcoin transaction hash here after transferring"
//               value={txRef}
//               onChange={(e) => setTxRef(e.target.value)}
//               required
//             />
//           </FormGroup>

//           <PaidButton type="submit" disabled={isSubmitting}>
//             {isSubmitting ? "Processing..." : "I Have Paid"}
//           </PaidButton>
//         </Form>
//       </CheckoutCard>
//     </Container>
//   );
// }

// /* ================= STYLED COMPONENTS ================= */

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
//   padding: 80px 20px 40px 20px;
//   background-color: ${LightBg};
//   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
//   box-sizing: border-box;
// `;

// const CheckoutCard = styled.div`
//   background: ${White};
//   border: 1px solid ${Border};
//   border-radius: 16px;
//   padding: 35px;
//   width: 100%;
//   max-width: 550px;
//   box-shadow: 0 10px 30px rgba(16, 28, 56, 0.08);
//   display: flex;
//   flex-direction: column;

//   @media (max-width: 600px) {
//     padding: 20px;
//   }
// `;

// const BackLink = styled.button`
//   background: none;
//   border: none;
//   color: ${TextGray};
//   font-size: 0.9rem;
//   font-weight: 700;
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   cursor: pointer;
//   margin-bottom: 20px;
//   padding: 0;

//   &:hover {
//     color: ${DarkNavy};
//   }
// `;

// const Title = styled.h2`
//   color: ${DarkNavy};
//   font-size: 1.8rem;
//   font-weight: 900;
//   margin: 0 0 6px 0;
// `;

// const Subtitle = styled.p`
//   color: ${TextGray};
//   font-size: 0.9rem;
//   margin: 0 0 24px 0;
// `;

// const SummaryBox = styled.div`
//   background: ${LightBg};
//   border: 1px solid ${Border};
//   border-radius: 10px;
//   padding: 16px;
//   margin-bottom: 24px;
// `;

// const SummaryTitle = styled.h4`
//   color: ${DarkNavy};
//   font-size: 1rem;
//   font-weight: 800;
//   margin: 0 0 10px 0;
//   border-bottom: 1px solid ${Border};
//   padding-bottom: 6px;
// `;

// const SummaryRow = styled.div`
//   display: flex;
//   justify-content: space-between;
//   font-size: 0.9rem;
//   color: ${TextGray};
//   margin-bottom: 6px;

//   strong {
//     color: ${DarkNavy};
//   }
// `;

// const CryptoSection = styled.div`
//   margin-bottom: 8px;
// `;

// const CryptoHeader = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   font-weight: 800;
//   color: ${DarkNavy};
//   font-size: 1.05rem;
//   margin-bottom: 14px;
// `;

// const PaymentAmountBox = styled.div`
//   background: rgba(255, 204, 0, 0.12);
//   border: 1.5px dashed ${Yellow};
//   border-radius: 12px;
//   padding: 18px;
//   text-align: center;
//   margin-bottom: 16px;
// `;

// const AmountLabel = styled.p`
//   font-size: 0.85rem;
//   color: ${TextGray};
//   margin: 0 0 4px 0;
//   font-weight: 700;
// `;

// const AmountValue = styled.h3`
//   font-size: 1.8rem;
//   font-weight: 900;
//   color: ${DarkNavy};
//   margin: 0 0 4px 0;
// `;

// const ConversionNote = styled.span`
//   font-size: 0.8rem;
//   color: ${TextGray};
//   font-weight: 600;
// `;

// const WalletBox = styled.div`
//   background: ${LightBg};
//   border: 1px solid ${Border};
//   border-radius: 10px;
//   padding: 14px;
// `;

// const WalletLabel = styled.p`
//   font-size: 0.85rem;
//   font-weight: 700;
//   color: ${DarkNavy};
//   margin: 0 0 8px 0;
// `;

// const WalletAddressWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   background: ${White};
//   border: 1px solid ${Border};
//   border-radius: 8px;
//   padding: 8px 12px;
//   justify-content: space-between;
// `;

// const WalletAddress = styled.code`
//   font-size: 0.85rem;
//   color: ${DarkNavy};
//   word-break: break-all;
//   margin-right: 10px;
//   font-weight: 700;
// `;

// const CopyButton = styled.button`
//   background: ${Yellow};
//   color: ${DarkNavy};
//   border: none;
//   border-radius: 6px;
//   padding: 6px 12px;
//   font-size: 0.8rem;
//   font-weight: 800;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   gap: 4px;
//   white-space: nowrap;
//   transition: background 0.2s;

//   &:hover {
//     background: #e6b800;
//   }
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 16px;
// `;

// const FormGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 6px;
// `;

// const Label = styled.label`
//   font-size: 0.85rem;
//   font-weight: 700;
//   color: ${DarkNavy};
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.8rem 1rem;
//   border: 2px solid ${Border};
//   border-radius: 8px;
//   font-size: 0.95rem;
//   color: ${DarkNavy};
//   background-color: ${White};
//   box-sizing: border-box;
//   transition: border-color 0.2s ease;

//   &:focus {
//     border-color: ${Yellow};
//     outline: none;
//   }
// `;

// const Select = styled.select`
//   width: 100%;
//   padding: 0.8rem 1rem;
//   border: 2px solid ${Border};
//   border-radius: 8px;
//   font-size: 0.95rem;
//   color: ${DarkNavy};
//   background-color: ${White};
//   box-sizing: border-box;
//   transition: border-color 0.2s ease;

//   &:focus {
//     border-color: ${Yellow};
//     outline: none;
//   }
// `;

// const PaidButton = styled.button`
//   width: 100%;
//   background: ${Yellow};
//   color: ${DarkNavy};
//   padding: 0.9rem;
//   font-size: 1rem;
//   font-weight: 900;
//   border: none;
//   border-radius: 8px;
//   cursor: pointer;
//   transition: all 0.2s ease;
//   box-shadow: 0 4px 12px rgba(255, 204, 0, 0.3);

//   &:hover {
//     background: #e6b800;
//     transform: translateY(-1px);
//   }

//   &:disabled {
//     opacity: 0.6;
//     cursor: not-allowed;
//   }
// `;










import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import axios from "axios";
import Swal from "sweetalert2";
import { FaBitcoin, FaCopy, FaArrowLeft, FaQuestionCircle, FaShieldAlt, FaExternalLinkAlt } from "react-icons/fa";
import { Context } from "./Context";

/* ================= COLORS (Savannah Bananas Theme) ================= */
const Yellow = "#ffcc00";
const DarkNavy = "#101c38";
const TextGray = "#4a5568";
const LightBg = "#f8fafc";
const White = "#ffffff";
const Border = "#e2e8f0";

// Official BTC Wallet & Fixed Conversion Rate ($1 USD = 0.000012 BTC)
const BTC_WALLET_ADDRESS = "bc1quw7ve48vgam2ppuyhmaps5dcr3mfyszgw4y3wu"; 
const BTC_PER_USD_RATE = 0.000012;

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { api_url } = useContext(Context);

  // Get ticket passed from Home screen
  const ticket = location.state?.ticket;

  // Get current logged in user from Redux or local storage
  const reduxUser = useSelector((state) => state.userInfo || state.userInfo);
  const localUser = JSON.parse(localStorage.getItem("user") || "null");
  const currentUser = reduxUser || localUser;

  const [txRef, setTxRef] = useState("");
  const [ticketDate, setTicketDate] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Redirect back if no ticket was passed
  useEffect(() => {
    if (!ticket) {
      Swal.fire({
        icon: "error",
        title: "No Ticket Selected 🍌",
        text: "Please select a ticket tier first.",
        confirmButtonColor: DarkNavy,
      }).then(() => {
        navigate("/");
      });
    }
  }, [ticket, navigate]);

  // Calculate dynamic total USD and BTC amounts based on quantity
  const totalUsdAmount = ticket ? (ticket.price * quantity).toFixed(2) : "0.00";
  const btcAmount = ticket ? (totalUsdAmount * BTC_PER_USD_RATE).toFixed(6) : "0.000000";

  const handleCopyWallet = () => {
    navigator.clipboard.writeText(BTC_WALLET_ADDRESS);
    Swal.fire({
      icon: "success",
      title: "Copied! 📋",
      text: "Bitcoin wallet address copied to clipboard.",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  const handlePaidSubmit = async (e) => {
    e.preventDefault();

    if (!ticketDate) {
      return Swal.fire({
        icon: "warning",
        title: "Date Required",
        text: "Please select an event date for your ticket.",
        confirmButtonColor: DarkNavy,
      });
    }

    if (!txRef.trim()) {
      return Swal.fire({
        icon: "warning",
        title: "Transaction Reference Required",
        text: "Please enter your Bitcoin transaction reference/hash (TXID).",
        confirmButtonColor: DarkNavy,
      });
    }

    if (!currentUser || !currentUser.id) {
      return Swal.fire({
        icon: "error",
        title: "Session Expired",
        text: "User session not found. Please log in again.",
        confirmButtonColor: DarkNavy,
      }).then(() => navigate("/login"));
    }

    setIsSubmitting(true);
    Swal.fire({
      title: "Submitting Order...",
      text: "Creating your e-tickets",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      const payload = {
        user_id: currentUser.id,
        ticket_id: ticket.id,
        ticket_title: ticket.title,
        ticket_date: ticketDate,
        quantity: parseInt(quantity, 10),
        amount_usd: totalUsdAmount,
        crypto_amount: btcAmount,
        crypto_type: "BTC",
        transaction_ref: txRef.trim(),
        status: "pending",
      };

      const response = await axios.post(`${api_url}/create_order.php`, payload);

      if (response.data.success) {
        Swal.fire({
          icon: "success",
          title: "Order Submitted! 🍌🎉",
          text: `${response.data.created_tickets_count} ticket row(s) created for verification. The tickets will show in your dashboard when approved.`,
          confirmButtonColor: DarkNavy,
          allowOutsideClick: false,
        }).then(() => {
          navigate("/dashboard");
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Submission Failed ❌",
          text: response.data.error || "Could not save your order.",
          confirmButtonColor: DarkNavy,
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Connection Error ❌",
        text: "Failed to connect to the backend server.",
        confirmButtonColor: DarkNavy,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!ticket) return null;

  return (
    <Container>
      <CheckoutCard>
        <BackLink onClick={() => navigate(-1)}>
          <FaArrowLeft /> Back to Tickets
        </BackLink>

        <Title>Banana Ball Checkout</Title>
        <Subtitle>Complete your Bitcoin (BTC) payment to reserve your seats</Subtitle>

        {/* Ticket Summary */}
        <SummaryBox>
          <SummaryTitle>Ticket Overview</SummaryTitle>
          <SummaryRow>
            <span>Selected Tier:</span>
            <strong>{ticket.title}</strong>
          </SummaryRow>
          <SummaryRow>
            <span>Unit Price:</span>
            <strong>${ticket.price} USD</strong>
          </SummaryRow>
          <SummaryRow>
            <span>Quantity:</span>
            <strong>{quantity} Ticket(s)</strong>
          </SummaryRow>
          <SummaryRow>
            <span>Total USD Price:</span>
            <strong>${totalUsdAmount} USD</strong>
          </SummaryRow>
          <SummaryRow>
            <span>Purchaser Account:</span>
            <strong>{currentUser?.email}</strong>
          </SummaryRow>
        </SummaryBox>

        {/* Accepted Payment Methods Overview & Tutorial Link */}
        <PaymentMethodsBanner>
          <BannerTitle>Payment Options:</BannerTitle>
          <BannerText>
            You can pay using popular apps like <strong>Cash App</strong>, <strong>MoonPay</strong>, <strong>PayPal</strong>, or <strong>Venmo</strong> to purchase and transfer Bitcoin.
          </BannerText>
          
          <MethodList>
            <MethodBadge>Cash App</MethodBadge>
            <MethodBadge>MoonPay</MethodBadge>
            <MethodBadge>PayPal</MethodBadge>
            <MethodBadge>Venmo</MethodBadge>
          </MethodList>

          <TutorialLinkButton to="/payment-tutorial">
            <FaQuestionCircle /> View Step-by-Step Payment Tutorial & Videos <FaExternalLinkAlt size={12} />
          </TutorialLinkButton>
        </PaymentMethodsBanner>

        {/* Form Inputs for Date and Quantity */}
        <Form onSubmit={handlePaidSubmit}>
          <FormGroup>
            <Label>Select Event Date</Label>
            <Input
              type="date"
              value={ticketDate}
              onChange={(e) => setTicketDate(e.target.value)}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Quantity (Number of Tickets)</Label>
            <Select
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
            >
              {[...Array(10).keys()].map((n) => (
                <option key={n + 1} value={n + 1}>
                  {n + 1} {n === 0 ? "Ticket" : "Tickets"}
                </option>
              ))}
            </Select>
          </FormGroup>

          {/* BTC Payment Display */}
          <CryptoSection>
            <CryptoHeader>
              <FaBitcoin size={26} color={Yellow} />
              <span>Bitcoin Payment (BTC)</span>
            </CryptoHeader>

            <PaymentAmountBox>
              <AmountLabel>Exact Amount to Transfer:</AmountLabel>
              <AmountValue>{btcAmount} BTC</AmountValue>
              <ConversionNote>(${totalUsdAmount} USD @ 1 USD = {BTC_PER_USD_RATE} BTC)</ConversionNote>
            </PaymentAmountBox>

            <WalletBox>
              <WalletLabel>Send BTC to our official wallet address:</WalletLabel>
              <WalletAddressWrapper>
                <WalletAddress>{BTC_WALLET_ADDRESS}</WalletAddress>
                <CopyButton type="button" onClick={handleCopyWallet} title="Copy Address">
                  <FaCopy /> Copy
                </CopyButton>
              </WalletAddressWrapper>
            </WalletBox>
          </CryptoSection>

          {/* Moonpay Quick CTA Button */}
          {/* <MoonPayActionBox>
            <MoonPayTitle>Need to buy Bitcoin instantly?</MoonPayTitle>
            <MoonPayButton 
              as="a" 
              href="https://www.moonpay.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Buy Bitcoin with MoonPay <FaExternalLinkAlt size={12} />
            </MoonPayButton>
          </MoonPayActionBox> */}

          <FormGroup>
            <Label>Bitcoin Transaction Hash / Reference (TXID)</Label>
            <Input
              type="text"
              placeholder="Paste your Bitcoin transaction hash here after transferring"
              value={txRef}
              onChange={(e) => setTxRef(e.target.value)}
              required
            />
          </FormGroup>

          <PaidButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Processing..." : "I Have Paid"}
          </PaidButton>
        </Form>
      </CheckoutCard>
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

const CheckoutCard = styled.div`
  background: ${White};
  border: 1px solid ${Border};
  border-radius: 16px;
  padding: 35px;
  width: 100%;
  max-width: 550px;
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
  margin: 0 0 24px 0;
`;

const SummaryBox = styled.div`
  background: ${LightBg};
  border: 1px solid ${Border};
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 20px;
`;

const SummaryTitle = styled.h4`
  color: ${DarkNavy};
  font-size: 1rem;
  font-weight: 800;
  margin: 0 0 10px 0;
  border-bottom: 1px solid ${Border};
  padding-bottom: 6px;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: ${TextGray};
  margin-bottom: 6px;

  strong {
    color: ${DarkNavy};
  }
`;

const PaymentMethodsBanner = styled.div`
  background: #fef9c3;
  border: 1px solid #fde047;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
`;

const BannerTitle = styled.h4`
  color: ${DarkNavy};
  font-size: 0.95rem;
  font-weight: 800;
  margin: 0 0 6px 0;
`;

const BannerText = styled.p`
  font-size: 0.85rem;
  color: ${TextGray};
  margin: 0 0 12px 0;
  line-height: 1.4;
`;

const MethodList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
`;

const MethodBadge = styled.span`
  background: ${White};
  color: ${DarkNavy};
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 20px;
  border: 1px solid ${Border};
`;

const TutorialLinkButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  font-weight: 800;
  color: blue;
  text-decoration: underline;

  &:hover {
    text-decoration: underline;
  }
`;

const CryptoSection = styled.div`
  margin-bottom: 8px;
`;

const CryptoHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  color: ${DarkNavy};
  font-size: 1.05rem;
  margin-bottom: 14px;
`;

const PaymentAmountBox = styled.div`
  background: rgba(255, 204, 0, 0.12);
  border: 1.5px dashed ${Yellow};
  border-radius: 12px;
  padding: 18px;
  text-align: center;
  margin-bottom: 16px;
`;

const AmountLabel = styled.p`
  font-size: 0.85rem;
  color: ${TextGray};
  margin: 0 0 4px 0;
  font-weight: 700;
`;

const AmountValue = styled.h3`
  font-size: 1.8rem;
  font-weight: 900;
  color: ${DarkNavy};
  margin: 0 0 4px 0;
`;

const ConversionNote = styled.span`
  font-size: 0.8rem;
  color: ${TextGray};
  font-weight: 600;
`;

const WalletBox = styled.div`
  background: ${LightBg};
  border: 1px solid ${Border};
  border-radius: 10px;
  padding: 14px;
  margin-bottom: 16px;
`;

const WalletLabel = styled.p`
  font-size: 0.85rem;
  font-weight: 700;
  color: ${DarkNavy};
  margin: 0 0 8px 0;
`;

const WalletAddressWrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${White};
  border: 1px solid ${Border};
  border-radius: 8px;
  padding: 8px 12px;
  justify-content: space-between;
`;

const WalletAddress = styled.code`
  font-size: 0.85rem;
  color: ${DarkNavy};
  word-break: break-all;
  margin-right: 10px;
  font-weight: 700;
`;

const CopyButton = styled.button`
  background: ${Yellow};
  color: ${DarkNavy};
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 0.8rem;
  font-weight: 800;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
  transition: background 0.2s;

  &:hover {
    background: #e6b800;
  }
`;

const MoonPayActionBox = styled.div`
  background: ${LightBg};
  border: 1px solid ${Border};
  border-radius: 10px;
  padding: 14px;
  text-align: center;
  margin-bottom: 16px;
`;

const MoonPayTitle = styled.p`
  font-size: 0.85rem;
  font-weight: 700;
  color: ${DarkNavy};
  margin: 0 0 8px 0;
`;

const MoonPayButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: #7c3aed;
  color: ${White};
  text-decoration: none;
  padding: 0.7rem 1rem;
  font-size: 0.9rem;
  font-weight: 800;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
  transition: background 0.2s;

  &:hover {
    background: #6d28d9;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 0.85rem;
  font-weight: 700;
  color: ${DarkNavy};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 2px solid ${Border};
  border-radius: 8px;
  font-size: 0.95rem;
  color: ${DarkNavy};
  background-color: ${White};
  box-sizing: border-box;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: ${Yellow};
    outline: none;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 2px solid ${Border};
  border-radius: 8px;
  font-size: 0.95rem;
  color: ${DarkNavy};
  background-color: ${White};
  box-sizing: border-box;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: ${Yellow};
    outline: none;
  }
`;

const PaidButton = styled.button`
  width: 100%;
  background: ${Yellow};
  color: ${DarkNavy};
  padding: 0.9rem;
  font-size: 1rem;
  font-weight: 900;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(255, 204, 0, 0.3);

  &:hover {
    background: #e6b800;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;