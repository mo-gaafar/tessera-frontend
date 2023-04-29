import React from 'react';
import NavbarLoggedIn from '../LandingPage/NavbarLoggedIn';
import Navbar from '../LandingPage/NavBar';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { StyledNav } from '../LandingPage/styles/Landing.styled';
import {
  WholePage,
  WhenandWhereText,
  LocationSection,
  DateAndTimeSection,
  WhenandWhereDiv,
  PictureDiv,
  DetailsDiv,
  MainDetailsDiv,
  FollowButton,
  FollowButtonDiv,
  PictureBackgroundEvent,
  EventDate,
  LocationDiv,
  DetailsSvg,
  DetailsPath,
  DetailsI,
  DetailsTitleDiv,
  DetailsP,
  DateSpan,
  DateSelect,
  DateOptions,
  DateAndLocationDiv,
  LocationStrong,
  MapButton,
  MapDetailsPath,
  MapButtonDiv,
  MapDetailsI,
  AboutEventSubDiv1,
  AboutEventTitle,
  AboutEventUL,
  AboutEventLi,
  AboutEventSubDiv2,
  AboutEventSubDiv3,
  AboutEventSubDiv4,
  AboutEventP,
  AboutEventTitleDiv,
  LogoSpan,
  ActionPanel,
  LiSpan,
  LiDiv,
  LiDiv2,
  LiDiv3,
  LiSpan2,
  LiButton,
  LiI,
  LiSvg,
  LiPath,
  LiSpan3,
  DetailsDiv2,
  PictureDiv2,
  PictureDiv3,
  Picture,
  PictureSource,
  FirstHalfPage,
  FirstHalfPageDiv1,
  FirstHalfPageDiv2,
  TicketsEndDiv,
  TicketsEndDivInner,
  TicketsEndPath,
  TicketsEndI,
  TicketsText,
  TicketsDiv,
  WholeTicketsDiv,
  TicketsSection,
  TicketsForm,
  TicketsButton,
  TicketsUL,
  TicketsLi,
  TicketsSubDiv1,
  TicketsSubDiv2,
  TicketsSubDiv3,
  TicketsSubDiv4,
  TicketsSubDiv5,
  TicketsButtonSubtract,
  TicketsI,
  TicketsSvg,
  TicketsPath,
  TicketsSubDiv6,
  TicketsSubDiv7,
  TicketsButtonAdd,
  TicketsSubDiv8,
  TicketsSubDiv9,
  TicketsFreeSpan,
  BuyTicketsButton,
  TicketsFreePath,
  PricedTickets,
  PricedTicketsPrice,
  PricedTicketsButtonDiv,
  PricedTicketsPriceDiv,
  RefundSection,
  RefundDiv1,
  RefundTitle,
  RefundDiv2,
  TicketsEndDiv2,
  ActionPanelLi2,
  SoldOutTickets,
  SoldOutTicketsButton,
  Map,
} from './styles/EventPage.styled';
import {
  RightDetailsDiv,
  ImageLogoDiv,
  WhenAndWhereDetailsDiv,
  HostInfoDiv,
  DetailsStrong,
  HostName,
  WhenandWhereSection,
  AboutEvent,
  ReserveDiv,
  ActionPanelul,
  ActionPanelLi,
  MainDetailsP,
  MainDetailsSection,
  MainDetailsTitle,
  EventHostDiv,
  EventHostSpan,
} from './styles/EventPage.styled';
import { useRef, useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import {
  AboutTheOrganizer,
  MoreEventsOrganizer,
  OtherEventsYouMayLike,
} from './styles/EventOrganizer.styled';
import MoreEvents from './MoreEvents';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { eventsListScroll } from './EventsList';
import { useParams } from 'react-router-dom';
import EventBox from '../LandingPage/EventBox';
import BookingPopUp from '../BookingPopUP/BookingPop';
//import CheckoutForm from '../BookingPopUP/CheckoutForm'

export default function Events(props) {
  const eventID = useParams().eventID;
  const [showPopup, setShowPopUp] = useState(false);
  const [styles, setStyles] = useState();
  // conditional rendering => if the quantity sold = capacity - 10 , render tickets sales ends soon
  // if the event is free or not
  // if the tickets are sold out
  const [count, setCount] = React.useState(1);
  const [eventData, setEventData] = React.useState({});
  const [EventExists, setEventExists] = React.useState(false);
  const [showMap, setShowMap] = React.useState(false);
  const [mapStatus, setMapStatus] = useState('show map');
  //console.log("pop",showPopup)
  React.useEffect(() => {
    setShowMap(false);
  }, []);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://www.tessera.social/api/attendee/event/${eventID}`
      );
      const event = await response.json();
      setEventData(event);
      // console.log(event);
      // console.log(eventData.isEventCapacityFull);

      event.filteredEvents[0] ? setEventExists(true) : setEventExists(false);
    };
    fetchData();
  }, []);

  function add(e) {
    setCount(count + 1);
    setStyles({ backgroundColor: '#3659e3' });
    e.preventDefault();
  }
  function subtract(e) {
    if (count == 1 || count === 2) {
      setStyles({ backgroundColor: '#eeedf2' });
      setCount(1);
    } else {
      setStyles({ backgroundColor: '#3659e3' });
      setCount(count - 1);
    }
    e.preventDefault();
  }
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
  const monthNamesFull = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const convertUTCToLocalTime = dateString => {
    let date = new Date(dateString);
    const milliseconds = Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds()
    );
    const localTime = new Date(milliseconds);
    return `${monthNames[localTime.getMonth()]} ${localTime.getDate()}`;
  };
  const convertUTCToLocalHoursOnly = dateString => {
    let date = new Date(dateString);
    const milliseconds = Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds()
    );
    const localTime = new Date(milliseconds);
    return `${localTime.getHours()}`;
  };
  const convertUTCToLocalTimeOnly = dateString => {
    let date = new Date(dateString);
    const milliseconds = Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds()
    );
    const localTime = new Date(milliseconds);
    return `${localTime.getHours()}:${
      localTime.getMinutes() === 0 ? '00' : localTime.getMinutes()
    }`;
  };
  const convertUTCToLocalTimeLong = dateString => {
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
      monthNamesFull[localTime.getMonth()]
    } ${localTime.getDate()} · ${localTime.getHours()}:${
      localTime.getMinutes() === 0 ? '00' : localTime.getMinutes()
    } `;
  };
  const eventHours = () => {
    let numberOfHours =
      convertUTCToLocalHoursOnly(
        eventData.filteredEvents[0].basicInfo.endDateTime
      ) -
      convertUTCToLocalHoursOnly(
        eventData.filteredEvents[0].basicInfo.startDateTime
      );
    // console.log(numberOfHours);
    let hours = '';
    if (numberOfHours == 1) {
      hours = ' hour';
    } else hours = ' hours';
    return hours;
  };
  function displayPopup() {
    if (count > 0) setShowPopUp(true);
  }

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyC-V5bPta57l-zo8nzZ9MIxxGqvONc74XI',
  });

  const [data, setData] = useState([...eventsListScroll]); // array of values
  const [currentIndex, setCurrentIndex] = useState(0); // Current index in the array to iterate over 3 values
  const allEventsDivRef = useRef(null);

  const handleShowMap = () => {
    setShowMap(prevValue => !prevValue);
    if (showMap === false) {
      setMapStatus('Hide map');
    } else {
      setMapStatus('Show map');
    }
  };

  const handleForward = () => {
    const allEventsDiv = allEventsDivRef.current;
    allEventsDiv.classList.add('fade-transition');
    setTimeout(() => {
      if (currentIndex < data.length - 3) {
        setCurrentIndex(currentIndex + 3);
      } else {
        setCurrentIndex(data.length - (data.length % 3));
      }
      allEventsDiv.classList.remove('fade-transition');
    }, 500);
  };

  const handleBackward = () => {
    const allEventsDiv = allEventsDivRef.current;
    allEventsDiv.classList.add('fade-transition');
    setTimeout(() => {
      if (currentIndex >= 3) {
        setCurrentIndex(currentIndex - 3);
      } else {
        setCurrentIndex(0);
      }
      allEventsDiv.classList.remove('fade-transition');
    }, 500);
  };
  const [showLocationMenu, setShowLocationMenu] = useState(false);
  const locationDropDownToggle = e => {
    const h3 = e.target.closest('h3');

    !h3 && setShowLocationMenu(false);
  };
  const email = localStorage.getItem('email')
    ? localStorage.getItem('email')
    : localStorage.getItem('authEmail');

  return (
    <>
      {showPopup && (
        <BookingPopUp
          setShowPopUp={setShowPopUp}
          image={
            eventData.filteredEvents[0].basicInfo.eventImage !==
            'https://example.com/image.jpg'
              ? eventData.filteredEvents[0].basicInfo.eventImage
              : '/images/event__5.avif'
          }
        />
      )}

      <WholePage>
        <StyledNav>
          {email && email !== 'undefined' ? (
            <NavbarLoggedIn email={email} />
          ) : (
            <Navbar onClick={locationDropDownToggle} />
          )}
        </StyledNav>
        {EventExists && (
          <FirstHalfPage>
            <FirstHalfPageDiv1>
              <FirstHalfPageDiv2>
                <PictureDiv>
                  <PictureDiv2>
                    <PictureDiv3></PictureDiv3>
                    <Picture>
                      <PictureSource
                        src={
                          eventData.filteredEvents[0].basicInfo.eventImage !==
                          'https://example.com/image.jpg'
                            ? eventData.filteredEvents[0].basicInfo.eventImage
                            : '/images/event__5.avif'
                        }
                      ></PictureSource>
                      <PictureBackgroundEvent
                        width="600"
                        height="300"
                        src={
                          eventData.filteredEvents[0].basicInfo.eventImage !==
                          'https://example.com/image.jpg'
                            ? eventData.filteredEvents[0].basicInfo.eventImage
                            : '/images/event__5.avif'
                        }
                      />
                    </Picture>
                  </PictureDiv2>
                </PictureDiv>

                <DetailsDiv>
                  <ActionPanel>
                    <ActionPanelul>
                      <ActionPanelLi>
                        <LiSpan>
                          <LiDiv>
                            <LiDiv2 tabIndex="-1">
                              <LiDiv3 tabIndex="0" data-spec="tooltip-wrapper">
                                <LiSpan2 data-spec="icon-button">
                                  <LiButton
                                    aria-pressed="false"
                                    type="button"
                                    fdprocessedid="4j6grm7"
                                  >
                                    <LiI data-testid="icon" data-spec="icon">
                                      <LiSvg
                                        x="0"
                                        y="0"
                                        viewBox="0 0 24 24"
                                        xmlSpace="preserve"
                                      >
                                        <LiPath
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M18.8 6.2C18.1 5.4 17 5 16 5c-1 0-2 .4-2.8 1.2L12 7.4l-1.2-1.2C10 5.4 9 5 8 5c-1 0-2 .4-2.8 1.2-1.5 1.6-1.5 4.2 0 5.8l6.8 7 6.8-7c1.6-1.6 1.6-4.2 0-5.8zm-1.4 4.4L12 16.1l-5.4-5.5c-.8-.8-.8-2.2 0-3C7 7.2 7.5 7 8 7c.5 0 1 .2 1.4.6l2.6 2.7 2.7-2.7c.3-.4.8-.6 1.3-.6s1 .2 1.4.6c.8.8.8 2.2 0 3z"
                                        ></LiPath>
                                      </LiSvg>
                                      <LiSpan3>Like Event</LiSpan3>
                                    </LiI>
                                  </LiButton>
                                </LiSpan2>
                              </LiDiv3>
                            </LiDiv2>
                          </LiDiv>
                        </LiSpan>
                      </ActionPanelLi>
                      <ActionPanelLi2>
                        <LiSpan>
                          <LiDiv>
                            <LiDiv2 tabIndex="-1">
                              <LiDiv3 tabIndex="0" data-spec="tooltip-wrapper">
                                <LiSpan2 data-spec="icon-button">
                                  <LiButton
                                    aria-pressed="false"
                                    type="button"
                                    fdprocessedid="4j6grm7"
                                  >
                                    <LiI data-testid="icon" data-spec="icon">
                                      <LiSvg
                                        x="0"
                                        y="0"
                                        viewBox="0 0 24 24"
                                        xmlSpace="preserve"
                                      >
                                        <LiPath
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M18 16v2H6v-2H4v4h16v-4z"
                                        ></LiPath>
                                        <LiPath
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M12 4L7 9l1.4 1.4L11 7.8V16h2V7.8l2.6 2.6L17 9l-5-5z"
                                        ></LiPath>
                                      </LiSvg>
                                      <LiSpan3>Share this event</LiSpan3>
                                    </LiI>
                                  </LiButton>
                                </LiSpan2>
                              </LiDiv3>
                            </LiDiv2>
                          </LiDiv>
                        </LiSpan>
                      </ActionPanelLi2>
                    </ActionPanelul>
                  </ActionPanel>
                  <DetailsDiv2>
                    {eventData.filteredEvents[0].ticketTiers.quantitySold ===
                      eventData.filteredEvents[0].ticketTiers.maxCapacity -
                        eventData.filteredEvents[0].ticketTiers.maxCapacity *
                          0.8 && (
                      <TicketsEndDiv2>
                        <TicketsEndDivInner>
                          <TicketsEndI>
                            <DetailsSvg viewBox="0 0 144 144">
                              <TicketsEndPath
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M113 23v28.242c7.038.538 12 6.718 12 13.462s-4.962 12.924-12 13.462v27.242l-8.421-3.714c-4.595-2.027-12.688-5.132-21.748-7.721-4.91-1.403-9.983-2.619-14.857-3.443l9.053 30.674H60.94L50.818 88.922C38.718 86.68 29 76.847 29 64.204c0-14.431 12.659-25.2 27.073-25.2 7.939 0 17.627-1.96 26.758-4.57 9.06-2.588 17.153-5.693 21.748-7.72L113 23zM86.129 45.973c-9.533 2.724-20.471 5.03-30.056 5.03-8.862 0-15.073 6.424-15.073 13.2 0 6.778 6.21 13.2 15.073 13.2 9.585 0 20.523 2.308 30.056 5.032A203.748 203.748 0 01101 87.325V41.083a203.748 203.748 0 01-14.871 4.89z"
                              ></TicketsEndPath>
                            </DetailsSvg>
                          </TicketsEndI>
                          <TicketsText>Ticket sales end soon</TicketsText>
                        </TicketsEndDivInner>
                      </TicketsEndDiv2>
                    )}
                    <MainDetailsDiv>
                      <EventDate>
                        {' '}
                        {convertUTCToLocalTime(
                          eventData.filteredEvents[0].basicInfo.startDateTime
                        )}{' '}
                      </EventDate>
                      <MainDetailsTitle>
                        {eventData.filteredEvents[0].basicInfo.eventName}
                      </MainDetailsTitle>
                      <MainDetailsP>
                        <DetailsStrong>
                          {eventData.filteredEvents[0].description}
                        </DetailsStrong>
                      </MainDetailsP>

                      <MainDetailsSection>
                        <HostInfoDiv>
                          <EventHostDiv>
                            <EventHostSpan>
                              By{' '}
                              <HostName>
                                {
                                  eventData.filteredEvents[0].creatorId
                                    ?.firstName
                                }{' '}
                                {
                                  eventData.filteredEvents[0].creatorId
                                    ?.lastName
                                }
                              </HostName>
                            </EventHostSpan>
                          </EventHostDiv>
                        </HostInfoDiv>
                        <FollowButtonDiv>
                          <FollowButton>Follow</FollowButton>
                        </FollowButtonDiv>
                      </MainDetailsSection>
                    </MainDetailsDiv>

                    <WhenandWhereSection>
                      <WhenandWhereDiv>
                        <WhenandWhereText>When and where</WhenandWhereText>
                      </WhenandWhereDiv>

                      <DateAndLocationDiv>
                        <DateAndTimeSection>
                          <WhenAndWhereDetailsDiv>
                            <ImageLogoDiv>
                              <DetailsI
                                data-spec="icon"
                                data-testid="icon"
                                aria-hidden="true"
                              >
                                <DetailsSvg
                                  x="0"
                                  y="0"
                                  viewBox="0 0 24 24"
                                  xmlSpace="preserve"
                                >
                                  <DetailsPath d="M16.9 6.5v-2h-2v2h-6v-2h-2v2h-2v13h14v-13h-2zm0 11h-10v-7h10v7z"></DetailsPath>
                                </DetailsSvg>
                              </DetailsI>
                            </ImageLogoDiv>
                            <RightDetailsDiv>
                              <DetailsTitleDiv>
                                <h3>Date and time</h3>
                              </DetailsTitleDiv>
                              <DetailsP>
                                <DateSpan>
                                  {convertUTCToLocalTimeLong(
                                    eventData.filteredEvents[0].basicInfo
                                      .startDateTime
                                  )}{' '}
                                  -{' '}
                                  {convertUTCToLocalTimeOnly(
                                    eventData.filteredEvents[0].basicInfo
                                      .endDateTime
                                  )}
                                </DateSpan>
                              </DetailsP>
                              <DateSelect aria-label="More options">
                                ::before
                                <DateOptions selected value="selected" disabled>
                                  More options
                                </DateOptions>
                                <DateOptions value="596694999807">
                                  Thu, Apr 6 (1:00 PM)
                                </DateOptions>
                                <DateOptions value="596695009837">
                                  Thu, Apr 13 (1:00 PM)
                                </DateOptions>
                                <DateOptions value="596695019867">
                                  Thu, Apr 20 (1:00 PM)
                                </DateOptions>
                                <DateOptions value="596695029897">
                                  Thu, Apr 27 (1:00 PM)
                                </DateOptions>
                                ::after
                              </DateSelect>
                            </RightDetailsDiv>
                          </WhenAndWhereDetailsDiv>
                        </DateAndTimeSection>

                        <LocationSection>
                          <WhenAndWhereDetailsDiv>
                            <ImageLogoDiv>
                              <DetailsI>
                                <DetailsSvg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <DetailsPath
                                    fill="#fff"
                                    d="M18,4.48a8.45,8.45,0,0,0-12,12l5.27,5.28a1,1,0,0,0,1.42,0L18,16.43A8.45,8.45,0,0,0,18,4.48ZM16.57,15,12,19.59,7.43,15a6.46,6.46,0,1,1,9.14,0ZM9,7.41a4.32,4.32,0,0,0,0,6.1,4.31,4.31,0,0,0,7.36-3,4.24,4.24,0,0,0-1.26-3.05A4.3,4.3,0,0,0,9,7.41Zm4.69,4.68a2.33,2.33,0,1,1,.67-1.63A2.33,2.33,0,0,1,13.64,12.09Z"
                                  ></DetailsPath>
                                </DetailsSvg>
                              </DetailsI>
                            </ImageLogoDiv>
                            <DetailsTitleDiv>
                              <h3 style={{ paddingBottom: '1rem' }}>
                                Location
                              </h3>
                              <DetailsP>
                                <LocationStrong>
                                  {
                                    eventData.filteredEvents[0].basicInfo
                                      .location.venueName
                                  }
                                </LocationStrong>
                                <LocationStrong>
                                  {
                                    eventData.filteredEvents[0].basicInfo
                                      .location.route
                                  }
                                  {
                                    eventData.filteredEvents[0].basicInfo
                                      .location.streetNumber
                                  }
                                  ,
                                  {
                                    eventData.filteredEvents[0].basicInfo
                                      .location.administrativeAreaLevel1
                                  }
                                  ,
                                  {
                                    eventData.filteredEvents[0].basicInfo
                                      .location.city
                                  }
                                  ,
                                  {
                                    eventData.filteredEvents[0].basicInfo
                                      .location.country
                                  }
                                </LocationStrong>
                              </DetailsP>
                              <MapButtonDiv>
                                <MapButton onClick={handleShowMap}>
                                  {mapStatus}
                                </MapButton>
                                <MapDetailsI data-spec="icon">
                                  <DetailsSvg
                                    viewBox="0 0 24 24"
                                    xmlSpace="preserve"
                                  >
                                    <MapDetailsPath
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M7 10.2l5 5 5-5-1.4-1.4-3.6 3.6-3.6-3.6z"
                                    ></MapDetailsPath>
                                  </DetailsSvg>
                                </MapDetailsI>
                              </MapButtonDiv>
                            </DetailsTitleDiv>
                            <RightDetailsDiv>
                              {showMap && (
                                <Map
                                  style={{
                                    marginBottom: '3rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                  }}
                                >
                                  {isLoaded && (
                                    <GoogleMap
                                      zoom={10}
                                      center={{
                                        lat: eventData.filteredEvents[0]
                                          .basicInfo.location.latitude,
                                        lng: eventData.filteredEvents[0]
                                          .basicInfo.location.longitude,
                                      }}
                                      mapContainerClassName="map__container"
                                    >
                                      <Marker
                                        position={{
                                          lat: eventData.filteredEvents[0]
                                            .basicInfo.location.latitude,
                                          lng: eventData.filteredEvents[0]
                                            .basicInfo.location.longitude,
                                        }}
                                      />
                                    </GoogleMap>
                                  )}
                                </Map>
                              )}
                            </RightDetailsDiv>
                          </WhenAndWhereDetailsDiv>
                        </LocationSection>
                      </DateAndLocationDiv>
                    </WhenandWhereSection>

                    <AboutEvent>
                      {!eventData.isEventFree && (
                        <RefundSection>
                          <RefundDiv1>
                            <RefundTitle>Refund Policy</RefundTitle>
                          </RefundDiv1>
                          <RefundDiv2>
                            Contact the organizer to request a refund.
                          </RefundDiv2>
                          <RefundDiv2>
                            Eventbrite's fee is nonrefundable.
                          </RefundDiv2>
                        </RefundSection>
                      )}
                      <AboutEventSubDiv1>
                        <AboutEventTitleDiv>
                          <AboutEventTitle>About this event</AboutEventTitle>
                        </AboutEventTitleDiv>
                        <AboutEventUL data-testid="highlights">
                          <AboutEventLi>
                            <LogoSpan>
                              <DetailsI>
                                <DetailsSvg viewBox="0 0 24 24" fill="none">
                                  <DetailsPath
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M11.001 8h1.991v4h2.64v2h-4.63V8z"
                                  ></DetailsPath>
                                  <DetailsPath
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M17.676 10.053A6.011 6.011 0 0012 6c-3.308 0-6 2.692-6 6a6.007 6.007 0 006.888 5.934l1.055 1.828a8 8 0 115.879-9.45l-2.146-.26zm.323 2.053a5.963 5.963 0 01-.453 2.183l1.687 1.134a7.959 7.959 0 00.76-3.075l-1.994-.242zm-1.517 3.878l1.674 1.125a8.035 8.035 0 01-2.328 1.917l-1.002-1.734a6.04 6.04 0 001.656-1.308z"
                                  ></DetailsPath>
                                </DetailsSvg>
                              </DetailsI>
                            </LogoSpan>
                            {convertUTCToLocalHoursOnly(
                              eventData.filteredEvents[0].basicInfo
                                .startDateTime
                            ) -
                              convertUTCToLocalHoursOnly(
                                eventData.filteredEvents[0].basicInfo
                                  .endDateTime
                              )}
                            {eventHours()}
                          </AboutEventLi>
                          <AboutEventLi>
                            <LogoSpan>
                              <DetailsI>
                                <DetailsSvg viewBox="0 0 24 24" fill="none">
                                  <DetailsPath
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 5.79c3.05 0 5.523 2.403 5.523 5.368h1.84C19.364 7.205 16.068 4 12 4v1.79zm-1.768 2.702c-1.744 0-1.744-2.054-1.744-2.054H5V20h3.488s0-2.055 1.744-2.055S11.976 20 11.976 20h3.488v-6.476H13.72v4.78h-.36c-.526-1.217-1.598-2.054-3.128-2.054s-2.602.837-3.128 2.055h-.36V8.133h.36c.526 1.218 1.598 2.055 3.128 2.055V8.492zm3.609 3.087c0-.988-.824-1.79-1.841-1.79V8c2.033 0 3.682 1.602 3.682 3.579H13.84z"
                                  ></DetailsPath>
                                </DetailsSvg>
                              </DetailsI>
                            </LogoSpan>
                            Mobile eTicket
                          </AboutEventLi>
                        </AboutEventUL>
                        <AboutEventSubDiv2>
                          <AboutEventSubDiv3>
                            <AboutEventSubDiv4>
                              <AboutEventP>
                                {eventData.filteredEvents[0].summary}
                              </AboutEventP>
                            </AboutEventSubDiv4>
                          </AboutEventSubDiv3>
                        </AboutEventSubDiv2>
                      </AboutEventSubDiv1>
                    </AboutEvent>
                  </DetailsDiv2>
                  <ReserveDiv>
                    {eventData.filteredEvents[0].ticketTiers.quantitySold ===
                      eventData.filteredEvents[0].ticketTiers.maxCapacity -
                        eventData.filteredEvents[0].ticketTiers.maxCapacity *
                          0.8 && (
                      <TicketsEndDiv>
                        <TicketsEndDivInner>
                          <TicketsEndI>
                            <DetailsSvg viewBox="0 0 144 144">
                              <TicketsEndPath
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M113 23v28.242c7.038.538 12 6.718 12 13.462s-4.962 12.924-12 13.462v27.242l-8.421-3.714c-4.595-2.027-12.688-5.132-21.748-7.721-4.91-1.403-9.983-2.619-14.857-3.443l9.053 30.674H60.94L50.818 88.922C38.718 86.68 29 76.847 29 64.204c0-14.431 12.659-25.2 27.073-25.2 7.939 0 17.627-1.96 26.758-4.57 9.06-2.588 17.153-5.693 21.748-7.72L113 23zM86.129 45.973c-9.533 2.724-20.471 5.03-30.056 5.03-8.862 0-15.073 6.424-15.073 13.2 0 6.778 6.21 13.2 15.073 13.2 9.585 0 20.523 2.308 30.056 5.032A203.748 203.748 0 01101 87.325V41.083a203.748 203.748 0 01-14.871 4.89z"
                              ></TicketsEndPath>
                            </DetailsSvg>
                          </TicketsEndI>
                          <TicketsText>Ticket sales end soon</TicketsText>
                        </TicketsEndDivInner>
                      </TicketsEndDiv>
                    )}
                    {!eventData.isEventFree &&
                      !eventData.isEventCapacityFull && (
                        <WholeTicketsDiv>
                          <TicketsDiv>
                            <TicketsSection>
                              <TicketsForm>
                                <div>
                                  <div>
                                    <div>
                                      <TicketsUL>
                                        <TicketsLi>
                                          <TicketsSubDiv1>
                                            <TicketsSubDiv2>
                                              <TicketsSubDiv3>
                                                <TicketsSubDiv3>
                                                  <TicketsSubDiv5>
                                                    General Admission
                                                  </TicketsSubDiv5>
                                                </TicketsSubDiv3>
                                                <TicketsSubDiv4>
                                                  <TicketsSubDiv6>
                                                    <TicketsButtonSubtract
                                                      style={styles}
                                                      onClick={subtract}
                                                    >
                                                      <TicketsI>
                                                        <TicketsSvg
                                                          x="0"
                                                          y="0"
                                                          viewBox="0 0 24 24"
                                                          xmlSpace="preserve"
                                                        >
                                                          <g>
                                                            <TicketsPath
                                                              fill="#fff"
                                                              d="M6.5 11.5h11v1h-11z"
                                                            ></TicketsPath>
                                                            <TicketsPath d="M6.5 11.5h11v1h-11z"></TicketsPath>
                                                          </g>
                                                        </TicketsSvg>
                                                      </TicketsI>
                                                    </TicketsButtonSubtract>
                                                    <TicketsSubDiv7>
                                                      {' '}
                                                      {count}{' '}
                                                    </TicketsSubDiv7>
                                                    <TicketsButtonAdd
                                                      onClick={add}
                                                    >
                                                      <TicketsI>
                                                        <TicketsSvg
                                                          x="0"
                                                          y="0"
                                                          viewBox="0 0 24 24"
                                                          xmlSpace="preserve"
                                                        >
                                                          <TicketsPath
                                                            clipRule="evenodd"
                                                            fillRule="evenodd"
                                                            d="M13 11V4h-2v7H4v2h7v7h2v-7h7v-2z"
                                                          ></TicketsPath>
                                                        </TicketsSvg>
                                                      </TicketsI>
                                                    </TicketsButtonAdd>
                                                  </TicketsSubDiv6>
                                                </TicketsSubDiv4>
                                              </TicketsSubDiv3>
                                              <TicketsSubDiv8>
                                                <TicketsSubDiv9>
                                                  <TicketsFreeSpan>
                                                    Free
                                                  </TicketsFreeSpan>
                                                  <BuyTicketsButton>
                                                    <TicketsI>
                                                      <TicketsSvg>
                                                        <TicketsFreePath
                                                          fillRule="evenodd"
                                                          clipRule="evenodd"
                                                          d="M12 6c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6zm0 14c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8z"
                                                        ></TicketsFreePath>
                                                        <TicketsFreePath
                                                          fillRule="evenodd"
                                                          clipRule="evenodd"
                                                          d="M11 8h2v2h-2z"
                                                        ></TicketsFreePath>
                                                        <TicketsFreePath
                                                          fillRule="evenodd"
                                                          clipRule="evenodd"
                                                          d="M11 11h2v5h-2z"
                                                        ></TicketsFreePath>
                                                      </TicketsSvg>
                                                    </TicketsI>
                                                  </BuyTicketsButton>
                                                </TicketsSubDiv9>
                                              </TicketsSubDiv8>
                                            </TicketsSubDiv2>
                                          </TicketsSubDiv1>
                                        </TicketsLi>
                                      </TicketsUL>
                                    </div>
                                  </div>
                                </div>
                              </TicketsForm>
                              <TicketsButton onClick={displayPopup}>
                                Reserve a spot
                              </TicketsButton>
                            </TicketsSection>
                          </TicketsDiv>
                          <input type="hidden" />
                        </WholeTicketsDiv>
                      )}

                    {!eventData.isEventFree &&
                      !eventData.isEventCapacityFull && (
                        <PricedTickets>
                          <PricedTicketsPriceDiv>
                            <PricedTicketsPrice>
                              From $0 - $
                              {eventData.filteredEvents[0].ticketTiers.price}
                            </PricedTicketsPrice>
                          </PricedTicketsPriceDiv>
                          <PricedTicketsButtonDiv>
                            <TicketsButton>Get Tickets</TicketsButton>
                          </PricedTicketsButtonDiv>
                        </PricedTickets>
                      )}
                    {eventData.isEventCapacityFull && (
                      <SoldOutTickets>
                        <PricedTicketsPriceDiv>
                          <PricedTicketsPrice>Sales Ended</PricedTicketsPrice>
                        </PricedTicketsPriceDiv>
                        <PricedTicketsButtonDiv>
                          <SoldOutTicketsButton>Details</SoldOutTicketsButton>
                        </PricedTicketsButtonDiv>
                      </SoldOutTickets>
                    )}
                  </ReserveDiv>
                </DetailsDiv>
              </FirstHalfPageDiv2>
            </FirstHalfPageDiv1>
          </FirstHalfPage>
        )}
        <AboutTheOrganizer>
          <h2>About the organizer</h2>
          <div className="aboutOrganizerContainer">
            <div className="organizedBySection">
              <div className="organizedBy">Organized by</div>

              <a
                href="https://www.eventbrite.com/o/gomycode-15634961946"
                className="organizerLink"
                target="_blank"
                rel="noreferrer"
              >
                GoMyCode
              </a>
            </div>

            <div className="followersSection">
              <div className="followersdiv">
                <span className="followersAmount"> 2.8k </span>
                <span className="followersText"> Followers </span>
              </div>
            </div>
            <ul className="infoSection">
              <button className="contactButton">Contact</button>
              <button className="followButton">Follow</button>
            </ul>

            <div className="socialsSection">
              <span className="organizerFacebookSpan">
                <a
                  href="https://www.facebook.com/gomycode"
                  className="organizerFacebook"
                >
                  <svg className="facebookSvg">
                    <path d="M14.893 11.89L15.336 9h-2.773V7.124c0-.79.387-1.562 1.63-1.562h1.26v-2.46s-1.144-.196-2.238-.196c-2.285 0-3.777 1.385-3.777 3.89V9h-2.54v2.89h2.54v6.989a10.075 10.075 0 003.124 0V11.89h2.33"></path>
                  </svg>
                </a>
              </span>
              <span className="organizerTwitterSpan">
                <a
                  href="https://www.twitter.com/gomycode"
                  className="organizerTwitter"
                >
                  <svg className="twitterSvg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21.4 4.1s-.6.4-1.2.7c-.6.2-1.3.4-1.3.4s-2-2.3-4.9-.8c-2.9 1.5-2 4.5-2 4.5s-2.9-.2-4.9-1.2C4.9 6.5 3.4 4.6 3.4 4.6s-.9 1.4-.5 3 1.8 2.5 1.8 2.5-.4 0-.9-.2c-.5-.1-1-.4-1-.4s-.1 1.3.8 2.6S6 13.6 6 13.6l-.8.2h-.9s.2 1.1 1.4 2c1.1.8 2.3.8 2.3.8s-1.1.9-2.7 1.4c-1.6.5-3.3.3-3.3.3s6 4 12.2.3c6.2-3.7 5.7-10.7 5.7-10.7s.6-.4 1-.9l1-1.2s-.7.3-1.3.5c-.5.2-.9.2-.9.2s.6-.4.9-.9c.5-.7.8-1.5.8-1.5z"
                    ></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </AboutTheOrganizer>

        <MoreEventsOrganizer>
          <h2>More events from this organizer</h2>

          <MoreEvents
            eventName="Atelier Gratuit : construis ton propre ChatGPT ! - GOMYCODE ABIDJAN"
            eventDateTime="Today at 2:00 PM"
            eventLocation="GOMYCODE Côte d'Ivoire • Abidjan, District Autonome d'Abidjan"
            eventPrice="Free"
            organizerName="GoMyCode"
            organizerFollowers="2.8k followers"
            imageSrc="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F487781489%2F233874568789%2F1%2Foriginal.20230407-162824?w=512&amp;auto=format%2Ccompress&amp;q=75&amp;sharp=10&amp;rect=1%2C372%2C8000%2C4000&amp;s=34c811696b0d73045e71f74e745b37ba"
          />

          <MoreEvents
            eventName="Atelier Gratuit : construis ton propre ChatGPT ! - GOMYCODE ABIDJAN"
            eventDateTime="Today at 2:00 PM"
            eventLocation="GOMYCODE Côte d'Ivoire • Abidjan, District Autonome d'Abidjan"
            eventPrice="Free"
            organizerName="GoMyCode"
            organizerFollowers="2.8k followers"
            imageSrc="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F487781489%2F233874568789%2F1%2Foriginal.20230407-162824?w=512&amp;auto=format%2Ccompress&amp;q=75&amp;sharp=10&amp;rect=1%2C372%2C8000%2C4000&amp;s=34c811696b0d73045e71f74e745b37ba"
          />

          <MoreEvents
            eventName="Atelier Gratuit : construis ton propre ChatGPT ! - GOMYCODE ABIDJAN"
            eventDateTime="Today at 2:00 PM"
            eventLocation="GOMYCODE Côte d'Ivoire • Abidjan, District Autonome d'Abidjan"
            eventPrice="Free"
            organizerName="GoMyCode"
            organizerFollowers="2.8k followers"
            imageSrc="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F487781489%2F233874568789%2F1%2Foriginal.20230407-162824?w=512&amp;auto=format%2Ccompress&amp;q=75&amp;sharp=10&amp;rect=1%2C372%2C8000%2C4000&amp;s=34c811696b0d73045e71f74e745b37ba"
          />
        </MoreEventsOrganizer>

        <OtherEventsYouMayLike>
          <div className="otherEventsDiv">
            <div className="titleAndButtons">
              <div className="title">
                <h2>Other events you may like</h2>
              </div>

              <div className="buttonsDiv">
                <span class="backButtonSpan">
                  <button
                    onClick={handleBackward}
                    disabled={currentIndex === 0}
                    className="backbutton"
                  >
                    <svg class="backSvg">
                      <path
                        class="arrow-left-chunky_svg__eds-icon--arrow-left-chunky_base"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4 12l8 8 1.5-1.5L8 13h12v-2H8l5.5-5.5L12 4z"
                      ></path>
                    </svg>
                  </button>
                </span>

                <span class="forwardButtonSpan">
                  <button
                    button
                    onClick={handleForward}
                    disabled={currentIndex >= data.length - 3}
                    className="forwardbutton"
                  >
                    <svg class="forwardSvg">
                      <path
                        class="arrow-right-chunky_svg__eds-icon--arrow-right-chunky_base"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.5 5.5L16 11H4v2h12l-5.5 5.5L12 20l8-8-8-8z"
                      ></path>
                    </svg>
                  </button>
                </span>
              </div>
            </div>
            <div
              className="allEventsDiv"
              ref={allEventsDivRef}
              key={data.length}
            >
              <TransitionGroup>
                <div className="alignEventsDiv">
                  {data
                    .slice(currentIndex, currentIndex + 3)
                    .map((item, index) => (
                      <CSSTransition
                        key={item.id}
                        classNames="fade"
                        timeout={500}
                      >
                        <EventBox
                          className="eventCard"
                          key={index}
                          image={item.image}
                          eventTitle={item.eventTitle}
                          date={item.date}
                          description={item.description}
                          organizer={item.organizer}
                          followers={item.followers}
                        />
                      </CSSTransition>
                    ))}
                </div>
              </TransitionGroup>
            </div>
          </div>
        </OtherEventsYouMayLike>
      </WholePage>
    </>
  );
}
