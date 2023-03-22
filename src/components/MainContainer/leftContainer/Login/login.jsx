import { LoginStyled } from "./login.styled";
import Email from "./email/Email";
import Password from "./password/Password";
import LoginTag from "./Logintag/LoginTag";
import Or from "./Or/Or";
import EmailMe from "./emailme/Emailme";
import Googlesign from "./google/Googlesign";
import Other from "./Other/OtherMethods";
import Dropother from "./Dropdownother/Dropother";
export default function Login() {
  return (
    <LoginStyled>
      <div className="headers">
        <h1 className="eventbrite">eventbrite</h1>
        <h1 className="Login">Log in</h1>
      </div>
      <Email />
      <Password />
      <LoginTag />
      <Or />
      <EmailMe />
      <Googlesign />
      <Other />
      <Dropother />
      <a href="" className="Signup">
        Sign up
      </a>
    </LoginStyled>
  );
}
