import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { FaSearch, FaCheckCircle, FaTimesCircle, FaClock, FaArrowLeft, FaToggleOn, FaToggleOff, FaUserShield } from "react-icons/fa";
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

export default function AllUsers({ onNavigate }) {
  const navigate = useNavigate();
  const { api_url } = useContext(Context);

  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updatingId, setUpdatingId] = useState(null);

  useEffect(() => {
    fetchAllUsers();
  }, [api_url]);

  const fetchAllUsers = async () => {
    try {
      const response = await axios.get(`${api_url}/get_all_users.php`);

      if (response.data.success) {
        setUsers(response.data.users);
      } else {
        setError(response.data.error || "Failed to load users.");
      }
    } catch (err) {
      console.error(err);
      setError("Unable to connect to server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleToggleStatus = async (userId, currentStatus) => {
    const isCurrentlyActive = (currentStatus || "").toLowerCase() === "active";
    const actionText = isCurrentlyActive ? "deactivate" : "activate";

    const confirmResult = await Swal.fire({
      title: "Are you sure?",
      text: `Do you want to ${actionText} this user's passcode?`,
      icon: "warning",
      confirmButtonColor: DarkNavy,
      cancelButtonColor: Red,
      showCancelButton: true,
      confirmButtonText: `Yes, ${actionText} it!`
    });

    if (!confirmResult.isConfirmed) return;

    setUpdatingId(userId);
    try {
      const response = await axios.post(`${api_url}/toggle_passcode_status.php`, {
        user_id: userId
      });

      if (response.data.success) {
        setUsers((prevUsers) =>
          prevUsers.map((usr) =>
            usr.id === userId
              ? { ...usr, passcode_status: response.data.new_status }
              : usr
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

  // Filter users dynamically based on user name or email
  const filteredUsers = users.filter((user) => {
    const nameMatch = (user.name || "").toLowerCase().includes(searchTerm.toLowerCase());
    const emailMatch = (user.email || "").toLowerCase().includes(searchTerm.toLowerCase());
    return nameMatch || emailMatch;
  });

  const renderStatusBadge = (status) => {
    const normalizedStatus = (status || "active").toLowerCase();
    if (normalizedStatus === "active") {
      return (
        <Badge status="success">
          <FaCheckCircle /> Active
        </Badge>
      );
    } else {
      return (
        <Badge status="error">
          <FaTimesCircle /> Inactive
        </Badge>
      );
    }
  };

  return (
    <Container>
      <HeaderSection>
        <BackLink onClick={() => onNavigate ? onNavigate("profile") : navigate(-1)}>
          <FaArrowLeft /> Back
        </BackLink>
        <Title>Users & Passcode Management 🍌</Title>
        <Subtitle>Inspect registered users, view passcodes, and toggle passcode activation status</Subtitle>
      </HeaderSection>

      {/* Search Filter Bar */}
      <SearchWrapper>
        <SearchIcon>
          <FaSearch color={TextGray} />
        </SearchIcon>
        <SearchInput
          type="text"
          placeholder="Search by user name or email address..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchWrapper>

      {loading ? (
        <LoadingState>Loading all users...</LoadingState>
      ) : error ? (
        <ErrorState>{error}</ErrorState>
      ) : (
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Passcode</th>
                <th>Passcode Status</th>
                <th>Action</th>
                <th>Joined Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan="9" style={{ textAlign: "center", padding: "3rem", color: TextGray }}>
                    No matching users found.
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => {
                  const isActive = (user.passcode_status || "").toLowerCase() === "active";
                  const isAdmin = (user.role || "").toLowerCase() === "admin";

                  return (
                    <tr key={user.id}>
                      <td><strong>#{user.id}</strong></td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone || "N/A"}</td>
                      <td>
                        <RoleBadge isAdmin={isAdmin}>
                          {isAdmin && <FaUserShield />} {user.role}
                        </RoleBadge>
                      </td>
                      <td>
                        <CodeBadge>{user.passcode || "N/A"}</CodeBadge>
                      </td>
                      <td>{renderStatusBadge(user.passcode_status)}</td>
                      <td>
                        {!isAdmin ? (
                          <ToggleButton
                            active={isActive}
                            onClick={() => handleToggleStatus(user.id, user.passcode_status)}
                            disabled={updatingId === user.id}
                          >
                            {isActive ? <FaToggleOn size={22} /> : <FaToggleOff size={22} />}
                            <span>{updatingId === user.id ? "Saving..." : isActive ? "Deactivate" : "Activate"}</span>
                          </ToggleButton>
                        ) : (
                          <span style={{ color: TextGray, fontSize: "0.85rem" }}>Admin (N/A)</span>
                        )}
                      </td>
                      <td>{user.created_at ? new Date(user.created_at).toLocaleDateString() : "N/A"}</td>
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

const RoleBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 3px 8px;
  border-radius: 4px;
  background: ${(props) => (props.isAdmin ? "#ede9fe" : LightBg)};
  color: ${(props) => (props.isAdmin ? "#6d28d9" : TextGray)};
  border: 1px solid ${(props) => (props.isAdmin ? "#ddd6fe" : Border)};
  text-transform: capitalize;
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
  font-size: 0.85rem;
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
  background: ${(props) => (props.status === "success" ? "#dcfce7" : "#fee2e2")};
  color: ${(props) => (props.status === "success" ? Green : Red)};
`;