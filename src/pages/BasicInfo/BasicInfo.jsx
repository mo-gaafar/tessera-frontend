import React from 'react';
import { useRef, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { WholePage } from './Styles/BasicInfo.styled';
import Sidebar from '../../components/Sidebar';
import { StyledNav } from '../LandingPage/styles/Landing.styled';
import NavbarLoggedIn from '../LandingPage/NavbarLoggedIn';
import Navbar from '../LandingPage/NavBar';

export default function BasicInfo() {
  const email = localStorage.getItem('email')
    ? localStorage.getItem('email')
    : localStorage.getItem('authEmail');
  const [focused, setFocused] = React.useState(false, { flag: false });
  const [inputerror, setInputError] = React.useState('');
  const [locationinputerror, setLocationInputError] = React.useState('');
  const [venueinputerror, setVenueInputError] = React.useState('');
  const [addressinputerror, setAddressInputError] = React.useState('');
  const [postalcodeinputerror, setPostalCodeInputError] = React.useState('');
  const [cityinputerror, setCityInputError] = React.useState('');
  const [value, setValue] = React.useState('');
  const [venuevalue, setVenueValue] = React.useState('');
  const [addressvalue, setAddressValue] = React.useState('');
  const [address2value, setAddress2Value] = React.useState('');
  const [cityvalue, setCityValue] = React.useState('');
  const [postalcodevalue, setPostalCodeValue] = React.useState('');
  const [organizervalue, setOrganizerValue] = React.useState('');
  const [locationvalue, setLocationValue] = React.useState('');
  const [statevalue, setStateValue] = React.useState('');
  const [displayValue, setDisplayValue] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [venueclicked, setVenueClicked] = useState(false);
  const [onlineclicked, setOnlineClicked] = useState(false);
  const [laterclicked, setLaterClicked] = useState(false);
  const [secondclicked, setSecondClicked] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownsecondRef = useRef(null);
  const venueRef = useRef(null);
  const onlineRef = useRef(null);
  const laterRef = useRef(null);
  const [showvenue, setShowVenue] = useState(true);
  const [showonline, setShowOnline] = useState(false);
  const [shownone, setShowNone] = useState(false);
  const [showsingle, setShowSingle] = useState(true);
  const [showrecurring, setShowRecurring] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [cityData, setCity] = useState({});
  const [showLocationMenu, setShowLocationMenu] = useState(false);
  const [showMap, setShowMap] = React.useState(false);
  const [mapStatus, setMapStatus] = useState('show map');
  const [timezones, setTimezones] = useState([]);

  const API_KEY = '2MJLSMGOES8V';
  const options = [];
  // Generate time options from 12am to 12pm with 30-minute intervals
  for (let hour = 0; hour <= 12; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time = `${hour.toString().padStart(2, '0')}:${minute
        .toString()
        .padStart(2, '0')}`;
      const label = `${hour === 0 ? 12 : hour}${
        minute === 0 ? ':00' : `:${minute}`
      }${hour < 12 ? 'am' : 'pm'}`;

      options.push(
        <option key={time} value={time}>
          {label}
        </option>
      );
    }
  }

  // setResponseBody(
  //   basicInfo: {
  //     eventName: value,
  //     startDateTime: selectedDate,
  //     endDateTime: selectedEndDate,
  //     "categories": "Music",
  //     "location": {
  //       "longitude": 45.523064,
  //       "latitude": -122.676483,
  //       "placeId": "ChIJN1t_tDeuEmsRUsoyG83frY4",
  //       "venueName": "My Venue",
  //       "streetNumber": 123,
  //       "route": "Main St",
  //       "administrativeAreaLevel1": "OR",
  //       "country": "US",
  //       "city": "Portland"
  //     }
  //   },
  //   "summary": "Join us for an evening of live music!",
  //   "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, purus sed tempus luctus, nunc sapien lacinia metus, eu finibus velit odio vel nulla",
  //   "eventStatus": "live",
  //   "isOnline": false,
  //   "onlineEventUrl": null
  // );

  // function handleValidation(){
  //   if(no error){
  //     setResponseBody(

  //     )
  //   }
  // }
  // async function clickNext(e) {
  //   e.preventDefault();
  //   console.log(props.data);

  //   const response = await fetch('https://www.tessera.social/api/event-management/creator', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(props.data),
  //   });

  //   const json = await response.json();
  // }

  function getDayClassName(date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set the time to midnight
    // Check if the date has already passed
    if (date < today) {
      return 'past-date';
    }
    return null; // Return null if no class should be applied
  }
  useEffect(() => {
    const fetchData = async (latitude, longitude) => {
      const data = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyC-V5bPta57l-zo8nzZ9MIxxGqvONc74XI`
      );
      const json = await data.json();
      const cityName =
        json.results[0].address_components[4].long_name.split(' ')[0];
      setCity(cityName);
    };

    navigator.geolocation?.getCurrentPosition(poistion => {
      const { latitude, longitude } = poistion.coords;

      fetchData(latitude, longitude);
    });
  }, []);

  useEffect(() => {
    fetch(
      `https://api.timezonedb.com/v2.1/list-time-zone?key=${API_KEY}&format=json`
    )
      .then(response => response.json())
      .then(data => setTimezones(data.zones));
  }, []);

  React.useEffect(() => {
    setShowMap(false);
  }, []);
  function handleVenueClick() {
    setShowVenue(true);
    setShowOnline(false);
  }
  function handleOnlineClick() {
    setShowOnline(true);
    setShowVenue(false);
  }
  function handleLaterClick() {
    setShowNone(true);
    setShowVenue(false);
    setShowOnline(false);
  }
  function handleSingleClick() {
    setShowSingle(true);
    setShowRecurring(false);
  }
  function handleRecurringClick() {
    setShowRecurring(true);
    setShowSingle(false);
  }
  const handleChange = event => {
    setValue(event.target.value);
    if (event.target.value.trim() === '') {
      setInputError('Title is required');
    } else {
      setInputError('');
    }
  };
  const handleLocationChange = event => {
    setLocationValue(event.target.value);
    if (event.target.value.trim() === '') {
      setLocationInputError('Location is required');
    } else {
      setLocationInputError('');
    }
  };
  const handleVenueChange = event => {
    setVenueValue(event.target.value);
    if (event.target.value.trim() === '') {
      setVenueInputError('Venue name is required');
    } else {
      setVenueInputError('');
    }
  };
  const handleAddressChange = event => {
    setAddressValue(event.target.value);
    if (event.target.value.trim() === '') {
      setAddressInputError('Address 1 is required');
    } else {
      setAddressInputError('');
    }
  };
  const handleCityChange = event => {
    setCityValue(event.target.value);
    if (event.target.value.trim() === '') {
      setCityInputError('City is required');
    } else {
      setCityInputError('');
    }
  };
  const handlePostalCodeChange = event => {
    setPostalCodeValue(event.target.value);
    if (event.target.value.trim() === '') {
      setPostalCodeInputError('ZIP code is required');
    } else {
      setPostalCodeInputError('');
    }
  };
  function handleDropDownClick() {
    setClicked(true);
  }
  function handleSecondDropDownClick() {
    setSecondClicked(true);
  }
  function handleBlueVenueClick() {
    setVenueClicked(true);
  }
  function handleBlueOnlineClick() {
    setOnlineClicked(true);
  }
  function handleBlueLaterClick() {
    setLaterClicked(true);
  }
  useEffect(() => {
    function handleOutsideClick(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setClicked(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [dropdownRef]);
  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        dropdownsecondRef.current &&
        !dropdownsecondRef.current.contains(event.target)
      ) {
        setSecondClicked(false);
      }
    }

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [dropdownsecondRef]);
  useEffect(() => {
    function handleOutsideClick(event) {
      if (venueRef.current && !venueRef.current.contains(event.target)) {
        setVenueClicked(false);
      }
    }

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [venueRef]);
  useEffect(() => {
    function handleOutsideClick(event) {
      if (onlineRef.current && !onlineRef.current.contains(event.target)) {
        setOnlineClicked(false);
      }
    }

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [onlineRef]);
  useEffect(() => {
    function handleOutsideClick(event) {
      if (laterRef.current && !laterRef.current.contains(event.target)) {
        setLaterClicked(false);
      }
    }

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [laterRef]);
  function handleOrganizerChange(event) {
    setOrganizerValue(event.target.value);
  }
  function handleAddress2Change(event) {
    setAddress2Value(event.target.value);
  }
  function handleStateChange(event) {
    setStateValue(event.target.value);
  }
  const saveButtonStyle = {
    backgroundColor: '#d1410c',
    fill: '#fff',
    color: 'white',
    borderColor: '#d1410c',
    marginRight: '16px',
  };
  const getValidationTitleClassName = () => {
    if (inputerror) {
      return 'red-text';
    } else if (focused) {
      return 'blue-text';
    }
    return '';
  };
  const getValidationLocationClassName = () => {
    if (locationinputerror) {
      return 'red-text';
    } else if (focused) {
      return 'blue-text';
    }
    return '';
  };
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyC-V5bPta57l-zo8nzZ9MIxxGqvONc74XI',
    libraries: ['places'],
  });
  const handleShowMap = e => {
    setShowMap(prevValue => !prevValue);
    if (showMap === false) {
      setMapStatus('Hide map');
    } else {
      setMapStatus('Show map');
    }
    e.preventDefault();
  };

  const locationDropDownToggle = e => {
    const h3 = e.target.closest('h3');

    !h3 && setShowLocationMenu(false);
  };
  return (
    <>
      <StyledNav>
        {email && email !== 'undefined' ? (
          <NavbarLoggedIn creator={true} email={email} />
        ) : (
          <Navbar />
        )}
      </StyledNav>
      <WholePage style={{ display: 'flex' }}>
        <Sidebar event={false} dashboard={true} />

        <div className="wholepage">
          <main className="main">
            <section>
              <div>
                <div>
                  <div style={{ paddingTop: '1.6rem' }}>
                    <button className="eventsbutton">
                      <div className="backevents">
                        <i className="smallI">
                          <svg
                            className="smallSvg"
                            x="0"
                            y="0"
                            viewBox="0 0 24 24"
                            xmlSpace="preserve"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              fill="#3659e3"
                              d="M13.8 7l-5 5 5 5 1.4-1.4-3.6-3.6 3.6-3.6z"
                            ></path>
                          </svg>
                        </i>
                        <p className="eventsword">Events</p>
                      </div>
                    </button>
                  </div>
                  <div className="lowerdiv">
                    <form>
                      <div className="basicinfodiv">
                        <div className="iconsdiv">
                          <i className="mediumI">
                            <svg
                              className="mediumSvg"
                              x="0"
                              y="0"
                              viewBox="0 0 24 24"
                              xmlSpace="preserve"
                            >
                              <path
                                fill="#dbdae3"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2 2v3h1V3h5v10H6v1h5v-1H9V3h5v2h1V2H2z"
                              ></path>
                              <g fillRule="evenodd" clipRule="evenodd">
                                <path
                                  fill="#dbdae3"
                                  d="M15 9h7v1h-7zM15 13h7v1h-7zM6 17h16v1H6zM6 21h16v1H6z"
                                ></path>
                              </g>
                            </svg>
                          </i>
                        </div>
                        <div className="infodiv">
                          <div>
                            <h1 style={{ color: '#1e0a3c' }}>Basic Info</h1>
                            <div style={{ width: '75%' }}>
                              <p className="explanationp">
                                <span className="explanationspan">
                                  Name your event and tell event-goers why they
                                  should come. Add details that highlight what
                                  makes it unique.
                                </span>
                              </p>
                            </div>
                          </div>
                          <div
                            style={{
                              marginTop: '16px',
                            }}
                          >
                            <form className="form">
                              <label
                                className={`label ${getValidationTitleClassName()}`}
                              >
                                <span style={{ WebkitBoxDirection: 'normal' }}>
                                  Event Title
                                </span>
                                <span className="starspan">
                                  <span className="starspan">*</span>
                                </span>
                              </label>
                              <input
                                className={`inputdata ${
                                  focused ? 'blue-border' : 'gray-border'
                                } ${inputerror ? 'red-border' : 'gray-border'}`}
                                data-testid="title"
                                type="text"
                                maxLength="75"
                                role="textbox"
                                name="titleinput"
                                id="title-input"
                                placeholder="Be clear and descriptive."
                                value={value}
                                onChange={handleChange}
                                onFocus={() => setFocused(true)}
                                onBlur={() => setFocused(false)}
                              />
                              {inputerror && (
                                <div className="error">{inputerror}</div>
                              )}
                            </form>
                            <div className="counterror">
                              <div className="letterlimit">
                                <aside className="aside">
                                  {value.length}/75
                                </aside>
                              </div>
                            </div>
                            <form className="form">
                              <label className="label">
                                <span style={{ WebkitBoxDirection: 'normal' }}>
                                  Organizer
                                </span>
                              </label>
                              <input
                                className="inputdata2"
                                data-testid="input"
                                type="input"
                                name="enter-organizer"
                                id="organizer-input"
                                placeholder="Tell attendees who is organizing this event."
                                value={organizervalue}
                                onChange={handleOrganizerChange}
                                onFocus={() => setFocused(true)}
                              />
                            </form>
                            <p className="inputdescription">
                              This profile describes a unique organizer and
                              shows all of the events on one page.
                              <a className="organizerinfolink">
                                View Organizer Info
                              </a>
                            </p>
                            <fieldset className="fieldset">
                              <div
                                className="typedropdown"
                                ref={dropdownsecondRef}
                              >
                                <div
                                  className="typeborder"
                                  onClick={handleSecondDropDownClick}
                                  style={
                                    secondclicked
                                      ? { border: '2px solid blue' }
                                      : {}
                                  }
                                >
                                  <div className="categorybox">
                                    <select className="dropdownselect">
                                      <option
                                        className="dropdownoption"
                                        value
                                        data-spec="select-option"
                                      >
                                        Category
                                      </option>
                                      <option
                                        className="dropdownoption"
                                        value="3"
                                        data-spec="select-option"
                                      >
                                        Auto, Boat & Air
                                      </option>
                                      <option
                                        className="dropdownoption"
                                        value="13"
                                        data-spec="select-option"
                                      >
                                        Business & Professional
                                      </option>
                                      <option
                                        className="dropdownoption"
                                        value="16"
                                        data-spec="select-option"
                                      >
                                        Charity & Causes
                                      </option>
                                      <option
                                        className="dropdownoption"
                                        value="2"
                                        data-spec="select-option"
                                      >
                                        Community & Culture
                                      </option>
                                      <option
                                        className="dropdownoption"
                                        value="7"
                                        data-spec="select-option"
                                      >
                                        Family & Education
                                      </option>
                                      <option
                                        className="dropdownoption"
                                        value="12"
                                        data-spec="select-option"
                                      >
                                        Fashion & Beauty
                                      </option>
                                      <option
                                        className="dropdownoption"
                                        value="15"
                                        data-spec="select-option"
                                      >
                                        Film, Media & Entertainment
                                      </option>
                                      <option
                                        className="dropdownoption"
                                        value="11"
                                        data-spec="select-option"
                                      >
                                        Food & Drink
                                      </option>
                                      <option
                                        className="dropdownoption"
                                        value="100"
                                        data-spec="select-option"
                                      >
                                        Government & Politics
                                      </option>
                                      <option
                                        className="dropdownoption"
                                        value="10"
                                        data-spec="select-option"
                                      >
                                        Health & Wellness
                                      </option>
                                      <option
                                        className="dropdownoption"
                                        value="14"
                                        data-spec="select-option"
                                      >
                                        Hobbies & Special Interest
                                      </option>
                                      <option
                                        className="dropdownoption"
                                        value="5"
                                        data-spec="select-option"
                                      >
                                        Home & Lifestyle
                                      </option>
                                      <option
                                        className="dropdownoption"
                                        value="8"
                                        data-spec="select-option"
                                      >
                                        Music
                                      </option>
                                      <option
                                        className="dropdownoption"
                                        value="4"
                                        data-spec="select-option"
                                      >
                                        Other
                                      </option>
                                      <option
                                        className="dropdownoption"
                                        value="1"
                                        data-spec="select-option"
                                      >
                                        Performing & Visual Arts
                                      </option>
                                      <option
                                        className="dropdownoption"
                                        value="6"
                                        data-spec="select-option"
                                      >
                                        Religion & Spirituality
                                      </option>
                                      <option
                                        className="dropdownoption"
                                        value="9"
                                        data-spec="select-option"
                                      >
                                        School Activities
                                      </option>
                                      <option
                                        className="dropdownoption"
                                        value="18"
                                        data-spec="select-option"
                                      >
                                        Science & Technology
                                      </option>
                                      <option
                                        className="dropdownoption"
                                        value="17"
                                        data-spec="select-option"
                                      >
                                        Seasonal & Holiday
                                      </option>
                                      <option
                                        className="dropdownoption"
                                        value="19"
                                        data-spec="select-option"
                                      >
                                        Sports & Fitness
                                      </option>
                                      <option
                                        className="dropdownoption"
                                        value="20"
                                        data-spec="select-option"
                                      >
                                        Travel & Outdoor
                                      </option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </fieldset>
                          </div>
                        </div>
                      </div>
                      <hr className="linedivider"></hr>
                      <div className="locationdiv">
                        <div className="iconsdiv">
                          <i className="mediumI">
                            <svg
                              className="mediumsvg"
                              x="0"
                              y="0"
                              viewBox="0 0 24 24"
                              xmlSpace="preserve"
                            >
                              <path
                                fill="#dbdae3"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M20 3c-1.1 0-2 .9-2 2H2v16h17.8c1.1 0 2.1-.9 2.1-2V5c.1-1.1-.8-2-1.9-2zm-.2 17H3V6h15v13h1c0-.6.4-1 1-1 .5 0 .9.4 1 .9-.1.6-.6 1.1-1.2 1.1zm1.2-2.7c-.3-.2-.6-.3-1-.3s-.7.1-1 .3V5c0-.6.4-1 1-1s1 .4 1 1v12.3z"
                              ></path>
                              <path
                                fill="#dbdae3"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.8 12.7l.7-.7-1.1-1 1.1-1-.7-.7-1.1 1-1-1-.7.7 1 1-1 1 .7.7 1-1z"
                              ></path>
                              <path
                                fill="#dbdae3"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 10h2v1h-2z"
                              ></path>
                              <path
                                fill="#dbdae3"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M15 12h1v2h-1z"
                              ></path>
                              <path
                                fill="#dbdae3"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 15h2v1h-2z"
                              ></path>
                              <path
                                fill="#dbdae3"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8 15h2v1H8z"
                              ></path>
                            </svg>
                          </i>
                        </div>
                        <div style={{ display: 'block' }}>
                          <div>
                            <h1 style={{ color: '#1e0a3c' }}>Location</h1>
                            <div style={{ width: '75%' }}>
                              <p className="explanationp">
                                <span className="explanationspan">
                                  Help people in the area discover your event
                                  and let attendees know where to show up.
                                </span>
                              </p>
                            </div>
                          </div>
                          <div style={{ marginTop: 20 }}>
                            <div className="locationsbuttonsdiv">
                              <div
                                style={{
                                  display: 'flex',
                                  marginBottom: '20px',
                                }}
                              >
                                <div className="buttonsdiv">
                                  <label
                                    className="buttonslabels"
                                    name="venue"
                                    onClick={handleVenueClick}
                                  >
                                    Venue
                                  </label>
                                </div>
                                <div className="buttonsdiv">
                                  <label
                                    className="buttonslabels"
                                    name="online"
                                    onClick={handleOnlineClick}
                                  >
                                    Online Event
                                  </label>
                                </div>
                                <div className="buttonsdiv">
                                  <label
                                    className="buttonslabels"
                                    name="none"
                                    onClick={handleLaterClick}
                                  >
                                    To Be Announced
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          {showvenue && (
                            <div>
                              <div
                                style={{
                                  width: '75%',
                                }}
                              >
                                <p
                                  className="explanationp"
                                  style={{ fontWeight: '600' }}
                                >
                                  Venue location
                                </p>
                              </div>
                              <form className="form">
                                <label
                                  className={`label ${getValidationLocationClassName()}`}
                                >
                                  <span
                                    className="searchcalendarspan"
                                    style={{
                                      paddingLeft: '9px',
                                      maxHeight: '49px',
                                    }}
                                  >
                                    <i>
                                      <svg
                                        className="smallSvg"
                                        x="0"
                                        y="0"
                                        viewBox="0 0 24 24"
                                        xmlSpace="preserve"
                                        style={{
                                          marginTop: '9px',
                                          marginLeft: '-13px',
                                        }}
                                      >
                                        <path
                                          style={{ fill: '#6f7287' }}
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M10 14c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm3.5.9c-1 .7-2.2 1.1-3.5 1.1-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6c0 1.3-.4 2.5-1.1 3.4l5.1 5.1-1.5 1.5-5-5.1z"
                                        ></path>
                                      </svg>
                                    </i>
                                  </span>
                                </label>
                                <input
                                  className={`inputdata ${
                                    focused ? 'blue-border' : 'gray-border'
                                  } ${
                                    locationinputerror
                                      ? 'red-border'
                                      : 'gray-border'
                                  }`}
                                  data-testid="title"
                                  type="text"
                                  role="textbox"
                                  name="titleinput"
                                  id="title-input"
                                  placeholder="Search for a venue or add."
                                  value={locationvalue}
                                  onChange={handleLocationChange}
                                  onFocus={() => setFocused(true)}
                                  onBlur={() => setFocused(false)}
                                  style={{
                                    paddingLeft: '40px',
                                    paddingTop: '0px',
                                  }}
                                />
                                {locationinputerror && (
                                  <div className="error">
                                    {locationinputerror}
                                  </div>
                                )}
                              </form>
                              <form className="form">
                                <label
                                  className={`label ${getValidationTitleClassName()}`}
                                >
                                  <span
                                    style={{ WebkitBoxDirection: 'normal' }}
                                  >
                                    Venue Name
                                  </span>
                                  <span className="starspan">
                                    <span className="starspan">*</span>
                                  </span>
                                </label>
                                <input
                                  className={`inputdata ${
                                    focused ? 'blue-border' : 'gray-border'
                                  } ${
                                    venueinputerror
                                      ? 'red-border'
                                      : 'gray-border'
                                  }`}
                                  data-testid="title"
                                  type="text"
                                  maxLength="500"
                                  role="textbox"
                                  name="titleinput"
                                  id="title-input"
                                  placeholder="e.g.Madison Square Garden"
                                  value={venuevalue}
                                  onChange={handleVenueChange}
                                  onFocus={() => setFocused(true)}
                                  onBlur={() => setFocused(false)}
                                />
                                {venueinputerror && (
                                  <div className="error">{venueinputerror}</div>
                                )}
                              </form>
                              <div className="counterror">
                                <div className="letterlimit">
                                  <aside className="aside">
                                    {venuevalue.length}/500
                                  </aside>
                                </div>
                              </div>
                              <div
                                style={{ marginBottom: '8px', width: '100%' }}
                              >
                                <legend className="legend">
                                  Street Address
                                </legend>
                              </div>
                              <div className=".addressbox">
                                <div
                                  className="dateandtimeboxes"
                                  style={{ marginBottom: '8px' }}
                                >
                                  <div className="divflex">
                                    <form className="form">
                                      <label
                                        className={`label ${getValidationTitleClassName()}`}
                                      >
                                        <span
                                          style={{
                                            WebkitBoxDirection: 'normal',
                                          }}
                                        >
                                          Address 1
                                        </span>
                                        <span className="starspan">
                                          <span className="starspan">*</span>
                                        </span>
                                      </label>
                                      <input
                                        className={`inputdata ${
                                          focused
                                            ? 'blue-border'
                                            : 'gray-border'
                                        } ${
                                          addressinputerror
                                            ? 'red-border'
                                            : 'gray-border'
                                        }`}
                                        data-testid="title"
                                        type="text"
                                        maxLength="500"
                                        role="textbox"
                                        name="titleinput"
                                        id="title-input"
                                        placeholder="e.g.155 5th Street"
                                        value={addressvalue}
                                        onChange={handleAddressChange}
                                        onFocus={() => setFocused(true)}
                                        onBlur={() => setFocused(false)}
                                      />
                                      {addressinputerror && (
                                        <div className="error">
                                          {addressinputerror}
                                        </div>
                                      )}
                                    </form>
                                  </div>
                                </div>
                                <div
                                  className="dateandtimeboxes"
                                  style={{ marginBottom: '8px' }}
                                >
                                  <div className="divflex">
                                    <form className="form">
                                      <label className="label">
                                        <span
                                          style={{
                                            WebkitBoxDirection: 'normal',
                                          }}
                                        >
                                          Address 2
                                        </span>
                                      </label>
                                      <input
                                        className={`inputdata ${
                                          focused
                                            ? 'blue-border'
                                            : 'gray-border'
                                        }`}
                                        data-testid="title"
                                        type="text"
                                        maxLength="500"
                                        role="textbox"
                                        name="titleinput"
                                        id="title-input"
                                        placeholder="e.g.Apt,Suite,Bldg"
                                        value={address2value}
                                        onChange={handleAddress2Change}
                                        onFocus={() => setFocused(true)}
                                        onBlur={() => setFocused(false)}
                                      />
                                    </form>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="addressbox"
                                style={{ marginTop: '0px' }}
                              >
                                <div
                                  className="dateandtimeboxes"
                                  style={{ marginBottom: '8px' }}
                                >
                                  <div className="divflex">
                                    <form className="form">
                                      <label
                                        className={`label ${getValidationTitleClassName()}`}
                                      >
                                        <span
                                          style={{
                                            WebkitBoxDirection: 'normal',
                                          }}
                                        >
                                          City
                                        </span>
                                        <span className="starspan">
                                          <span className="starspan">*</span>
                                        </span>
                                      </label>
                                      <input
                                        className={`inputdata ${
                                          focused
                                            ? 'blue-border'
                                            : 'gray-border'
                                        } ${
                                          cityinputerror
                                            ? 'red-border'
                                            : 'gray-border'
                                        }`}
                                        data-testid="title"
                                        type="text"
                                        maxLength="500"
                                        role="textbox"
                                        name="titleinput"
                                        id="title-input"
                                        placeholder="e.g.San Francisco"
                                        value={cityvalue}
                                        onChange={handleCityChange}
                                        onFocus={() => setFocused(true)}
                                        onBlur={() => setFocused(false)}
                                      />
                                      {cityinputerror && (
                                        <div className="error">
                                          {cityinputerror}
                                        </div>
                                      )}
                                    </form>
                                  </div>
                                </div>
                                <div className="dateandtimeboxes">
                                  <div
                                    style={{
                                      marginBottom: '8px',
                                      marginTop: '20px',
                                      marginLeft: 'auto',
                                      marginRight: 'auto',
                                    }}
                                  >
                                    <div
                                      className="dateandtimeboxes"
                                      style={{
                                        marginTop: '-20px',
                                        marginBottom: '8px',
                                      }}
                                    >
                                      <div className="divflex">
                                        <form className="form">
                                          <label className="label">
                                            <span
                                              style={{
                                                WebkitBoxDirection: 'normal',
                                              }}
                                            >
                                              State/Province
                                            </span>
                                          </label>
                                          <input
                                            className={`inputdata ${
                                              focused
                                                ? 'blue-border'
                                                : 'gray-border'
                                            }`}
                                            data-testid="title"
                                            type="text"
                                            role="textbox"
                                            name="titleinput"
                                            id="title-input"
                                            placeholder="e.g.California"
                                            value={statevalue}
                                            onChange={handleStateChange}
                                            onFocus={() => setFocused(true)}
                                            onBlur={() => setFocused(false)}
                                          />
                                        </form>
                                      </div>
                                    </div>
                                    <div
                                      className="dateandtimeboxes"
                                      style={{
                                        marginTop: '-20px',
                                        marginBottom: '8px',
                                      }}
                                    >
                                      <div className="divflex">
                                        <form className="form">
                                          <label
                                            className={`label ${getValidationTitleClassName()}`}
                                          >
                                            <span
                                              style={{
                                                WebkitBoxDirection: 'normal',
                                              }}
                                            >
                                              Postal Code
                                            </span>
                                            <span className="starspan">
                                              <span className="starspan">
                                                *
                                              </span>
                                            </span>
                                          </label>
                                          <input
                                            className={`inputdata ${
                                              focused
                                                ? 'blue-border'
                                                : 'gray-border'
                                            } ${
                                              postalcodeinputerror
                                                ? 'red-border'
                                                : 'gray-border'
                                            }`}
                                            data-testid="title"
                                            type="text"
                                            maxLength="500"
                                            role="textbox"
                                            name="titleinput"
                                            id="title-input"
                                            placeholder="e.g.94103"
                                            value={postalcodevalue}
                                            onChange={handlePostalCodeChange}
                                            onFocus={() => setFocused(true)}
                                            onBlur={() => setFocused(false)}
                                          />
                                          {postalcodeinputerror && (
                                            <div className="error">
                                              {postalcodeinputerror}
                                            </div>
                                          )}
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                          {showonline && (
                            <div>
                              <p className="explanationp">
                                <span className="explanationspan">
                                  Online events have unique event pages where
                                  you can add links to livestreams and more
                                </span>
                              </p>
                              <form className="form">
                                <input
                                  style={{ paddingTop: '0px' }}
                                  className="inputdata2"
                                  data-testid="input"
                                  type="input"
                                  name="enter-organizer"
                                  id="organizer-input"
                                  placeholder="Place the URL of your event"
                                  value={organizervalue}
                                  onChange={handleOrganizerChange}
                                  onFocus={() => setFocused(true)}
                                />
                              </form>
                            </div>
                          )}
                        </div>
                      </div>
                      <hr className="linedivider"></hr>
                      <div className="dateandtimediv">
                        <div className="iconsdiv">
                          <i className="mediumI">
                            <svg
                              className="mediumsvg"
                              x="0"
                              y="0"
                              viewBox="0 0 24 24"
                              xmlSpace="preserve"
                            >
                              <path
                                fill="#dbdae3"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17 4V2h-1v2H8V2H7v2H2v18h20V4h-5zm4 17H3V9h18v12zM3 8V5h4v1h1V5h8v1h1V5h4v3H3z"
                              ></path>
                              <g fillRule="evenodd" clipRule="evenodd">
                                <path
                                  fill="#dbdae3"
                                  d="M15 16h2v2h-2zM11 16h2v2h-2zM7 16h2v2H7zM15 12h2v2h-2zM11 12h2v2h-2zM7 12h2v2H7z"
                                ></path>
                              </g>
                            </svg>
                          </i>
                        </div>
                        <div style={{ display: 'block' }}>
                          <div>
                            <h1 style={{ color: '#1e0a3c' }}>Date and time</h1>
                            <div style={{ width: '75%' }}>
                              <p className="explanationp">
                                <span className="explanationspan">
                                  Tell event-goers when your event starts and
                                  ends so they can make plans to attend.
                                </span>
                              </p>
                            </div>
                          </div>
                          <div style={{ marginTop: 20 }}>
                            <div
                              className="locationsbuttonsdiv"
                              style={{
                                display: 'flex',
                                marginBottom: '20px',
                              }}
                            >
                              <div className="buttonsdiv">
                                <label
                                  className="buttonslabels"
                                  name="single"
                                  onClick={handleSingleClick}
                                >
                                  Single Event
                                </label>
                              </div>
                              <div className="buttonsdiv">
                                <label
                                  className="buttonslabels"
                                  name="recurring"
                                  onClick={handleRecurringClick}
                                >
                                  Recurring Event
                                </label>
                              </div>
                            </div>
                            {showsingle && (
                              <div>
                                <div
                                  style={{
                                    width: '75%',
                                    marginBottom: '16px',
                                  }}
                                >
                                  <p className="explanationp">
                                    Single event happens once and can last
                                    multiple days
                                  </p>
                                </div>
                                <div className="addressbox">
                                  <div className = 'dateandtimeboxes' >
                                    <div style={{position:'relative'}}>
                                      <DatePicker
                                        selected={selectedDate}
                                        onChange={date => {
                                          setSelectedDate(date);
                                          setShowCalendar(false);
                                        }}
                                        className="custom-datepicker"
                                        calendarClassName="custom-calendar"
                                        placeholderText="Select a date"
                                      />
                                      <label htmlFor="datepicker" className="datepicker-label">Select Start date:</label>
                                    </div>
                                </div>
                                  <div
                                    ref={dropdownRef}
                                    className="dateandtimeboxes"
                                    style={{
                                      position: 'relative',
                                      cursor: 'pointer',
                                    }}
                                  >
                                    <div
                                      className="placeholder3"
                                      style={{
                                        position: 'absolute',
                                        top: '-10px',
                                        left: '-5px',
                                        width: ' 100%',
                                        height: '70px',
                                        zIndex: '2',
                                      }}
                                    >
                                      <label className="label">
                                        <span
                                          className="spantext2"
                                          style={{ marginLeft: '-5px' }}
                                        >
                                          Start Time
                                        </span>
                                      </label>
                                    </div>
                                    <div
                                      className="timedropdowndiv"
                                      style={{
                                        width: '100%',
                                        marginBottom: '8px',
                                      }}
                                    >
                                      <div className="searchvenuediv1">
                                        <div
                                          className="typeborder"
                                          onClick={handleDropDownClick}
                                          style={
                                            clicked
                                              ? { border: '1px solid blue' }
                                              : {
                                                  border: '0px solid #dbdae3',
                                                }
                                          }
                                        >
                                          <div className="dropdownLast">
                                            <select className="selecttime">
                                              {options}
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="addressbox"
                                  style={{ marginTop: '0' }}
                                >
                                  <div className = 'dateandtimeboxes' >
                                    <div style={{position:'relative'}}>
                                      <DatePicker
                                        selected={selectedEndDate}
                                        onChange={date => {
                                          setSelectedEndDate(date);
                                          setShowCalendar(false);
                                        }}
                                        className="custom-datepicker"
                                        calendarClassName="custom-calendar"
                                        placeholderText="Select a date"
                                      />
                                      <label htmlFor="datepicker" className="datepicker-label">Select End date:</label>
                                    </div>
                                </div>
                                  <div
                                    className="dateandtimeboxes"
                                    ref={venueRef}
                                    style={{
                                      position: 'relative',
                                      cursor: 'pointer',
                                    }}
                                  >
                                    <div
                                      className="placeholder2"
                                      style={{
                                        position: 'absolute',
                                        top: '-10px',
                                        left: '-5px',
                                        width: ' 100%',
                                        height: '70px',
                                        zIndex: '2',
                                      }}
                                    >
                                      <label className="label">
                                        <span
                                          className="spantext2"
                                          style={{ marginLeft: '-5px' }}
                                        >
                                          End Time
                                        </span>
                                      </label>
                                    </div>
                                    <div
                                      className="timedropdowndiv"
                                      style={{
                                        width: '100%',
                                        marginBottom: '8px',
                                      }}
                                    >
                                      <div className="searchvenuediv1">
                                        <div
                                          className="typeborder"
                                          onClick={handleBlueVenueClick}
                                          style={
                                            venueclicked
                                              ? { border: '1px solid blue' }
                                              : {
                                                  border: '0px solid #dbdae3',
                                                }
                                          }
                                        >
                                          <div className="dropdownLast">
                                            <select className="selecttime">
                                              {options}
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="displayendtime"
                                  style={{ marginTop: '20px' }}
                                >
                                  <input className="checkbox" type="checkbox" />
                                  <label className="checktextlabel">
                                    <span className="spantext2">
                                      <p style={{ color: '#39364f' }}>
                                        Display start time.
                                      </p>
                                      <p
                                        className="textp"
                                        style={{ marginTop: '7px' }}
                                      >
                                        The start time of your event will be
                                        displayed to attendees.
                                      </p>
                                    </span>
                                  </label>
                                </div>
                                <div
                                  className="displayendtime"
                                  style={{ marginTop: '20px' }}
                                >
                                  <input className="checkbox" type="checkbox" />
                                  <label className="checktextlabel">
                                    <span className="spantext2">
                                      <p style={{ color: '#39364f' }}>
                                        Display end time.
                                      </p>
                                      <p
                                        className="textp"
                                        style={{ marginTop: '7px' }}
                                      >
                                        The end time of your event will be
                                        displayed to attendees.
                                      </p>
                                    </span>
                                  </label>
                                </div>
                                <div
                                  ref={onlineRef}
                                  style={{
                                    marginTop: '24px',
                                    position: 'relative',
                                    cursor: 'pointer',
                                  }}
                                >
                                  <div
                                    className="placeholder2"
                                    style={{
                                      position: 'absolute',
                                      top: '-10px',
                                      left: '-5px',
                                      width: ' 100%',
                                      height: '70px',
                                      zIndex: '2',
                                    }}
                                  >
                                    <label className="label">
                                      <span className="spantext2">
                                        Time Zone
                                      </span>
                                    </label>
                                  </div>
                                  <div>
                                    <div
                                      className="timedropdowndiv"
                                      style={{ marginBottom: '8px' }}
                                    >
                                      <div className="searchvenuediv1">
                                        <div
                                          className="typeborder"
                                          onClick={handleBlueOnlineClick}
                                          style={
                                            onlineclicked
                                              ? { border: '1px solid blue' }
                                              : {
                                                  border: '0px solid #dbdae3',
                                                }
                                          }
                                        >
                                          <div className="dropdownLast">
                                            <select className="selecttime">
                                              {timezones.map(zone => (
                                                <option
                                                  key={zone.zoneName}
                                                  value={zone.zoneName}
                                                >
                                                  (GMT{zone.gmtOffset}){' '}
                                                  {zone.countryName} (
                                                  {zone.zoneName})
                                                </option>
                                              ))}
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                            {showrecurring && (
                              <div>
                                <div
                                  style={{
                                    width: '75%',
                                    marginBottom: '16px',
                                  }}
                                >
                                  <p className="explanationp">
                                    You’ll be able to set a schedule for your
                                    recurring event in the next step. Event
                                    details and ticket types will apply to all
                                    instances.
                                  </p>
                                </div>
                                <div
                                  style={{
                                    marginTop: '16px',
                                    marginBottom: '20px',
                                  }}
                                >
                                  <div
                                    className="displayendtime"
                                    style={{
                                      marginTop: '36px',
                                      marginBottom: '20px',
                                    }}
                                  >
                                    <input
                                      className="checkbox"
                                      type="checkbox"
                                    />
                                    <label className="checktextlabel">
                                      <span className="spantext2">
                                        <p style={{ color: '#39364f' }}>
                                          Display end time.
                                        </p>
                                        <p
                                          className="textp"
                                          style={{ marginTop: '7px' }}
                                        >
                                          The end time of your event will be
                                          displayed to attendees.
                                        </p>
                                      </span>
                                    </label>
                                  </div>
                                  <div
                                    ref={onlineRef}
                                    style={{
                                      marginTop: '24px',
                                      position: 'relative',
                                      cursor: 'pointer',
                                    }}
                                  >
                                    <div
                                      className="placeholder2"
                                      style={{
                                        position: 'absolute',
                                        top: '-10px',
                                        left: '-5px',
                                        width: ' 100%',
                                        height: '70px',
                                        zIndex: '2',
                                      }}
                                    >
                                      <label className="label">
                                        <span className="spantext2">
                                          Time Zone
                                        </span>
                                      </label>
                                    </div>
                                    <div
                                      className="timedropdowndiv"
                                      style={{ marginBottom: '8px' }}
                                    >
                                      <div className="searchvenuediv1">
                                        <div
                                          className="typeborder"
                                          onClick={handleBlueOnlineClick}
                                          style={
                                            onlineclicked
                                              ? { border: '1px solid blue' }
                                              : {
                                                  border: '0px solid #dbdae3',
                                                }
                                          }
                                        >
                                          <div className="dropdownLast">
                                            <select className="selecttime">
                                              {timezones.map(zone => (
                                                <option
                                                  key={zone.zoneName}
                                                  value={zone.zoneName}
                                                >
                                                  (GMT{zone.gmtOffset}){' '}
                                                  {zone.countryName} (
                                                  {zone.zoneName})
                                                </option>
                                              ))}
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
        <div className="fixeddiv">
          <div className="fixedinnerdiv">
            <div className="fixedbuttondiv">
              <button className="usedbutton" style={{ marginRight: '16px' }}>
                Discard
              </button>
              <button className="usedbutton" style={saveButtonStyle}>
                Save & Continue
              </button>
            </div>
          </div>
        </div>
        <div className="fixeddiv1">
          <div className="fixedinnerdiv1">
            <div className="fixedbuttondiv1">
              <button className="usedbutton" style={saveButtonStyle}>
                Save & Continue
              </button>
              <button className="usedbutton" style={{ marginRight: '16px' }}>
                Discard
              </button>
            </div>
          </div>
        </div>
      </WholePage>
    </>
  );
}
