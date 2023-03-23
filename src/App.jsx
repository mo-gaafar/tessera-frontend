import GlobalStyles from './components/styles/global';
import TermsandConditions from './components/TermsAndConditions';
import FacebookLogin from './components/LoginFacebook';
import GoogleLoginButton from './components/LoginGoogle';
import Signup from './components/Signup'

function App() {
  return (
    <div>
      <GlobalStyles />
      <FacebookLogin />
      <GoogleLoginButton />
      <TermsandConditions />
      
      <Signup email="email@email.com"/>
      

    </div>
  );
}

export default App;
