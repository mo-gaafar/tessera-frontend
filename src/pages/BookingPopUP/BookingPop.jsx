/**
 * @file BookingPop.jsx
 * @name BookingPop.jsx
 * @author @SeifAllah
 * @requires react
 * @requires @mui/material
 * @exports BookingPop
 * @description This file contains the BookingPop components and its logic that is the component that renders the reservation with the ordersummary
 *
 *
 */
import React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import classes from "./Styles/Bookingpopup.module.css";
import { BookingContainer } from "./Styles/BookingMain.styled";
import { BookingetTickets } from "./Styles/BookingMain.styled";
import { BookModal } from "./Styles/BookingMain.styled";
import {
  BoxContainer,
  Order,
  OrderTicket,
  OrderTitle,
} from "./Styles/BookingMain.styled";
// import { Information } from "./Styles/BookingMain.styled";
import { Ticket, Information } from "./Styles/BookingMain.styled";
import Reservation from "./Ticket/TicketsDetails";
import CheckoutForm from "./CheckoutForm";
// import {
//   TicketEnd,
//   TicketHead,
//   TicketBody,
//   StyledPromo,
// } from "./Styles/BookingMain.styled";
// import { StyledEmail } from "../LogIn/Login/email/Email.styled";

export default function BookingPopUp({ setShowPopUp, image }) {
  const [MStart, setMStart] = useState(true);
  //const handleStart = () => setMStart(true);
  const [Terminate, setTerminate] = useState(true);
  const [empty, setEmpty] = useState(true);
  const [dataTicket, setdataticket] = useState({});
  const [showCheckout, setShowCheckout] = React.useState(false);
  const [checkoutInfo, setCheckoutInfo] = useState([]);
  const [total, setTotal] = useState(0);
  let sum = 0;
  const FormClose = () => {
    setShowPopUp(false);
  };

  const ReceiveData = (data) => {
    console.log("data", data);
    setCheckoutInfo(data);
  };

  return (
    <>
      <BookingContainer>
        {/* <BookingetTickets>
        <Button onClick={handleStart} className="lol">
          Get tickets
        </Button>
      </BookingetTickets> */}

        <BookModal>
          <Modal
            open={MStart}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className={classes.MStyle}
          >
            <Box className={classes.Box}>
              <Button onClick={() => FormClose()} className={classes.MClose}>
                <CloseIcon />
              </Button>
              {showCheckout && (
                <BoxContainer>
                  <CheckoutForm />
                </BoxContainer>
              )}

              {!showCheckout && (
                <BoxContainer>
                  <Ticket>
                    <Reservation
                      showCheckout={showCheckout}
                      setShowCheckout={setShowCheckout}
                      liftCheckoutInfo={checkoutInfo}
                      setliftCheckoutInfo={setCheckoutInfo}
                      setEmpty={setEmpty}
                      total={setTotal}
                    />
                  </Ticket>
                  <Information>
                    {/* {console.log("tala3 el7aga yalal")}
                    {console.log(checkoutInfo)} */}

                    <div className="eventimage">
                      <img src={image} />
                    </div>
                    {empty && (
                      <div className="NoOrder">
                        <svg
                          id="cart_svg__eds-icon--cart_svg"
                          x="0"
                          y="0"
                          viewBox="0 0 24 24"
                        >
                          <path
                            id="cart_svg__eds-icon--cart_base"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M20 14l2-9H9v1h11.9l-1.7 7.1L7 14V2H2v3h4v12h14v-1H7v-1l13-1zM3 3h3v1H3V3z"
                          ></path>
                          <g
                            id="cart_svg__eds-icon--cart_circles"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                          >
                            <path d="M8 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 3c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zM18 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 3c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"></path>
                          </g>
                        </svg>
                      </div>
                    )}
                    {!empty && (
                      <Order>
                        <OrderTitle>Order Summary</OrderTitle>

                        {checkoutInfo.map((orderSummary, index) => {
                          return (
                            <OrderTicket key={index}>
                              <div className="Tsummary">
                                <div className="Tcount">
                                  {orderSummary.sumTicketCount} x
                                  {orderSummary.sumTierName}
                                </div>
                                <div className="SinglePrice">
                                  {" "}
                                  {orderSummary.sumTicketCount *
                                    orderSummary.sumTicketPrice}
                                </div>
                              </div>
                            </OrderTicket>
                          );
                        })}
                        <OrderTitle>
                          {checkoutInfo.forEach((orderSummary) => {
                            sum +=
                              Number(orderSummary.sumTicketPrice) *
                              Number(orderSummary.sumTicketCount);
                            console.log(
                              "sum 2ooly bkam",
                              orderSummary.sumTicketPrice.slice(1)
                            );
                          })}
                          <div className="Tsummary">
                            <div className="Tcount">Total</div>
                            <div className="Singleprice">{sum}</div>
                          </div>
                        </OrderTitle>
                      </Order>
                    )}
                  </Information>
                </BoxContainer>
              )}
            </Box>
          </Modal>
        </BookModal>
      </BookingContainer>
    </>
  );
}
