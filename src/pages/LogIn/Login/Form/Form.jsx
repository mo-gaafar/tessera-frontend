import { StyledEmail } from "../email/Email.styled";
import { StyledPassword } from "../password/Password.styled";
import { LoginTagSt } from "../Logintag/LoginTag.styled";
import { FormST } from "./Form.styled";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ErrorST } from "./Error.styled";
export default function Form() {
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
      username: "seif@hotmail.com",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "There is no associated account with this email",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <ErrorST>
        {errorMessages.message}
        <br />
        <a href="" className="lol">
          Create an account
        </a>
      </ErrorST>
    );
  const renderErrorMessagePass = (name) =>
    name === errorMessages.name && <ErrorST>{errorMessages.message}</ErrorST>;
  // const renderform = () => (
  //   <form onSubmit={handleSubmit} className="form">
  //     {renderErrorMessage("uname")}
  //     {renderErrorMessage("pass")}
  //     <StyledEmail>
  //       <div className="full-input">
  //         <label htmlFor="email">Email address</label>
  //         <input
  //           type="email"
  //           name="uname"
  //           required
  //           // value={formValues.email}
  //         />
  //       </div>
  //     </StyledEmail>
  //     <StyledPassword>
  //       <div className="passworddiv">
  //         <label htmlFor="pass">Password</label>
  //         <input
  //           type="password"
  //           name="pass"
  //           // value={formValues.Password}
  //           required
  //         />
  //       </div>
  //     </StyledPassword>
  //     {/* <p>{formErrors.Password}</p> */}

  //     <LoginTagSt>
  //       <button>Log in</button>
  //     </LoginTagSt>
  //   </form>
  // );

  return (
    <FormST>
      {isSubmitted ? (
        <div>User is successfully logged in</div>
      ) : (
        <form onSubmit={handleSubmit} className="form">
          {renderErrorMessage("uname")}
          {renderErrorMessagePass("pass")}
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
                type="password"
                name="pass"
                // value={formValues.Password}
                required
              />
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
