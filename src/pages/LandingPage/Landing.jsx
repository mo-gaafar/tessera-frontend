/**
 * @file Landing.jsx
 * @name Landing.jsx
 * @author @moSaeed15
 * @requires react
 * @requires react-router-dom
 * @requires ./styles/Landing.styled
 * @requires ./EventBox
 * @exports Landing
 * @description This file contains the Landing page components and its logic
 */
import DateRangePicker from 'tw-daterange';
import 'react-dater/dist/index.css';
import { useRef } from 'react';

import { useEffect, useState } from 'react';
import { StyledLandingEvents } from './styles/Landing.styled';
import { StyledEventsContainer } from './styles/Landing.styled';
import { Link, Route, Routes, useLocation } from 'react-router-dom';

import logo from '../../assets/icon-down.png';
import cross from '../../assets/x-10327.png';
import error from '../../assets/noevent-error.png';
import EventBox from './EventBox';
import Navbar from './nav2';
import { jsx } from '@emotion/react';

/**
 * A functional component that handles the landing page and event filtering.
 *
 * @returns {JSX.Element} The JSX representation of the component.
 */

export default function Landing() {
  const [city, setCity] = useState('');
  const ref = useRef(null);

  const [forYouElement, setForYouElement] = useState(false);
  const [showCalender, setShowCalender] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);

  const [count, setCount] = useState(0);
  const [showDateRange, setShowDate] = useState(false);

  const [range, setRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const [select, setSelect] = useState('');
  const [selectCategory, setSelectCategory] = useState('');
  const [url, setUrl] = useState('');
  /**
   * Updates the textContent of div and handles calender.
   *
   * @param {Object} e - The event object.
   */

  function onClickCalender(e) {
    const { name, value } = e.target;
    if (name === 'calender') {
      setShowCalender(true);
      setShowMenu(false);
    } else {
      setShowMenu(false);
      setSelect(name);
      if (name === 'Today') {
        setUrl(
          'startDate=' + range.startDate.toISOString() + '&futureDate=today'
        );
      }
      if (name === 'This weekend') {
        setUrl(
          'startDate=' + range.startDate.toISOString() + '&futureDate=weekend'
        );
      }
      if (name === 'Tomorrow') {
        setUrl(
          'startDate=' + range.startDate.toISOString() + '&futureDate=tomorrow'
        );
      }
    }
  }
  function onClickCategory(e) {
    const { name, value } = e.target;
    setShowCategoryMenu(false);
    setSelectCategory(name);
    let new_name = name.replace(/&/g, '%26');
    let queryName = 'category=' + new_name;
    setUrl(queryName);
    //handleClick()
  }
  function showDropdown() {
    if (!select) {
      setShowMenu(true);
    }
  }
  function showDropdownCategory() {
    if (!selectCategory) {
      setShowCategoryMenu(true);
    }
  }
  const [focused, setFocused] = useState({
    All: true,
    forYou: false,
    online: false,
    today: false,
    weekend: false,
    women: false,
    free: false,
    music: false,
    food: false,
    charity: false,
  });

  /**
   * @function useEffect
   * @name useEffect
   * @description This function is a hook that fetches the city name from the latitude and longitude
   * @param {function} fetchData
   * @param {function} navigator.geolocation.getCurrentPosition
   * @returns {JSX.Element} A React component representing the event box
   */

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

  function handleForYou() {
    setForYouElement(true);
    setShowCategoryMenu(false);
    setFocused(prevFocus => {
      return {
        forYou: true,
      };
    });
  }

  function onClickAll(e) {
    removeDate();
    removeCategory();
    handleClick();
    setForYouElement(false);
    const { name, value } = e.target;
    setFocused(prevFocus => {
      return {
        [name]: true,
      };
    });
    setShowMenu(false);
    if (!focused.All) {
      setShowCategoryMenu(false);
    }
    if (name === 'All') {
      setUrl('');
    }
    if (name === 'online') {
      setUrl('eventHosted=online');
    }
    if (name === 'today') {
      setUrl(
        'startDate=' + range.startDate.toISOString() + '&futureDate=today'
      );
    }
    if (name === 'weekend') {
      setUrl(
        'startDate=' + range.startDate.toISOString() + '&futureDate=weekend'
      );
    }
    if (name === 'music') {
      setUrl('category=Music');
    }
    if (name === 'food') {
      setUrl('category=Food %26 Drink');
    }
    if (name === 'charity') {
      setUrl('category=Charity %26 Causes');
    }
  }

  function removeDate() {
    setShowDate(false);
    setSelect('');
  }

  function removeCategory() {
    setSelectCategory('');
    setUrl('');
  }

  useEffect(() => {
    if (range.startDate && range.endDate && count === 1) {
      setShowCalender(false);
      setShowMenu(false);
      setShowDate(true);
      setUrl(
        'startDate=' +
          range.startDate.toISOString() +
          '&endDate=' +
          range.endDate.toISOString()
      );
    } else {
      setCount(1);
    }
  }, [range.startDate]);

  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'August',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const [allFilteredEvents, setAllFilteredEvents] = useState([]);
  const [allCatEvents, setAllCatEvents] = useState([]);
  const [noEvents, setNoEventsImg] = useState(false);

  /**
   * @function useEffect
   * @name useEffect
   * @description This function is a hook that fetches the filtered data from backend
   * @param {function} getData
   * @returns {Object} An object representing the event data
   */

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        'https://www.tessera.social/api/attendee/Eventsby/?' + url
      );
      const data = await res.json();
      setAllFilteredEvents(data.filteredEvents);
    }
    getData();
  }, [url]);

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        'https://www.tessera.social/api/attendee/Eventsby/?'
      );
      const data = await res.json();
      setAllCatEvents(data.categoriesRetreived);
    }
    getData();
  }, []);

  /**
   * Changes the Isodate to display date format.
   *
   * @param {String} dataString - The event date in Iso format.
   * @returns {String}
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
    return `${dayName}, ${
      monthNames[localTime.getMonth()]
    } ${localTime.getDate()}, ${localTime.getHours()}:${
      localTime.getMinutes() === 0 ? '00' : localTime.getMinutes()
    }`;
  };

  const minPrice = (p, q) => {
    if (p > q) {
      return q;
    } else {
      return p;
    }
  };

  const [eventElements, setEventElement] = useState();
  const [catElements, setCatElement] = useState();
  /**
   * @function useEffect
   * @name useEffect
   * @description This function is a hook that updates the events displayed according to query
   * @param {function} setEventElement
   * @returns {JSX.Element} An object representing the eventbox
   */
  useEffect(() => {
    if (allFilteredEvents.length === 0) {
      setNoEventsImg(true);
    } else {
      setNoEventsImg(false);
    }
    setEventElement(
      allFilteredEvents.map(event => (
        <EventBox
          key={event._id}
          image={
            event.basicInfo.eventImage !== 'https://example.com/image.jpg'
              ? event.basicInfo.eventImage
              : '/images/event__4.avif'
          }
          eventTitle={event.basicInfo.eventName}
          date={convertUtcToLocalTime(event.basicInfo.startDateTime)}
          description={
            event.basicInfo.location.venueName +
            ' • ' +
            event.basicInfo.location.city +
            ' '
          }
          price={
            event.ticketTiers[0].price !== 'Free'
              ? `Starts at ${minPrice(
                  event.ticketTiers[0].price,
                  event.ticketTiers[1].price
                )}`
              : ''
          }
          isFree={event.ticketTiers[0].price === 'Free'}
          organizer={
            event.creatorId
              ? event.creatorId.firstName + ' ' + event.creatorId.lastName
              : ''
          }
          followers={event.ticketTiers.length}
        />
      ))
    );
  }, [allFilteredEvents]);

  /**
   * @function useEffect
   * @name useEffect
   * @description This function is a hook that updates the categories displayed in deropdown list
   * @param {function} setEventElement
   * @returns {JSX.Element} An object representing the dropdown elements
   */

  useEffect(() => {
    setCatElement(
      allCatEvents.map(cat => (
        <div>
          <button name={cat} className="drop-button" onClick={onClickCategory}>
            {cat}
          </button>
        </div>
      ))
    );
  }, [allCatEvents]);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const email = localStorage.getItem('email')
    ? localStorage.getItem('email')
    : localStorage.getItem('authEmail');
  console.log(email);

  return (
    <>
      <Navbar />
      <StyledLandingEvents>
        <h3>
          Popular in
          <svg
            id="chevron-down-chunky_svg__eds-icon--chevron-down-chunky_svg"
            x="0"
            y="0"
            viewBox="0 0 24 24"
            xmlSpace="preserve"
          >
            <path
              id="chevron-down-chunky_svg__eds-icon--chevron-down-chunky_base"
              fill="evenodd"
              clip="evenodd"
              d="M7 10.2l5 5 5-5-1.4-1.4-3.6 3.6-3.6-3.6z"
            ></path>
          </svg>
          <span>{city}</span>
        </h3>

        <div className="filter__nav">
          <nav className="">
            <ul>
              <li className="first-Filter">
                <button
                  className="nav--filter"
                  name="All"
                  onClick={onClickAll}
                  style={
                    focused.All
                      ? {
                          color: 'blue',
                          paddingBottom: '3px',
                          borderBottom: '2px solid blue',
                        }
                      : { background: 'none' }
                  }
                >
                  All
                </button>
              </li>

              <li>
                <button
                  onClick={handleForYou}
                  className="nav--filter"
                  style={
                    focused.forYou
                      ? {
                          color: 'blue',
                          paddingBottom: '3px',
                          borderBottom: '2px solid blue',
                        }
                      : { background: 'none' }
                  }
                >
                  <span>For you</span>
                </button>
              </li>

              <li>
                <button
                  className="nav--filter"
                  name="online"
                  onClick={onClickAll}
                  style={
                    focused.online
                      ? {
                          color: 'blue',
                          paddingBottom: '3px',
                          borderBottom: '2px solid blue',
                        }
                      : { background: 'none' }
                  }
                >
                  Online
                </button>
              </li>

              <li>
                <button
                  className="nav--filter"
                  name="today"
                  onClick={onClickAll}
                  style={
                    focused.today
                      ? {
                          color: 'blue',
                          paddingBottom: '3px',
                          borderBottom: '2px solid blue',
                        }
                      : { background: 'none' }
                  }
                >
                  Today
                </button>
              </li>

              <li>
                <button
                  className="nav--filter"
                  name="weekend"
                  onClick={onClickAll}
                  style={
                    focused.weekend
                      ? {
                          color: 'blue',
                          paddingBottom: '3px',
                          borderBottom: '2px solid blue',
                        }
                      : { background: 'none' }
                  }
                >
                  This Weekend
                </button>
              </li>

              <li>
                <button
                  onClick={onClickAll}
                  name="free"
                  className="nav--filter"
                  style={
                    focused.free
                      ? {
                          color: 'blue',
                          paddingBottom: '3px',
                          borderBottom: '2px solid blue',
                        }
                      : { background: 'none' }
                  }
                >
                  Free
                </button>
              </li>

              <li>
                <button
                  onClick={onClickAll}
                  name="music"
                  className="nav--filter"
                  style={
                    focused.music
                      ? {
                          color: 'blue',
                          paddingBottom: '3px',
                          borderBottom: '2px solid blue',
                        }
                      : { background: 'none' }
                  }
                >
                  Music
                </button>
              </li>

              <li>
                <button
                  className="nav--filter"
                  onClick={onClickAll}
                  name="food"
                  style={
                    focused.food
                      ? {
                          color: 'blue',
                          paddingBottom: '3px',
                          borderBottom: '2px solid blue',
                        }
                      : { background: 'none' }
                  }
                >
                  Food & Drink
                </button>
              </li>

              <li>
                <button
                  className="nav--filter"
                  onClick={onClickAll}
                  name="charity"
                  style={
                    focused.charity
                      ? {
                          color: 'blue',
                          paddingBottom: '3px',
                          borderBottom: '2px solid blue',
                        }
                      : { background: 'none' }
                  }
                >
                  Charity & causes
                </button>
              </li>
            </ul>
          </nav>

          {focused.All && (
            <div className="date-dropdown" onClick={showDropdownCategory}>
              <div className="you--options" data-testid="forYou">
                {selectCategory ? (
                  <span>
                    {selectCategory}
                    <button onClick={removeCategory} className="remove-button">
                      <img src={cross} />
                    </button>
                  </span>
                ) : (
                  <span>
                    Category
                    <img src={logo} />
                  </span>
                )}
              </div>
              {showCategoryMenu && (
                <div id="myDropdown" className="dropdown-content">
                  <ul>{catElements}</ul>
                </div>
              )}
            </div>
          )}

          {forYouElement && (
            <div className="date-dropdown" onClick={showDropdown}>
              <div className="you--options" data-testid="forYou">
                {showDateRange ? (
                  <span>
                    {monthNames[range.startDate.getMonth()] +
                      ' ' +
                      range.startDate.getDate() +
                      ' - ' +
                      monthNames[range.endDate.getMonth()] +
                      ' ' +
                      range.endDate.getDate()}
                    <button onClick={removeDate} className="remove-button">
                      <img src={cross} />
                    </button>
                  </span>
                ) : select ? (
                  <span>
                    {select}
                    <button onClick={removeDate} className="remove-button">
                      <img src={cross} />
                    </button>
                  </span>
                ) : (
                  <span>
                    Date
                    <img src={logo} />
                  </span>
                )}
              </div>
              {showMenu && (
                <div id="myDropdown" className="dropdown-content">
                  <ul>
                    <div>
                      <button
                        name="calender"
                        className="drop-button"
                        onClick={onClickCalender}
                      >
                        Calender
                      </button>
                    </div>
                    <div>
                      <button
                        name="Today"
                        className="drop-button"
                        onClick={onClickCalender}
                      >
                        Today
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={onClickCalender}
                        name="Tomorrow"
                        className="drop-button"
                      >
                        Tomorrow
                      </button>
                    </div>
                    <div>
                      <button
                        name="This weekend"
                        onClick={onClickCalender}
                        className="drop-button"
                      >
                        This weekend
                      </button>
                    </div>
                  </ul>
                </div>
              )}

              {showCalender && (
                <div>
                  <div className="dropdown-content">
                    <DateRangePicker
                      wrapperClassName="datePicker"
                      initialRange={range}
                      onUpdate={dateRange => {
                        setRange(dateRange);
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          <h4>Events in {city}</h4>
          <StyledEventsContainer
            ref={ref}
            img="../../src/assets/svgviewer-output.svg"
          >
            {eventElements}
            {noEvents && (
              <div className="error-img">
                <img src={error} />
              </div>
            )}
          </StyledEventsContainer>
        </div>
      </StyledLandingEvents>
    </>
  );
}
