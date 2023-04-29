import styled from "styled-components";
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
  font-size: 1.5rem;
  color: black;
`;
export const OrderTicket = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2.4rem;
  position: relative;
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
