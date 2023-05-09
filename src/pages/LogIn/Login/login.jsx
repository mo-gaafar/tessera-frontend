import { LoginStyled } from './login.styled';
import Form from './Form/Form';
import Or from './Or/Or';
import EmailMe from './emailme/Emailme';
import Googlesign from './google/Googlesign';
import Other from './Other/OtherMethods';
import Dropother from './Dropdownother/Dropother';
import { useGoogleLogin } from '@react-oauth/google';

import { useState } from 'react';
import React from 'react';
import {
  Divider,
  CircleDivider,
  GoogleButton,
  Googlelogo,
} from '../../SignUp/styles/SignUpEmail.styled';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Login() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const google = useGoogleLogin({
    onSuccess: codeResponse => setUser(codeResponse),
    onError: error => console.log('Login Failed:', error),
  });

  useEffect(() => {
    localStorage.removeItem('authEmail');
    localStorage.removeItem('email');
    const setUser = async () => {
      const response = await fetch(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json',
          },
        }
      );

      const json = await response.json();

      const { email, given_name: firstname, family_name: lastname, id } = json;

      const postData = await fetch(
        'https://www.tessera.social/api/auth/google/app',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            firstname,
            lastname,
            id,
          }),
        }
      );
      localStorage.setItem('authEmail', email);
      const data = await postData.json();

      if (data.success) {
        localStorage.setItem('token', data.token);

        navigate('/');
      }
    };
    setUser();
  }, [user]);

  return (
    <LoginStyled>
      <div className="headers">
        <img src="/images/LogoFullTextSmall.png" alt="Tessera logo" />
        <h1 className="Login">Log in</h1>
      </div>
      <Form />
      <Divider>
        <CircleDivider>or</CircleDivider>
      </Divider>
      <GoogleButton onClick={() => google()} target={'_blank'}>
        <Googlelogo src="/images/google-logo.png" />
        Sign in with Google
      </GoogleButton>
      <Other />
      <Dropother />
      <div className="link__box">
        <Link to="/signup" className="Signup">
          Sign up
        </Link>
        <Link to="/forgetPassword"> Forgot Password </Link>
      </div>
    </LoginStyled>
  );
}
