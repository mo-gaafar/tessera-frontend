/**
 * @file PublishPage.jsx
 * @description This file contains the The Publish page component and its logic
 * @name PublishPage.jsx
 * @author @Clara
 * @requires react
 * @requires react-router-dom
 * @requires ./styles/PublishPage.styled
 * @exports PublishPage
 *
 */

import React from 'react';
import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Sidebar from '../../components/Sidebar';
import { StyledNav } from '../LandingPage/styles/Landing.styled';
import NavbarLoggedIn from '../LandingPage/NavbarLoggedIn';
import Navbar from '../LandingPage/NavBar';

import {
  FormInput,
  SelectBox,
  StyleDiv,
  InputGroup,
} from './styles/PublishPage.Styled';
function PublishPage() {
  const email = localStorage.getItem('email')
    ? localStorage.getItem('email')
    : localStorage.getItem('authEmail');
  const event = localStorage.getItem('eventID');
  const token = localStorage.getItem('token');
  const [EventData, setEventData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const result = await fetch(
        `https://www.tessera.social/api/event-management/retrieve/${event}`,
        {
          method: 'GET',

          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await result.json();
      setEventData(data.event);
      console.log(EventData);
    };

    getData();
  }, []);

  // const event = props.event;
  const url = 'https://www.tessera.social/api/event-management/publish/';
  const [eventType, setEventType] = useState('public');
  const [audienceType, setAudienceType] = useState('anyone');
  const [publishType, setPublishType] = useState('now');
  const [publishDate, setPublishDate] = useState(new Date());
  const [publishButton, setPublishButton] = useState('Schedule');
  const [password, setPassword] = useState('');

  async function publishData() {
    const data = {
      isPublic: eventType === 'public' ? true : false,
      publishNow: publishType === 'now' ? true : false,
      publicDate: publishDate,
      link: audienceType === 'anyone' ? true : false,
      password: audienceType === 'password' ? true : false,
      alwaysPrivate: eventType === 'public' ? true : false,
      privateToPublicDate: publishDate,
    };

    const response = await fetch(
      `https://www.tessera.social/api/event-management/publish/${event}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
    console.log(await response.json());
  }

  const totalCapacity = EventData.ticketTiers?.reduce(
    (sumCapacity, ticketTier) => {
      return sumCapacity + ticketTier.maxCapacity;
    },
    0
  );

  const lowestPrice = EventData.ticketTiers?.reduce((minPrice, ticketTier) => {
    if (Number(ticketTier.price) < minPrice) {
      return Number(ticketTier.price);
    } else {
      return minPrice;
    }
  }, Infinity);
  const convertTime = Iso => {
    const date = new Date(Iso);
    const dateString = date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
    const timeString = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    const formattedDate = `${dateString} at ${timeString}`;
    return formattedDate;
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

      <StyleDiv>
        <Sidebar event={true} />
        <div className="publish">
          <h1 className="header">Publish Your Event</h1>
          <div className="previewBox">
            <img src={EventData.basicInfo?.eventImage} />
            <div className="publishDetails">
              <h2>{EventData.basicInfo?.eventName}</h2>
              <p>{convertTime(EventData.basicInfo?.startDateTime)}</p>
              <div className="price">
                <div className="priceAmount">
                  <svg viewBox="0 0 24 24">
                    <path d="M10 13v-2h4v2zm6 5V6h-.4C15 7.4 13.8 8.4 12 8.4S9 7.4 8.4 6H8v12h.4c.6-1.4 1.8-2.4 3.6-2.4s3 1 3.6 2.4zM14 4h4v16h-4s0-2.4-2-2.4-2 2.4-2 2.4H6V4h4s0 2.4 2 2.4S14 4 14 4z"></path>
                  </svg>
                  <p>${lowestPrice}</p>
                </div>
                <div className="priceAmount">
                  <svg
                    id="user-chunky_svg__eds-icon--user-chunky_svg"
                    x="0"
                    y="0"
                    viewBox="0 0 24 24"
                    xml:space="preserve"
                  >
                    <path
                      id="user-chunky_svg__eds-icon--user-chunky_base"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 18c-1.2 0-2.4-.3-3.5-.7.6-1.3 2-2.2 3.5-2.2s2.9.9 3.5 2.2c-1.1.4-2.3.7-3.5.7zm6.5-2.9c-.4.4-.8.8-1.3 1.1a5.989 5.989 0 00-10.6 0c-.5-.3-.9-.7-1.3-1.1L4 16.5c2.1 2.3 5 3.5 8 3.5s5.9-1.3 8-3.5l-1.5-1.4z"
                    ></path>
                    <path
                      id="user-chunky_svg__eds-icon--user-chunky_circle"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 4C9.7 4 7.8 5.9 7.8 8.2s1.9 4.2 4.2 4.2 4.2-1.9 4.2-4.2S14.3 4 12 4zm0 6.4c-1.2 0-2.2-1-2.2-2.2C9.8 7 10.8 6 12 6s2.2 1 2.2 2.2c0 1.2-1 2.2-2.2 2.2z"
                    ></path>
                  </svg>
                  <p>{totalCapacity}</p>
                </div>
              </div>
              <p>{EventData.description}</p>
            </div>
          </div>
          <div className="otherDetails">
            <div className="privacyAndTime">
              <div className="privacy">
                <h2>Who can see your event?</h2>
                <div className="PrivacyRadio">
                  <div className="privacyOption">
                    <input
                      type="radio"
                      id="public"
                      name="privacy"
                      value="public"
                      onChange={e => {
                        setEventType(e.target.value);
                      }}
                    />
                    <div
                      className="public"
                      onClick={() => setEventType('public')}
                    >
                      <label for="public">Public</label>
                      <p>Shared on Eventbrite and search engines</p>
                    </div>
                  </div>
                  {/* <div className="privacyOption">
                    <input
                      type="radio"
                      id="private"
                      name="privacy"
                      value="private"
                      onChange={e => {
                        setEventType(e.target.value);
                      }}
                    />
                    <div
                      className="private"
                      onClick={() => setEventType('private')}
                    >
                      <label for="private">Private</label>
                      <p>Only available to a selected audience</p>
                    </div>
                  </div> */}
                </div>
              </div>
              {eventType === 'private' && (
                <div className="privateBox">
                  <h2>Choose your audience</h2>
                  <div className="audienceBox">
                    <InputGroup style={{ width: '50%', marginRight: '0px' }}>
                      <div className="inputLabel">
                        <label for="password">Audience</label>
                      </div>
                      <SelectBox
                        name="audience"
                        id="audience"
                        value={audienceType}
                        onChange={e => {
                          setAudienceType(e.target.value);
                        }}
                      >
                        <option value="anyone">Anyone with the link</option>
                        <option value="password">
                          Only people with the password
                        </option>
                      </SelectBox>
                    </InputGroup>
                  </div>
                  {audienceType === 'password' && (
                    <div className="passwordBox">
                      <InputGroup style={{ width: '50%', marginRight: '0px' }}>
                        <div className="inputLabel">
                          <label for="password">Password</label>
                        </div>
                        <FormInput
                          type="text"
                          id="password"
                          placeholder="Password"
                          onChange={e => setPassword(e.target.value)}
                        />
                      </InputGroup>
                      <p>0/50</p>
                    </div>
                  )}
                </div>
              )}
              {eventType === 'public' && (
                <div className="PublishTime">
                  <h2>When should we publish your event?</h2>
                  <div className="PublishTimeRadio">
                    <div>
                      <input
                        type="radio"
                        id="now"
                        name="publish"
                        value="now"
                        onChange={e => {
                          setPublishButton('Publish');
                          setPublishType(e.target.value);
                        }}
                      />
                      <label for="now">Publish Now</label>
                    </div>
                    {/* <div>
                      <input
                        type="radio"
                        id="later"
                        name="publish"
                        value="later"
                        onChange={e => {
                          setPublishButton('Schedule');
                          setPublishType(e.target.value);
                        }}
                      />
                      <label for="later">Schedule for later</label>
                    </div> */}
                  </div>
                  <div className="dateAndZone">
                    <div className="publishDate">
                      <div
                        className={
                          publishType === 'now' ? 'date disabled' : 'date'
                        }
                      >
                        <svg
                          id="calendar-chunky_svg__eds-icon--calendar-chunky_svg"
                          x="0"
                          y="0"
                          viewBox="0 0 24 24"
                          xml:space="preserve"
                        >
                          <path
                            id="calendar-chunky_svg__eds-icon--calendar-chunky_base"
                            d="M16.9 6.5v-2h-2v2h-6v-2h-2v2h-2v13h14v-13h-2zm0 11h-10v-7h10v7z"
                          ></path>
                        </svg>
                        <div className="dateContainer">
                          <p>Start Date</p>
                          <DatePicker
                            selected={publishDate}
                            disabled={false ? 'disabled' : ''}
                            onChange={date => setPublishDate(date)}
                          />
                        </div>
                      </div>
                      {/* <div className="time">
                        <div className="startTime">
                          <p>Start Time</p>
                          <p>05:00 PM</p>
                        </div>
                      </div> */}
                    </div>
                    {/* <p>Time zone is the same as your event's</p> */}
                  </div>
                </div>
              )}
              {eventType === 'private' && (
                <div className="changeToPublic">
                  <h2>Will this event ever be public?</h2>
                  <div className="PublishTimeRadio">
                    <div>
                      <input
                        type="radio"
                        id="keepprivate"
                        name="keepprivate"
                        value="private"
                      />
                      <label for="keepprivate">No, keep it private</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="changepublic"
                        name="keepprivate"
                        value="public"
                      />
                      <label for="changepublic">
                        Yes, schedule to share publicly
                      </label>
                    </div>
                  </div>
                  <div className="dateAndZone">
                    <div className="publishDate">
                      <div className="date">
                        <svg
                          id="calendar-chunky_svg__eds-icon--calendar-chunky_svg"
                          x="0"
                          y="0"
                          viewBox="0 0 24 24"
                          xml:space="preserve"
                        >
                          <path
                            id="calendar-chunky_svg__eds-icon--calendar-chunky_base"
                            d="M16.9 6.5v-2h-2v2h-6v-2h-2v2h-2v13h14v-13h-2zm0 11h-10v-7h10v7z"
                          ></path>
                        </svg>
                        <div className="startDate">
                          <p>Start Date</p>
                          <p>05/04/2023</p>
                        </div>
                      </div>
                      <div className="time">
                        <div className="startTime">
                          <p>Start Time</p>
                          <p>05:00 PM</p>
                        </div>
                      </div>
                    </div>
                    <p>Time zone is the same as your event's</p>
                  </div>
                </div>
              )}
            </div>
            <div className="PublishTips">
              <div className="TipsIcon">
                <i
                  class="eds-vector-image eds-icon--small"
                  data-spec="icon"
                  data-testid="icon"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M15 22.5H9v-2h6zm0-4H9v-3.67a7 7 0 1 1 6 0zm-4-2h2v-3.05l.67-.24a5 5 0 1 0-3.34 0l.67.23z"
                      fill="#39364f"
                    ></path>
                  </svg>
                </i>
                <h2>Tips before you publish</h2>
              </div>
              <div className="Tips">
                <div className="Links">
                  <span>Create promo codes for your event</span>
                  <svg
                    class="arrow-right-chunky_svg__eds-icon--arrow-right-chunky_svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      class="arrow-right-chunky_svg__eds-icon--arrow-right-chunky_base"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.5 5.5L16 11H4v2h12l-5.5 5.5L12 20l8-8-8-8z"
                    ></path>
                  </svg>
                </div>
                <div className="Links">
                  <span>Customize your order form</span>
                  <svg
                    class="arrow-right-chunky_svg__eds-icon--arrow-right-chunky_svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      class="arrow-right-chunky_svg__eds-icon--arrow-right-chunky_base"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.5 5.5L16 11H4v2h12l-5.5 5.5L12 20l8-8-8-8z"
                    ></path>
                  </svg>
                </div>
                <div className="Links">
                  <span>Manage how you get paid</span>
                  <svg
                    class="arrow-right-chunky_svg__eds-icon--arrow-right-chunky_svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      class="arrow-right-chunky_svg__eds-icon--arrow-right-chunky_base"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.5 5.5L16 11H4v2h12l-5.5 5.5L12 20l8-8-8-8z"
                    ></path>
                  </svg>
                </div>
                <div className="Links">
                  <span>Set your refund policy</span>
                  <svg
                    class="arrow-right-chunky_svg__eds-icon--arrow-right-chunky_svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      class="arrow-right-chunky_svg__eds-icon--arrow-right-chunky_base"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.5 5.5L16 11H4v2h12l-5.5 5.5L12 20l8-8-8-8z"
                    ></path>
                  </svg>
                </div>
                <div className="Links">
                  <span>
                    Add this event to a collection to increase visibility
                  </span>
                  <svg
                    class="arrow-right-chunky_svg__eds-icon--arrow-right-chunky_svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      class="arrow-right-chunky_svg__eds-icon--arrow-right-chunky_base"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.5 5.5L16 11H4v2h12l-5.5 5.5L12 20l8-8-8-8z"
                    ></path>
                  </svg>
                </div>
                <div className="Links">
                  <span>Develop a safety plan for your event</span>
                  <svg
                    class="arrow-right-chunky_svg__eds-icon--arrow-right-chunky_svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      class="arrow-right-chunky_svg__eds-icon--arrow-right-chunky_base"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.5 5.5L16 11H4v2h12l-5.5 5.5L12 20l8-8-8-8z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bottomBar">
            <button className="PublishButton" onClick={() => publishData()}>
              {publishButton}
            </button>
          </div>
        </div>
      </StyleDiv>
    </>
  );
}

export default PublishPage;
