import styled from "styled-components";

export const Container = styled.div`
  /* width: 100vw; */
  background-color: white;
  overflow-x: hidden;
`;

export const Header = styled.div`
  /* width: 100vw; */
  height: 150px;
  text-align: left;
  background-color: white;
  border-bottom: 6px solid #d9d9d9;

  h1 {
    position: absolute;
    height: 20%;
    margin-top: 50px;
    margin-left: 5%;
    font-weight: 700;
    line-height: 2.5rem;
    letter-spacing: 0.5px;
    margin-right: -0.5px;
    color: #1e0a3c;
  }
  p {
    position: absolute;
    height: 20%;
    margin-left: 5%;
    margin-top: 90px;
  }
`;
export const OrderType = styled.div`
  width: 100vw;
  height: 150px;

  text-align: left;
  margin-top: 20px;

  label {
    margin-left: 5%;
    display: block;
    font-size: 17px;
    padding-right: 10px;
    cursor: default;
    font-size: 25px;
  }
  select {
    margin-left: 5%;
    position: absolute;
    width: 23%;
    font-size: 18px;
    padding: 10px 5px;
    cursor: pointer;
    border-radius: 5px;
    border-color: #d9d9d9;
  }
  select:focus {
    border-color: blue;
    outline: none;
  }
  p {
    position: absolute;
    height: 20%;
    margin-left: 5%;
    margin-top: 50px;
  }
`;
export const Tickets = styled.table`
  width: 88%;

  margin-left: 5%;
  border-collapse: collapse;

  thead {
    background-color: #f8f7fa;
    height: 40px;

    .type {
      align: left;
      margin-right: 20px;
    }
    tr {
      border: 2px solid #d9d9d9;
    }
  }

  tbody {
    height: 50px;
    border-bottom: 1px solid #d9d9d9;

    tr {
      border-bottom: 2px solid #d9d9d9;

      .num {
        font-size: 25px;
      }
      td {
        padding: 10px;
      }
    }
    tr:hover {
      background-color: #f8f7fa;
    }
    .tQuantity {
      font-size: 16px;
      line-height: 30px;
    }
    .Quantity {
      width: 50%;
      font-size: 16px;
      line-height: 30px;
      font-weight: 400;
      letter-spacing: 0.5px;
    }
    .Face {
      width: 50%;
      font-size: 16px;
      line-height: 30px;
      font-weight: 400;
      letter-spacing: 0.5px;
    }
  }
  .Total {
    width: 100%;
    font-size: 20px;
    line-height: 30px;
    border-radius: 5px;
    margin-top: 20px;

    .text {
      margin-top: 60px;

      position: absolute;
      left: 66%;
      display: inline-block;
      padding-top: 7px;
      padding-right: 10px;
      font-weight: 600;
    }
    .TotalValue {
      position: absolute;
      left: 66%;
      width: 250px;
      background-color: yellow;
    }
  }
`;
export const Continue = styled.div`
  height: 40px;
  width: 65vw;
  margin-left: 5%;

  margin-top: 60px;
  .button {
    position: absolute;

    width: 150px;
    height: 50px;
    margin-top: 20px;
    background-color: rgb(221, 73, 28);
    font-size: 19px;
    font-family: "Neue Plak", -apple-system, BlinkMacSystemFont, Roboto,
      "Helvetica Neue", Helvetica, Tahoma, Arial, sans-serif;
    line-height: 24px;
    letter-spacing: 0.2px;
    font-weight: 600;
    border-radius: 5px;
    margin-right: 20rem;
  }
  .button:hover {
    opacity: 0.9;
    background-color: rgb(221, 73, 28);
  }
`;
export const LearnMore = styled.div`
  margin-top: 60px;
  margin-left: 5%;
  height: 20px;
  background-color: #f8f7fa;
  width: 300px;
  border-radius: 10px;
  margin-right: 20px;

  a {
    color: blue;
  }
  a:hover {
    color: black;
    text-decoration: underline;
  }
`;
