// import React, { useContext, useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import styled from 'styled-components';
// import { userLogin } from '../Features/Slice';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { Context } from './Context';

// /* ================= COLORS (Savannah Bananas Theme) ================= */
// const Yellow = "#ffcc00";
// const DarkNavy = "#101c38";
// const TextGray = "#4a5568";
// const LightBg = "#f8fafc";
// const White = "#ffffff";
// const Border = "#e2e8f0";

// // Styled Components
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

// const Form = styled.form`
//   background: ${White};
//   border: 1px solid ${Border};
//   border-radius: 16px;
//   padding: 40px;
//   width: 100%;
//   max-width: 450px;
//   box-shadow: 0 10px 30px rgba(16, 28, 56, 0.08);
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   @media (max-width: 480px) {
//     padding: 25px 20px;
//   }
// `;

// const LogoWrapper = styled.div`
//   cursor: pointer;
//   margin-bottom: 16px;
//   transition: transform 0.2s ease;

//   &:hover {
//     transform: scale(1.05);
//   }
// `;

// const LogoImg = styled.img`
//   height: 55px;
//   width: auto;
//   display: block;
// `;

// const Title = styled.h2`
//   color: ${DarkNavy};
//   font-size: 1.8rem;
//   font-weight: 900;
//   text-align: center;
//   margin: 0 0 6px 0;
// `;

// const Subtitle = styled.p`
//   color: ${TextGray};
//   font-size: 0.9rem;
//   text-align: center;
//   margin: 0 0 28px 0;
//   line-height: 1.4;
// `;

// const InputGroup = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 6px;
//   margin-bottom: 16px;
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
//   transition: border-color 0.2s ease, box-shadow 0.2s ease;

//   &:focus {
//     border-color: ${Yellow};
//     box-shadow: 0 0 0 3px rgba(255, 204, 0, 0.25);
//     outline: none;
//   }

//   &::placeholder {
//     color: #a0aec0;
//   }
// `;

// const Button = styled.button`
//   width: 100%;
//   background: ${Yellow};
//   color: ${DarkNavy};
//   padding: 0.85rem;
//   font-size: 1rem;
//   font-weight: 900;
//   border: none;
//   border-radius: 8px;
//   cursor: pointer;
//   transition: all 0.2s ease;
//   margin-top: 8px;
//   box-shadow: 0 4px 12px rgba(255, 204, 0, 0.3);

//   &:hover {
//     background: #e6b800;
//     transform: translateY(-1px);
//   }

//   &:active {
//     transform: translateY(0);
//   }
// `;

// const ActionText = styled.p`
//   text-align: center;
//   font-size: 0.9rem;
//   color: ${TextGray};
//   margin-top: 15px;
//   cursor: pointer;
//   transition: color 0.2s;

//   &:hover {
//     color: ${DarkNavy};
//     text-decoration: underline;
//   }
// `;

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { api_url } = useContext(Context);

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'email') setEmail(value);
//     if (name === 'password') setPassword(value);
//   };

//   // Handle login
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Missing fields',
//         text: 'Email and password are required.',
//         confirmButtonColor: DarkNavy,
//       });
//       return;
//     }

//     // Show loading
//     Swal.fire({
//       title: 'Loading...',
//       text: 'Please wait while we log you in...',
//       allowOutsideClick: false,
//       didOpen: () => {
//         Swal.showLoading();
//       },
//     });

//     try {
//       const response = await axios.post(`${api_url}/login.php`, { email, password });

//       if (response.data.success) {
//         Swal.fire({
//           icon: 'success',
//           title: 'Login Successful 🍌',
//           text: response.data.message,
//           confirmButtonColor: DarkNavy,
//         });
//         console.log(response.data);
        
//         const userInfo = response.data.user;
//         const userToken = response.data.token;

//         // Dispatch login action with a single object containing both adminInfo and adminToken
//         dispatch(userLogin({ userInfo, userToken }));

//         navigate('/dashboard');

//       } else {
//         Swal.fire({
//           icon: 'error',
//           title: 'Login Failed ❌',
//           text: response.data.error,
//           confirmButtonColor: DarkNavy,
//         });
//       }
//     } catch (error) {
//       console.error(error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Error ❌',
//         text: 'There was an error connecting to the server.',
//         confirmButtonColor: DarkNavy,
//       });
//     }
//   };

//   return (
//     <Container>
//       <Form onSubmit={handleLogin}>
//         <LogoWrapper onClick={() => navigate('/')}>
//           <LogoImg src="/logo.jpeg" alt="Savannah Bananas Logo" />
//         </LogoWrapper>

//         <Title>Welcome Back!</Title>
//         <Subtitle>Sign in to your account</Subtitle>
        
//         <InputGroup>
//           <Label>Email</Label>
//           <Input
//             type="email"
//             name="email"
//             placeholder="e.g. alex@example.com"
//             value={email}
//             onChange={handleChange}
//             required
//           />
//         </InputGroup>
        
//         <InputGroup>
//           <Label>Password</Label>
//           <Input
//             type="password"
//             name="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={handleChange}
//             required
//           />
//         </InputGroup>
       
//         <Button type="submit">Login</Button>

//         <ActionText onClick={() => navigate('/signup')}>
//           Don't have an account? <strong>Sign up</strong>
//         </ActionText>

//         <ActionText onClick={() => navigate('/forgotpassword')}>
//           Forgot Password?
//         </ActionText>
//       </Form>
//     </Container>
//   );
// };

// export default Login;




import React, { useContext, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import styled from 'styled-components';
import { userLogin } from '../Features/Slice';
import { useDispatch } from 'react-redux';
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
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 80px 20px 40px 20px;
  background-color: ${LightBg};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
`;

const Form = styled.form`
  background: ${White};
  border: 1px solid ${Border};
  border-radius: 16px;
  padding: 40px;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 10px 30px rgba(16, 28, 56, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 480px) {
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

const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;
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

const Button = styled.button`
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
  margin-top: 8px;
  box-shadow: 0 4px 12px rgba(255, 204, 0, 0.3);

  &:hover {
    background: #e6b800;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ActionText = styled.p`
  text-align: center;
  font-size: 0.9rem;
  color: ${TextGray};
  margin-top: 15px;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: ${DarkNavy};
    text-decoration: underline;
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passcode, setPasscode] = useState(''); // Added passcode state
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { api_url } = useContext(Context);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
    if (name === 'passcode') setPasscode(value); // Added passcode handler
  };

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      Swal.fire({
        icon: 'error',
        title: 'Missing fields',
        text: 'Email, password, and passcode are required.',
        confirmButtonColor: DarkNavy,
      });
      return;
    }

    // Show loading
    Swal.fire({
      title: 'Loading...',
      text: 'Please wait while we log you in...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const response = await axios.post(`${api_url}/login.php`, { email, password, passcode });

      if (response.data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Login Successful 🍌',
          text: response.data.message,
          confirmButtonColor: DarkNavy,
        });
        
        const userInfo = response.data.user;
        const userToken = response.data.token;

        dispatch(userLogin({ userInfo, userToken }));
        navigate('/dashboard');

      } else {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed ❌',
          text: response.data.error,
          confirmButtonColor: DarkNavy,
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error ❌',
        text: 'There was an error connecting to the server.',
        confirmButtonColor: DarkNavy,
      });
    }
  };

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <LogoWrapper onClick={() => navigate('/')}>
          <LogoImg src="/logo.png" alt="Savannah Bananas Logo" />
        </LogoWrapper>

        <Title>Welcome Back!</Title>
        <Subtitle>Sign in to your account</Subtitle>
        
        <InputGroup>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            placeholder="e.g. alex@example.com"
            value={email}
            onChange={handleChange}
            required
          />
        </InputGroup>
        
        <InputGroup>
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <InputGroup>
          <Label>Passcode from your ticket provider</Label>
          <Input
            type="text"
            name="passcode"
            placeholder="Enter your security passcode"
            value={passcode}
            onChange={handleChange}
            // required
          />
        </InputGroup>
       
        <Button type="submit">Login</Button>

        <ActionText onClick={() => navigate('/signup')}>
          Don't have an account? <strong>Sign up</strong>
        </ActionText>

        <ActionText onClick={() => navigate('/forgotpassword')}>
          Forgot Password?
        </ActionText>
      </Form>
    </Container>
  );
};

export default Login;