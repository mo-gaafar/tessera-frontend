import styled from 'styled-components';

export const ContainerBox = styled.div`
  height: 100%;
  overflow: hidden;
`;

export const TicketHeader = styled.div`
  width: 100%;
  min-height: 8rem;
  text-align: center;
  border-bottom: 2px solid rgb(238, 237, 242);
  div {
    padding-top: 1.2rem;
    font-weight: 400;
    font-size: 1.8rem;
  }
  .Setting {
    font-size: 1.2rem !important;
    margin-top: 0.8rem;
    color: #6f7287;
  }
`;
export const TicketBody = styled.div`
  margin: auto;
  /* max-height:  56rem; */
  max-height: calc(100% - 14rem);
  overflow-y: scroll;
  border-bottom: 2px solid rgb(238, 237, 242);
`;

export const PromoCode = styled.div`
  margin: 1.6rem auto;
  width: 79%;
  .lol {
    width: 100%;
    background-color: white;
  }
`;

export const Apply = styled.button`
  border: 0;
  background: none;
  cursor: default;
`;

export const Applyfocus = styled.button`
  border: 0;
  background: none;
  cursor: pointer;
  color: rgb(61, 100, 255);
`;
export const TicketEnd = styled.div`
  padding: 1.6rem 0;
  margin: 1.6rem auto;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  width: 79%;
  color: #6f7287;
  div {
    text-align: center;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1rem;
    text-align: center;
  }
`;

export const SelectTicket = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  background: rgb(255, 255, 255);
  border: 2px solid rgb(238, 237, 242);
  border-radius: 8px;
  padding: 1.6rem 0;
  margin: 1.6rem auto;
  width: 79%;
`;
export const SelectTickContainer = styled.div`
  display: flex;
  border-bottom: 2px solid rgb(238, 237, 242);
  padding: 0 1.6rem 1.6rem;
  justify-content: space-between;
  align-items: center;
`;
export const SelectTickName = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: #39364f;
`;
export const IncrementDecrement = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-items: center;
  .incdec {
    cursor: default;
    background-color: rgb(238, 237, 242);
    font-size: 4rem;
    border-radius: 8px;
    max-height: 30px;
    padding: 0.5rem;
    svg {
      width: 2rem;
      fill: grey;
    }
  }
  .incdecactive {
    background-color: #3d64ff;

    cursor: pointer;
    font-size: 4rem;
    border-radius: 8px;
    max-height: 30px;
    padding: 0.5rem;
    svg {
      width: 2rem;
      fill: white;
    }
  }
  .incdecactive:focus {
    border: 2px solid blue;
  }
  .Quantity {
    margin: 0 1.5rem;
    font-size: 1.9rem;
    font-weight: 600;
  }
`;

export const SelectTickBottomContainer = styled.div`
  padding-left: 1.6rem;
  padding-top: 1.6rem;
`;
export const BottomContainerHead = styled.div`
  margin-bottom: 2rem;
  .Fee {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #39364f;
  }
  .Sale {
    font-size: 1.4rem;
  }
`;
export const Checkout = styled.div`
  width: 100%;
  min-height: 8rem;
  display: flex;
  postion: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: end;

  .summarycontainer {
    margin: 0 auto;
    width: 77.5%;
    justify-content: flex-end;
    background-color: white;
    font-size: 2rem;
  }
  @media screen and (min-width: 791px) {
    .summarycontainer {
      display: none;
    }
  }

  .checkoutbtndiv {
    justify-content: flex-end;
    align-items: center;
    display: flex;
    margin: 0 auto;
    width: 77.5%;

    transform: translate(0, -10px);

    .buttoncheckout {
      width: 24%;
      height: 100%;
      background-color: rgb(221, 73, 28);
      color: white;
      font-size: 1.4rem;
      padding: 1.4rem 0;
      border: none;
      font-weight: 600;
      text-align: center;
      margin: auto 0;
      /* margin-top: 1.8rem; */
      /* margin:auto 1.6rem; */
      /* position: absolute; */
      /* left:240px; */
      max-height: 5rem;
      border-radius: 4px;
      transform: translate(0, -4px);
    }
    .buttoncheckout:hover {
      background-color: blue;
      cursor: pointer;
    }
  }
`;
