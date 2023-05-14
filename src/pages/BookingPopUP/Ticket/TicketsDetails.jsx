/**
 * @file TicketDetails.jsx
 * @name TicketDetails.jsx
 * @author @SeifAllah
 * @requires react
 * @requires react-router-dom
 * @requires @mui/material
 *
 * @exports Reservation
 * @description This file contains the Reservation components and its logic which is the compponent that renders the
 * left side of the ticket page which contains the ticket details and the checkout button
 *
 *
 *
 *
 */

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect, useLayoutEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styled } from '@mui/material/styles';
import CheckoutForm from '../CheckoutForm';
import {
  ContainerBox,
  TicketBody,
  TicketHeader,
  TicketEnd,
  Checkout,
  PromoCode,
  SelectTicket,
  SelectTickContainer,
  SelectTickName,
  IncrementDecrement,
  SelectTickBottomContainer,
  BottomContainerHead,
  Apply,
  Applyfocus,
} from './Ticket.styled';
import TierBox from './TierBox';
/**
 * description: this function is the Reservation component and returns html elements that contain the ticket details and the checkout button
 * @param {Function} setShowCheckout - the function to set the showcheckout
 * @param {Boolean} showCheckout - the showcheckout
 * @param {Function} setliftCheckoutInfo - the function to set the liftcheckoutinfo
 *
 *
 * @returns {JSX.Element} - the JSX of the Reservation
 * @param {Function} setEmpty - the function to set the empty
 * @param {Number} total - the total of the tickets
 *
 *
 */
export default function Reservation({
  number,
  setShowCheckout,
  setDiscount,
  changePromo,
  liftCheckoutInfo,
  setliftCheckoutInfo,
  setEmpty,
  total,
}) {
  const eventID = useParams().eventID;
  const [tickets, setTickets] = useState(true);
  const [eventInfo, seEventInfo] = useState([]);
  const [promocode, setPromocode] = useState(false);
  const [max, setMax] = useState(false);
  const [max2, setMax2] = useState(0);
  const [subtotal, setSubtotal] = useState(0.0);
  const [fee, setFee] = useState(0.0);

  const [inputValue, setInputValue] = useState('');
  const [ticketsNum, setTicketsNum] = useState(0);
  const [errorMsg, setErrorMsg] = useState(false);
  const [helper, setHelper] = useState('');
  const [eventData, setEventData] = React.useState({});
  const [eventExist, setEventExists] = React.useState(false);
  const [ticketsTierdetails, setTicketTierdetails] = useState([]);
  const [summaryInter, setSummaryInter] = useState([]);
  const [setting, setSetting] = useState('');

  /**
   *
   *description: this function is the sendPromo function and returns the promo code validity
   * @param {String} inputpromo - the promo code
   *
   */
  async function sendPromo(inputpromo) {
    try {
      const response = await fetch(
        `https://www.tessera.social/api/attendee/ticket/645de6017f1184642553eb26/promocode/retrieve?code=${inputpromo}`
      );
      const prom = await response.json();

      prom.success ? setPromocode(true) : setPromocode(false);
      prom.success ? setDiscount(prom.discout) : setDiscount(1);

      prom.success
        ? setHelper('Promo code is valid')
        : setHelper('Promo code is invalid');
      prom.success ? setErrorMsg(false) : setErrorMsg(true);
      changePromo(inputpromo);
    } catch (error) {
      console.log(error);
    }
  }
  /**
   * description: this function is the useEffect function and returns the event data
   *
   */
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://www.tessera.social/api/attendee/event/${eventID}`
      ); //temp (the original one crashed)
      //const response = await fetch('https://www.tessera.social/api/attendee/event/{props.id}'); (the original one)
      //console.log(await response.json())
      const event = await response.json();
      //console.log((event.filteredEvents)[0])
      setEventData(event);
      event.filteredEvents[0]
        ? console.log(event.filteredEvents[0])
        : setEventExists(false);
      event.filteredEvents[0] ? setEventExists(true) : setEventExists(false);
      console.log('hooooo');
      console.log(event.filteredEvents[0]);
      let tempArray = new Array(event.filteredEvents[0].ticketTiers.length)
        .fill()
        .map((element, index) => ({
          tierName: event.filteredEvents[0].ticketTiers[index].tierName,
          numberOfTicketsSold:
            event.filteredEvents[0].ticketTiers[index].maxCapacity - 10,
          maxCapacity: event.filteredEvents[0].ticketTiers[index].maxCapacity,
          price: event.filteredEvents[0].ticketTiers[index].price,
          discountpercent: 0,
          discountamount: 0,
          discount: false,
          ticketCount: 0,
          id: event.filteredEvents[0].ticketTiers[index]._id,
        }));
      setTicketTierdetails(tempArray);
    };
    fetchData();
  }, []);
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  /**
   * description: this function is the convertUtcToLocalTime function and returns the local time
   * @param {*} dateString
   * @returns  {String} - the local time
   */

  const convertUtcToLocalTime = dateString => {
    let date = new Date(dateString);
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
    const milliseconds = Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds()
    );
    const localTime = new Date(milliseconds);
    let month = monthNames[localTime.getMonth()];
    let day = localTime.getDate();
    let hour = localTime.getHours();
    return dayName + ' ' + month + ' ' + day + ' ';
  };

  function handleOnclick() {
    setShowCheckout(prevState => {
      return true;
    });
  }
  const updateLiftCheckoutInfo = newLiftCheckoutInfo => {
    setliftCheckoutInfo(newLiftCheckoutInfo);
  };
  return (
    <>
      {tickets != false && eventExist && (
        <ContainerBox>
          {/* {ticketCredentials()} */}

          <TicketHeader>
            <div className="title">
              {eventData.filteredEvents[0].basicInfo.eventName}
            </div>
            <div className="Setting">
              {' '}
              {convertUtcToLocalTime(
                eventData.filteredEvents[0].basicInfo.startDateTime
              )}
            </div>
          </TicketHeader>
          <TicketBody>
            <PromoCode>
              <TextField
                className={'lol'}
                value={inputValue}
                onChange={newValue => setInputValue(newValue.target.value)}
                disabled={promocode ? true : false}
                id="outlined-basic"
                label="PromoCode"
                variant="outlined"
                placeholder="Enter Code"
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  style: { fontSize: '15px' },
                  endAdornment: (
                    <InputAdornment position="end">
                      {promocode && <CheckCircleIcon color="success" />}
                      {!inputValue ? (
                        <Apply
                          onClick={() => sendPromo(inputValue)}
                          disabled={!promocode ? !inputValue : false}
                        >
                          {!promocode ? 'Apply' : 'Remove'}
                        </Apply>
                      ) : (
                        <Applyfocus
                          onClick={() => {
                            if (promocode) {
                              setPromocode(false);
                              setHelper('');
                              setInputValue('');
                              setErrorMsg(false);
                              setDiscount(1);
                            } else {
                              sendPromo(inputValue);
                            }
                          }}
                          disabled={!promocode ? !inputValue : false}
                        >
                          {console.log(inputValue)}
                          {!promocode ? 'Apply' : 'Remove'}
                        </Applyfocus>
                      )}
                    </InputAdornment>
                  ),
                }}
                error={errorMsg}
                helperText={helper}
              />
            </PromoCode>
            {ticketsTierdetails.map((element, index) => {
              return (
                <TierBox
                  number={number}
                  key={index}
                  element={element}
                  index={index}
                  setTicketTierdetails={setTicketTierdetails}
                  ticketsTierdetails={ticketsTierdetails}
                  summary={liftCheckoutInfo}
                  setSummary={updateLiftCheckoutInfo}
                  setEmpty={setEmpty}
                  total={total}
                ></TierBox>
              );
            })}
            <TicketEnd>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                Powered by
                <Link to="/">
                  <img
                    src="/images/LogoFullTextSmall.png"
                    style={{ width: '5rem' }}
                  />
                </Link>
              </div>
            </TicketEnd>
          </TicketBody>
          <Checkout>
            {' '}
            <div className="summarycontainer">50</div>
            <div className="checkoutbtndiv">
              <button
                onClick={handleOnclick}
                className="buttoncheckout"
                data-testid="CreateBtn"
              >
                Check out
              </button>
            </div>
          </Checkout>
        </ContainerBox>
      )}
    </>
  );
}
