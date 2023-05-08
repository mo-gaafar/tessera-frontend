import styled from "styled-components";
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  .bottom {
    margin-left: 150px;
    width: 1400px;
  }
  .flexcontainer {
    width: 75%;
    height: 700px;
  }
  .flexleft {
    height: 100%;
    width: 62%;
    float: left;

    margin-top: 0px;

    margin-left: 150px;
    @media (max-width: 1500px) {
      width: 100%;
    }
  }
  .TimeOut {
    margin: 0 150px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100%;

    width: 100%;
    h1 {
      height: 10%;
      font-size: 40px;
      font-weight: 700;
    }
    .poweredT {
      margin-top: 500px;
    }
  }
`;

export const Header = styled.div`
  width: 80%;
  height: 150px;
  text-align: left;
  margin: 0 150px;
  position: relative;
  margin-top: 20px;

  a {
    color: blue;
  }
  a:hover {
    color: black;
    text-decoration: underline;
  }
  h1 {
    position: absolute;
    height: 20%;
    margin-top: 40px;

    font-weight: 700;
    line-height: 2.5rem;
    letter-spacing: 0.5px;
  }
  hr {
    position: absolute;
    top: 130px;
    width: 1400px;
    color: #f8f7fa;
  }
`;
export const Checkout = styled.div`
  width: 100%;
  height: 100px;
  text-align: center;

  margin-top: 20px;
  border: 1px solid #f8f7fa;
  h2 {
    margin-top: 20px;
    text-align: center;
    font-weight: 200;
    line-height: 2.5rem;
    letter-spacing: 0.5px;
  }
  p {
    margin-top: 20px;
    color: #e02e46;
    font-family: Neue Plak;
  }
`;
export const Info = styled.div`
  width: 100%;
  height: 500px;
  text-align: left;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 40px;
  border: 1px solid #f8f7fa;
  overflow-y: scroll;
  h2 {
    font-weight: 700;
    line-height: 2.5rem;
    letter-spacing: 0.5px;
  }
  p {
    font-weight: 200;
    margin-top: 10px;
    font-size: 15px;
  }
  .TextCont {
    height: 140px;
    margin-top: 20px;

    .firstName {
      width: 45%;
      margin-right: 20px;
    }
    .lastName {
      width: 45%;
    }
  }
  .Email {
    margin-top: 20px;

    .Ename {
      width: 45%;
    }
  }
  .check {
    margin-top: 60px;
    .send {
      display: inline-block;
    }
  }
  .ticketinfo {
    margin-top: 20px;
  }
  .powered {
    margin-bottom: 20px;
    margin-top: 70px;
  }
`;
export const PlaceOrder = styled.div`
  margin-left: 30px;

  .button {
    width: 150px;
    height: 50px;
    background-color: rgb(221, 73, 28);
    font-size: 15px;
    font-family: "Neue Plak", -apple-system, BlinkMacSystemFont, Roboto,
      "Helvetica Neue", Helvetica, Tahoma, Arial, sans-serif;
    line-height: 24px;
    letter-spacing: 0.2px;
    font-weight: 600;
    border-radius: 5px;
  }
`;
export const Information = styled.div`
  width: 25%;
  height: 100%;

  background-color: #f8f7fa;
  float: left;
  margin-top: 20px;
  overflow-y: scroll;
  .eventimage {
    width: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    margin-bottom: 3rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  @media (max-width: 1500px) {
    display: none;
  }
`;
export const Order = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 2.4rem;
  width: 84%;
  hr {
    width: 100%;
    height: 1px;
    background-color: #e2e1e6;
    border: 0;
  }
`;
export const OrderTitle = styled.div`
  font-weight: 600;
  height: 40px;
  font-size: 1.5rem;
  color: black;
`;
export const OrderItem = styled.div`
  display: inline-block;
  margin-top: 20px;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #e2e1e6;
  .name {
    display: inline-block;

    height: 100%;
    width: 50%;
    font-size: 20px;
  }
  .Price {
    text-align: right;
    font-weight: 200;
    font-size: 20px;
    padding-right: 40px;
    display: inline-block;
    height: 100%;
    width: 50%;
  }
`;
