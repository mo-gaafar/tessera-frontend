import { Link } from 'react-router-dom';
import { useState } from 'react';
const Sidebar = ({ event, dashboard }) => {
  const [hovered, setHovered] = useState(false);
  const [reportHovered, setReportHovered] = useState(false);

  const handleMouseEnter = setHovered => {
    setHovered(true);
  };

  const handleMouseLeave = setHovered => {
    setHovered(false);
  };

  return (
    <>
      <StyledMainSidebar>
        <div
          className={event ? 'active' : ''}
          onMouseEnter={() => handleMouseEnter(setHovered)}
          onMouseLeave={() => handleMouseLeave(setHovered)}
        >
          {event ? (
            <img src="/images/events__active.svg" alt="" />
          ) : hovered ? (
            <img src="/images/events__hover.svg" alt="" />
          ) : (
            <img src="/images/events.svg" alt="" />
          )}
        </div>

        <div
          className={event ? '' : 'active'}
          onMouseEnter={() => handleMouseEnter(setReportHovered)}
          onMouseLeave={() => handleMouseLeave(setReportHovered)}
        >
          {!event ? (
            <img src="/images/reports__active.svg" alt="" />
          ) : reportHovered ? (
            <img src="/images/reports__hover.svg" alt="" />
          ) : (
            <img src="/images/reports.svg" alt="" />
          )}
        </div>
      </StyledMainSidebar>
      <StyledCreateTicketSidebar>
        <Link className="events__page">
          <svg viewBox="0 0 24 24" xml:space="preserve">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="m13.8 7-5 5 5 5 1.4-1.4-3.6-3.6 3.6-3.6z"
            />
          </svg>
          Events
        </Link>
        <div className="event__details">
          <Link className="event__name">Event</Link>
          <p>Wed, Jun, 7, 2023, 8:00pm</p>
          <Link>
            View your Event
            <svg viewBox="0 0 24 24">
              <path
                d="M18 18v2H4V6h7v2H6v10h10v-5h2zm1-11.586l-7.293 7.293-1.414-1.414L17.586 5H14V3h7v7h-2z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
        <div className="create__event">
          <span>
            <svg
              class="navigation-icon"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 28 28"
              xml:space="preserve"
            >
              <circle
                class="navigation-icon__circle"
                cx="14"
                cy="14"
                r="14"
              ></circle>
              <polygon
                data-spec="shape-check"
                class="navigation-icon__component navigation-icon__component__check"
                points="28.39,20.21 22.60,26.01 20.18,23.58 19.23,24.54 22.60,27.92 29.35,21.17"
              ></polygon>
            </svg>
            Basic Info
          </span>
          <span>
            <svg
              class="navigation-icon"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 28 28"
              xml:space="preserve"
            >
              <circle
                class="navigation-icon__circle"
                cx="14"
                cy="14"
                r="14"
              ></circle>
              <polygon
                data-spec="shape-check"
                class="navigation-icon__component navigation-icon__component__check"
                points="28.39,20.21 22.60,26.01 20.18,23.58 19.23,24.54 22.60,27.92 29.35,21.17"
              ></polygon>
            </svg>
            Details
          </span>
          <span>
            <svg
              class="navigation-icon"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 28 28"
              xml:space="preserve"
            >
              <circle
                class="navigation-icon__circle"
                cx="14"
                cy="14"
                r="14"
              ></circle>
              <polygon
                data-spec="shape-check"
                class="navigation-icon__component navigation-icon__component__check"
                points="28.39,20.21 22.60,26.01 20.18,23.58 19.23,24.54 22.60,27.92 29.35,21.17"
              ></polygon>
            </svg>
            Tickets
          </span>
          <span>
            <svg
              class="navigation-icon"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 28 28"
              xml:space="preserve"
            >
              <circle
                class="navigation-icon__circle"
                cx="14"
                cy="14"
                r="14"
              ></circle>
              <polygon
                data-spec="shape-check"
                class="navigation-icon__component navigation-icon__component__check"
                points="28.39,20.21 22.60,26.01 20.18,23.58 19.23,24.54 22.60,27.92 29.35,21.17"
              ></polygon>
            </svg>
            Publish
          </span>
        </div>
        <div className="others">
          <span className={dashboard ? 'active' : ''}> Dashboard</span>
          <span>Manage Attendes</span>
        </div>
      </StyledCreateTicketSidebar>
    </>
  );
};

export default Sidebar;
