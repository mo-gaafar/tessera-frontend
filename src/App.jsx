//import GlobalStyles from "./components/styles/global";

//import Maincontainer from "./components/MainContainer/MainContainer";

//function App() {
  //return (
    //<>
      //<Maincontainer />
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
function App() {
  const [email, setEmail] = useState('');

  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="signup" element={<SignUpOne setEmail={setEmail} />} />
        <Route path="Signuptwo" element={<SignupTwo email={email} />} />
      </Routes>
    </>
  );
}

export default App;
