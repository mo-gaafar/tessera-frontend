import GlobalStyles from './components/styles/global';
// import TermsandConditions from './components/TermsAndConditions';
// import FacebookLogin from './components/LoginFacebook';
// import GoogleLoginButton from './components/LoginGoogle';
import Signup from './components/Signup';

import GlobalStyles from './components/styles/Global';
import Landing from './components/Landing.jsx';

// const google = () => {
//   console.log('first');
//   window.open('', _self);
// };

function App() {
  return (
    <>
      <GlobalStyles />
      {/* <FacebookLogin /> */}
      {/* <GoogleLoginButton /> */}

      {/* <TermsandConditions /> */}

      <Signup email="email@email.com" />
      <Landing />
    </>
  );
}

export default App;
