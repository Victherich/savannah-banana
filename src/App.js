import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/About';
import ContactUs from './components/Contact';
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import PrivateDashboard from './components/PrivateDashboard';
import Login from './components/Login';
import Signup from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Dashboard from './components/Dashboard';
import VerifyEmail from './components/VerifyEmail';
import ScrollToTop from './components/ScrollToTop';
import Checkout from './components/Checkout';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Header/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/termsandconditions' element={<TermsAndConditions/>}/>
      <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>


            <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route element={<PrivateDashboard />}>
          <Route path="/dashboard" element={<Dashboard />} />
         
        </Route>
        <Route path="/verify/:token" element={<VerifyEmail/>}/>
        <Route path='/checkout' element={<Checkout/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
