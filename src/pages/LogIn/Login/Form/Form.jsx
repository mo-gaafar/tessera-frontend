import { StyledEmail } from '../email/Email.styled';
import { StyledPassword } from '../password/Password.styled';
import { LoginTagSt } from '../Logintag/LoginTag.styled';
import { FormST } from './Form.styled';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Form() {
  const navigate = useNavigate();
  const { formValues, setFormValues } = useState({
    email: '',
    Password: '',
  });

  const { formErrors, setFormErrors } = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    navigate('/');
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = values => {
    const errors = {};
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email';
    }
    if (!values.Password) {
      errors.Password = 'Password is required';
    }
    return errors;
  };
  return (
    <FormST>
      <form onSubmit={handleSubmit}>
        <StyledEmail>
          <div className="full-input">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              // value={formValues.email}
              onChange={handleChange}
            />
          </div>
        </StyledEmail>
        <StyledPassword>
          <div className="passworddiv">
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              name="pwd"
              // value={formValues.Password}
              onChange={handleChange}
            />
          </div>
        </StyledPassword>
        {/* <p>{formErrors.Password}</p> */}

        <LoginTagSt>
          <button>Log in</button>
        </LoginTagSt>
      </form>
    </FormST>
  );
}
