import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { Context } from './Context';

/* ================= COLORS (Savannah Bananas Theme) ================= */
const Yellow = "#ffcc00";
const DarkNavy = "#101c38";
const TextGray = "#4a5568";
const LightBg = "#f8fafc";
const White = "#ffffff";
const Border = "#e2e8f0";

const Signup = () => {
  const navigate = useNavigate();
  const { api_url } = useContext(Context);

  const [form, setForm] = useState({
    name: '',
    email: '',
    confirmEmail: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'user',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (form.email !== form.confirmEmail) {
      return Swal.fire({
        icon: 'error',
        title: 'Email Mismatch ❌',
        text: 'Email addresses do not match.',
        confirmButtonColor: DarkNavy,
      });
    }

    if (form.password !== form.confirmPassword) {
      return Swal.fire({
        icon: 'error',
        title: 'Password Mismatch ❌',
        text: 'Passwords do not match.',
        confirmButtonColor: DarkNavy,
      });
    }

    Swal.fire({
      title: 'Creating Account...',
      text: 'Please wait while we set up your profile...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const response = await fetch(`${api_url}/signup.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Account Created! 🎉',
          text: data.message || 'Registration successful.',
          confirmButtonColor: DarkNavy,
        });

        setForm({
          name: '',
          email: '',
          confirmEmail: '',
          phone: '',
          password: '',
          confirmPassword: '',
          role: 'user',
        });

        navigate('/login');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Signup Failed ❌',
          text: data.error || 'Something went wrong.',
          confirmButtonColor: DarkNavy,
        });
      }
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Connection Error ❌',
        text: 'Could not connect to the server.',
        confirmButtonColor: DarkNavy,
      });
    }
  };

  return (
    <Container>
      <FormCard>
        <LogoWrapper onClick={() => navigate('/')}>
          <LogoImg src="/logo.png" alt="Savannah Bananas Logo" />
        </LogoWrapper>

        <Title>Join the Bananas Nation!</Title>
        <Subtitle>Create an account to manage your tickets and game experience</Subtitle>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Full Name</Label>
            <Input
              name="name"
              type="text"
              placeholder="e.g. Alex Johnson"
              value={form.name}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <RowGrid>
            <FormGroup>
              <Label>Email Address</Label>
              <Input
                name="email"
                type="email"
                placeholder="alex@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Confirm Email</Label>
              <Input
                name="confirmEmail"
                type="email"
                placeholder="Re-enter email"
                value={form.confirmEmail}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </RowGrid>

          <FormGroup>
            <Label>Phone Number</Label>
            <Input
              name="phone"
              type="tel"
              placeholder="e.g. (912) 555-0199"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <RowGrid>
            <FormGroup>
              <Label>Password</Label>
              <Input
                name="password"
                type="password"
                placeholder="Create password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Confirm Password</Label>
              <Input
                name="confirmPassword"
                type="password"
                placeholder="Re-enter password"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </RowGrid>

          <SubmitButton type="submit">Create Account</SubmitButton>

          <FooterText>
            Already have an account?{' '}
            <StyledLink to="/login">Sign In</StyledLink>
          </FooterText>
        </Form>
      </FormCard>
    </Container>
  );
};

export default Signup;

/* ================= STYLED COMPONENTS ================= */

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 80px 20px 40px 20px;
  background-color: ${LightBg};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
`;

const FormCard = styled.div`
  background: ${White};
  border: 1px solid ${Border};
  border-radius: 16px;
  padding: 40px;
  width: 100%;
  max-width: 520px;
  box-shadow: 0 10px 30px rgba(16, 28, 56, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 580px) {
    padding: 25px 20px;
  }
`;

const LogoWrapper = styled.div`
  cursor: pointer;
  margin-bottom: 16px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const LogoImg = styled.img`
  height: 55px;
  width: auto;
  display: block;
`;

const Title = styled.h2`
  color: ${DarkNavy};
  font-size: 1.8rem;
  font-weight: 900;
  text-align: center;
  margin: 0 0 6px 0;
`;

const Subtitle = styled.p`
  color: ${TextGray};
  font-size: 0.9rem;
  text-align: center;
  margin: 0 0 28px 0;
  line-height: 1.4;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const RowGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
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
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    border-color: ${Yellow};
    box-shadow: 0 0 0 3px rgba(255, 204, 0, 0.25);
    outline: none;
  }

  &::placeholder {
    color: #a0aec0;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background: ${Yellow};
  color: ${DarkNavy};
  padding: 0.85rem;
  font-size: 1rem;
  font-weight: 900;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 10px;
  box-shadow: 0 4px 12px rgba(255, 204, 0, 0.3);

  &:hover {
    background: #e6b800;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const FooterText = styled.p`
  text-align: center;
  font-size: 0.9rem;
  color: ${TextGray};
  margin-top: 15px;
`;

const StyledLink = styled(Link)`
  color: ${DarkNavy};
  font-weight: 800;
  text-decoration: none;

  &:hover {
    color: #b7791f;
    text-decoration: underline;
  }
`;