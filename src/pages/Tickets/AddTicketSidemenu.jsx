import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  MainTicketsDiv,
  LetsCreateTicketsDiv,
  AddTicketsSideMenu,
  TicketCreatedDiv,
  PromocodesPageDiv,
  PromocodesSavePageDiv,
} from './styles/Tickets.styled';
import { CreatePromocode } from './CreatePromoSidemenu';
import axios from 'axios';

export default function AddTicketSidemenu(props) {
  const event = props.event;

  const [ticketType, setTicketType] = useState('paid');
  const [ticketName, setTicketName] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [quantity, setQuantity] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [error, setError] = useState(false);
  const [isError, setIsError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const times = [];
  let timesArray = [];

  // Loop through the hours from 0 to 23 (representing 12 AM to 11 PM)
  for (let hour = 0; hour < 24; hour++) {
    // Loop through the minutes from 0 to 30 (incrementing by 30)
    for (let minute = 0; minute < 60; minute += 30) {
      // Determine whether the time is AM or PM
      let amOrPm = hour < 12 ? 'AM' : 'PM';

      // Convert from 24-hour time to 12-hour time
      let hour12 = hour % 12 === 0 ? 12 : hour % 12;

      // Format the time as a string with leading zeroes if necessary
      let formattedHour = hour12 < 10 ? '0' + hour12 : hour12;
      let formattedMinute = minute === 0 ? '00' : minute;

      // Add the formatted time to the times array
      timesArray.push(`${formattedHour}:${formattedMinute} ${amOrPm}`);
    }
  }

  // console.log(timesArray);
  useEffect(() => {
    setIsMenuOpen(props.isMenuOpen);
  }, []);
  
  useEffect(() => {
    const ticket = props.ticket;
    if (Object.keys(ticket).length !== 0) {
      console.log(ticket);
      setTicketName(ticket.tierName);
      setTicketPrice(ticket.price);
      setQuantity(ticket.maxCapacity);
      setStartDate(new Date(ticket.startSelling));
      setEndDate(new Date(ticket.endSelling));
    }
  }, [props.ticket]);


  const handleSubmit = e => {
    e.preventDefault();
    if (isEmpty(ticketName)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  function clearInputs() {
    setTicketType('paid');
    setTicketName('');
    setTicketPrice('');
    setStartDate(new Date());
    setEndDate(new Date());
    setQuantity('');
  }

  const isEmpty = str => {
    return str.trim() === '';
  };

  useEffect(() => {
    setError(isEmpty(ticketName));
  }, [ticketName]);

  const handleInputChange = e => {
    const inputValue = e.target.value;
    // Check if input value is a number
    if (!isNaN(inputValue) || inputValue === '') {
      setQuantity(inputValue);
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  const handleInputBlur = e => {
    const inputValue = e.target.value;
    // Check if input value is empty or not a number
    if (inputValue === '' || isNaN(inputValue)) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  const [ticketTiers, setTicketTiers] = useState([]);

  async function createTicket() {
    const data = {
      tierName: ticketName,
      maxCapacity: parseFloat(quantity),
      price: ticketPrice,
      startSelling: startDate,
      endSelling: endDate,
    };
    const url = `https://www.tessera.social/api/event-tickets/create-ticket/${event}`;
    const res = await axios.put(url, data, {
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQzYTU2NzA2ZjU1ZTkwODVkMTkzZjQ4IiwiaWF0IjoxNjgzNzI5ODU3LCJleHAiOjE2ODM4MTYyNTd9.J-3ij0AgIeVF7L0cIIC-eadJoHXaNwuWRVZELEVzO6I`
        
    }});
    // console.log(res);
  }

  async function editTicket(){
    const data = {
      desiredTierName: props.ticket.tierName,
      ticketTiers:[
        {
          tierName: ticketName,
          maxCapacity: parseFloat(quantity),
          price: ticketPrice,
          startSelling: startDate,
          endSelling: endDate,
        }
      ]
    };
    const url = `https://www.tessera.social/api/event-tickets/edit-ticket/${event}`;
    const res = await axios.put(url, data, {
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQzYTU2NzA2ZjU1ZTkwODVkMTkzZjQ4IiwiaWF0IjoxNjgzNzI5ODU3LCJleHAiOjE2ODM4MTYyNTd9.J-3ij0AgIeVF7L0cIIC-eadJoHXaNwuWRVZELEVzO6I`
        
    }});
    // console.log(res);
  }

  const handlereplaceContentAfterSaveClick = async () => {
    let error = false;
    if (ticketName === '') {
      setError(true);
      error = true;
    }
    if (ticketPrice === '' && ticketType === 'paid') {
      setPriceError(true);
      error = true;
    }
    if (quantity === '') {
      setIsError(true);
      error = true;
    }
    if (error) {
      return;
    }
    props.setreplaceContentAfterSave(true);
    props.setIsMenuOpen(false);
    clearInputs();
    const ticket = props.ticket;
    if (Object.keys(ticket).length === 0) {
      await createTicket();
    }
    else{
      await editTicket();
    }
    props.dataSubmitted();
  };

  return (
    <>
      <MainTicketsDiv>
        <AddTicketsSideMenu>
          {props.isMenuOpen && (
            <div className="AddTicketsMenuDiv">
              <div className="AddTicketsMenuHeaderDiv">
                <div className="AddTicketsTitleDiv">Add tickets</div>
                <div className="LearnMoreDiv">Learn more</div>
              </div>
              <div className="CreateTicketInfoDiv">
                <div className="TicketTypeSelectorDiv">
                  <button
                    className={
                      ticketType === 'paid'
                        ? 'PaidTierButton selected'
                        : 'PaidTierButton'
                    }
                    onClick={() => setTicketType('paid')}
                  >
                    Paid
                  </button>
                  <button
                    className={
                      ticketType === 'free'
                        ? 'FreeTierButton selected'
                        : 'FreeTierButton'
                    }
                    onClick={() => setTicketType('free')}
                  >
                    Free
                  </button>
                  {/* <button className='DonationTierButton'>
                            Donation
                        </button> */}
                </div>
                <div className={`TicketNameDiv ${error ? 'error' : ''}`}>
                  <div className="NameTextboxDiv">
                    <div className={`NameLabelDiv ${error ? 'error' : ''}`}>
                      Name
                      <span
                        className="eds-label__required-indicator eds-text-bs"
                        data-spec="required-indicator"
                      >
                        <span className="asterisk"> *</span>
                      </span>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <label>
                        <input
                          className="TicketNameInputDiv"
                          type="text"
                          value={ticketName}
                          onChange={e => {
                            setTicketName(e.target.value);
                          }}
                        />
                      </label>
                    </form>
                  </div>
                  <div className="TicketNameLength">{ticketName.length}/50</div>
                  {error && (
                    <div className="ErrorMessage">Name is required.</div>
                  )}
                </div>

                <div className="AvailableQuantityDiv">
                  <div
                    className={
                      isError
                        ? 'AvailableQuantityTextboxDiv error-color'
                        : 'AvailableQuantityTextboxDiv'
                    }
                  >
                    <div
                      className={
                        isError
                          ? 'AvailableQuantityLabelDiv error-color'
                          : 'AvailableQuantityLabelDiv'
                      }
                    >
                      Available quantity{' '}
                      <span
                        class="eds-label__required-indicator eds-text-bs"
                        data-spec="required-indicator"
                      >
                        <span className="asterisk"> *</span>
                      </span>
                    </div>
                    <input
                      type="text"
                      value={quantity}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      className="AvailabilityInput"
                    />
                    {isError && (
                      <div className="AvailabilityError">
                        Quantity is required.
                      </div>
                    )}
                  </div>
                </div>

                <div className="TicketPriceDiv">
                  <span className="DollarSignDiv">$</span>
                  <div className="PriceTextboxDiv">
                    <div className="PriceLabelDiv">
                      Price{' '}
                      <span
                        class="eds-label__required-indicator eds-text-bs"
                        data-spec="required-indicator"
                      >
                        <span className="asterisk"> *</span>
                      </span>
                      <div className="PriceAmountDiv">
                        <input
                          className="PriceAmountInput"
                          value={ticketPrice}
                          disabled={ticketType === 'free' ? 'disabled' : ''}
                          placeholder="0.00"
                          type="text"
                          onChange={e => setTicketPrice(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {priceError && (
                  <div className="AvailabilityError">Price is required.</div>
                )}

                <div className="DatesGroupDiv">
                  <div className="DateBoxDiv">
                    <span class="CalendarIconSpan">
                      <i
                        class="eds-vector-image eds-icon--small eds-vector-image--grey-800"
                        data-spec="icon"
                        data-testid="icon"
                        aria-hidden="true">
                        <svg className="CalendarSvg" xml:space="preserve">
                          <path
                            id="calendar-chunky_svg__eds-icon--calendar-chunky_base"
                            d="M16.9 6.5v-2h-2v2h-6v-2h-2v2h-2v13h14v-13h-2zm0 11h-10v-7h10v7z"
                          ></path>
                        </svg>
                      </i>
                    </span>

                    <div className="SalesStartTextBoxDiv">
                      <div className="SalesStartLabel">
                        Sales start{' '}
                        <span
                          class="eds-label__required-indicator eds-text-bs"
                          data-spec="required-indicator"
                        >
                          <span className="asterisk"> *</span>
                        </span>
                      </div>

                      <div className="calendarBoxDiv">
                        <DatePicker
                          selected={startDate}
                          onChange={date => setStartDate(date)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="DateBoxDiv">
                    <select name="times" id="times">
                      {timesArray.map(time => {
                        return <option value={time}> {time}</option>;
                      })}
                    </select>
                  </div>
                  <div className="DateBoxDiv">
                    <span class="CalendarIconSpan">
                      <i
                        class="eds-vector-image eds-icon--small eds-vector-image--grey-800"
                        data-spec="icon"
                        data-testid="icon"
                        aria-hidden="true">
                        <svg className="CalendarSvg" xml:space="preserve">
                          <path
                            id="calendar-chunky_svg__eds-icon--calendar-chunky_base"
                            d="M16.9 6.5v-2h-2v2h-6v-2h-2v2h-2v13h14v-13h-2zm0 11h-10v-7h10v7z"
                          ></path>
                        </svg>
                      </i>
                    </span>

                    <div className="SalesEndTextBoxDiv">
                      <div className="SalesEndLabel">
                        Sales end{' '}
                        <span
                          class="eds-label__required-indicator eds-text-bs"
                          data-spec="required-indicator"
                        >
                          <span className="asterisk"> *</span>
                        </span>
                      </div>

                      <div className="calendarBoxDiv">
                        <DatePicker
                          selected={endDate}
                          onChange={date => setEndDate(date)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="DateBoxDiv">
                    <select name="times" id="times">
                      {timesArray.map(time => {
                        return <option value={time}> {time}</option>;
                      })}
                    </select>
                  </div>
                </div>
              </div>
              <div className="ButtonsMenuDiv">
                <button
                  className=" CancelButton"
                  onClick={() => {
                    props.setIsMenuOpen(false);
                    clearInputs();
                  }}
                >
                  Cancel
                </button>
                <button
                  className="SaveButton"
                  onClick={handlereplaceContentAfterSaveClick}
                >
                  Save{' '}
                </button>
              </div>
            </div>
          )}
        </AddTicketsSideMenu>
      </MainTicketsDiv>
    </>
  );
}
