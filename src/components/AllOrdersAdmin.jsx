// import React, { useState, useEffect, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import axios from "axios";
// import { FaSearch, FaCheckCircle, FaTimesCircle, FaClock, FaBitcoin, FaArrowLeft } from "react-icons/fa";
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

// export default function AllOrdersAdmin() {
//   const navigate = useNavigate();
//   const { api_url, ticketTiers} = useContext(Context);

//   const [orders, setOrders] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchAllOrders = async () => {
//       try {
//         const response = await axios.get(`${api_url}/get_all_orders.php`);

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

//     fetchAllOrders();
//   }, [api_url]);

//   // Filter orders dynamically based on buyer email or transaction ref
//   const filteredOrders = orders.filter((order) => {
//     const emailMatch = (order.buyer_email || "").toLowerCase().includes(searchTerm.toLowerCase());
//     const refMatch = (order.transaction_ref || "").toLowerCase().includes(searchTerm.toLowerCase());
//     const titleMatch = (order.ticket_title || "").toLowerCase().includes(searchTerm.toLowerCase());
//     return emailMatch || refMatch || titleMatch;
//   });

//   const renderStatusBadge = (status) => {
//     const normalizedStatus = (status || "pending").toLowerCase();
//     if (normalizedStatus === "completed" || normalizedStatus === "approved" || normalizedStatus === "confirmed") {
//       return (
//         <Badge status="success">
//           <FaCheckCircle /> Confirmed
//         </Badge>
//       );
//     } else if (normalizedStatus === "rejected" || normalizedStatus === "failed") {
//       return (
//         <Badge status="error">
//           <FaTimesCircle /> Rejected
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



//   // Helper function to match ticket_id with context ticketTiers
//   const getTicketTitle = (ticketId, fallbackTitle) => {
//     const matchedTier = ticketTiers?.find((tier) => tier.id === Number(ticketId));
//     return matchedTier ? matchedTier.title : (fallbackTitle || "Unknown Ticket");
//   };

//   return (
//     <Container>
//       <HeaderSection>
   
//         <Title>All Orders Management 🍌</Title>
//         <Subtitle>Inspect all user ticket orders and verify payment transaction hashes</Subtitle>
//       </HeaderSection>

//       {/* Search Filter Bar */}
//       <SearchWrapper>
//         <SearchIcon>
//           <FaSearch color={TextGray} />
//         </SearchIcon>
//         <SearchInput
//           type="text"
//           placeholder="Search by buyer email, ticket title, or transaction TXID..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </SearchWrapper>

//       {loading ? (
//         <LoadingState>Loading all orders...</LoadingState>
//       ) : error ? (
//         <ErrorState>{error}</ErrorState>
//       ) : (
//         <TableContainer>
//           <Table>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Buyer Email</th>
//                 <th>Ticket</th>
//                 <th>USD Price</th>
//                 <th>Crypto Amount</th>
//                 <th>TXID / Ref</th>
//                 <th>Status</th>
//                 <th>Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredOrders.length === 0 ? (
//                 <tr>
//                   <td colSpan="8" style={{ textAlign: "center", padding: "3rem", color: TextGray }}>
//                     No matching orders found.
//                   </td>
//                 </tr>
//               ) : (
//                 filteredOrders.map((order) => {
//                   const amountUsdNum = parseFloat(order.amount_usd) || 0;
//                   const cryptoAmountNum = parseFloat(order.crypto_amount) || 0;

//                   return (
//                     <tr key={order.id}>
//                       <td><strong>#{order.id}</strong></td>
//                       <td>{order.buyer_email}</td>
//                    <td><strong>{getTicketTitle(order.ticket_id, order.ticket_title)}</strong></td>
//                       <td>${amountUsdNum.toFixed(2)}</td>
//                       <td>
//                         <CryptoCell>
//                           <FaBitcoin color="#f7931a" />
//                           {cryptoAmountNum.toFixed(6)} {order.crypto_type}
//                         </CryptoCell>
//                       </td>
//                       <td>
//                         <TxHash title={order.transaction_ref}>{order.transaction_ref}</TxHash>
//                       </td>
//                       <td>{renderStatusBadge(order.status)}</td>
//                       <td>{order.created_at ? new Date(order.created_at).toLocaleDateString() : "N/A"}</td>
//                     </tr>
//                   );
//                 })
//               )}
//             </tbody>
//           </Table>
//         </TableContainer>
//       )}
//     </Container>
//   );
// }

// /* ================= STYLED COMPONENTS ================= */
// const Container = styled.div`
//   min-height: 100vh;
//   background-color: ${LightBg};
//   padding: 3rem 1.5rem;
//   max-width: 1400px;
//   margin: 0 auto;
// `;

// const HeaderSection = styled.div`
//   margin-bottom: 1.5rem;
// `;

// const BackLink = styled.button`
//   background: none;
//   border: none;
//   color: ${TextGray};
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   cursor: pointer;
//   font-size: 0.95rem;
//   margin-bottom: 1rem;
//   font-weight: 500;
//   &:hover {
//     color: ${DarkNavy};
//   }
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

// const SearchWrapper = styled.div`
//   position: relative;
//   margin-bottom: 2rem;
//   max-width: 600px;
// `;

// const SearchIcon = styled.span`
//   position: absolute;
//   left: 15px;
//   top: 50%;
//   transform: translateY(-50%);
// `;

// const SearchInput = styled.input`
//   width: 100%;
//   padding: 12px 16px 12px 45px;
//   background: ${White};
//   border: 1px solid ${Border};
//   border-radius: 8px;
//   font-size: 0.95rem;
//   outline: none;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
//   &:focus {
//     border-color: ${DarkNavy};
//   }
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

// const TableContainer = styled.div`
//   background: ${White};
//   border: 1px solid ${Border};
//   border-radius: 12px;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
//   max-height: 65vh;       /* Enables vertical scrolling when content exceeds height */
//   overflow-y: auto;       /* Vertical scrollbar */
//   overflow-x: auto;       /* Horizontal scrollbar */
//   position: relative;
// `;

// const Table = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   text-align: left;
//   font-size: 0.9rem;

//   th {
//     background: ${DarkNavy};
//     color: ${White};
//     padding: 14px 16px;
//     font-weight: 600;
//   }

//   td {
//     padding: 14px 16px;
//     border-bottom: 1px solid ${Border};
//     color: ${TextGray};
//   }

//   tbody tr:hover {
//     background: ${LightBg};
//   }

//   tbody tr:last-child td {
//     border-bottom: none;
//   }
// `;

// const CryptoCell = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 5px;
//   font-weight: 500;
//   color: ${DarkNavy};
// `;

// const TxHash = styled.span`
//   font-family: monospace;
//   font-size: 0.8rem;
//   background: ${LightBg};
//   padding: 4px 8px;
//   border-radius: 4px;
//   border: 1px solid ${Border};
//   display: inline-block;
//   max-width: 180px;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   color: ${DarkNavy};
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







import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { FaSearch, FaCheckCircle, FaTimesCircle, FaClock, FaBitcoin, FaArrowLeft, FaToggleOn, FaToggleOff } from "react-icons/fa";
import Swal from "sweetalert2";
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

export default function AllOrdersAdmin({onNavigate}) {
  const navigate = useNavigate();
  const { api_url, ticketTiers } = useContext(Context);

  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updatingId, setUpdatingId] = useState(null);

  useEffect(() => {
    fetchAllOrders();
  }, [api_url]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(`${api_url}/get_all_orders.php`);

      if (response.data.success) {
        setOrders(response.data.orders);
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

  const handleToggleStatus = async (orderId, currentStatus) => {
    const isCurrentlyActive = (currentStatus || "").toLowerCase() === "active";
    const actionText = isCurrentlyActive ? "deactivate" : "activate";

    const confirmResult = await Swal.fire({
      title: `Are you sure?`,
      text: `Do you want to ${actionText} this ticket order?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: DarkNavy,
      cancelButtonColor: Red,
      confirmButtonText: `Yes, ${actionText} it!`
    });

    if (!confirmResult.isConfirmed) return;

    setUpdatingId(orderId);
    try {
      const response = await axios.post(`${api_url}/toggle_ticket_status.php`, {
        order_id: orderId
      });

      if (response.data.success) {
        setOrders((prevOrders) =>
          prevOrders.map((ord) =>
            ord.id === orderId
              ? { ...ord, status: response.data.new_status, ticket_code: response.data.ticket_code }
              : ord
          )
        );

        Swal.fire({
          icon: "success",
          title: "Updated Successfully!",
          text: response.data.message,
          timer: 2000,
          showConfirmButton: false
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: response.data.error || "Could not change status.",
          confirmButtonColor: DarkNavy
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Connection Error",
        text: "Failed to communicate with the server.",
        confirmButtonColor: DarkNavy
      });
    } finally {
      setUpdatingId(null);
    }
  };

  // Filter orders dynamically based on buyer email or transaction ref
  const filteredOrders = orders.filter((order) => {
    const emailMatch = (order.buyer_email || "").toLowerCase().includes(searchTerm.toLowerCase());
    const refMatch = (order.transaction_ref || "").toLowerCase().includes(searchTerm.toLowerCase());
    const titleMatch = (order.ticket_title || "").toLowerCase().includes(searchTerm.toLowerCase());
    return emailMatch || refMatch || titleMatch;
  });

  const renderStatusBadge = (status) => {
    const normalizedStatus = (status || "pending").toLowerCase();
    if (normalizedStatus === "active") {
      return (
        <Badge status="success">
          <FaCheckCircle /> Active
        </Badge>
      );
    } else if (normalizedStatus === "inactive" || normalizedStatus === "rejected") {
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

  const getTicketTitle = (ticketId, fallbackTitle) => {
    const matchedTier = ticketTiers?.find((tier) => tier.id === Number(ticketId));
    return matchedTier ? matchedTier.title : (fallbackTitle || "Unknown Ticket");
  };

  return (
    <Container>
      <HeaderSection>
        <BackLink onClick={() => onNavigate("profile")}>
          <FaArrowLeft /> Back
        </BackLink>
        <Title>All Orders Management 🍌</Title>
        <Subtitle>Inspect all user ticket orders, toggle activation, and send 12-digit ticket codes</Subtitle>
      </HeaderSection>

      {/* Search Filter Bar */}
      <SearchWrapper>
        <SearchIcon>
          <FaSearch color={TextGray} />
        </SearchIcon>
        <SearchInput
          type="text"
          placeholder="Search by buyer email, ticket title, or transaction TXID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchWrapper>

      {loading ? (
        <LoadingState>Loading all orders...</LoadingState>
      ) : error ? (
        <ErrorState>{error}</ErrorState>
      ) : (
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Buyer Email</th>
                <th>Ticket</th>
                <th>USD Price</th>
                <th>Crypto Amount</th>
                <th>TXID / Ref</th>
                <th>Ticket Code</th>
                <th>Status</th>
                <th>Action</th>
                <th>Ticket Date</th>
                <th>Purchase Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.length === 0 ? (
                <tr>
                  <td colSpan="10" style={{ textAlign: "center", padding: "3rem", color: TextGray }}>
                    No matching orders found.
                  </td>
                </tr>
              ) : (
                filteredOrders.map((order) => {
                  const amountUsdNum = parseFloat(order.amount_usd) || 0;
                  const cryptoAmountNum = parseFloat(order.crypto_amount) || 0;
                  const isActive = (order.status || "").toLowerCase() === "active";

                  return (
                    <tr key={order.id}>
                      <td><strong>#{order.id}</strong></td>
                      <td>{order.buyer_email}</td>
                      <td><strong>{getTicketTitle(order.ticket_id, order.ticket_title)}</strong></td>
                      <td>${amountUsdNum.toFixed(2)}</td>
                      <td>
                        <CryptoCell>
                          <FaBitcoin color="#f7931a" />
                          {cryptoAmountNum.toFixed(6)} {order.crypto_type}
                        </CryptoCell>
                      </td>
                      <td>
                        <TxHash title={order.transaction_ref}>{order.transaction_ref}</TxHash>
                      </td>
                      <td>
                        <CodeBadge>{order.ticket_code || "Not Generated"}</CodeBadge>
                      </td>
                      <td>{renderStatusBadge(order.status)}</td>
                      <td>
                        <ToggleButton
                          active={isActive}
                          onClick={() => handleToggleStatus(order.id, order.status)}
                          disabled={updatingId === order.id}
                        >
                          {isActive ? <FaToggleOn size={22} /> : <FaToggleOff size={22} />}
                          <span>{updatingId === order.id ? "Saving..." : isActive ? "Deactivate" : "Activate"}</span>
                        </ToggleButton>
                      </td>
                       <td>{order.ticket_date}</td>
                    
                      <td>{order.created_at ? new Date(order.created_at).toLocaleDateString() : "N/A"}</td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
}

/* ================= STYLED COMPONENTS ================= */
const Container = styled.div`
  min-height: 100vh;
  background-color: ${LightBg};
  padding: 3rem 1.5rem;
  max-width: 1500px;
  margin: 0 auto;
`;

const HeaderSection = styled.div`
  margin-bottom: 1.5rem;
`;

const BackLink = styled.button`
  background: none;
  border: none;
  color: ${TextGray};
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  font-weight: 500;
  &:hover {
    color: ${DarkNavy};
  }
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

const SearchWrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;
  max-width: 600px;
`;

const SearchIcon = styled.span`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 16px 12px 45px;
  background: ${White};
  border: 1px solid ${Border};
  border-radius: 8px;
  font-size: 0.95rem;
  outline: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  &:focus {
    border-color: ${DarkNavy};
  }
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

const TableContainer = styled.div`
  background: ${White};
  border: 1px solid ${Border};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  max-height: 65vh;
  overflow-y: auto;
  overflow-x: auto;
  position: relative;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 0.9rem;
  white-space: nowrap;

  th {
    background: ${DarkNavy};
    color: ${White};
    padding: 14px 16px;
    font-weight: 600;
    position: sticky;
    top: 0;
    z-index: 10;
  }

  td {
    padding: 14px 16px;
    border-bottom: 1px solid ${Border};
    color: ${TextGray};
  }

  tbody tr:hover {
    background: ${LightBg};
  }

  tbody tr:last-child td {
    border-bottom: none;
  }
`;

const CryptoCell = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 500;
  color: ${DarkNavy};
`;

const TxHash = styled.span`
  font-family: monospace;
  font-size: 0.8rem;
  background: ${LightBg};
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid ${Border};
  display: inline-block;
  // max-width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${DarkNavy};
`;

const CodeBadge = styled.span`
  font-family: monospace;
  font-size: 0.85rem;
  font-weight: bold;
  background: #fef3c7;
  color: #92400e;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #fde68a;
  display: inline-block;
`;

const ToggleButton = styled.button`
  background: ${(props) => (props.active ? "#fee2e2" : "#dcfce7")};
  color: ${(props) => (props.active ? Red : Green)};
  border: 1px solid ${(props) => (props.active ? "#fecaca" : "#bbf7d0")};
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: 0.85krem;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
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