import styled from 'styled-components';

export const StyledDashboard = styled.div`
  padding-left: 10vw;

  flex-grow: 1;

  @media (max-width: 60em) {
    padding-left: 8vw;
  }
  @media (max-width: 40em) {
    padding-left: 5vw;
    > * {
      max-width: 30rem;
    }
  }
  h1 {
    font-size: 4.8rem;
    font-weight: 700;

    color: rgb(30, 10, 60);
    line-height: 40px;
  }
  margin-top: 2rem;
  .cards {
    display: flex;
    flex-grow: 1;
    /* overflow-x: scroll; */
    gap: 2rem;
    margin-top: 3rem;
  }
  .card {
    :last-child {
      padding-right: 10rem;
      @media (max-width: 40em) {
        padding-right: 5rem;
      }
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
      @media (max-width: 40em) {
        width: 3rem;
        height: 3rem;
      }
    }
  }
  hr {
    width: 93%;
    height: 1px;
    margin-top: 5rem;
    margin-bottom: 3rem;
    opacity: 0.3;
    margin-right: 15rem;
    @media (max-width: 60em) {
      width: 80%;
    }
  }
  .ticket__types {
    padding-right: 15rem;
    display: flex;
    justify-content: space-between;
    gap: 4rem;
  }
  .manage__tickets {
    flex-grow: 1;
  }
  .other__action {
    max-width: 20rem;
  }
  .table {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 5rem;
    > * {
      display: flex;
      justify-content: space-between;
      color: #39364f;
      font-size: 1.3rem;
      font-weight: 400;
      div {
        display: flex;
        gap: 10rem;
        @media (max-width: 40em) {
          gap: 3rem;
        }
        span {
          min-width: 4.5rem;
        }
      }
    }
    &__header {
    }
    &__row {
      border-bottom: 1px solid #eeedf2;
      padding-bottom: 1rem;
    }
  }
  .other__action {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    font-size: 1.3rem;
    font-weight: 600;

    svg {
      height: 2rem;
      width: 2rem;
      @media (max-width: 40em) {
        height: 5rem;
        width: 5rem;
      }
      fill: #3659e3;
    }
    a {
      display: flex;
      align-items: center;
      gap: 1rem;
      color: #3659e3;
      @media (max-width: 40em) {
        width: 15ch;
      }
      :hover {
        text-decoration: underline;
      }
    }
  }
`;

export const StyledAttendeeSummary = styled.div`
  display: flex;
  h1 {
    font-size: 5.2rem;
    font-weight: 900;
    color: #1e0a3c;
  }
  .attendee {
    padding-inline: 20vw;
    margin-top: 5rem;
    flex-grow: 1;
    @media (max-width: 60em) {
      padding-inline: 10vw;
    }
    @media (max-width: 40em) {
      padding-inline: 5vw;
    }
  }
  table {
    border-collapse: collapse;
  }
  th,
  td {
    text-align: center;
  }

  th {
    background-color: #fdfdfd; /* Set your desired background color here */
  }
  .table-content {
    font-size: 16px;
    color: rgb(111, 114, 135);
    font-size: 14px;
    font-weight: 100;
    text-align: center;
    width: 55vw;
    overflow-x: scroll;
    margin-top: 3rem;
    @media (max-width: 60em) {
      width: 65vw;
    }
    .table-header {
      height: 5rem;
      padding-bottom: 1rem;
    }
    .head-data {
      font-weight: 100;
      padding-inline: 1rem;

      white-space: nowrap;
    }
  }
  .search {
    margin-top: 2rem;
    display: flex;
    max-width: 60vw;
    justify-content: space-between;
    margin-bottom: 15rem;
    @media (max-width: 60em) {
      max-width: 65vw;
    }
    small {
      color: #3659e3;
    }
    button {
      display: flex;
      gap: 1rem;
      align-items: center;
      background: none;
      border: none;
      color: inherit;
      font: inherit;
      cursor: pointer;
      padding: 0;
    }
    svg {
      height: 2rem;
      width: 2rem;
      fill: #3659e3;
    }
  }
`;
