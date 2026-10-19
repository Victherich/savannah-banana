// import React, { useState, useEffect, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import styled from "styled-components";
// import axios from "axios";
// import { FaTicketAlt, FaClock, FaCheckCircle, FaTimesCircle, FaBitcoin } from "react-icons/fa";
// import { Context } from "./Context";

// /* ================= COLORS (Savannah Bananas Theme) ================= */
// const Yellow = "#ffcc00";
// const DarkNavy = "#101c38";
// const TextGray = "#4a5568";
// const LightBg = "#f8fafc";
// const White = "#ffffff";
// const Border = "#e2e8f0";
// const Green = "#16a34a";
// const Red = "#dc2626";

// export default function MyTickets() {
//   const navigate = useNavigate();
//   const { api_url, ticketTiers } = useContext(Context);

//   const reduxUser = useSelector((state) => state.userInfo);
//   const localUser = JSON.parse(localStorage.getItem("user") || "null");
//   const currentUser = reduxUser || localUser;

//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   console.log(orders)

//   useEffect(() => {
//     if (!currentUser || !currentUser.id) {
//       navigate("/login");
//       return;
//     }

//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get(`${api_url}/get_user_orders.php`, {
//           params: { user_id: currentUser.id }
//         });

//         if (response.data.success) {
//           setOrders(response.data.orders);
//         } else {
//           setError(response.data.error || "Failed to load orders.");
//         }
//       } catch (err) {
//         console.error(err);
//         setError("Unable to connect to server. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [currentUser, api_url, navigate]);


// // Helper function to match ticket_id with context ticketTiers
//   const getTicketTitle = (ticketId, fallbackTitle) => {
//     const matchedTier = ticketTiers?.find((tier) => tier.id === Number(ticketId));
//     return matchedTier ? matchedTier.title : (fallbackTitle || "Unknown Ticket");
//   };



//   const renderStatusBadge = (status) => {
//     const normalizedStatus = (status || "pending").toLowerCase();
//     if (normalizedStatus === "active") {
//       return (
//         <Badge status="success">
//           <FaCheckCircle /> Active
//         </Badge>
//       );
//     } else if (normalizedStatus === "inactive") {
//       return (
//         <Badge status="error">
//           <FaTimesCircle /> Inactive
//         </Badge>
//       );
//     } else {
//       return (
//         <Badge status="pending">
//           <FaClock /> Pending
//         </Badge>
//       );
//     }
//   };

//   if (!currentUser) return null;

//   return (
//     <Container>
//       <HeaderSection>
//         <Title>My Purchased Tickets 🍌</Title>
//         <Subtitle>View all your ticket orders and blockchain verification status</Subtitle>
//       </HeaderSection>

//       {loading ? (
//         <LoadingState>Loading your tickets...</LoadingState>
//       ) : error ? (
//         <ErrorState>{error}</ErrorState>
//       ) : orders.length === 0 ? (
//         <EmptyState>
//           <FaTicketAlt size={48} color={TextGray} />
//           <h3>No Tickets Purchased Yet</h3>
//           <p>Explore upcoming events and reserve your seats now.</p>
//           <BuyButton onClick={() => navigate("/")}>Browse Tickets</BuyButton>
//         </EmptyState>
//       ) : (
//         <Grid>
//           {orders.map((order) => {
//             const amountUsdNum = parseFloat(order.amount_usd) || 0;
//             const cryptoAmountNum = parseFloat(order.crypto_amount) || 0;

//             return (
//               <TicketCard key={order.id}>
//                 <CardHeader>
//                   <TicketTitleGroup>
//                     <FaTicketAlt color={Yellow} size={20} />
//                     <TicketTitle>{getTicketTitle(order.ticket_id, order.ticket_title)}</TicketTitle>
//                   </TicketTitleGroup>
//                   {renderStatusBadge(order.status)}
                  
                  
//                 </CardHeader>
//                {order.ticket_code && <CardHeader style={{fontWeight:"bold"}}>
//                  <span style={{color:Yellow}}>Ticket Code:</span>  {order.ticket_code}
//                 </CardHeader>}

//                 <CardBody>
//                   <InfoRow>
//                     <span>Order ID:</span>
//                     <strong>#{order.id}</strong>

//                   </InfoRow>
//                   <InfoRow>
//                     <span>USD Price:</span>
//                     <strong>${amountUsdNum.toFixed(2)} USD</strong>
//                   </InfoRow>

//                   <InfoRow>
//                     <span>Crypto Transfer:</span>
//                     <strong>
//                       <FaBitcoin color="#f7931a" style={{ marginRight: 4 }} />
//                       {cryptoAmountNum.toFixed(6)} {order.crypto_type}
//                     </strong>
//                   </InfoRow>

//                   {order.created_at && (
//                     <InfoRow>
//                       <span>Date Purchased:</span>
//                       <strong>{new Date(order.created_at).toLocaleDateString()}</strong>
//                     </InfoRow>
//                   )}

//                   <TxBox>
//                     <TxLabel>Transaction TXID / Ref:</TxLabel>
//                     <TxValue title={order.transaction_ref}>{order.transaction_ref}</TxValue>
//                   </TxBox>
//                 </CardBody>
//               </TicketCard>
//             );
//           })}
//         </Grid>
//       )}
//     </Container>
//   );
// }

// /* ================= STYLED COMPONENTS ================= */
// const Container = styled.div`
//   min-height: 100vh;
//   background-color: ${LightBg};
//   padding: 3rem 1.5rem;
//   max-width: 1200px;
//   margin: 0 auto;
// `;

// const HeaderSection = styled.div`
//   margin-bottom: 2rem;
// `;

// const Title = styled.h1`
//   color: ${DarkNavy};
//   font-size: 2rem;
//   margin-bottom: 0.25rem;
// `;

// const Subtitle = styled.p`
//   color: ${TextGray};
//   font-size: 0.95rem;
// `;

// const LoadingState = styled.div`
//   text-align: center;
//   padding: 4rem;
//   color: ${TextGray};
//   font-size: 1.1rem;
// `;

// const ErrorState = styled.div`
//   text-align: center;
//   padding: 2rem;
//   background: #fef2f2;
//   color: ${Red};
//   border: 1px solid #fecaca;
//   border-radius: 8px;
// `;

// const EmptyState = styled.div`
//   background: ${White};
//   border: 1px solid ${Border};
//   border-radius: 12px;
//   padding: 4rem 2rem;
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 1rem;

//   h3 {
//     color: ${DarkNavy};
//     margin: 0;
//   }

//   p {
//     color: ${TextGray};
//     margin: 0;
//   }
// `;

// const BuyButton = styled.button`
//   background: ${Yellow};
//   color: ${DarkNavy};
//   border: none;
//   padding: 12px 24px;
//   border-radius: 6px;
//   font-weight: bold;
//   cursor: pointer;
//   margin-top: 1rem;
//   &:hover {
//     background: #e6b800;
//   }
// `;

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
//   gap: 1.5rem;
// `;

// const TicketCard = styled.div`
//   background: ${White};
//   border: 1px solid ${Border};
//   border-radius: 12px;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;
//   transition: transform 0.2s, box-shadow 0.2s;
//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
//   }
// `;

// const CardHeader = styled.div`
//   background: ${DarkNavy};
//   padding: 1.25rem;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   color: ${White};
// `;

// const TicketTitleGroup = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 8px;
// `;

// const TicketTitle = styled.h3`
//   font-size: 1.1rem;
//   margin: 0;
//   color: ${White};
// `;

// const Badge = styled.span`
//   display: inline-flex;
//   align-items: center;
//   gap: 5px;
//   font-size: 0.75rem;
//   font-weight: bold;
//   padding: 4px 10px;
//   border-radius: 20px;
//   text-transform: uppercase;
//   background: ${(props) =>
//     props.status === "success"
//       ? "#dcfce7"
//       : props.status === "error"
//       ? "#fee2e2"
//       : "#fef9c3"};
//   color: ${(props) =>
//     props.status === "success"
//       ? Green
//       : props.status === "error"
//       ? Red
//       : "#b45309"};
// `;

// const CardBody = styled.div`
//   padding: 1.25rem;
//   display: flex;
//   flex-direction: column;
//   gap: 0.75rem;
// `;

// const InfoRow = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   font-size: 0.9rem;
//   color: ${TextGray};
//   strong {
//     color: ${DarkNavy};
//     display: flex;
//     align-items: center;
//   }
// `;

// const TxBox = styled.div`
//   margin-top: 0.5rem;
//   background: ${LightBg};
//   border: 1px solid ${Border};
//   border-radius: 6px;
//   padding: 8px 10px;
// `;

// const TxLabel = styled.span`
//   display: block;
//   font-size: 0.75rem;
//   color: ${TextGray};
//   margin-bottom: 2px;
// `;

// const TxValue = styled.span`
//   display: block;
//   font-family: monospace;
//   font-size: 0.8rem;
//   color: ${DarkNavy};
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
// `;






import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import axios from "axios";
import { FaTicketAlt, FaClock, FaCheckCircle, FaTimesCircle, FaBitcoin } from "react-icons/fa";
import { Context } from "./Context";

/* ================= COLORS (Savannah Bananas Theme) ================= */
const Yellow = "#ffcc00";
const DarkNavy = "#101c38";
const TextGray = "#4a5568";
const LightBg = "#f8fafc";
const White = "#ffffff";
const Border = "#e2e8f0";
const Green = "#16a34a";
const Red = "#dc2626";

export default function MyTickets() {
  const navigate = useNavigate();
  const { api_url, ticketTiers } = useContext(Context);

  const reduxUser = useSelector((state) => state.userInfo);
  const localUser = JSON.parse(localStorage.getItem("user") || "null");
  const currentUser = reduxUser || localUser;

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!currentUser || !currentUser.id) {
      navigate("/login");
      return;
    }

    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${api_url}/get_user_orders.php`, {
          params: { user_id: currentUser.id }
        });

        if (response.data.success) {
          // Filter to only include active and inactive tickets (exclude pending)
          const filteredOrders = response.data.orders.filter((order) => {
            const status = (order.status || "").toLowerCase();
            return status === "active" || status === "inactive";
          });
          setOrders(filteredOrders);
        } else {
          setError(response.data.error || "Failed to load orders.");
        }
      } catch (err) {
        console.error(err);
        setError("Unable to connect to server. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [currentUser, api_url, navigate]);

  // Helper function to match ticket_id with context ticketTiers
  const getTicketTitle = (ticketId, fallbackTitle) => {
    const matchedTier = ticketTiers?.find((tier) => tier.id === Number(ticketId));
    return matchedTier ? matchedTier.title : (fallbackTitle || "Unknown Ticket");
  };

  const renderStatusBadge = (status) => {
    const normalizedStatus = (status || "").toLowerCase();
    if (normalizedStatus === "active") {
      return (
        <Badge status="success">
          <FaCheckCircle /> Active
        </Badge>
      );
    } else if (normalizedStatus === "inactive") {
      return (
        <Badge status="error">
          <FaTimesCircle /> Inactive
        </Badge>
      );
    } else {
      return (
        <Badge status="pending">
          <FaClock /> Pending
        </Badge>
      );
    }
  };

  if (!currentUser) return null;

  return (
    <Container>
      <HeaderSection>
        <Title>My Verified Tickets 🍌</Title>
        <Subtitle>View all your active and inactive ticket orders</Subtitle>
      </HeaderSection>

      {loading ? (
        <LoadingState>Loading your tickets...</LoadingState>
      ) : error ? (
        <ErrorState>{error}</ErrorState>
      ) : orders.length === 0 ? (
        <EmptyState>
          <FaTicketAlt size={48} color={TextGray} />
          <h3>No Active or Inactive Tickets Found</h3>
          <p>You don't have any verified tickets yet.</p>
          <BuyButton onClick={() => navigate("/")}>Browse Tickets</BuyButton>
        </EmptyState>
      ) : (
        <Grid>
          {orders.map((order) => {
            const amountUsdNum = parseFloat(order.amount_usd) || 0;
            const cryptoAmountNum = parseFloat(order.crypto_amount) || 0;

            return (
              <TicketCard key={order.id}>
                <CardHeader>
                  <TicketTitleGroup>
                    <FaTicketAlt color={Yellow} size={20} />
                    <TicketTitle>{getTicketTitle(order.ticket_id, order.ticket_title)}</TicketTitle>
                  </TicketTitleGroup>
                  {renderStatusBadge(order.status)}
                </CardHeader>
                
                {order.ticket_code && (
                  <CardHeader style={{fontWeight: "bold", background: "#0d172e", padding: "10px 1.25Montserrat"}}>
                    <span style={{color: Yellow}}>Ticket Code:</span> {order.ticket_code}
                  </CardHeader>
                )}

                <CardBody>
                  <InfoRow>
                    <span>Order ID:</span>
                    <strong>#{order.id}</strong>
                  </InfoRow>

                  {order.ticket_date && (
                    <InfoRow>
                      <span>Event Date:</span>
                      <strong>{order.ticket_date}</strong>
                    </InfoRow>
                  )}

                  <InfoRow>
                    <span>USD Price:</span>
                    <strong>${amountUsdNum.toFixed(2)} USD</strong>
                  </InfoRow>

                  <InfoRow>
                    <span>Crypto Transfer:</span>
                    <strong>
                      <FaBitcoin color="#f7931a" style={{ marginRight: 4 }} />
                      {cryptoAmountNum.toFixed(6)} {order.crypto_type}
                    </strong>
                  </InfoRow>

                  {order.created_at && (
                    <InfoRow>
                      <span>Date Purchased:</span>
                      <strong>{new Date(order.created_at).toLocaleDateString()}</strong>
                    </InfoRow>
                  )}

                  <TxBox>
                    <TxLabel>Transaction TXID / Ref:</TxLabel>
                    <TxValue title={order.transaction_ref}>{order.transaction_ref}</TxValue>
                  </TxBox>
                </CardBody>
              </TicketCard>
            );
          })}
        </Grid>
      )}
    </Container>
  );
}

/* ================= STYLED COMPONENTS ================= */
const Container = styled.div`
  min-height: 100vh;
  background-color: ${LightBg};
  padding: 3rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeaderSection = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: ${DarkNavy};
  font-size: 2rem;
  margin-bottom: 0.25rem;
`;

const Subtitle = styled.p`
  color: ${TextGray};
  font-size: 0.95rem;
`;

const LoadingState = styled.div`
  text-align: center;
  padding: 4rem;
  color: ${TextGray};
  font-size: 1.1rem;
`;

const ErrorState = styled.div`
  text-align: center;
  padding: 2rem;
  background: #fef2f2;
  color: ${Red};
  border: 1px solid #fecaca;
  border-radius: 8px;
`;

const EmptyState = styled.div`
  background: ${White};
  border: 1px solid ${Border};
  border-radius: 12px;
  padding: 4rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  h3 {
    color: ${DarkNavy};
    margin: 0;
  }

  p {
    color: ${TextGray};
    margin: 0;
  }
`;

const BuyButton = styled.button`
  background: ${Yellow};
  color: ${DarkNavy};
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;
  &:hover {
    background: #e6b800;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
`;

const TicketCard = styled.div`
  background: ${White};
  border: 1px solid ${Border};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  }
`;

const CardHeader = styled.div`
  background: ${DarkNavy};
  padding: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${White};
`;

const TicketTitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const TicketTitle = styled.h3`
  font-size: 1.1rem;
  margin: 0;
  color: ${White};
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 4px 10px;
  border-radius: 20px;
  text-transform: uppercase;
  background: ${(props) =>
    props.status === "success"
      ? "#dcfce7"
      : props.status === "error"
      ? "#fee2e2"
      : "#fef9c3"};
  color: ${(props) =>
    props.status === "success"
      ? Green
      : props.status === "error"
      ? Red
      : "#b45309"};
`;

const CardBody = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: ${TextGray};
  strong {
    color: ${DarkNavy};
    display: flex;
    align-items: center;
  }
`;

const TxBox = styled.div`
  margin-top: 0.5rem;
  background: ${LightBg};
  border: 1px solid ${Border};
  border-radius: 6px;
  padding: 8px 10px;
`;

const TxLabel = styled.span`
  display: block;
  font-size: 0.75rem;
  color: ${TextGray};
  margin-bottom: 2px;
`;

const TxValue = styled.span`
  display: block;
  font-family: monospace;
  font-size: 0.8rem;
  color: ${DarkNavy};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;