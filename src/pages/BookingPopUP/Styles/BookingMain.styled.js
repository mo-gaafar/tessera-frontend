import styled from 'styled-components';
export const BookingContainer = styled.div`
  width: 36rem;
  display: flex;
  flex-direction: column;
`;
export const BookModal = styled.div`
  Button {
    position: absolute !important;
    right: 8px;
    top: 8px;
    background-color: rgba(248, 247, 250, 0.65);
    width: 4rem;
    height: 4rem;
    z-index: 1000;
  }
  Button:hover {
    background-color: rgba(248, 247, 250, 0.9) !important;
  }
  .Box {
    width: 95%;
    height: 95%;
    max-width: 108rem;
    max-height: 72rem;
    background-color: white;
    border: none;
    position: relative;
    display: flex;
  }
`;

export const BookingetTickets = styled.div`
  width: 100%;
  /* margin: auto; */
  justify-content: center;
  /* background-color: black; */
  display: flex;
  border: 2px solid rgb(238, 237, 242);
  border-radius: 8px;

  Button {
    width: 90%;
    background-color: rgb(221, 73, 28);
    color: white;
    font-size: 1.4rem;
    padding: 1.7rem 0;
    border: none;
    font-weight: 600;
    border-radius: 3px;
    /* margin-top: 1.8rem; */
    margin: 1.8rem auto;
    max-height: 5rem;
  }
  Button:hover {
    background-color: rgb(221, 73, 28);
    opacity: 0.75;
    cursor: pointer;
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;
export const Ticket = styled.div`
  height: 100%;
  width: calc(100% - 36rem);
  border-right: 2px solid rgb(238, 237, 242);
  @media (max-width: 768px) {
    width: 100%;
  }
`;
// export const TicketHead = styled.div`
//   width: 100%;
//   min-height: 8rem;
//   text-align: center;
//   border-bottom: 4px solid rgb(238, 237, 242);
//   div {
//     padding-top: 1.2rem;
//     font-weight: 400;
//     font-size: 1.8rem;
//   }
//   .Setting {
//     font-size: 1.2rem !important;
//     margin-top: 0.8rem;
//     color: #6f7287;
//   }
// `;
// export const TicketBody = styled.div`
//   max-height: calc(100% - 17rem);
//   overflow-y: scroll;
//   border-bottom: 4px solid rgb(238, 237, 242);
//   background-color: white;
// `;

// export const StyledPromo = styled.div`
//   border: 3px solid #999999;
//   background-color: white;
//   width: 90%;
//   height: 50px;
//   margin-right: 10px;
//   margin-top: 10px;
//   margin: 30px auto;
//   padding-right: 20px;
//   border-radius: 6px;

//   .inputapply {
//     width: 100%;
//     height: 100%;
//     margin-left: 4px;

//     display: flex;
//     justify-content: space-between;
//   }
//   input {
//     outline: none;

//     position: relative;
//     line-height: 1.2em;
//     font-size: 14px;
//     height: 100%;
//     width: 80%;
//     border-style: hidden;
//     padding: 6px 5px 6px;
//   }

//   label {
//     margin-left: 10px;
//     position: absolute;
//     top: 10.3rem;
//     font-size: 13px;
//     z-index: 2000;
//     padding-left: 4px;
//     padding-right: 4px;
//     background-color: white;

//     color: #999999;
//     font-family: Neue plak;
//   }
//   &:hover {
//     border: 3px solid;
//     border-color: blue;

//     label {
//       font-family: Neue plak;
//       display: inline-block;
//       font-size: 13px;
//       color: blue;
//     }
//   }
//   a {
//     padding-top: 10px;
//   }
// `;

// export const TicketEnd = styled.div``;

export const Information = styled.div`
  width: 36rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f8f7fa;
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
  .NoOrder {
    margin: auto;
    svg {
      width: 4.8rem;
      fill: #dbdae3;
    }
  }

  .order__summary {
    padding-inline: 2rem;
    h2 {
      font-weight: 600;
      color: #1e0a3c;
      font-size: 1.4rem;
      padding-bottom: 2rem;
    }
    div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      color: #39364f;
      font-size: 1.4rem;
      font-weight: 400;
    }

    .order__total {
      border-top: 1px solid #eeedf2;
      margin-top: 1.5rem;
      padding-top: 2rem;
      display: flex;
      justify-content: space-between;
      color: #39364f;
      font-size: 1.8rem;
      font-weight: 800;
    }
  }

  @media (max-width: 768px) {
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
  font-size: 2rem;
  color: black;
  p {
    font-weight: 200;
    font-size: 1.4rem;
  }
`;
export const OrderTicket = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2.4rem;
  position: relative;
  margin-top: 2.4rem;
  .Tsummary {
    display: flex;
    justify-content: space-between;
    color: rgb(57, 54, 79);
    /* column-gap: 3.2rem; */
    font-size: 1.4rem;
    line-height: 1.5rem;
    .Tcount {
      width: 60%;
      display: flex;
    }
    .Singleprice {
    }
  }
`;
export const StyleDiv = styled.div`
  flex-grow: 1;
  position: relative;
  .checkoutPage {
    background: #fefefe;
    display: flex;
    height: 90vh;
  }

  .inputForm {
    width: 70%;
    overflow-y: scroll;
    @media (max-width: 960px) {
      width: 100%;
    }
  }

  .contactInfo {
    padding: 35px;
    border-top: 1px solid #e6e6e6;
    // background: red;
    @media (max-width: 960px) {
      padding: 20px;
    }
  }

  .name {
    display: flex;
    justify-content: space-between;
  }

  .updates {
    display: flex;
    padding: 10px;
    padding-left: 0px;
    align-items: center;
  }

  .ticketForm {
    margin-top: 20px;
  }

  .updates input {
    margin-right: 10px;
    width: 20px;
    height: 20px;
  }

  .loggedIn {
    display: flex;
    justify-content: space-between;
    margin: 10px 0px;
  }

  .loggedIn span {
    color: #ff0000;
  }

  .eventDetails {
    background-color: #f7f6f9;
    width: 30%;
    @media (max-width: 960px) {
      display: none;
    }
    height: 90vh;
  }

  .totalPrice {
    display: flex;
    justify-content: space-between;
  }
  .ticket {
    display: flex;
    justify-content: space-between;
  }

  .ticketDetails {
    padding: 20px;
    background: #f7f6f9;
  }

  .paymentOptions {
    margin-top: 40px;
    margin-bottom: 20px;
    h2 {
      margin-bottom: 20px;
    }
  }
`;
export const StyledTimeOut = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  span {
    margin-top: 1rem;
    color: #3d64ff;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
`;
export const FormInput = styled.input`
  width: 100%;
  height: 30px;

  /* padding: 10px; */
  /* margin-bottom: 20px; */
  font-size: 16px;
  color: #000;
  /* border: 1px solid #ebebeb; */
  /* border-radius: 1px; */
  outline: none;
  border: none;
  @media (max-width: 960px) {
    width: 100%;
  }
  /* set active state */
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-bottom: 20px; */
  width: 100%;
  border: 1.5px solid #d0cfd9;
  border-radius: 3px;

  margin: 10px;
  margin-left: 0px;
  padding-left: 12px;
  padding-top: 5px;
  @media (max-width: 960px) {
    width: 100%;
  }

  /* hover animation */
  &:hover {
    border: 1.5px solid #a4a3aa;
  }

  &:focus-within {
    border: 1.5px solid #1e4fff;
  }

  .inputLabel {
    display: flex;
    justify-content: left;
    font-size: 12px;
    color: #6f7287;
    &:focus-within {
      border: 1px solid #1e4fff;
    }
  }

  .inputLabel span {
    color: #ff0000;
    margin-left: 5px;
  }
`;

export const PaymentOption = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin: 10px 0px; */
  border: 1.5px solid #d0cfd9;
  padding: 25px 20px;

  input {
    margin-right: 10px;
    width: 20px;
    height: 20px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;

  padding: 20px;
  @media (max-width: 960px) {
    padding: 10px;
  }
  .timer {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    h2 {
      margin: 0px;
    }
    p {
      margin: 0px;
    }
  }
`;

export const BackButton = styled.div`
  display: flex;
  position: absolute;
  left: 30px;
  padding: 7px;
  align-items: center;
  cursor: pointer;
  svg {
    width: 30px;
    height: 30px;
    /* margin-right: 10px; */
  }
  &:hover {
    /* border: 1px solid #1e4fff; */
    border-radius: 25px;
    background: #f7f6f9;
  }
`;
export const SubmitButton = styled.button`
  /* width: 100%; */
  float: right;
  height: 50px;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  color: #fff;
  border: none;
  border-radius: 4px;
  outline: none;
  background: #d94618;
  cursor: pointer;
  &:hover {
    background: #ef5436;
  }
  &:disabled {
    background: #d0cfd9;
    cursor: not-allowed;
  }

  @media (max-width: 651px) {
    position: absolute;
    right: 3rem;
    bottom: -0.5rem;
    width: 90%;
  }
`;
