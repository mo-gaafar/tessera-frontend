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
import React, { useEffect } from 'react';

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
  const google = async data => {
    const newWindow = window.open(
      'https://www.tessera.social/api/auth/google',
      '__blank'
    );
  };

  const facebook = async () => {
    const newWindow = window.open(
      'https://www.tessera.social/api/auth/facebook',
      '__blank',
      'width=500,height,600'
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          `https://www.tessera.social/api/auth/google/callback`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        console.log(data);
        const json = await data.json();
        console.log(json);
      } catch (err) {
        console.log(err);
      }
    };

    setTimeout(() => {
      fetchData();
    }, 10000);
  }, [google]);

  //

  let navigate;
  if (!props.test) {
    navigate = useNavigate();
  }
  const [focused, setFocused] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [emailerror, setEmailError] = React.useState('');

  useEffect(() => {
    localStorage.setItem('email', email);
  }, [email]);

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
          <GoogleButton
            onClick={google}
            // onClick="location.href=https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fwww.eventbrite.com%3Fid%3Dauth64961&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&client_id=126160502265-8i61veaglos3qqdc73t5b9gdp7uumclg.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fwww.eventbrite.com&fetch_basic_profile=true&gsiwebsdk=2&service=lso&o2v=1&flowName=GeneralOAuthFlow"
            target={'_blank'}
          >
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
          <FacebookButton onClick={facebook}></FacebookButton>
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
