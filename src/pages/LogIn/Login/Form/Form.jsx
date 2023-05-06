import { StyledEmail } from '../email/Email.styled';
import { StyledPassword } from '../password/Password.styled';
import { LoginTagSt } from '../Logintag/LoginTag.styled';
import { FormST } from './Form.styled';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PasswordShowImg } from '../../../SignUp/styles/Password.Styled';
import { PasswordShowButton } from '../../../SignUp/styles/Password.Styled';
import { ErrorST } from './Error.styled';

export default function Form() {
  const [passwordType, setPasswordType] = useState('password');
  const [passwordInput, setPasswordInput] = useState('');
  const navigate = useNavigate();

  const handlePasswordChange = evnt => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };
  // const { formErrors, setFormErrors } = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);

  // const handleChange = e => {
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();

  //   navigate('/');
  //   setFormErrors(validate(formValues));
  //   setIsSubmit(true);
  // };

  // const validate = values => {
  //   const errors = {};
  //   const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
  //   if (!values.email) {
  //     errors.email = 'Email is required';
  //   } else if (!regex.test(values.email)) {
  //     errors.email = 'This is not a valid email';
  //   }
  //   if (!values.Password) {
  //     errors.Password = 'Password is required';
  //   }
  //   return errors;
  // };

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: 'seif@hotmail.com',
      password: 'pass1',
    },
    {
      username: 'user2',
      password: 'pass2',
    },
  ];

  const errors = {
    uname: 'There is no associated account with this email',
    pass: 'invalid password',
  };

  async function handleSubmit(event) {
    localStorage.removeItem('authEmail');
    localStorage.removeItem('email');

    console.log(event);
    event.preventDefault();
    var { uname, pass } = document.forms[0];
    const responsebody = {};
    responsebody.email = uname.value;
    responsebody.password = pass.value;
    // Find user login info
    //const userData = database.find((user) => user.username === uname.value);

    const response = await fetch('https://www.tessera.social/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(responsebody),
    });
    const json = await response.json();
    console.log(json);
    if (json.success == true) {
      setErrorMessages({
        name: '',
        message: '',
      });
      localStorage.setItem('email', responsebody.email);
      localStorage.setItem('token', json.accessToken);
      navigate('/');
    } else {
      // email not found
      setErrorMessages({
        name: json.message === 'Invalid Email or Password' ? 'uname' : 'pass',
        message:
          json.message === 'Invalid Email or Password'
            ? 'There is no associated account with this email'
            : json.message,
      });
    }
  }

  // Generate JSX code for error message
  const renderErrorMessage = name =>
    name === errorMessages.name && (
      <ErrorST>
        {errorMessages.message}
        <br />

        <Link to="/signup" className="Signup">
          Create an account
        </Link>
      </ErrorST>
    );

  const renderErrorMessagePass = name =>
    name === errorMessages.name && <ErrorST>{errorMessages.message}</ErrorST>;

  return (
    <FormST>
      {isSubmitted ? (
        <div>User is successfully logged in</div>
      ) : (
        <form onSubmit={handleSubmit} className="form">
          {renderErrorMessage('uname')}
          {renderErrorMessagePass('pass')}
          <StyledEmail>
            <div className="full-input">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="uname"
                required
                // value={formValues.email}
              />
            </div>
          </StyledEmail>
          <StyledPassword>
            <div className="passworddiv">
              <label htmlFor="pass">Password</label>
              <input
                type={passwordType}
                name="pass"
                onChange={handlePasswordChange}
                value={passwordInput}
                // value={formValues.Password}
                required
              />
            </div>
            <div className="showpass">
              <PasswordShowButton onClick={togglePassword}>
                {passwordType === 'password' ? (
                  <svg
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
            </div>
          </StyledPassword>
          {/* <p>{formErrors.Password}</p> */}

          <LoginTagSt>
            <button>Log in</button>
          </LoginTagSt>
        </form>
      )}
    </FormST>
  );
}
