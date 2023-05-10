import Sidebar from '../../components/Sidebar';
import { StyledDashboard } from './styles/Dashboard.styled';
import { StyledNav } from '../LandingPage/styles/Landing.styled';
import NavbarLoggedIn from '../LandingPage/NavbarLoggedIn';
import Navbar from '../LandingPage/NavBar';
import { Link, useParams } from 'react-router-dom';

const Dashboard = () => {
  const email = localStorage.getItem('email')
    ? localStorage.getItem('email')
    : localStorage.getItem('authEmail');
  const eventID = useParams().eventID;

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
              <span className="card__price">$0.00</span>
              <p className="card__sales">
                Open <span> event sales breakdown</span>
              </p>
            </div>
            <div className="card">
              <span className="card__title">Tickets Sold</span>
              <p className="card__tickets">
                <span>2</span>/40
              </p>
              <p className="card__type">0 paid • 2 free</p>
            </div>
          </div>
          <div className="share">
            <h2>Share</h2>
            <span>Event URL</span>
            <div className="">
              <p>https://www.eventbrite.com/e/event-tickets-626924176087</p>
              <svg
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
                <div className="table__row">
                  <span>General Admission</span>
                  <div className="">
                    <span>$20.00</span>
                    <span>0/20</span>
                  </div>
                </div>
                <div className="table__row">
                  <span>General Admission</span>
                  <div className="">
                    <span>free</span>
                    <span>2/20</span>
                  </div>
                </div>
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
