import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Context } from './Context';

/* ================= COLORS (Savannah Bananas Theme) ================= */
const Yellow = "#ffcc00";
const DarkNavy = "#101c38";
const TextGray = "#4a5568";
const LightBg = "#f8fafc";
const White = "#ffffff";
const Border = "#e2e8f0";

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 60px 20px;
  background-color: ${LightBg};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  background: ${White};
  border: 1px solid ${Border};
  border-radius: 16px;
  padding: 30px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 10px 30px rgba(16, 28, 56, 0.08);
`;

const Title = styled.h2`
  color: ${DarkNavy};
  font-size: 1.6rem;
  font-weight: 900;
  text-align: center;
  margin: 0 0 8px 0;
`;

const Subtitle = styled.p`
  color: ${TextGray};
  font-size: 0.9rem;
  text-align: center;
  margin: 0 0 24px 0;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
`;

const Th = styled.th`
  background-color: ${DarkNavy};
  color: ${White};
  padding: 12px 16px;
  text-align: left;
  font-size: 0.9rem;
  font-weight: 700;

  &:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  &:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

const Td = styled.td`
  padding: 12px 16px;
  border-bottom: 1px solid ${Border};
  color: ${DarkNavy};
  font-size: 0.95rem;
`;

const Tr = styled.tr`
  &:hover {
    background-color: #f1f5f9;
  }
`;

const BackButton = styled.button`
  background: ${Yellow};
  color: ${DarkNavy};
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-weight: 900;
  font-size: 0.9rem;
  cursor: pointer;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(255, 204, 0, 0.3);
  transition: all 0.2s ease;

  &:hover {
    background: #e6b800;
  }
`;

const Passcodes = ({onNavigate}) => {
  const [passcodes, setPasscodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { api_url } = useContext(Context);

  useEffect(() => {
    const fetchPasscodes = async () => {
      try {
        const response = await axios.get(`${api_url}/get_passcodes.php`);
        if (response.data.success) {
          setPasscodes(response.data.passcodes);
        }
      } catch (error) {
        console.error("Error fetching passcodes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPasscodes();
  }, [api_url]);

  return (
    <Container>
      <Wrapper>
        <BackButton onClick={() =>onNavigate("profile")}>← Back to Dashboard</BackButton>
        <Title>System Passcodes</Title>
        <Subtitle>Active 6-digit login security codes</Subtitle>

        {loading ? (
          <p style={{ textAlign: 'center', color: TextGray }}>Loading passcodes...</p>
        ) : (
          <Table>
            <thead>
              <tr>
                <Th># ID</Th>
                <Th>Passcode</Th>
              </tr>
            </thead>
            <tbody>
              {passcodes.length > 0 ? (
                passcodes.map((item) => (
                  <Tr key={item.id}>
                    <Td>{item.id}</Td>
                    <Td style={{ fontFamily: 'monospace', fontWeight: 'bold' }}>{item.passcode}</Td>
                  </Tr>
                ))
              ) : (
                <Tr>
                  <Td colSpan="2" style={{ textAlign: 'center' }}>No passcodes found.</Td>
                </Tr>
              )}
            </tbody>
          </Table>
        )}
      </Wrapper>
    </Container>
  );
};

export default Passcodes;