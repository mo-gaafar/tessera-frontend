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
} from '../styles/SignUpEmail.styled';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <LoginStyled>
      <div className="headers">
        <img
          src="../../../src/assets/LogoFullTextSmall.png"
          alt="Tessera logo"
        />
        <h1 className="Login">Log in</h1>
      </div>
      <Form />
      <Divider>
        <CircleDivider>or</CircleDivider>
      </Divider>
      <EmailMe />
      <GoogleButton target={'_blank'}>
        <Googlelogo src="./src/assets/google-logo.png" />
        Sign in with Google
      </GoogleButton>{' '}
      <Other />
      <Dropother />
      <Link to="/signup" className="Signup">
        Sign up
      </Link>
    </LoginStyled>
  );
}
