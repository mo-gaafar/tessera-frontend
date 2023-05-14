/**
 * @file This file is the page where the user can add the attendees' information
 * @since 1.0.0
 * @author SeifAllah
 * @module AddAttendees/RegisterInfo
 * @see module:AddAttendees/RegisterInfo
 * @see module:AddAttendees
 * @see module:AddAttendees/addAttendees
 * @see module:AddAttendees/addAttendees.styled
 * @see module:AddAttendees/AttendeeInfo
 * @see module:AddAttendees/AttendeeInfo.styled
 * @requires react
 * @requires react-router-dom
 * @requires react-icons
 * @requires mui material
 *
 *
 */
import React from 'react';
import { useState, useEffect } from 'react';

import {
  Header,
  Container,
  Checkout,
  Info,
  PlaceOrder,
  Information,
  OrderTitle,
  OrderItem,
} from './styles/AttendeeInfo.styled';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LaunchIcon from '@mui/icons-material/Launch';
import { LearnMore } from './styles/addAttendees.styled';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { Continue } from './styles/addAttendees.styled';
import Button from '@mui/material/Button';
import TicketInfo from './ticketInfo';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowCircleDownSharpIcon from '@mui/icons-material/ArrowCircleDownSharp';
import ArrowCircleUpSharpIcon from '@mui/icons-material/ArrowCircleUpSharp';

export default function AttendeeInfo({ ticketSelected, total, eventImage }) {
  const [remainingTime, setRemainingTime] = useState(40 * 60);
  const [timeLeft, setTimeLeft] = useState('');
  const [timeOut, setTimeOut] = useState(false);
  const [placeOrder, setPlaceOrder] = useState(false);
  const [showInfo, setShowInfo] = useState(ticketSelected);
  const [allTickets, setAllTickets] = useState([]);
  const [ticketInfoError, setticketInfoError] = useState([]);
  const [checked, setChecked] = useState(false);
  const [finale, setFinale] = useState({});
  const [show, setShow] = useState(false);

  /**
   * @function checkPlaceOrder
   * @param {*} currentValue
   * @param {*} index
   * @returns bool
   * @description this function checks if the user has filled all the required fields
   *
   */
  function checkPlaceOrder(currentValue, index) {
    console.log(currentValue);
    console.log(index);

    console.log(ticketInfoError[index]);
    let error =
      currentValue.fName === '' ||
      currentValue.lName === '' ||
      currentValue.email === '' ||
      ticketInfoError[index].fName ||
      ticketInfoError[index].lName ||
      ticketInfoError[index].email;

    if (
      currentValue.fName === '' ||
      currentValue.lName === '' ||
      currentValue.email === '' ||
      ticketInfoError[index].fName ||
      ticketInfoError[index].lName ||
      ticketInfoError[index].email
    ) {
      console.log('ana false ');
      return false;
    } else {
      console.log('ana true ');
      return true;
    }
  }

  /**
   * @function handlePlaceOrder
   * @param {*} details
   * @description this function handles the place order button and sends the data to the backend
   *
   */
  async function handlePlaceOrder(details) {
    const response = await fetch(
      'https://www.tessera.social/api/event-management/creator',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(details),
      }
    );
  }
  /**
   * @method createAllTickets
   * @useEffect
   * @description this function is called when the component is mounted and it sets the number of tickets and the number of tickets errors
   * @returns {void}
   * @example
   *
   */
  useEffect(() => {
    const newTickets = [];
    const newTicketsErrors = [];

    for (let i = 0; i < ticketSelected.length; i++) {
      for (let j = 0; j < ticketSelected[i].quantitySold; j++) {
        newTickets.push({
          fName: '',
          lName: '',
          email: '',
          id: i,
        });
        newTicketsErrors.push({
          fName: false,
          lName: false,
          email: false,
        });
      }
    }

    setAllTickets(newTickets);
    setticketInfoError(newTicketsErrors);
  }, [ticketSelected]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 1);
    }, 1000);

    // Change the interval to MM:SS

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    setTimeLeft(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
    if (remainingTime === 0) {
      // handle timer completion
      setTimeOut(true);
    }
  }, [remainingTime]);
  const [contactInfo, setContactInfo] = useState({
    fName: '',
    lName: '',
    email: '',
  });
  const [contactInfoError, setContactInfoError] = useState({
    fName: false,
    lName: false,
    email: false,
  });

  /**
   * @method createShowInfo
   * @useEffect
   * @description this function is called whenever alltickets are changed to make the showinfo updated with the attendee info
   *
   */
  useEffect(() => {
    const newShowInfo = [...showInfo];
    let index = 0;
    if (allTickets.length > 0) {
      for (let i = 0; i < newShowInfo.length; i++) {
        for (let j = 0; j < newShowInfo[i].quantitySold; j++) {
          newShowInfo[i].tickets[j].firstname = allTickets[index].fName;
          newShowInfo[i].tickets[j].lastname = allTickets[index].lName;
          newShowInfo[i].tickets[j].email = allTickets[index].email;

          index++;
        }
      }
    }
    setShowInfo(() => newShowInfo);
  }, [allTickets, ticketSelected]);

  useEffect(() => {
    let flag = false;
    if (
      contactInfo.fName === '' ||
      contactInfo.lName === '' ||
      contactInfo.email === '' ||
      contactInfoError.fName ||
      contactInfoError.lName ||
      contactInfoError.email
    ) {
      flag = false;
    } else {
      flag = true;
    }

    console.log(allTickets);
    allTickets.map((item, index) => {
      flag = flag && checkPlaceOrder(item, index);
    });
    setPlaceOrder(flag);
  }, [allTickets, contactInfo]);
  return (
    <Container id="129753272">
      <Header id="129753274">
        <a href="" id="129753572">
          <ArrowBackIcon id="1297562" />
          Back to Attendees section
        </a>
        <h1>Registeration Information</h1>
        <hr />
      </Header>
      <div className="flexcontainer" id="129713272">
        {!timeOut ? (
          <>
            <div className="flexleft" id="16753272">
              <Checkout id="1297532720">
                <h2>Checkout</h2>
                <p> Time left {timeLeft}</p>
              </Checkout>
              <Info>
                <h2>Contact Information</h2>
                <p>*Required</p>
                <div className="TextCont">
                  <div className="Names">
                    <TextField
                      id="129872"
                      className="firstName"
                      required
                      label="First Name"
                      variant="filled"
                      value={contactInfo.fName}
                      onChange={e => {
                        setContactInfo({
                          ...contactInfo,
                          fName: e.target.value,
                        });
                        /^[a-zA-Z]*$/.test(e.target.value)
                          ? setContactInfoError({
                              ...contactInfoError,
                              fName: false,
                            })
                          : setContactInfoError({
                              ...contactInfoError,
                              fName: true,
                            });
                      }}
                      error={contactInfoError.fName}
                      helperText={
                        contactInfoError.fName
                          ? 'Please enter valid name'
                          : null
                      }
                      InputLabelProps={{
                        style: {
                          fontSize: 20,
                        },
                      }}
                      inputProps={{
                        style: {
                          fontSize: 20,
                        },
                      }}
                    ></TextField>
                    <TextField
                      id="1297522"
                      className="lastName"
                      required
                      label="Last Name"
                      variant="filled"
                      InputLabelProps={{
                        style: {
                          fontSize: 20,
                        },
                      }}
                      inputProps={{
                        style: {
                          fontSize: 20,
                        },
                      }}
                      value={contactInfo.lName}
                      onChange={e => {
                        setContactInfo({
                          ...contactInfo,
                          lName: e.target.value,
                        });
                        /^[a-zA-Z]*$/.test(e.target.value)
                          ? setContactInfoError({
                              ...contactInfoError,
                              lName: false,
                            })
                          : setContactInfoError({
                              ...contactInfoError,
                              lName: true,
                            });
                      }}
                      error={contactInfoError.lName}
                      helperText={
                        contactInfoError.lName
                          ? 'Please enter valid name'
                          : null
                      }
                    />
                  </div>
                  <div className="Email" id="125672">
                    <TextField
                      id="12975327244"
                      className="Ename"
                      required
                      label="Email Address"
                      variant="filled"
                      type="email"
                      InputLabelProps={{
                        style: {
                          fontSize: 20,
                        },
                      }}
                      inputProps={{
                        style: {
                          fontSize: 20,
                        },
                      }}
                      value={contactInfo.email}
                      onChange={e => {
                        setContactInfo({
                          ...contactInfo,
                          email: e.target.value,
                        });
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                          e.target.value
                        )
                          ? setContactInfoError({
                              ...contactInfoError,
                              email: false,
                            })
                          : setContactInfoError({
                              ...contactInfoError,
                              email: true,
                            });
                      }}
                      error={contactInfoError.email}
                      helperText={
                        contactInfoError.email
                          ? 'Please enter valid email'
                          : null
                      }
                    />
                  </div>
                </div>
                <div className="check">
                  <Checkbox
                    id="129753111"
                    size="large"
                    checked={checked}
                    onChange={e => setChecked(e.target.checked)}
                  />

                  <p className="send">
                    Send a confirmation email to the attendees
                  </p>
                  <p>
                    As a reminder, the creator is responsible for compliance
                    with privacy and marketing regulation when using this
                    feature to upload email addresses for marketing
                    communications
                  </p>
                </div>

                {allTickets.map((ticketInfo, index) => {
                  return (
                    <TicketInfo
                      ticketTier={showInfo[ticketInfo.id]}
                      index={index}
                      ticketInfo={allTickets}
                      setticketInfo={setAllTickets}
                      ticketsLength={allTickets.length}
                      ticketInfoError={ticketInfoError}
                      setTicketInfoError={setticketInfoError}
                    />
                  );
                })}

                <p className="powered">Powered by TESSERA</p>
              </Info>
              <div className="summaryPop">
                <h3>Order Summary</h3>
                <IconButton
                  aria-label="delete"
                  size="large"
                  className="drop"
                  onClick={() => {
                    setShow(true);
                  }}
                >
                  <ArrowCircleUpSharpIcon className="icon" />
                </IconButton>
              </div>
              <PlaceOrder id="12975eee32">
                {!placeOrder && (
                  <Button
                    id="129753fas72"
                    variant="contained"
                    color="primary"
                    className="button"
                    disabled
                  >
                    Place Order
                  </Button>
                )}
                {placeOrder && (
                  <Button
                    id="129753fas72"
                    variant="contained"
                    color="primary"
                    className="button"
                    onClick={() => {
                      let temp = [];
                      temp = [...showInfo];
                      let obj = { promocode: 'null' };
                      temp.unshift(obj);
                      let obj2 = { SendEmail: checked };
                      temp.unshift(obj2);
                      let obj3 = { contactInfo: contactInfo };
                      temp.unshift(obj3);
                      setFinale(temp);
                      setPlaceOrder(false);
                      handlePlaceOrder(temp);
                    }}
                  >
                    Place Order
                  </Button>
                )}
              </PlaceOrder>
            </div>
            <Information id="129753272jdj">
              <div className="eventimage" id="12kaald272">
                <img id="1297dkoe272" src={eventImage} alt="" />
              </div>
              <OrderTitle id="1297532asdee72">
                <h2>Order Summary</h2>
              </OrderTitle>
              {showInfo.map((ticketTier, indexTier) => {
                return (
                  <OrderItem>
                    <div className="name">
                      {ticketTier.quantitySold}x{ticketTier.tierName}
                    </div>
                    <div className="Price">
                      ${ticketTier.price * ticketTier.quantitySold}
                    </div>
                  </OrderItem>
                );
              })}
              <OrderItem id="129753llskf272">
                <div className="name">Total</div>
                <div className="Price">${total}</div>
              </OrderItem>
            </Information>
          </>
        ) : (
          <div className="TimeOut">
            <h1>Time Limit Reached</h1>
            <p>
              Your reservation has been released. Please re-start your purchase.
            </p>
            <p className="poweredT">Powered by TESSERA</p>
          </div>
        )}
      </div>
      <LearnMore id="1297a9jfng53272">
        <HelpOutlineOutlinedIcon className="icon" />
        Learn more about
        <a
          href="https://www.eventbrite.com/support/articles/en_US/How_To/how-to-add-attendees-manually?lg=en_US"
          target="_blank"
          id="1aj9fg29753272"
        >
          adding attendees
        </a>
        <a
          href="https://www.eventbrite.com/support/articles/en_US/How_To/how-to-add-attendees-manually?lg=en_US"
          target="_blank"
        >
          <LaunchIcon />
        </a>
      </LearnMore>
    </Container>
  );
}
