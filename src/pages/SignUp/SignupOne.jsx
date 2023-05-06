/**
 * @file SignupOne.jsx
 * @name SignupOne.jsx
 * @author @sohailaaAshraaf
 * @requires react
 * @requires react-router-dom
 * @requires ./styles/SignUpEmail.styled
 * @exports SignupOne
 * @description This file contains the SignupOne component and its logic
 *
 */
import React, { useEffect, useState } from 'react';

import {
  ContinueButton,
  FormDiv,
  Googlelogo,
  ImageRight,
  GoogleButton,
  InputEmail,
  EventLogo,
  CreateAccount,
  LogIn,
  LogIn2,
  LogInDiv,
  LogInDiv2,
  Label,
  UpperPage,
  OtherArrow,
  SignUpPage,
  TopHeader,
  FacebookButton,
  Divider,
  Arrowsvg,
  ArrowpathUp,
  ArrowpathDown,
  Arrowspan,
  CircleDivider,
  DivLeft,
  Pother,
  Form,
  OtherSignUp,
  RightSide,
  OtherSignUpButton,
  OtherSignUpButtonDiv1,
  OtherSignUpButtonDiv2,
  Upper2,
} from './styles/SignUpEmail.styled';

import { render } from 'react-dom';

import SignupTwo from './SignupTwo';
import { Link, useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { FacebookProvider, LoginButton, useLogin } from 'react-facebook';

/**
 * @module SignupOne
 * @param {object} props
 * @param {function} props.setEmail
 * @param {function} props.setEmailError
 * @param {string} props.email
 * @param {string} props.emailerror
 * @returns {JSX.Element} SignupOne component
 * @description This function is a component that renders the first page of the signup process
 */

export default function SignUpOne(props) {
  let navigate;
  if (!props.test) {
    navigate = useNavigate();
  }
  const [focused, setFocused] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [emailerror, setEmailError] = React.useState('');
  const [user, setUser] = useState([]);
  const [eventData, setEventData] = useState({});

  useEffect(() => {
    localStorage.removeItem('authEmail');

    localStorage.setItem('email', email);
  }, [email]);

  async function handleSuccess(response) {
    const facebookResponse = await fetch(
      `https://graph.facebook.com/v12.0/me?fields=name,email&access_token=${response.authResponse.accessToken}`
    );
    const data = await facebookResponse.json();

    const [firstname, lastname] = data.name.split(' ');
    const email = data.email;
    const id = data.id;

    const responseBackend = await fetch(
      'https://www.tessera.social/api/auth/facebook/app',
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

    const responseData = responseBackend.json();
    console.log(responseData);
    localStorage.setItem('authEmail', email);
    navigate('/');
  }

  function handleError(error) {
    console.log(error);
  }

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
      console.log(data);
      if (data.success) {
        // navigate('/');
      }
    };
    setUser();
  }, [user]);

  /**
   * @function saveEmail
   * @param {object} event
   * @returns {void}
   * @description This function saves the email in the state
   */
  function saveEmail(event) {
    const { name, value } = event.target;
    setEmail(value);
  }
  /**
   * @function handleValidation
   * @param {object} event
   * @returns {void}
   * @description This function validates the email
   */

  function handleValidation(event) {
    console.log();
    if (!email) {
      setEmailError('Field required');
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setEmailError('Invalid email');
    } else {
      setEmailError('');
    }
  }

  React.useEffect(() => {
    if (emailerror) {
      handleValidation();
    }
  }, [email]);

  /**
   * @function handleSubmit
   * @param {object} event
   * @returns {void}
   * @description This function handles the submit event
   */
  function handleSubmit(e) {
    e.preventDefault();
    if (!props.test)
      if (!emailerror) {
        props.setEmail(email);
        navigate('/Signuptwo');
      }
  }

  return (
    <SignUpPage>
      <Upper2>
        <UpperPage>
          <TopHeader>
            <DivLeft>
              <EventLogo src="/images/logo.jpg" />
              <CreateAccount>Create an account</CreateAccount>
            </DivLeft>
            <LogInDiv>
              <LogIn>
                <Link to="/login"> Log in</Link>
              </LogIn>
            </LogInDiv>
          </TopHeader>
          <Form onSubmit={handleSubmit}>
            <FormDiv>
              <Label
                style={
                  emailerror
                    ? { color: 'red' }
                    : focused
                    ? { color: 'blue' }
                    : { color: '#6f7287' }
                }
              >
                <span style={{ WebkitBoxDirection: 'normal' }}>
                  Email address
                </span>
              </Label>
              <InputEmail
                data-testid="email"
                style={
                  emailerror
                    ? { borderColor: 'red' }
                    : focused
                    ? { borderColor: 'blue' }
                    : { borderColor: 'gray' }
                }
                type="email"
                name="enter-email"
                id="email-input"
                value={email}
                onChange={saveEmail}
                onFocus={() => setFocused(true)}
              />
              {emailerror && <span style={{ color: 'red' }}>{emailerror}</span>}
              <ContinueButton onClick={handleValidation}>
                Continue
              </ContinueButton>
            </FormDiv>
          </Form>
          <Divider>
            <CircleDivider>or</CircleDivider>
          </Divider>
          <GoogleButton onClick={() => google()}>
            <Googlelogo src="/images/google-logo.png" />
            Sign in with Google
          </GoogleButton>
          <OtherSignUp>Other sign up methods</OtherSignUp>
          <OtherSignUpButton
            type="button"
            data-automation="eds-expandable-card-content-button"
          >
            <OtherSignUpButtonDiv1>
              <Pother>Other sign up methods</Pother>
            </OtherSignUpButtonDiv1>
            <OtherSignUpButtonDiv2>
              <OtherArrow>
                <Arrowsvg x="0" y="0" viewBox="0 0 24 24" xml:space="preserve">
                  <ArrowpathUp
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17 13.8l-5-5-5 5 1.4 1.4 3.6-3.6 3.6 3.6z"
                  ></ArrowpathUp>
                  <Arrowspan className="eds-is-hidden-accessible">
                    Toggle Content
                  </Arrowspan>
                </Arrowsvg>
              </OtherArrow>
            </OtherSignUpButtonDiv2>
          </OtherSignUpButton>
          <FacebookProvider appId="664174802386073">
            <LoginButton
              id="facebook"
              scope="public_profile,email"
              onError={handleError}
              onSuccess={handleSuccess}
            ></LoginButton>
          </FacebookProvider>

          <LogInDiv2>
            <LogIn2>
              <Link to="/login">Log in </Link>
            </LogIn2>
          </LogInDiv2>
        </UpperPage>
      </Upper2>
      <RightSide>
        <ImageRight></ImageRight>
      </RightSide>
    </SignUpPage>
  );
}
