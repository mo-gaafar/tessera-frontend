import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledResetPassword } from './styles/ResetPassword.styled';
import { ContinueButton } from '../SignUp/styles/SignUpEmail.styled';
import { StyledHead } from '../SignUp/styles/FormFormat.Styled';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function ResetPassword() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
  });

  const [focused, setFocused] = React.useState(false);
  const [emailerror, setEmailError] = React.useState('');
  const [successMsg, setSuccessMsg] = useState('');
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
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!emailerror) {
      const responsebody = {};

      responsebody.email = formData.email;

      const Json = JSON.stringify(responsebody);

      const response = await fetch(
        'https://www.tessera.social/api/auth/forgetPassword',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: Json,
        }
      );
      const responseData = await response.json();
      if (responseData.success) {
        const msg =
          responseData.message.charAt(0).toUpperCase() +
          responseData.message.slice(1);
        setSuccessMsg(msg);
      }
    }
  }
  console.log(successMsg);

  useEffect(() => {
    setTimeout(() => {
      successMsg === 'Please check your mail inbox and reset password' &&
        navigate('/');
    }, 3000);
  }, [successMsg]);

  return (
    <>
      <StyledResetPassword onSubmit={handleSubmit}>
        <div className="container">
          <h1 style={{ width: '10ch' }}>Forget Password</h1>
          <div style={{ marginBottom: '-3rem' }} className="email__div">
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
          {successMsg && <h2> {successMsg}. </h2>}

          <ContinueButton onClick={handleValidation}>
            Send Email Link
          </ContinueButton>
        </div>
      </StyledResetPassword>
    </>
  );
}

export default ResetPassword;
