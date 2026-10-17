// import React, { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import Swal from 'sweetalert2';
// import { Context } from './Context';

// const Container = styled.div`
//   min-height: 100vh;
//   background: #f2f2f2;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 2rem;
// `;

// const FormWrapper = styled.div`
//   padding: 2.5rem;
//   border-radius: 16px;
//   width: 100%;
//   max-width: 400px;
// `;

// const Title = styled.h2`
//   font-size: 1.5rem;
//   margin-bottom: 1.5rem;
//   color: green;
//   text-align: center;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// const Input = styled.input`
//   padding: 0.75rem;
//   margin-bottom: 1rem;
//   border: 1px solid #ddd;
//   border-radius: 8px;
//   font-size: 1rem;
//   &:focus {
//     border-color: green;
//     outline: none;
//   }
// `;

// const Button = styled.button`
//   padding: 0.75rem;
//   background-color:green;
//   color: white;
//   font-size: 1rem;
//   border: none;
//   border-radius: 8px;
//   cursor: pointer;
//   transition: 0.3s;
//   &:hover {
//     background-color: lightgreen;
//   }
// `;

// const Message = styled.p`
//   margin-top: 1rem;
//   color: ${({ success }) => (success ? 'green' : 'red')};
//   text-align: center;
//   font-size: 0.95rem;
// `;

// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [success, setSuccess] = useState(false);
//   const navigate = useNavigate();
//   const [buttonText, setButtonText]=useState("Send Reset Link")
// const {api_url}=useContext(Context);
 

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     // Show loading alert
//     Swal.fire({
//       title: 'Please wait...',
//       text: 'Sending password reset link...',
//       allowOutsideClick: false,
//       allowEscapeKey: false,
//       didOpen: () => {
//         Swal.showLoading();
//       },
//     });
  
//     try {
//       const res = await fetch(`${api_url}/admin_forgot_password.php`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email }),
//       });
  
//       const data = await res.json();
  
//       Swal.close();
  
//       if (data.success) {
//         Swal.fire({
//           icon: 'success',
//           title: 'Success',
//           text: data.message || 'Reset link sent successfully Please check your email inbox or spam folder!',
//         });
//         setButtonText("Resend Reset Link");
//       } else {
//         Swal.fire({
//           icon: 'error',
//           title: 'Failed',
//           text: data.message || 'Something went wrong. Please try again.',
//         });
//       }
//     } catch (error) {
//       Swal.close();
//       Swal.fire({
//         icon: 'error',
//         title: 'Error',
//         text: 'Something went wrong. Please try again.',
//       });
//     }
//   };
  

//   return (
//     <Container>
//       <FormWrapper>
//         <Title>Forgot Password</Title>
//         <Form onSubmit={handleSubmit}>
//           <Input
//             type="email"
//             placeholder="Enter your email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <Button type="submit">{buttonText}</Button>

//         </Form>
//         <p onClick={()=>navigate("/login")} style={{color:"green", cursor:"pointer"}}>Back to Login</p>
//         {message && <Message success={success}>{message}</Message>}
//       </FormWrapper>
//     </Container>
//   );
// };

// export default ForgotPassword;





import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { FaArrowLeft, FaKey } from 'react-icons/fa';
import { Context } from './Context';

/* ================= COLORS (Savannah Bananas Theme) ================= */
const Yellow = "#ffcc00";
const DarkNavy = "#101c38";
const TextGray = "#4a5568";
const LightBg = "#f8fafc";
const White = "#ffffff";
const Border = "#e2e8f0";

const Container = styled.div`
  min-height: 100vh;
  background: ${LightBg};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const FormWrapper = styled.div`
  background: ${White};
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid ${Border};
  width: 100%;
  max-width: 440px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconHeader = styled.div`
  width: 50px;
  height: 50px;
  background: #fffdf5;
  border: 2px dashed ${Yellow};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  color: ${DarkNavy};
  text-align: center;
  font-weight: 700;
`;

const Subtitle = styled.p`
  font-size: 0.9rem;
  color: ${TextGray};
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  padding: 12px 14px;
  margin-bottom: 1.25rem;
  border: 1px solid ${Border};
  border-radius: 6px;
  font-size: 0.95rem;
  outline: none;
  color: ${DarkNavy};
  background: ${White};
  transition: border-color 0.2s;
  &:focus {
    border-color: ${DarkNavy};
  }
`;

const Button = styled.button`
  padding: 14px;
  background-color: ${Yellow};
  color: ${DarkNavy};
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background-color: #e6b800;
  }
`;

const BackLink = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 1.5rem;
  color: ${TextGray};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: ${DarkNavy};
  }
`;

const Message = styled.p`
  margin-top: 1rem;
  color: ${({ success }) => (success ? '#16a34a' : '#dc2626')};
  text-align: center;
  font-size: 0.95rem;
`;

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState("Send Reset Link");
  const { api_url } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    Swal.fire({
      title: 'Please wait...',
      text: 'Sending password reset link...',
      allowOutsideClick: false,
      allowEscapeKey: false,
      confirmButtonColor: DarkNavy,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  
    try {
      const res = await fetch(`${api_url}/admin_forgot_password.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
  
      const data = await res.json();
      Swal.close();
  
      if (data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: data.message || 'Reset link sent successfully. Please check your email inbox or spam folder!',
          confirmButtonColor: DarkNavy,
        });
        setButtonText("Resend Reset Link");
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Failed',
          text: data.message || 'Something went wrong. Please try again.',
          confirmButtonColor: DarkNavy,
        });
      }
    } catch (error) {
      Swal.close();
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong. Please try again.',
        confirmButtonColor: DarkNavy,
      });
    }
  };

  return (
    <Container>
      <FormWrapper>
        <IconHeader>
          <FaKey size={20} color={Yellow} />
        </IconHeader>
        <Title>Forgot Password</Title>
        <Subtitle>Enter your registered email and we'll send you a reset link.</Subtitle>

        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Enter your email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit">{buttonText}</Button>
        </Form>

        <BackLink onClick={() => navigate("/login")}>
          <FaArrowLeft size={12} /> Back to Login
        </BackLink>

        {message && <Message success={success}>{message}</Message>}
      </FormWrapper>
    </Container>
  );
};

export default ForgotPassword;