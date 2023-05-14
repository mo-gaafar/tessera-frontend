/**
 * 
 * @name Tickets.jsx
 * @author @MaryamMoataz
 * @requires react
 * @requires react-router-dom
 * @requires CreatePromocode
 * @requires AddTicketSidemenu
 * @requires ImportPromocode
 * @requires Sidebar
 * @requires StyledNav
 * @requires NavbarLoggedIn
 * @requires Navbar
 * @requires './styles/Tickets.styled'
 * @exports CreateTickets
 * @description This file contains the Tickets(no tickets created), Tickets(when there is a ticket or more created),
 * Promocodes(no promocodes created), Promocodes(when there is a promocode or more created) pages.
 * 
 */


import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  MainTicketsDiv,
  LetsCreateTicketsDiv,
  TicketCreatedDiv,
  PromocodesPageDiv,
  PromocodesSavePageDiv,
} from './styles/Tickets.styled';

import { CreatePromocode } from './CreatePromoSidemenu';
import AddTicketSidemenu from './AddTicketSidemenu';
import Sidebar from '../../components/Sidebar';
import { StyledNav } from '../LandingPage/styles/Landing.styled';
import NavbarLoggedIn from '../LandingPage/NavbarLoggedIn';
import Navbar from '../LandingPage/NavBar';
import { ImportPromocode } from './ImportPromoSidemenu';
import axios from 'axios';

export default function CreateTickets() {
  
  const event = localStorage.getItem('eventID');
  const token = localStorage.getItem('token');

  const [replaceContentAfterSave, setreplaceContentAfterSave] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ShowAmissionsPage, setShowAmissionsPage] = useState(true);
  const [ShowPromocodesPage, setShowPromocodesPage] = useState(false);

  const [isCreatePromoMenuOpen, setIsCreatePromoMenuOpen] = useState(false);
  const [isImportPromoMenuOpen, setIsImportPromoMenuOpen] = useState(false);
  const [isPromoIntroOpen, setIsPromoIntroOpen] = useState(true);

  const [isDataSubmitted, setIsDataSubmitted] = useState(0);
  const [isPromoDataSubmitted, setIsPromoDataSubmitted] = useState(0);

  const [selectedTicket, setSelectedTicket] = useState({});
  const [ticketTiers, setTicketTiers] = useState([]);
  const [promoCodes, setPromoCodes] = useState([]);
  const [data, setData] = useState([
    {
      code: 'A',
      discount: 'C',
      remainingUses: 'D',
      status: 'E',
    },
  ]);
  // useEffect(() => {
  //   async function getTicketsTier() {
  //     const url = `https://www.tessera.social/api/event-tickets/retrieve-event-ticket-tier/${event}`;
  //     const res = await axios.get(url);
  //     setTicketTiers(res['data']['ticketTiers']);
  //     if (res['data']['ticketTiers'].length > 0) {
  //       setreplaceContentAfterSave(true);
  //     }
  //     console.log(res['data']['ticketTiers']);
  //   }
  //   getTicketsTier();
  // }, []);

  useEffect(() => {
    async function getTicketsTier() {
      const url = `https://www.tessera.social/api/event-tickets/retrieve-event-ticket-tier/${event}`;
      const res = await axios.get(url);
      setTicketTiers(res['data']['ticketTiers']);
      if (res['data']['ticketTiers'].length > 0) {
        setreplaceContentAfterSave(true);
      }
      console.log(res['data']['ticketTiers']);
    }
    getTicketsTier();
  }, [isDataSubmitted]);

  useEffect(() => {
    async function getTicketsTier() {
      const url = `https://www.tessera.social/api/manage/events/${event}/promocode/retrieve`;
      const res = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`
          
      }});
      setPromoCodes(res['data']['promocodes']);
      setData(res['data']['promocodes']);
      if (res['data']['promocodes'].length > 0) {

        setIsPromoIntroOpen(false);
      }
      console.log(res['data']['promocodes']);
    }
    getTicketsTier();
  }, [isPromoDataSubmitted]);

  function closeAllMenus() {
    setIsCreatePromoMenuOpen(false);
    setIsImportPromoMenuOpen(false);
    setIsMenuOpen(false);
  }




  const getMaxRowLength = columnName => {
    return data.reduce((max, row) => {
      const value = row[columnName].toString().length;
      return value > max ? value : max;
    }, 0);
  };

  const getColumnWidth = columnName => {
    return getMaxRowLength(columnName) + 'ch';
  };

  const email = localStorage.getItem('email')
    ? localStorage.getItem('email')
    : localStorage.getItem('authEmail');

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
      <div data-testid="createTickets" style={{ display: 'flex' }}>
        <Sidebar event={false} />

        <MainTicketsDiv>
          {replaceContentAfterSave && (
            <TicketCreatedDiv>
              <h1>Tickets</h1>

              <div className="TicketsTabsDiv">
                <button
                  className="TicketsTabsButton"
                  onClick={() => {
                    setShowAmissionsPage(true);
                    setShowPromocodesPage(false);
                    closeAllMenus();
                  }}
                >
                  Admission
                </button>
                <button
                  className="TicketsTabsButton"
                  onClick={() => {
                    setShowAmissionsPage(false);
                    setShowPromocodesPage(true);
                    closeAllMenus();
                  }}
                >
                  Promo codes
                </button>
              </div>

              {ShowAmissionsPage && (
                <div className="AdmissionsDiv">
                  <div className="AddTicketsDiv">
                    <button
                      className="AddTicketsButton"
                      onClick={() => {
                        setIsMenuOpen(true);
                      }}
                    >
                      Add tickets
                    </button>
                  </div>

                  <div className="AllTicketsDiv">
                    {ticketTiers != undefined &&
                      ticketTiers.map(ticketTier => (
                        <div
                          className="TicketCreatedInfoDiv"
                          onClick={() => {
                            setIsMenuOpen(true);
                            setSelectedTicket(ticketTier);
                          }}
                        >
                          <svg
                            className="TicketCreatedScrollSvg"
                            xml:space="preserve"
                          >
                            <path
                              fill="#45494E"
                              d="M6 10V8h12v2H6zm0 6v-2h12v2H6z"
                            ></path>
                          </svg>
                          <div className="TicketInfoDiv">
                            <div className="TicketNameDateDiv">
                              <div className="TicketName">
                                {ticketTier.tierName}
                              </div>

                              <div className="TicketScheduledDiv">
                                <div className="YellowDot">.</div>
                                <div className="ScheduledStartsDiv">
                                  Scheduled . Starts at{' '}
                                  {convertTime(ticketTier.startSelling)}
                                </div>
                              </div>
                            </div>

                            <div className="SoldTickets">
                              {ticketTier.quantitySold} /
                              {ticketTier.maxCapacity}
                            </div>

                            <div className="TicketTier">
                              {ticketTier.price}$
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>

                  <div className="EventCapacityDiv">
                    <div className="EventCapacityLabelDiv">
                      Event capacity{' '}
                      <svg className="EventCapacitySvg" xml:space="preserve">
                        <path
                          id="info-chunky_svg__eds-icon--info-chunky_base"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 6c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6zm0 14c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8z"
                        ></path>
                        <path
                          id="info-chunky_svg__eds-icon--info-chunky_dot"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11 8h2v2h-2z"
                        ></path>
                        <path
                          id="info-chunky_svg__eds-icon--info-chunky_line"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11 11h2v5h-2z"
                        ></path>
                      </svg>
                    </div>
                    <div className="TotalSoldTickets">0/50</div>
                  </div>
                </div>
              )}

              {ShowPromocodesPage && (
                <div className="PromocodesDiv">
                  {isPromoIntroOpen && (
                    <PromocodesPageDiv>
                      <div className="PromocodesInfoAndButtons">
                        <h2 className="PromocodesTitleLabel">
                          Attract more attendees with promo codes
                        </h2>

                        <div className="ParagraphOne">
                          With promo codes, you can offer reduced prices with
                          discount codes or reveal hidden tickets to attendees
                          with access codes.
                        </div>

                        <div className="ParagraphTwo">
                          You can create codes or upload a CSV to import ones
                          you’ve already made.
                        </div>

                        <div className="PromocodesButtonsDiv">
                          <button
                            className="CreatePromocodeButton"
                            onClick={() => {
                              setIsCreatePromoMenuOpen(true);
                              setIsImportPromoMenuOpen(false);
                            }}
                          >
                            Create promo code
                          </button>

                          <button
                            className="UploadCsvButton"
                            onClick={() => {
                              setIsImportPromoMenuOpen(true);
                              setIsCreatePromoMenuOpen(false);
                            }}
                          >
                            Upload CSV
                          </button>
                        </div>
                      </div>

                      <div className="PromocodesImgDiv">
                        <img
                          className="PromocodesImg"
                          src="https://cdn.evbstatic.com/s3-build/fe/build/images/379badca6639dc1c5a14473fe52ab756-PromotionsCallToActionIllustrationSvg.svg"
                        />
                      </div>
                    </PromocodesPageDiv>
                  )}

                  {!isPromoIntroOpen && (
                    <PromocodesSavePageDiv>
                      <div className="ButtonsMenuDiv">
                        <button
                          className=" CancelButton"
                          onClick={() => {
                            setIsCreatePromoMenuOpen(true);
                            setIsImportPromoMenuOpen(false);
                          }}
                        >
                          Add a code
                        </button>
                        <button
                          className="SaveButton"
                          onClick={() => {
                            setIsImportPromoMenuOpen(true);
                            setIsCreatePromoMenuOpen(false);
                          }}
                        >
                          Upload CSV{' '}
                        </button>
                      </div>

                      <div className="Header"></div>
                      <div className="TableDiv">
                        <table>
                          <thead>
                            <tr>
                              <th
                                style={{ width: getColumnWidth('code') }}
                              >
                                Name
                              </th>
                              <th
                                style={{
                                  width: getColumnWidth('discount'),
                                }}
                              >
                                Discount
                              </th>
                              <th
                                style={{ width: getColumnWidth('remainingUses') }}
                              >
                                Uses
                              </th>
                              <th
                                style={{
                                  width: getColumnWidth('status'),
                                }}
                              >
                                Status
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.map((row, index) => (
                              <tr key={index}>
                                <td className="NameColumn1">
                                  {row.code}
                                </td>
                                <td className="DiscountColumn3">
                                  {row.discount}
                                </td>
                                <td className="UsesColumn4">
                                  {row.remainingUses}
                                </td>
                                <td className="StatusColumn5">
                                  {row.status}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </PromocodesSavePageDiv>
                  )}
                </div>
              )}
            </TicketCreatedDiv>
          )}

          {!replaceContentAfterSave && (
            <LetsCreateTicketsDiv>
              <div className="CreateTicketsInfoDIv">
                <div className="CreateTicketsImgDiv">
                  <span className="CircleSpan">
                    <div>
                      <svg className="CreateTicketsImg">
                        <g fill="none" fill-rule="evenodd">
                          <g>
                            <path d="M0 0h144v144H0z"></path>
                            <path
                              d="M27 84v-.6c0-4.5 4.05-8.25 8.85-8.25 4.95 0 9.15 4.2 9.15 8.55v.3h3V42h42c.6 4.35 4.2 7.5 8.85 7.5 4.65 0 8.25-3.15 8.85-7.5h7.8v51h-7.8c-.6-4.35-4.2-7.5-8.85-7.5-4.65 0-8.25 3.15-8.85 7.5H35.85c-4.95 0-8.7-3-8.85-9z"
                              fill="#D2D6DF"
                              fill-rule="nonzero"
                            ></path>
                            <path
                              fill="#363A43"
                              fill-rule="nonzero"
                              d="M81 103h6v3h-6zM99 103h6v3h-6zM107 103h6v3h-6zM72 103h6v3h-6zM90 103h6v3h-6zM63 103h6v3h-6zM54 102.9h6v3h-6zM45 102.9h6v3h-6zM36 102.9h6v3h-6zM36 94h3v6h-3zM110 94h3v6h-3z"
                            ></path>
                            <path
                              d="M24 84.45c0 6.6 5.25 11.7 11.85 11.7H93v-1.5c0-3.45 2.55-6 6-6s6 2.55 6 6v1.5h13.5v-57H105v1.5c0 3.45-2.55 6-6 6s-6-2.55-6-6v-1.5H47.7c-1.05-5.7-5.85-9.9-11.7-9.9-6.75 0-12 5.4-12 12.15v43.05zM45 41.4v35.4c-3-2.7-5.55-4.35-9.15-4.35-3.6 0-7.35 1.65-8.85 4.05V41.25c0-5.1 3.9-9.15 9-9.15s9 4.2 9 9.3zM27 84v-.6c0-4.5 4.05-8.25 8.85-8.25 4.95 0 9.15 4.2 9.15 8.55v.3h3V42h42c.6 4.35 4.2 7.5 8.85 7.5 4.65 0 8.25-3.15 8.85-7.5h7.8v51h-7.8c-.6-4.35-4.2-7.5-8.85-7.5-4.65 0-8.25 3.15-8.85 7.5H35.85c-4.95 0-8.7-3-8.85-9z"
                              fill="#363A43"
                              fill-rule="nonzero"
                            ></path>
                            <path
                              d="M45 41.4v35.4c-3-2.7-5.55-4.35-9.15-4.35-3.6 0-7.35 1.65-8.85 4.05V41.25c0-5.1 3.9-9.15 9-9.15s9 4.2 9 9.3z"
                              fill="#FFF"
                              fill-rule="nonzero"
                            ></path>
                            <path
                              fill="#363A43"
                              fill-rule="nonzero"
                              d="M97.35 70.8h3v3h-3zM97.35 64.8h3v3h-3zM97.35 76.8h3v3h-3zM97.35 58.8h3v3h-3zM97.35 52.8h3v3h-3z"
                            ></path>
                            <path
                              fill="#3A3A3A"
                              fill-rule="nonzero"
                              d="M54 58.8h37.5v3H54zM54 64.8h15v3H54z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </span>
                </div>
                <div className="LetsCreateTextDiv">Let's create tickets</div>
                <div className="CreateTicketsInfoDiv">
                  Create a section if you want to sell multiple ticket types
                  that share the same inventory. i.e. Floor, Mezzanine.
                </div>
                <div className="CreateTicketsButtonsDiv">
                  <button className="CreateSectionButton">
                    Create a section
                  </button>
                  <button
                    className="AddTicketsButton"
                    onClick={() => {
                      setIsMenuOpen(true);
                    }}
                  >
                    Add tickets
                  </button>
                </div>
              </div>
            </LetsCreateTicketsDiv>
          )}

          <AddTicketSidemenu
            event={event}
            ticket={selectedTicket}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            setreplaceContentAfterSave={setreplaceContentAfterSave}
            dataSubmitted={() => setIsDataSubmitted(isDataSubmitted + 1)}
          />

          <CreatePromocode
            event={event}
            isPromocodeMenuOpen={isCreatePromoMenuOpen}
            setIsPromocodeMenuOpen={setIsCreatePromoMenuOpen}
            setIsPromoIntroOpen={setIsPromoIntroOpen}
          />

          <ImportPromocode
            event={event}
            isImportPromoMenuOpen={isImportPromoMenuOpen}
            setIsImportPromoMenuOpen={setIsImportPromoMenuOpen}
            setIsPromocodeMenuOpen={setIsCreatePromoMenuOpen}
            setIsPromoIntroOpen={setIsPromoIntroOpen}
          />

          <div className='NextDiv'>

          <Link  className='NextLink'to="/publish" >
                
          <button className='NextButton'>
              Next
            </button>

          </Link>
            
          </div>
          

        </MainTicketsDiv>
      </div>
    </>
  );
}
