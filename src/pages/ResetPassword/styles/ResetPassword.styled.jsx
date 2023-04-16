import styled from 'styled-components';

export const StyledResetPassword = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 2rem;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
  }
  h2 {
    border-width: 5px;
    border-style: solid;
    border-color: white white white rgb(221, 73, 28);
    color: #39364f;
    padding-left: 0.5rem;
    font-size: 1.3rem;
    margin-top: 1rem;
  }
  h1 {
    color: rgb(30, 10, 60);
    font-size: 5.2rem;
    font-weight: 800;
    width: 15ch;
  }
  button {
    margin-top: 1rem;
  }
  span {
    display: block;
    color: red;
    font-size: 1.2rem;
    max-width: 50ch;
    :last-child {
      margin-top: 0.5rem;
    }
  }
  div {
    position: relative;
  }
  label {
    position: absolute;
    left: 1rem;
    color: #6f7287;
    font-size: 1.2rem;
  }

  input {
    padding: 1.25rem 1rem;
    border: 1px solid rgb(219, 218, 227);
    width: 36rem;
    border-raduis: 0.2rem;
    outline: none;
    &:hover {
      border: 1.5px solid #d3d3d3;
    }
    &:focus {
      border: 1px solid blue;
    }
  }
  .password__div {
    margin-bottom: -3rem;
  }
`;
