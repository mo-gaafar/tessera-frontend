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
import axios from 'axios';

export default function CreateTickets() {
  const event = '643aa09ecbfea68c24d93675';
  const [replaceContentAfterSave, setreplaceContentAfterSave] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPromoIntroOpen, setIsPromoIntroOpen] = useState(true);

  const [ticketTiers, setTicketTiers] = useState([]);

  useEffect(() => {
    async function getTicketsTier() {
      const url = `https://www.tessera.social/api/event-tickets/retrieve-event-ticket-tier/${event}`;
      const res = await axios.get(url);
      setTicketTiers(res['ticketTiers']);
    }
    getTicketsTier();
  }, [replaceContentAfterSave]);

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////handle admissions OR promocodes page///////////////////////////////////
  const [ShowAmissionsPage, setShowAmissionsPage] = useState(true);
  const [ShowPromocodesPage, setShowPromocodesPage] = useState(false);

  const handleHelloClick = () => {
    setShowAmissionsPage(true);
    setShowPromocodesPage(false);
  };

  const handleByeClick = () => {
    setShowAmissionsPage(false);
    setShowPromocodesPage(true);
  };

  const [isCreatePromoMenuOpen, setIsCreatePromoMenuOpen] = useState(false);
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////when csv buttons clicked///////////////////////
  // const [isCsvPromoMenuOpen, setIsCsvPromoMenuOpen] = useState(false);

  // function handleCloseCsvPromoMenu() {
  //     setIsCsvPromoMenuOpen(false);
  // }

  // function handleOpenCsvPromoMenu() {
  //     setIsCsvPromoMenuOpen(!isMenuOpen);
  // }

  const [data, setData] = useState([
    {
      NameColumn1: 'A',
      CodeTypeColumn2: 'B',
      DiscountColumn3: 'C',
      UsesColumn4: 'D',
      StatusColumn5: 'E',
    },
    {
      NameColumn1: 'F',
      CodeTypeColumn2: 'G',
      DiscountColumn3: 'H',
      UsesColumn4: 'I',
      StatusColumn5: 'J',
    },
    {
      NameColumn1: 'K',
      CodeTypeColumn2: 'L',
      DiscountColumn3: 'M',
      UsesColumn4: 'N',
      StatusColumn5: 'O',
    },
    {
      NameColumn1: 'P',
      CodeTypeColumn2: 'Q',
      DiscountColumn3: 'R',
      UsesColumn4: 'S',
      StatusColumn5: 'T',
    },
    {
      NameColumn1: 'U',
      CodeTypeColumn2: 'V',
      DiscountColumn3: 'W',
      UsesColumn4: 'X',
      StatusColumn5: 'Y',
    },
  ]);
  const getMaxRowLength = columnName => {
    return data.reduce((max, row) => {
      const value = row[columnName].toString().length;
      return value > max ? value : max;
    }, 0);
  };

  const getColumnWidth = columnName => {
    return getMaxRowLength(columnName) + 'ch';
  };

  const handlereplaceContentAfterSaveClick = () => {
    setreplaceContentAfterSave(true);
    createTicket();
  };
  const email = localStorage.getItem('email')
    ? localStorage.getItem('email')
    : localStorage.getItem('authEmail');

  return (
    <>
      <StyledNav>
        {email && email !== 'undefined' ? (
          <NavbarLoggedIn creator={true} email={email} />
        ) : (
          <Navbar />
        )}
      </StyledNav>
      <div style={{ display: 'flex' }}>
        <Sidebar event={false} />
        <MainTicketsDiv>
          {replaceContentAfterSave && (
            <TicketCreatedDiv>
              <h1>Tickets</h1>

              <div className="TicketsTabsDiv">
                <button
                  className="TicketsTabsButton"
                  onClick={handleHelloClick}
                >
                  Admission
                </button>
                <button className="TicketsTabsButton" onClick={handleByeClick}>
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
                    <div
                      className="TicketCreatedInfoDiv"
                      onClick={() => {
                        setIsMenuOpen(true);
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
                          <div className="TicketName">General Admission</div>

                          <div className="TicketScheduledDiv">
                            <div className="YellowDot">.</div>
                            <div className="ScheduledStartsDiv">
                              Scheduled . Starts tomorrow at 12:00 AM
                            </div>
                          </div>
                        </div>

                        <div className="SoldTickets">
                          0/30
                          {/* call input */}
                        </div>

                        <div className="TicketTier">Free</div>
                      </div>
                    </div>
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
                            onClick={() =>
                              setIsCreatePromoMenuOpen(!isMenuOpen)
                            }
                          >
                            Create promo code
                          </button>

                          <button className="UploadCsvButton" S>
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
                        <button className=" CancelButton">Add a code</button>
                        <button className="SaveButton">Upload CSV </button>
                      </div>

                      <div className="Header"></div>
                      <div className="TableDiv">
                        <table>
                          <thead>
                            <tr>
                              <th
                                style={{ width: getColumnWidth('NameColumn1') }}
                              >
                                Name
                              </th>
                              <th
                                style={{
                                  width: getColumnWidth('CodeTypeColumn2'),
                                }}
                              >
                                Code type
                              </th>
                              <th
                                style={{
                                  width: getColumnWidth('DiscountColumn3'),
                                }}
                              >
                                Discount
                              </th>
                              <th
                                style={{ width: getColumnWidth('UsesColumn4') }}
                              >
                                Uses
                              </th>
                              <th
                                style={{
                                  width: getColumnWidth('StatusColumn5'),
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
                                  {row.NameColumn1}
                                </td>
                                <td className="CodeTypeColumn2">
                                  {row.CodeTypeColumn2}
                                </td>
                                <td className="DiscountColumn3">
                                  {row.DiscountColumn3}
                                </td>
                                <td className="UsesColumn4">
                                  {row.UsesColumn4}
                                </td>
                                <td className="StatusColumn5">
                                  {row.StatusColumn5}
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

          <CreatePromocode
            setIsPromoIntroOpen={() => setIsPromoIntroOpen(false)}
            isCreatePromoMenuOpen={isCreatePromoMenuOpen}
            handleCloseCreatePromoMenu={() => setIsCreatePromoMenuOpen(false)}
          />

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
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            setreplaceContentAfterSave={setreplaceContentAfterSave}
          />
        </MainTicketsDiv>
      </div>
    </>
  );
}
