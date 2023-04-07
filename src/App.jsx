/**
 * @author @moSaeed15
 * @description This file contains the App component and its logic
 * @exports App
 */

// const google = () => {
//   console.log('first');
//   window.open('', _self);
// };

import SignupTwo from './pages/SignUp/SignupTwo';
import SignUpOne from './pages/SignUp/SignupOne';
import GlobalStyles from './components/styles/global';
import Landing from './pages/LandingPage/Landing';
import Organize from './pages/Organize/Organize'
import { Route, Routes } from 'react-router-dom';

import { useEffect, useState } from 'react';
import Maincontainer from './pages/LogIn/MainContainer';

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
        <Route path="Organize" element={<Organize/>} />
      </Routes>
    </>
  );
}

export default App;
