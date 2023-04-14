import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledResetPassword } from './styles/ResetPassword.styled';
import { ContinueButton } from '../SignUp/styles/SignUpEmail.styled';
import { StyledHead } from '../SignUp/styles/FormFormat.Styled';
import { useParams } from 'react-router-dom';

function ResetPassword() {
  const token = useParams().token.slice(1);

  console.log(token);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [focused, setFocused] = React.useState(false);
  const [focusedPassword, setFocusedPassword] = React.useState(false);
  const [emailerror, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [strength, setStrength] = React.useState(0);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  React.useEffect(() => {
    if (emailerror) {
      handleValidation();
    }
  }, [formData.email]);

  function handleValidation(event) {
    if (!formData.email) {
      setEmailError('Field required');
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)
    ) {
      setEmailError('Invalid email');
    } else {
      setEmailError('');
    }

    checkStrength(formData.password);

    if (strength !== 4) {
      setPasswordError(
        'Password needs to have a lower Case letter and an uppercase letter and number and a symbol'
      );
    } else if (strength === 4) {
      setPasswordError('');
    }
  }

  function checkStrength(password) {
    let i = 0;
    if (password.length >= 8) {
      i++;
    }
    if (/[A-Z]/.test(password)) {
      i++;
    }
    if (/[0-9]/.test(password)) {
      i++;
    }
    if (/[A-Za-z0-8]/.test(password)) {
      i++;
    }
    setStrength(i);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (strength !== 4) {
      setPasswordError(
        'Password needs to have a lower Case letter and an uppercase letter and number and a symbol'
      );
    } else if (strength === 4) {
      setPasswordError('');
    }
    if (!emailerror && strength === 4) {
      const responsebody = {};
      responsebody.password = formData.password;
      responsebody.email = formData.email;

      const response = await fetch(
        `https://www.tessera.social/api/auth/reset-password/${token}`,
        {
          method: 'POST',
          body: JSON.stringify(responsebody),
        }
      );
      console.log(response);
      console.log(await response.json());
    }
  }

  return (
    <>
      <StyledResetPassword onSubmit={handleSubmit}>
        <div className="container">
          <h1>Change Your Password</h1>

          <div className="email__div">
            <label
              className="email__label"
              style={
                emailerror
                  ? { color: 'red' }
                  : focused
                  ? { color: 'blue' }
                  : { color: '#6f7287' }
              }
            >
              Email address
            </label>
            <input
              style={
                emailerror
                  ? { borderColor: 'red' }
                  : focused
                  ? { borderColor: 'blue' }
                  : { borderColor: 'gray' }
              }
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              type="email"
              required
              name="email"
              onChange={handleChange}
              value={formData.email}
            />
            <span>{emailerror}</span>
          </div>
          <div className="password__div">
            <label
              style={
                passwordError
                  ? { color: 'red' }
                  : focusedPassword
                  ? { color: 'blue' }
                  : { color: '#6f7287' }
              }
              htmlFor=""
            >
              Password
            </label>
            <input
              style={
                passwordError
                  ? { borderColor: 'red' }
                  : focusedPassword
                  ? { borderColor: 'blue' }
                  : { borderColor: 'gray' }
              }
              onFocus={() => setFocusedPassword(true)}
              onBlur={() => setFocusedPassword(false)}
              required
              type="password"
              className="form--input"
              name="password"
              onChange={handleChange}
              value={formData.password}
            />

            <span>{passwordError}</span>
          </div>

          <ContinueButton onClick={handleValidation}>Reset </ContinueButton>
        </div>
      </StyledResetPassword>
    </>
  );
}

export default ResetPassword;
