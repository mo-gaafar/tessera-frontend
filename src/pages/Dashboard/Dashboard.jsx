/**

Dashboard component displays a dashboard with Net Sales, Tickets Sold, and Sales by Ticket Type.
@component
@author @MoSaeed15

@param {object} props - Props object.
@param {boolean} props.test - A boolean that determines whether or not the test environment is being used.
 * @returns {JSX.Element} The Dashboard component UI.
*/

import Sidebar from '../../components/Sidebar';
import { StyledDashboard } from './styles/Dashboard.styled';
import { StyledNav } from '../LandingPage/styles/Landing.styled';
import NavbarLoggedIn from '../LandingPage/NavbarLoggedIn';
import Navbar from '../LandingPage/NavBar';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
const Dashboard = ({ test }) => {
  /**
   * The event data for the event being displayed on the dashboard.
   * @type {Object}
   */
  const [EventData, setEventData] = useState({});

  /**
   * The data for the number of tickets sold for the event being displayed on the dashboard.
   * @type {Object}
   */

  const [ticketsSoldData, setTicketsSoldData] = useState({});

  /**
   * The data for the number of tickets sold for the event being displayed on the dashboard.
   * @type {Object}
   */
  const [totalSales, setTotalSales] = useState();

  /**
   * An array of ticket tier objects for the event being displayed on the dashboard.
   * @type {Array<Object>}
   */
  const [ticketTier, setTicketTier] = useState([]);

  /**
   * The event ID of the event being displayed on the dashboard.
   * If not found in the URL parameters, it is retrieved from the browser's localStorage.
   * @type {string}
   */
  const email = localStorage.getItem('email')
    ? localStorage.getItem('email')
    : localStorage.getItem('authEmail');

  /**
   * The event ID of the event being displayed on the dashboard.
   * If not found in the URL parameters, it is retrieved from the browser's localStorage.
   * @type {string}
   */

  const token = localStorage.getItem('token');
  /**
   * The event ID of the event being displayed on the dashboard.
   * If not found in the URL parameters, it is retrieved from the browser's localStorage.
   * @type {string}
   */
  const eventID = useParams().eventID
    ? useParams().eventID
    : localStorage.getItem('eventID');
  console.log(ticketTier);

  /**
   * Fetches data for the number of tickets sold for the event being displayed on the dashboard.
   * @async
   * @function
   */
  useEffect(() => {
    const getData = async () => {
      const result = await fetch(
        `https://www.tessera.social/api/dashboard/eventsoldtickets/events/${eventID}?allTiers=true`
      );
      const data = await result.json();
      console.log(data);

      setTicketsSoldData(data);
    };

    const getEventData = async () => {
      const result = await fetch(
        `https://www.tessera.social/api/event-management/retrieve/${eventID}`,
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
      setTicketTier(() => data.event.ticketTiers.map(ticket => ticket));
    };

    const getTotalSales = async () => {
      const result = await fetch(
        `https://www.tessera.social/api/dashboard/eventsales/events/${eventID}?allTiers=true`,
        {
          method: 'GET',

          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await result.json();
      setTotalSales(data.totalSales);
      console.log(data.totalSales);
    };
    getData();
    getEventData();
    getTotalSales();
  }, []);

  /**
   * Copies the event URL to the clipboard when the user clicks the copy icon.
   * If the `test` prop is set to
   */
  const copyURL = async () => {
    if (!test) {
      await navigator.clipboard.writeText(EventData.eventUrl);
    }
    if (test) {
      await navigator.clipboard.writeText('https://example.com');
      console.debug('first');
    }
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
      <div style={{ display: 'flex' }}>
        <Sidebar event={false} dashboard={true} />
        <StyledDashboard>
          <h1>Dashboard</h1>
          <div className="cards">
            <div className="card">
              <span className="card__title"> Net Sales</span>
              <span className="card__price">${totalSales}</span>
              <p className="card__sales">
                Open <span> event sales breakdown</span>
              </p>
            </div>
            <div className="card">
              <span className="card__title">Tickets Sold</span>
              <p className="card__tickets">
                <span>{ticketsSoldData.soldTickets}</span>/
                {ticketsSoldData.totalMaxCapacity}
              </p>
              {/* <p className="card__type">0 paid • 2 free</p> */}
            </div>
          </div>
          <div className="share">
            <h2>Share</h2>
            <span>Event URL</span>
            <div className="">
              <p data-testid="url">{EventData.eventUrl}</p>
              <svg
                data-testid="copy"
                style={{ cursor: 'pointer' }}
                onClick={copyURL}
                id="copy-chunky_svg__eds-icon--copy-chunky_svg"
                x="0"
                y="0"
                viewBox="0 0 24 24"
                xml:space="preserve"
              >
                <path
                  id="copy-chunky_svg__eds-icon--copy-chunky_base"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 8v12h12V8H4zm10 10H6v-8h8v8z"
                ></path>
                <path
                  id="copy-chunky_svg__eds-icon--copy-chunky_corner"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20 5v10h-2V6h-8V4h10v1z"
                ></path>
              </svg>
            </div>
          </div>
          <hr />
          <div className="ticket__types">
            <div className="manage__tickets">
              <h2>Sales by ticket type</h2>
              <div className="table">
                <div className="table__header">
                  <span>Ticket Type</span>
                  <div className="">
                    <span>Price</span>
                    <span>Sold</span>
                  </div>
                </div>
                {ticketTier.map(ticket => {
                  return (
                    <div className="table__row">
                      <span>{ticket.tierName}</span>
                      <div className="">
                        <span>
                          {ticket.price === 'Free' ? '' : '$'}
                          {ticket.price}
                        </span>
                        <span>
                          {ticket.quantitySold}/{ticket.maxCapacity}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="other__action">
              <h4>Other Attendee Actions</h4>
              <Link to="/attendeeSummary">
                <svg
                  class="line-chart_svg__eds-icon--line-chart__svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    class="line-chart_svg__eds-icon--line-chart__base"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3 21v-5.9l2.8-2.4c.4.3.8.4 1.2.4.6 0 1.1-.3 1.5-.7l2.5 1.3v.4c0 1.1.9 2 2 2s2-.9 2-2c0-.3-.1-.6-.2-.9l3-2.5c.3.2.7.4 1.2.4 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .3.1.6.2.9l-3 2.5c-.3-.2-.7-.4-1.2-.4-.6 0-1.1.3-1.5.7L9 11.5v-.4c0-1.1-.9-2-2-2s-2 .9-2 2c0 .3.1.6.2.9L3 13.8V2H2v20h20v-1H3zM19 8.1c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1c0-.5.4-1 1-1zm-6 5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1c0-.5.4-1 1-1zm-6-3c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1c0-.5.4-1 1-1z"
                  ></path>
                </svg>
                Attendee summary report
              </Link>
            </div>
          </div>
        </StyledDashboard>
      </div>
    </>
  );
};

export default Dashboard;
