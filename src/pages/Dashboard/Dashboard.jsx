import Sidebar from '../../components/Sidebar';
import { StyledDashboard } from './styles/Dashboard.styled';
import { StyledNav } from '../LandingPage/styles/Landing.styled';
import NavbarLoggedIn from '../LandingPage/NavbarLoggedIn';
import Navbar from '../LandingPage/NavBar';

const Dashboard = () => {
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
        <Sidebar event={true} dashboard={true} />
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
            <h2>Sales by ticket type</h2>
            <div className="table">
              <div className="table__header">
                <span>Ticket Type</span>
                <span>Price</span>
                <span>Sold</span>
              </div>
              <div className="table__row">
                <span>General Admission</span>
                <span>$20</span>
                <span>0/20</span>
              </div>
              <div className="table__row">
                <span>General Admission</span>
                <span>free</span>
                <span>2/20</span>
              </div>
            </div>
          </div>
        </StyledDashboard>
      </div>
    </>
  );
};

export default Dashboard;
