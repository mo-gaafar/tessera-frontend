// import FacebookLogin from './components/LoginFacebook';
// import GoogleLoginButton from './components/LoginGoogle';
// const google = () => {
//   console.log('first');
//   window.open('', _self);
// };

import Signup from './components/Signup';
import GlobalStyles from './components/styles/global';
import Landing from './components/Landing.jsx';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyles />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="signup" element={<Signup email="email@email.com" />} />
        <Route path="signup" element={<Signup email="email@email.com" />} />
      </Routes>
    </>
  );
}

export default App;
