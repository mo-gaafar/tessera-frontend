/**
 * @file CheckoutForm.jsx
 * @description This file contains the The checout form component and its logic
 * @name CheckoutForm.jsx
 * @author @Clara
 * @requires react
 * @requires react-router-dom
 * @requires ./styles/TermsAndConditions.styled
 * @exports CheckoutForm
 *
 */

import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, Route, Routes } from 'react-router-dom';
// import {
//   InputEmail,
//   Label,
// } from '../../../../tessera-frontend/src/pages/SignUp/styles/SignUpEmail.styled';
import {
  StyleDiv,
  InputGroup,
  FormInput,
  PaymentOption,
  BackButton,
  Header,
  SubmitButton,
} from './Styles/BookingMain.styled';
import axios from 'axios';

function CheckoutForm(props) {
  // const event = props.event;

  console.log(props);
  // const event = '643aa09ecbfea68c24d93670';

  //

  function SessionEnded() {
    return (
      <div>
        <h1>Session Ended</h1>
        <p>Your session has ended. Please log in again to continue.</p>
      </div>
    );
  }
  // const ticketTier = props.ticketTier;
  const [remainingTime, setRemainingTime] = useState(10 * 60);
  const [timeLeft, setTimeLeft] = useState('');
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 1);
    }, 1000);

    // Change the interval to MM:SS

    return () => {
      clearInterval(interval);
    };
  }, []);

  // useEffect(() => {
  //   const minutes = Math.floor(remainingTime / 60);
  //   const seconds = remainingTime % 60;
  //   setTimeLeft(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
  //   if (remainingTime === 0) {
  //     return <SessionEnded />;
  //   }
  // }, [remainingTime]);

  const tiketTier = [
    {
      tierName: 'vip',
      quantity: 1,
      price: 200,
    },
    {
      tierName: 'regular',
      quantity: 1,
      price: 100,
    },
  ];
  const totalPrice = tiketTier.reduce((acc, tier) => acc + tier.price, 0);
  const [isPaid, setIsPaid] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  async function bookTickets() {
    const body = {
      contactinformation: {
        first_name: firstName,
        last_name: lastName,
        email: email,
      },
      promocode: '',
      ticketTierSelected: tiketTier,
    };
    try {
      const response = await axios.post(
        `https://www.tessera.social/api/attendee/ticket/${event}/book`,
        {
          body: body,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <StyleDiv>
      <div className="checkoutPage">
        <div className="inputForm">
          <Header>
            <BackButton>
              <svg
                class="arrow-left-chunky_svg__eds-icon--arrow-left-chunky_svg"
                viewBox="0 0 24 24"
              >
                <path
                  class="arrow-left-chunky_svg__eds-icon--arrow-left-chunky_base"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 12l8 8 1.5-1.5L8 13h12v-2H8l5.5-5.5L12 4z"
                ></path>
              </svg>
            </BackButton>
            <div className="timer">
              <h2>Checkout</h2>
              <div className="timeLeft">Time left {timeLeft}</div>
            </div>
          </Header>
          <div className="contactInfo">
            <h2>Contact Information</h2>
            <div className="loggedIn">
              <p>
                Logged In As <strong>clara@clara.com</strong>
              </p>
              <p>
                Required <span>*</span>
              </p>
            </div>
            <div className="contactForm">
              <div className="name">
                <InputGroup style={{ width: '50%' }}>
                  <div className="inputLabel">
                    <label for="fName">First Name</label>
                    <span> *</span>
                  </div>
                  <FormInput
                    type="text"
                    id="fName"
                    onChange={e => setFirstName(e.target.value)}
                  />
                </InputGroup>
                <InputGroup style={{ width: '50%', marginRight: '0px' }}>
                  <div className="inputLabel">
                    <label for="lName">Last Name</label>
                    <span> *</span>
                  </div>
                  <FormInput
                    type="text"
                    id="lName"
                    onChange={e => setLastName(e.target.value)}
                  />
                </InputGroup>
              </div>
              <InputGroup className="emailAddress">
                <div className="inputLabel">
                  <label for="emailField">Email Address</label>
                  <span>*</span>
                </div>
                <FormInput
                  type="text"
                  id="emailField"
                  onChange={e => setEmail(e.target.value)}
                />
              </InputGroup>
            </div>
            <div className="updates">
              <input checked type="checkbox" name="" id="" />
              <p>
                Keep me updated on more events and news from this event
                organizer.
              </p>
            </div>
            <div className="updates">
              <input checked type="checkbox" name="" id="" />
              <p>
                Send me emails about the best events happening nearby or online.
              </p>
            </div>
            <div className="ticketForm">
              <h2>Ticket 1 · Ticket Name</h2>
              <div className="name">
                <InputGroup style={{ width: '50%' }}>
                  <div className="inputLabel">
                    <label>First Name </label>
                    <span> *</span>
                  </div>
                  <FormInput type="text" />
                </InputGroup>
                <InputGroup style={{ width: '50%', marginRight: '0px' }}>
                  <div className="inputLabel">
                    <label>Last Name </label>
                    <span> *</span>
                  </div>
                  <FormInput type="text" />
                </InputGroup>
              </div>
              <InputGroup className="emailAddress">
                <div className="inputLabel">
                  <label>Email Address </label>
                  <span>*</span>
                </div>
                <FormInput type="text" />
              </InputGroup>
            </div>

            {isPaid && (
              <div className="paymentOptions">
                <h2>Pay with</h2>
                <PaymentOption>
                  <div
                    className="left"
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <input type="radio" name="" id="" />
                    <p>Credit Card</p>
                  </div>
                  <svg
                    id="credit-card-back_svg__eds-icon--credit-card-back_svg"
                    x="0"
                    y="0"
                    viewBox="0 0 24 24"
                    width="40px"
                    xml:space="preserve"
                  >
                    <path
                      id="credit-card-back_svg__eds-icon--credit-card-back_base"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3 11h18v7H3v-7zm0-5h18v3H3V6zM2 19h20V5H2v14z"
                    ></path>
                    <g
                      id="credit-card-back_svg__eds-icon--credit-card-back_dashes"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <path d="M4 15h2v1H4zM8 15h6v1H8z"></path>
                    </g>
                  </svg>
                </PaymentOption>
                <PaymentOption>
                  <div
                    className="left"
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <input type="radio" name="" id="" />
                    <p>Paypal</p>
                  </div>
                  <svg viewBox="0 0 48 32" width="40px">
                    <path
                      fill="#0070BA"
                      d="M3 0h42c1.7 0 3 1.3 3 3v26c0 1.7-1.3 3-3 3H3c-1.7 0-3-1.3-3-3V3c0-1.7 1.3-3 3-3z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#ADD0E6"
                      d="M22.9 11.2H28c2.7 0 3.8 1.4 3.6 3.4-.3 3.3-2.3 5.2-5 5.2h-1.4c-.4 0-.6.2-.7.9l-.6 3.8c0 .2-.2.4-.4.4h-3.2c-.3 0-.4-.2-.3-.7L22 12c.1-.5.4-.8.9-.8z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#FFF"
                      d="M19.7 7h5.1c1.4 0 3.1 0 4.3 1 .8.7 1.2 1.7 1.1 2.9-.3 3.9-2.6 6.1-5.8 6.1h-2.5c-.4 0-.7.3-.8 1l-.7 4.4c0 .3-.2.5-.4.5h-3.1c-.3 0-.5-.3-.4-.8l2.3-14.3c0-.5.3-.8.9-.8z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#E7F0F7"
                      d="M21.1 17.6L22 12c.1-.5.3-.7.9-.7H28c.8 0 1.5.1 2.1.4-.5 3.5-2.7 5.4-5.7 5.4h-2.5c-.4-.1-.6.1-.8.5z"
                    ></path>
                  </svg>
                </PaymentOption>
              </div>
            )}

            <div className="updates">
              <input type="checkbox" name="" id="" />
              <p>I accept the Eventbrite Terms of Service.</p>
            </div>
            <SubmitButton type="submit" onClick={bookTickets}>
              Register
            </SubmitButton>
            <p>Thank you for your purchase!</p>
            <p>
              Powered by <strong>eventbrite</strong>
            </p>
          </div>
        </div>
        <div className="eventDetails">
          <img
            src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F399778979%2F1288811134183%2F1%2Foriginal.20221125-142736?w=720&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C158%2C1080%2C540&s=16c699c9a114c13ad66a0bf72412ab25"
            alt="event"
          />
          <div className="ticketDetails">
            <h3>Order Summary</h3>
            {props.checkoutInfo.map((ticket, index) => (
              <>
                <div className="ticket" key={ticket.sumId}>
                  <p className="ticketInfo">
                    {ticket.ticketCount} x {ticket.sumTierName}
                  </p>
                  <p className="ticketInfo">
                    {ticket.sumtTicketPrice === 'Free' ? '$' : ''}
                    {ticket.sumTicketPrice}
                  </p>
                </div>
                <hr />
              </>
            ))}
            <div className="totalPrice">
              <h3>Total</h3>
              <p>${totalPrice}</p>
            </div>
          </div>
        </div>
      </div>
    </StyleDiv>
  );
}

export default CheckoutForm;
