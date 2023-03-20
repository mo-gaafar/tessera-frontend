import GlobalStyles from './components/styles/global';
import TermsandConditions from './components/TermsAndConditions';
import FacebookLogin from './components/LoginFacebook';
import GoogleLoginButton from './components/LoginGoogle';
function App() {
  return (
    <div>
      <GlobalStyles />
      <h1>Hello world</h1>
      <FacebookLogin />
      <GoogleLoginButton />
      {/* After clicking on create account  */}
      <TermsandConditions />
    </div>
  );
}

export default App;
