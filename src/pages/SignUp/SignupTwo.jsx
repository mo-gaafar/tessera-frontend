/**
 * @file SignupTwo.jsx
 * @name SignupTwo.jsx
 * @author @hlasultanhassan
 * @requires react
 * @requires react-router-dom
 * @requires ./styles/FormFormat.styled
 * @exports SignupTwo
 * @description This file contains the SignupTwo component and its logic
 */
import { Wrapper } from './styles/Password.Styled.jsx';
import { PwdProgress } from './styles/Password.Styled';

import { StyledSignup } from './styles/FormFormat.Styled';
import { StyledLoginRef } from './styles/FormFormat.Styled';
import { StyledHead } from './styles/FormFormat.Styled';
import { LogoImg } from './styles/FormFormat.Styled';
import { StyledHeaderInfo } from './styles/FormFormat.Styled';
import { StyledReference } from './styles/FormFormat.Styled';
import { StyledSubmitbutton } from './styles/FormFormat.Styled';
import { StyledEmailInput } from './styles/FormFormat.Styled';
import { StyledSignupForm } from './styles/FormFormat.Styled';
import { StyledSignupFormInput } from './styles/FormFormat.Styled';
import { StyledEditButton } from './styles/FormFormat.Styled';
import { StyledEditImg } from './styles/FormFormat.Styled.jsx';
import { StyledEmailDiv } from './styles/FormFormat.Styled.jsx';
import { StyledNameDiv } from './styles/FormFormat.Styled.jsx';
import { StyledInputDiv } from './styles/FormFormat.Styled';
import { StyledInputContainerDiv } from './styles/FormFormat.Styled.jsx';
import { Label } from './styles/FormFormat.Styled';
import { Message } from './styles/FormFormat.Styled';
import { PageContainer } from './styles/FormFormat.Styled';
import { LoginA } from './styles/FormFormat.Styled';
import { ImgDescriptionDiv } from './styles/FormFormat.Styled';
import { FirstRowImgDiv } from './styles/FormFormat.Styled';
import { SecRowImgDiv } from './styles/FormFormat.Styled';
import TermsandConditions from './TermsAndConditions';
import edit from '/images/edit.png';
import logo from '/images/LogoFullTextSmall.png';
import pwdhide from '/images/eye.png';
import pwdShow from '/images/icon-visibility.jpg';
import { PasswordShowButton, PwdLabel } from './styles/Password.Styled';
import { PasswordShowImg } from './styles/Password.Styled';
import React, { useState, useContext, useEffect } from 'react';
import { Await, Link, useNavigate } from 'react-router-dom';

//import PasswordChecker from './PasswordChecker';
import { PasswordStrenghP } from './styles/Password.Styled';

import { ImgComatiner } from './styles/FormFormat.Styled.jsx';
import { PageImgDiv } from './styles/FormFormat.Styled.jsx';

/**
 * A functional component that handles the second step of the signup process.
 *
 * @param {Object} props - The props object passed down from the parent component.
 * @param {boolean} props.test - A boolean flag to indicate whether this is a test environment or not.
 * @param {string} props.email - The email of the user passed down from the parent component.
 * @returns {JSX.Element} The JSX representation of the component.
 */

export default function SignupTwo(props) {
  /**
   * Navigate to redirect after form submission
   * @type{function}
   */

  let navigate;
  if (!props.test) {
    navigate = useNavigate();
  }

  /**
   * A state variable and a function for setting that state variable
   *
   */

  const [pwdInput, initValue] = React.useState({
    password: '',
  });
  const [passwordType, setPasswordType] = React.useState('password');

  const [passwordButtonType, setPasswordButtonType] = React.useState('none');

  const [isError, setError] = React.useState(
    'Your password must be at least 8 characters and strong'
  );

  const [email, setEmail] = useState(props.email);

  /**
   * Updates the email state using the email value in the local storage.
   */

  useEffect(() => {
    setEmail(localStorage.getItem('email')?.toLowerCase());
  }, [email]);

  /**
   * Updates the password state and handles validation.
   *
   * @param {Object} e - The event object.
   */

  const onChange = e => {
    let password = e.target.value;
    setPasswordButtonType('inline');
    initValue({
      ...pwdInput,
      password: e.target.value,
    });
    setError(null);

    if (password.length === 0) {
      setPasswordButtonType('none');
    }
    if (password.length < 8) {
      setError('Your password must be at least 8 characters and strong');
      return;
    } else {
      setPassError(false);
    }
    //momken ne3mel else hena for further verification (special cases)
  };
  const [isStrong, initRobustPassword] = React.useState(null);

  /**
   * Initializes the robust password state.
   *
   * @param {boolean} childData - The value passed down from the child component.
   */

  const initPwdInput = async childData => {
    initRobustPassword(childData);
  };

  const [responseBody, setResponseBody] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    emailConfirmation: '',
    password: '',
  });

  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    emailConfirm: '',
  });
  //const [count,setCount] = React.useState(0)
  const [firstnameError, setFirstnameError] = React.useState(null);
  const [lastnameError, setLastnameError] = React.useState(null);
  const [emptyPassError, setEmptyPassError] = React.useState(null);
  const [emailConfirmError, setEmailConfirmError] = React.useState(null);
  const [passError, setPassError] = React.useState(false);
  const [errorFound, setErrorFound] = React.useState(false);
  const [focused, setFocused] = React.useState({
    firstName: false,
    lastName: false,
    emailConfirm: false,
    password: false,
  });

  const [showTerms, setShowTerms] = useState(false);

  /**
   * Handles the form validation on submit.
   */
  function handleValidation() {
    if (!formData.firstName) {
      setFirstnameError('First name is required');
      setErrorFound(true);
    }

    if (!formData.lastName) {
      setLastnameError('Last name is required');
      setErrorFound(true);
    }

    if (pwdInput.password.length < 8) {
      setEmptyPassError(
        'Your password must be at least 8 characters and strong'
      );
      setPassError(true);
      setErrorFound(true);
    }

    if (!pwdInput.password) {
      setEmptyPassError('Field required');
      setPassError(true);
      setErrorFound(true);
    }

    if (formData.emailConfirm !== email) {
      setEmailConfirmError("Email address doesn't match. Please try again");
      setErrorFound(true);
    }

    if (pwdInput.password.indexOf(' ') >= 0) {
      setEmptyPassError('Your password cannot be spaces');
      setPassError(true);
      setErrorFound(true);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prevFormData => {
      if (name === 'firstName' && firstnameError) {
        setFirstnameError(null);
      }
      if (value === ' ' && name === 'firstName') {
        setFirstnameError('First name cannot be spaces');
      }
      if (name === 'lastName' && lastnameError) {
        setLastnameError(null);
      }
      if (value === ' ' && name === 'lastName') {
        setLastnameError('Last name cannot be spaces');
      }
      if (name == 'emailConfirm' && value == email) {
        setEmailConfirmError(null);
      }

      return {
        ...prevFormData,
        [name]: name === 'emailConfirm' ? value : value.replace(/[^a-z]/gi, ''),
      };
    });
  }

  function GoBack(e) {
    e.preventDefault();
    e.detail && navigate('/signup', { replace: true });
  }

  function handleFocus(event) {
    const { name } = event.target;
    setFocused(prevFocus => {
      return {
        [name]: true,
      };
    });
  }

  function handleBlur(event) {
    const { name } = event.target;
    setFocused(prevFocus => {
      return {
        [name]: false,
      };
    });
  }

  const togglePassword = event => {
    event.preventDefault();
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };

  async function handleSubmit(event) {
    event.preventDefault();

    handleValidation();
    if (
      !errorFound &&
      (!formData.firstName ||
        !formData.lastName ||
        !formData.emailConfirm ||
        pwdInput.password.length < 8 ||
        formData.emailConfirm !== email ||
        initPwdChecker().val !== 'strong' ||
        pwdInput.password.indexOf(' ') >= 0)
    ) {
      setShowTerms(false);

      return;
    }

    setResponseBody(prevres => ({
      ...prevres,
      password: pwdInput.password,
      emailConfirmation: formData.emailConfirm,
      email: email,
      firstName: formData.firstName,
      lastName: formData.lastName,
    }));

    setShowTerms(true);
  }
  const styles = {
    display: `${passwordButtonType}`,
  };

  React.useEffect(() => {
    if (passError || firstnameError || lastnameError || emailConfirmError) {
      setErrorFound(true);
    } else if (
      formData.firstName &&
      formData.lastName &&
      formData.emailConfirm &&
      pwdInput.password
    ) {
      setErrorFound(false);
    } else if (
      !passError ||
      !firstnameError ||
      !lastnameError ||
      !emailConfirmError
    ) {
      setErrorFound(false);
    }
  }, [
    passError,
    firstnameError,
    lastnameError,
    emailConfirmError,
    formData.firstName,
    formData.lastName,
    formData.emailConfirm,
    pwdInput.password,
  ]);

  React.useEffect(() => {
    if (passError || firstnameError || lastnameError || emailConfirmError) {
      handleValidation();
    }
  }, [
    formData.firstName,
    formData.lastName,
    formData.emailConfirm,
    pwdInput.password,
  ]);

  //password file instead of applying in separate file
  const pwdValidate = pwdInput.password;
  const initPwdChecker = () => {
    let pwdCheck = 0;
    let validateRegex = ['[A-Z]', '[a-z]', '[0-9]', '\\W'];
    validateRegex.forEach((regex, i) => {
      if (new RegExp(regex).test(pwdValidate)) {
        pwdCheck += 1;
      }
    });
    switch (pwdCheck) {
      case 0:
        return {
          strength: 0,
          val: '',
        };
      case 1:
        return {
          strength: 1,
          val: 'very weak',
        };
      case 2:
        return {
          strength: 2,
          val: 'weak',
        };
      case 3:
        return {
          strength: 3,
          val: 'moderate',
        };
      case 4:
        return {
          strength: 4,
          val: 'strong',
        };

      default:
        return null;
    }
  };
  {
    //initPwdInput(initPwdChecker().val);
  }
  let colorCondition = false;
  if (initPwdChecker().val === 'moderate') {
    colorCondition = 'moderate';
  } else if (initPwdChecker().val === 'strong') {
    colorCondition = 'strong';
  }

  return (
    <>
      {showTerms === true && showTerms !== undefined && (
        <TermsandConditions data={responseBody} show={setShowTerms} />
      )}

      <PageContainer>
        <StyledSignup>
          <div>
            <StyledHeaderInfo>
              <div>
                <Link to="/">
                  <LogoImg src={logo} />
                </Link>
                <StyledHead>Create an account</StyledHead>
              </div>

              <StyledLoginRef>
                <StyledReference>
                  <Link to="/login"> Log In</Link>
                </StyledReference>
              </StyledLoginRef>
            </StyledHeaderInfo>

            <StyledSignupForm onSubmit={handleSubmit}>
              <StyledEmailDiv>
                <StyledEmailInput
                  id="email-input"
                  readOnly
                  value={email}
                  data-testid="email"
                />
                <StyledEditButton onClick={GoBack}>
                  <StyledEditImg src={edit} />
                </StyledEditButton>

                <StyledInputDiv>
                  <Label>Email address</Label>
                </StyledInputDiv>
              </StyledEmailDiv>

              <StyledInputContainerDiv
                style={
                  emailConfirmError
                    ? { borderColor: '#c5162e' }
                    : { backgroundColor: 'white' }
                }
              >
                <StyledSignupFormInput
                  id="email-input-1"
                  type="email"
                  name="emailConfirm"
                  value={formData.emailConfirm}
                  onChange={handleChange}
                  inputColor={emailConfirmError ? 'red' : 'blue'}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <StyledInputDiv>
                  <Label
                    style={
                      emailConfirmError
                        ? { color: '#c5162e' }
                        : !focused.emailConfirm && !formData.emailConfirm
                        ? { fontSize: '2rem' }
                        : focused.emailConfirm
                        ? { color: 'blue' }
                        : { color: 'gray' }
                    }
                  >
                    Confirm email
                  </Label>
                </StyledInputDiv>
                {emailConfirmError && (
                  <Message id="error-message" style={{ color: '#c5162e' }}>
                    {' '}
                    {emailConfirmError}
                  </Message>
                )}
              </StyledInputContainerDiv>

              <StyledNameDiv>
                <StyledInputContainerDiv
                  style={
                    firstnameError
                      ? { borderColor: '#c5162e' }
                      : { backgroundColor: 'white' }
                  }
                >
                  <StyledSignupFormInput
                    id="name-input"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    inputColor={firstnameError ? 'red' : 'blue'}
                    onFocus={handleFocus}
                    data-testid="firstname"
                    onBlur={handleBlur}
                  />

                  <StyledInputDiv>
                    <Label
                      style={
                        firstnameError
                          ? { color: '#c5162e' }
                          : !focused.firstName && !formData.firstName
                          ? { fontSize: '2rem' }
                          : focused.firstName
                          ? { color: 'blue' }
                          : { color: 'gray' }
                      }
                    >
                      First Name
                    </Label>
                  </StyledInputDiv>
                  {firstnameError && (
                    <Message id="error-message">
                      <span data-testid="error" style={{ color: '#c5162e' }}>
                        {' '}
                        {firstnameError}
                      </span>
                    </Message>
                  )}
                </StyledInputContainerDiv>

                <StyledInputContainerDiv
                  style={
                    lastnameError
                      ? { borderColor: '#c5162e' }
                      : { backgroundColor: 'transperent' }
                  }
                >
                  <StyledSignupFormInput
                    id="name-input-2"
                    type="text"
                    value={formData.lastName}
                    name="lastName"
                    onChange={handleChange}
                    inputColor={lastnameError ? 'red' : 'blue'}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                  <StyledInputDiv>
                    <Label
                      style={
                        lastnameError
                          ? { color: '#c5162e' }
                          : !focused.lastName && !formData.lastName
                          ? { fontSize: '2rem' }
                          : focused.lastName
                          ? { color: 'blue' }
                          : { color: 'gray' }
                      }
                    >
                      Last Name
                    </Label>
                  </StyledInputDiv>
                  {lastnameError && (
                    <Message id="error-message" style={{ color: '#c5162e' }}>
                      {' '}
                      {lastnameError}
                    </Message>
                  )}
                </StyledInputContainerDiv>
              </StyledNameDiv>

              <StyledInputContainerDiv
                style={
                  passError
                    ? { borderColor: '#c5162e' }
                    : { backgroundColor: 'transperent' }
                }
              >
                <StyledSignupFormInput
                  type={passwordType}
                  data-testid="password"
                  id="password"
                  name="password"
                  onChange={onChange}
                  inputColor={passError ? 'red' : 'blue'}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <PasswordShowButton onClick={togglePassword} style={styles}>
                  {passwordType === 'password' ? (
                    <svg
                      style={{ marginLeft: '1.5rem', marginTop: '1.25rem' }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-eye-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                    </svg>
                  ) : (
                    <svg
                      style={{ marginLeft: '1.5rem', marginTop: '1.25rem' }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-eye-slash-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                      <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                    </svg>
                  )}
                </PasswordShowButton>
                <StyledInputDiv>
                  <Label
                    style={
                      passError
                        ? { color: '#c5162e' }
                        : !focused.password && !pwdInput.password
                        ? { fontSize: '2rem' }
                        : focused.password
                        ? { color: 'blue' }
                        : { color: 'gray' }
                    }
                  >
                    Password
                  </Label>
                </StyledInputDiv>
                {passError && (
                  <Message id="error-message" style={{ color: '#c5162e' }}>
                    {' '}
                    {emptyPassError}
                  </Message>
                )}
              </StyledInputContainerDiv>
              {/* <PasswordChecker
                password={pwdInput.password}
                actions={initPwdInput}
                showStrength={isError}
              /> */}
              <>
                <Wrapper>
                  <PwdProgress
                    inputColor={
                      colorCondition === 'strong'
                        ? 'green'
                        : colorCondition === 'moderate'
                        ? 'orange'
                        : 'red'
                    }
                    className={`pwd-checker-bar strength-${
                      initPwdChecker().val
                    }`}
                    value={initPwdChecker().strength}
                    max="4"
                  />
                  <br />
                  <PwdLabel>
                    {pwdInput.password && (
                      <div>
                        <p className={`label strength-${initPwdChecker().val}`}>
                          {isError != null ? (
                            ''
                          ) : (
                            <PasswordStrenghP>
                              Your Password
                              <strong> is {initPwdChecker().val} </strong>
                            </PasswordStrenghP>
                          )}
                        </p>
                      </div>
                    )}
                  </PwdLabel>
                </Wrapper>
              </>
              {isError !== null && (
                <PasswordStrenghP
                  data-testid="passError"
                  className="pass-errors"
                >
                  {isError}
                </PasswordStrenghP>
              )}

              <StyledSubmitbutton onClick={handleSubmit} disabled={errorFound}>
                Create account
              </StyledSubmitbutton>

              <LoginA>
                <Link to="/login">Log In</Link>
              </LoginA>
            </StyledSignupForm>
          </div>
        </StyledSignup>
        <ImgComatiner>
          <PageImgDiv></PageImgDiv>
          <ImgDescriptionDiv>
            <FirstRowImgDiv>Hungry Pop</FirstRowImgDiv>
            <SecRowImgDiv>Trap Yoga Brooklyn</SecRowImgDiv>
            <SecRowImgDiv>Brooklyn, NY</SecRowImgDiv>
          </ImgDescriptionDiv>
        </ImgComatiner>
      </PageContainer>
    </>
  );
}
