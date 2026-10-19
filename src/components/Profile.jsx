import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Swal from "sweetalert2";
import {
  FaTicketAlt,
  FaClipboardList,
  FaUserShield,
  FaPhoneAlt,
  FaIdCard,
  FaKey,
  FaSignOutAlt,
  FaCalendarAlt,
  FaUser
} from "react-icons/fa";
import { Context } from "./Context";

/* ================= COLORS (Savannah Bananas Theme) ================= */
const Yellow = "#ffcc00";
const DarkNavy = "#101c38";
const TextGray = "#4a5568";
const LightBg = "#f8fafc";
const White = "#ffffff";
const Border = "#e2e8f0";

export default function ProfileDashboard({ userId, onNavigate, onLogout }) {
  const [user, setUser] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [newPhone, setNewPhone] = useState("");
  const { api_url } = useContext(Context);

  // Fetch user details on component mount
  useEffect(() => {
    if (!userId) return;

    axios
      .get(`${api_url}/get_user_by_id.php?id=${userId}`)
      .then((res) => {
        if (res.data.success) {
          setUser(res.data.user);
        } else {
          Swal.fire({
            icon: "error",
            title: "Error ❌",
            text: res.data.error || "Failed to fetch user details",
            confirmButtonColor: DarkNavy,
          });
        }
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Connection Error ❌",
          text: "Could not connect to the server",
          confirmButtonColor: DarkNavy,
        });
      });
  }, [userId, api_url]);

  // Handle phone number update
  const handleSavePhone = () => {
    if (!newPhone) {
      return Swal.fire({
        icon: "warning",
        title: "Input Required",
        text: "Please enter a valid phone number",
        confirmButtonColor: DarkNavy,
      });
    }

    axios
      .post(`${api_url}/update_user_phone.php`, {
        id: user.id,
        phone: newPhone,
      })
      .then((res) => {
        if (res.data.success) {
          setUser((prev) => ({ ...prev, phone: newPhone }));
          setModalOpen(false);
          Swal.fire({
            icon: "success",
            title: "Updated! 🎉",
            text: "Phone number updated successfully",
            confirmButtonColor: DarkNavy,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Update Failed ❌",
            text: res.data.error || "Could not update phone number",
            confirmButtonColor: DarkNavy,
          });
        }
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Error ❌",
          text: "Failed to connect to the server",
          confirmButtonColor: DarkNavy,
        });
      });
  };

  if (!user) {
    return (
      <LoadingWrapper>
        <p>Loading Banana Ball Dashboard...</p>
      </LoadingWrapper>
    );
  }

  const isAdmin = user.role?.toLowerCase() === "admin";

  return (
    <Container>
      <DashboardWrapper>
        {/* ================= PROFILE CARD (HEADER) ================= */}
        <ProfileCard>
          <ProfileInfo>
            <UserName>👋 Welcome, {user.name}!</UserName>
            <UserEmail>{user.email}</UserEmail>
            <EditButton
              onClick={() => {
                setNewPhone(user.phone || "");
                setModalOpen(true);
              }}
            >
              <FaPhoneAlt style={{ marginRight: "6px" }} />{" "}
              {user.phone ? `Phone: ${user.phone}` : "Add Phone Number"}
            </EditButton>
          </ProfileInfo>

          <ProfileDetails>
            <DetailItem>
              <FaIdCard /> <b>Role:</b> {user.role?.toUpperCase() || "USER"}
            </DetailItem>
            <DetailItem>
              <FaUser /> <b>Account ID:</b> #{user.id}
            </DetailItem>
            {user.created_at && (
              <DetailItem>
                <FaCalendarAlt /> <b>Joined:</b>{" "}
                {new Date(user.created_at).toLocaleDateString()}
              </DetailItem>
            )}
          </ProfileDetails>
        </ProfileCard>

        {/* ================= DASHBOARD ACTIONS ================= */}
        <DashboardTitle>Quick Actions</DashboardTitle>
        <StatsGrid>
          {/* ----- ADMIN ACTIONS ----- */}
          {isAdmin ? (
            <>
              <StatCard onClick={() => onNavigate("passcodes")}>
                <StatIcon>
                  <FaTicketAlt />
                </StatIcon>
                <StatLabel>Passcodes</StatLabel>
                <StatValue></StatValue>
              </StatCard>

              <StatCard onClick={() => onNavigate("manageticketsorders")}>
                <StatIcon>
                  <FaClipboardList />
                </StatIcon>
                <StatLabel>Manage Ticket Orders</StatLabel>
                <StatValue>View customer purchases and verify payments</StatValue>
              </StatCard>
            </>
          ) : (
            /* ----- REGULAR USER ACTIONS ----- */
            <StatCard onClick={() => onNavigate("mytickets")}>
              <StatIcon>
                <FaTicketAlt />
              </StatIcon>
              <StatLabel>View Your Tickets</StatLabel>
              <StatValue>Access and download your digital e-tickets</StatValue>
            </StatCard>
          )}

          {/* ----- COMMON LOGOUT CARD ----- */}
          <StatCard onClick={onLogout} $isLogout>
            <StatIcon style={{ color: "#e53e3e" }}>
              <FaSignOutAlt />
            </StatIcon>
            <StatLabel style={{ color: "#e53e3e" }}>Logout</StatLabel>
            <StatValue>Sign out securely from your session</StatValue>
          </StatCard>
        </StatsGrid>

        {/* ================= EDIT PHONE MODAL ================= */}
        {isModalOpen && (
          <ModalOverlay>
            <Modal>
              <ModalTitle>Update Phone Number</ModalTitle>
              <Input
                type="tel"
                placeholder="Enter new phone number"
                value={newPhone}
                onChange={(e) => setNewPhone(e.target.value)}
              />
              <ButtonGroup>
                <SaveButton onClick={handleSavePhone}>Save Changes</SaveButton>
                <CancelButton onClick={() => setModalOpen(false)}>
                  Cancel
                </CancelButton>
              </ButtonGroup>
            </Modal>
          </ModalOverlay>
        )}
      </DashboardWrapper>
    </Container>
  );
}

/* ================= STYLED COMPONENTS ================= */

const Container = styled.div`
  background-color: ${LightBg};
  min-height: 100vh;
  padding: 80px 16px 40px 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  font-size: 1.1rem;
  font-weight: 800;
  color: ${DarkNavy};
`;

const DashboardWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
`;

const ProfileCard = styled.div`
  background: ${DarkNavy};
  color: ${White};
  padding: 24px;
  border-radius: 16px;
  border-bottom: 5px solid ${Yellow};
  box-shadow: 0 10px 25px rgba(16, 28, 56, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 20px;
`;

const ProfileInfo = styled.div`
  flex: 1;
  min-width: 250px;
`;

const UserName = styled.h2`
  font-size: 1.6rem;
  font-weight: 900;
  margin: 0 0 6px 0;
  color: ${Yellow};
  letter-spacing: -0.02em;
`;

const UserEmail = styled.p`
  font-size: 0.95rem;
  opacity: 0.9;
  margin: 0 0 12px 0;
  color: ${White};
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.9rem;
  min-width: 200px;

  @media (max-width: 768px) {
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 12px;
  }
`;

const DetailItem = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${White};
  opacity: 0.95;
`;

const EditButton = styled.button`
  background: ${Yellow};
  color: ${DarkNavy};
  border: none;
  border-radius: 8px;
  padding: 8px 14px;
  cursor: pointer;
  font-weight: 800;
  font-size: 0.85rem;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;

  &:hover {
    background: #e6b800;
    transform: translateY(-1px);
  }
`;

const DashboardTitle = styled.h3`
  font-size: 1.3rem;
  color: ${DarkNavy};
  margin-bottom: 16px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
`;

const StatCard = styled.div`
  background: ${White};
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(16, 28, 56, 0.05);
  text-align: left;
  transition: all 0.2s ease;
  cursor: pointer;
  border: 1.5px solid ${Border};
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(16, 28, 56, 0.1);
    border-color: ${(props) => (props.$isLogout ? "#f87171" : Yellow)};
  }
`;

const StatIcon = styled.div`
  font-size: 1.8rem;
  color: ${DarkNavy};
  margin-bottom: 10px;
`;

const StatLabel = styled.h4`
  color: ${DarkNavy};
  font-weight: 800;
  font-size: 1.05rem;
  margin: 0 0 6px 0;
`;

const StatValue = styled.p`
  color: ${TextGray};
  font-size: 0.85rem;
  margin: 0;
  line-height: 1.4;
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(16, 28, 56, 0.6);
  backdrop-filter: blur(3px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  z-index: 500;
`;

const Modal = styled.div`
  background: ${White};
  padding: 24px;
  border-radius: 16px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

const ModalTitle = styled.h3`
  margin: 0 0 12px 0;
  color: ${DarkNavy};
  font-weight: 800;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  font-size: 0.95rem;
  margin-bottom: 16px;
  border-radius: 8px;
  border: 2px solid ${Border};
  outline: none;
  background: ${LightBg};
  box-sizing: border-box;

  &:focus {
    border-color: ${Yellow};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;

const SaveButton = styled.button`
  background-color: ${Yellow};
  color: ${DarkNavy};
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 800;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background-color: #e6b800;
  }
`;

const CancelButton = styled.button`
  padding: 10px 16px;
  background-color: ${Border};
  color: ${DarkNavy};
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background-color: #cbd5e1;
  }
`;