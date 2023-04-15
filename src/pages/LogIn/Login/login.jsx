import { LoginStyled } from './login.styled';
import Form from './Form/Form';
import Or from './Or/Or';
import EmailMe from './emailme/Emailme';
import Googlesign from './google/Googlesign';
import Other from './Other/OtherMethods';
import Dropother from './Dropdownother/Dropother';
import { useState } from 'react';
import React from 'react';
import {
  Divider,
  CircleDivider,
  GoogleButton,
  Googlelogo,
} from '../../SignUp/styles/SignUpEmail.styled';
import { Link } from 'react-router-dom';

export default function Login() {
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
      <GoogleButton target={'_blank'}>
        <Googlelogo src="/images/google-logo.png" />
        Sign in with Google
      </GoogleButton>
      <Other />
      <Dropother />
      <div className="link__box">
        <Link to="/signup" className="Signup">
          Sign up
        </Link>
        <Link to="/forgetPassword"> Forget Password </Link>
      </div>
    </LoginStyled>
  );
}
