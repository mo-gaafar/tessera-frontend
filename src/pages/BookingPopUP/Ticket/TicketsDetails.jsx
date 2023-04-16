import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
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

export default function Reservation(props) {
  // let { _id } = useParams();

  const [tickets, setTickets] = useState(true);
  const [eventInfo, seEventInfo] = useState([]);
  const [promocode, setPromocode] = useState(false);
  const [max, setMax] = useState(false);
  const [max2, setMax2] = useState(0);
  const [subtotal, setSubtotal] = useState(0.0);
  const [fee, setFee] = useState(0.0);
  const [total, setTotal] = useState(0.0);
  const [inputValue, setInputValue] = useState('');
  const [ticketsNum, setTicketsNum] = useState(0);
  const [errorMsg, setErrorMsg] = useState(false);
  const [helper, setHelper] = useState('');
  const [eventData, setEventData] = React.useState({});
  const [eventExist, setEventExists] = React.useState(false);
  const [ticketsTierdetails, setTicketTierdetails] = useState([]);
  const eventid = '643aa09ecbfea68c24d93670';
  const ticketObj = [
    {
      price: 0,
      name: 'ahmed',
      quantity: 20,
    },
    {
      price: 5,
      name: 'mohamed',
      quantity: 220,
    },
    {
      price: 9,
      name: 'samir',
      quantity: 70,
    },
  ];

  async function sendPromo(inputpromo) {
    try {
      const response = await fetch(
        'https://www.tessera.social/api/attendee/ticket/643aa02d4d2e42199562be5f/promocode/retrieve?=' +
          inputpromo
      );
      const prom = await response.json();
      prom.success ? setPromocode(true) : setPromocode(false);
    } catch (error) {
      console.log(error);
    }

    promocode
      ? setHelper('Promo code is valid')
      : setHelper('Promo code is invalid');
    promocode ? setErrorMsg(false) : setErrorMsg(true);
  }

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://www.tessera.social/api/attendee/event/643aa02d4d2e42199562be5f'
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

      let tempArray = new Array(event.filteredEvents[0].ticketTiers.length)
        .fill()
        .map((element, index) => ({
          tierName: event.filteredEvents[0].ticketTiers[index].tierName,
          numberOfTicketsSold:
            event.filteredEvents[0].ticketTiers[index].quantitySold,
          maxCapacity: event.filteredEvents[0].ticketTiers[index].maxCapacity,
          price: event.filteredEvents[0].ticketTiers[index].price,
          discountpercent: 0,
          discountamount: 0,
          discount: false,
          ticketCount: 0,
        }));
      setTicketTierdetails(tempArray);
    };
    fetchData();
  }, []);

  // console.log("tickecyt details " + tempArray[0].tierName);
  function handleOnclick() {
    setshowCheckout(true);
  }
  // console.log(showCheckout);
  return (
    <>
      {tickets != false && eventExist && (
        <ContainerBox>
          {/* {ticketCredentials()} */}

          <TicketHeader>
            {/* {props.liftStateUP(eventData.filteredEvents[0].basicInfo.eventImage)} */}
            <div className="title">
              {eventData.filteredEvents[0].basicInfo.eventName}
            </div>
            <div className="Setting">
              {' '}
              {eventData.filteredEvents[0].basicInfo.startDateTime}
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
                  endAdornment: (
                    <InputAdornment position="end">
                      {promocode && <CheckCircleIcon color="success" />}
                      {!inputValue ? (
                        <Apply
                          // onClick={sendPromo(inputValue)}
                          disabled={!promocode ? !inputValue : false}
                        >
                          {!promocode ? 'Apply' : 'Remove'}
                        </Apply>
                      ) : (
                        <Applyfocus
                          // onClick={sendPromo(inputValue)}
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
                  element={element}
                  index={index}
                  setTicketTierdetails={setTicketTierdetails}
                  ticketsTierdetails={ticketsTierdetails}
                />
              );
            })}
            <TicketEnd>
              <div>
                Powered by
                <a href="">
                  <img alt="" />
                </a>
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
