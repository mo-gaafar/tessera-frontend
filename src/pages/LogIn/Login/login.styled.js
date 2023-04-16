import styled from 'styled-components';

export const LoginStyled = styled.div`
  display: block;
  .headers {
    margin-top: 7rem;
    background-color: white;
    img {
      width: 14rem;
    }
  }
  .eventbrite {
    margin-top: 0px;
    width: 50%;
    height: 50%;
  }

  .form {
    background-color: white;
    width: 100%;
    height: 40%;
  }
  #facebook {
    height: 4.8rem;
    width: 4.8rem;
    border-radius: 24px;
    background-image: url('/images/Facebook-logo.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #1877f2;
    border: none;

    :hover {
      cursor: pointer;
    }
  }
  .Login {
    margin-top: 10px;
    color: rgb(30, 10, 60);
    font-size: 52px;
    line-height: 64px;
    letter-spacing: 1px;
    font-weight: 800;
    text-decoration: none solid rgb(30, 10, 60);
    text-align: left;
  }

  .Signup {
    color: #304fc9;
    height: 20px;
    display: flex;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
  }

  .link__box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5rem;
    font-size: 14px;
    font-weight: 600;
    color: rgb(221, 73, 28);
    span {
      cursor: pointer;
    }
  }
`;
