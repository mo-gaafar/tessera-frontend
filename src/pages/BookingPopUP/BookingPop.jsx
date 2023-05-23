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
import React from 'react';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import classes from './Styles/Bookingpopup.module.css';
import { BookingContainer } from './Styles/BookingMain.styled';
import { BookModal } from './Styles/BookingMain.styled';
import { BoxContainer } from './Styles/BookingMain.styled';
import { Ticket, Information } from './Styles/BookingMain.styled';
import Reservation from './Ticket/TicketsDetails';
import CheckoutForm from './CheckoutForm';

export default function BookingPopUp({ number, setShowPopUp, image, event }) {
  const [ticketsTierdetails, setTicketTierdetails] = useState([]);
  const [checkoutInfo, setCheckoutInfo] = useState([]);
  const [MStart, setMStart] = useState(true);
  const [empty, setEmpty] = useState(number === 0 ? true : false);
  const [showCheckout, setShowCheckout] = React.useState(false);
  const [promoCode, setPromocode] = useState('');
  const [discountValue, setDiscountValue] = useState(0);
  // console.log(discountValue);

  const FormClose = () => {
    setShowPopUp(false);
  };
  const formatNumber = number => {
    const decimalFormattedNumber = Number.parseFloat(number).toFixed(2);

    const parts = decimalFormattedNumber.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const formattedNumber = parts.join('.');

    return formattedNumber;
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
                  <CheckoutForm
                    setShowCheckout={setShowCheckout}
                    images={image}
                    event={event}
                    checkoutInfo={ticketsTierdetails}
                    promoCode={promoCode}
                    number={number}
                    discountValue={discountValue}
                    formatNumber={formatNumber}
                  />
                </BoxContainer>
              )}

              {!showCheckout && (
                <BoxContainer>
                  <Ticket>
                    <Reservation
                      discountValue={discountValue}
                      setDiscountValue={setDiscountValue}
                      number={number}
                      changePromo={setPromocode}
                      showCheckout={showCheckout}
                      setShowCheckout={setShowCheckout}
                      checkoutInfo={checkoutInfo}
                      setCheckoutInfo={setCheckoutInfo}
                      ticketsTierdetails={ticketsTierdetails}
                      setTicketTierdetails={setTicketTierdetails}
                      setEmpty={setEmpty}
                      empty={empty}
                    />
                  </Ticket>
                  <Information>
                    {/* {console.log(checkoutInfo)} */}

                    <div className="eventimage">
                      <img src={image} />
                    </div>
                    {!empty && (
                      <div className="NoOrder">
                        <svg
                          id="cart_svg__eds-icon--cart_svg"
                          x="0"
                          y="0"
                          viewBox="0 0 24 24"
                        >
                          <path
                            id="cart_svg__eds-icon--cart_base"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20 14l2-9H9v1h11.9l-1.7 7.1L7 14V2H2v3h4v12h14v-1H7v-1l13-1zM3 3h3v1H3V3z"
                          ></path>
                          <g
                            id="cart_svg__eds-icon--cart_circles"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          >
                            <path d="M8 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 3c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zM18 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 3c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"></path>
                          </g>
                        </svg>
                      </div>
                    )}
                    {empty && (
                      <div className="order__summary">
                        <h2>Order summary</h2>
                        {ticketsTierdetails
                          .filter(ticket => ticket.ticketCount !== 0)
                          .map(ticketData => {
                            return (
                              <div className="">
                                <span>
                                  {ticketData.ticketCount} x{' '}
                                  {ticketData.tierName}
                                </span>
                                <span>
                                  $
                                  {isNaN(ticketData.price)
                                    ? '0.00'
                                    : formatNumber(ticketData.price)}
                                </span>
                              </div>
                            );
                          })}
                        {discountValue !== 0 && (
                          <span
                            style={{
                              border: 'none',
                              fontSize: '1.6rem',
                              paddingTop: '0',
                            }}
                            className="order__total"
                          >
                            <small>Sum</small>$
                            {formatNumber(
                              ticketsTierdetails
                                .filter(ticket => !isNaN(ticket.price))
                                .reduce(
                                  (acc, ticket) =>
                                    acc + +ticket.price * ticket.ticketCount,
                                  0
                                )
                            )}
                          </span>
                        )}

                        {discountValue !== 0 && (
                          <span
                            style={{
                              border: 'none',
                              fontSize: '1.6rem',
                              paddingTop: '0',
                            }}
                            className="order__total"
                          >
                            <small>Discount</small>$
                            {formatNumber(
                              ticketsTierdetails
                                .filter(ticket => !isNaN(ticket.price))
                                .reduce(
                                  (acc, ticket) =>
                                    acc + +ticket.price * ticket.ticketCount,
                                  0
                                ) * discountValue
                            )}
                          </span>
                        )}
                        <span className="order__total">
                          <small>Total</small>$
                          {formatNumber(
                            ticketsTierdetails
                              .filter(ticket => !isNaN(ticket.price))
                              .reduce(
                                (acc, ticket) =>
                                  acc + +ticket.price * ticket.ticketCount,
                                0
                              ) *
                              (1 - discountValue)
                          )}
                        </span>
                      </div>
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
