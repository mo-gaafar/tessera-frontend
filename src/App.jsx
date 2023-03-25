/**
 * @author @moSaeed15
 * @description This file contains the App component and its logic
 * @exports App
 */
//import GlobalStyles from "./components/styles/global";

//function App() {
//return (
//<>
//
//<GlobalStyles />
//</>
//);
//}

//export default App;

// import FacebookLogin from './components/LoginFacebook';
// import GoogleLoginButton from './components/LoginGoogle';
// const google = () => {
//   console.log('first');
//   window.open('', _self);
// };

import SignupTwo from './components/SignupTwo';
import SignUpOne from './components/SignupOne';
import GlobalStyles from './components/styles/global';
import Landing from './components/Landing.jsx';
import { Route, Routes } from 'react-router-dom';

import { useEffect, useState } from 'react';
import Maincontainer from './components/MainContainer';

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
      </Routes>
    </>
  );
}

export default App;
