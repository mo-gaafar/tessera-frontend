/**
 * @author @moSaeed15
 * @description This file contains the App component and its logic
 * @exports App
 */

import SignupTwo from './pages/SignUp/SignupTwo';
import SignUpOne from './pages/SignUp/SignupOne';
import GlobalStyles from './components/styles/global';
import Landing from './pages/LandingPage/Landing';
import { Route, Routes } from 'react-router-dom';

import { useEffect, useState } from 'react';
import Maincontainer from './pages/LogIn/MainContainer';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import Reset from './pages/ResetPassword/Reset';
/**
 * Function component that renders the main application
 * @function
 * @returns {JSX.Element} The main application component
 */
function App() {
  const [email, setEmail] = useState('');

  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="signup" element={<SignUpOne setEmail={setEmail} />} />
        <Route path="Signuptwo" element={<SignupTwo email={email} />} />
        <Route path="login" element={<Maincontainer />} />
        <Route path="reset" element={<ResetPassword />} />
        <Route path="forgetPassword" element={<Reset />} />
      </Routes>
    </>
  );
}

export default App;
