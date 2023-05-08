import styled from 'styled-components';

export const StyledDashboard = styled.div`
  padding-left: 20rem;
  h1 {
    font-size: 4.8rem;
    font-weight: 700;

    color: rgb(30, 10, 60);
    line-height: 40px;
    margin-top: 2rem;
  }
  .cards {
    display: flex;
    flex-grow: 1;
    min-width: 90rem;
    /* overflow-x: scroll; */
    gap: 2rem;
    margin-top: 3rem;
  }
  .card {
    :last-child {
      padding-right: 10rem;
    }
    padding: 1rem 1.5rem;

    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    box-shadow: 0 4px 4px #dbdae3;
    &__title {
      color: rgb(57, 54, 79);
      font-size: 1.4rem;
      font-weight: 500;
    }
    &__price {
      color: #1e0a3c;
      font-size: 3rem;
      font-weight: 700;
    }
    &__sales {
      padding-right: 5rem;
      color: #39364f;
      font-size: 1.2rem;
      font-weight: 400;
      margin-top: 2rem;
      span {
        color: #3659e3;
        :hover {
          text-decoration: underline;
        }
      }
    }
    &__tickets {
      color: #1e0a3c;
      font-size: 1.8rem;
      font-weight: 700;
      span {
        font-size: 3rem;
      }
    }
    &__type {
      color: #39364f;
      font-size: 1.2rem;
      font-weight: 400;
    }
  }
  .share {
    display: flex;
    margin-top: 4rem;
    flex-direction: column;
    gap: 1rem;
    h2 {
      margin-bottom: 1rem;
      font-size: 2.4rem;
      font-weight: 700;
    }
    span {
      color: #39364f;
      font-size: 1.3rem;
      font-weight: 500;
      margin-left: 1rem;
    }
    div {
      display: flex;
      margin-left: 1rem;
      gap: 7rem;
    }
    p {
      color: #39364f;
      max-width: 45ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 1.4rem;
    }
    svg {
      width: 2rem;
      height: 2rem;
      fill: #3659e3;
    }
  }
  hr {
    width: 100%;
    height: 1px;
    margin-top: 5rem;
    opacity: 0.3;
  }
`;
