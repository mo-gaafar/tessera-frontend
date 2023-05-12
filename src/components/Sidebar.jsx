import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  StyledMainSidebar,
  StyledCreateTicketSidebar,
} from './styles/Sidebar.styled';
const Sidebar = ({ hide, event, dashboard, details, basicInfo }) => {
  const [hovered, setHovered] = useState(false);
  const [reportHovered, setReportHovered] = useState(false);
  const eventID = useParams().eventID
    ? useParams().eventID
    : localStorage.getItem('eventID');
  const token = localStorage.getItem('token');
  const [EventData, setEventData] = useState({});

  const handleMouseEnter = setHovered => {
    setHovered(true);
  };

  const handleMouseLeave = setHovered => {
    setHovered(false);
  };

  useEffect(() => {
    const getData = async () => {
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
    };

    getData();
  }, []);
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
      <StyledMainSidebar>
        <div
          className={event ? 'active' : ''}
          onMouseEnter={() => handleMouseEnter(setHovered)}
          onMouseLeave={() => handleMouseLeave(setHovered)}
        >
          <Link to="/Organize">
            {event ? (
              <img src="/images/events__active.svg" alt="" />
            ) : hovered ? (
              <img src="/images/events__hover.svg" alt="" />
            ) : (
              <img src="/images/events.svg" alt="" />
            )}
          </Link>
        </div>

        <div
          className={event ? '' : 'active'}
          onMouseEnter={() => handleMouseEnter(setReportHovered)}
          onMouseLeave={() => handleMouseLeave(setReportHovered)}
        >
          <Link to="/attendeeSummary">
            {!event ? (
              <img src="/images/reports__active.svg" alt="" />
            ) : reportHovered ? (
              <img src="/images/reports__hover.svg" alt="" />
            ) : (
              <img src="/images/reports.svg" alt="" />
            )}
          </Link>
        </div>
      </StyledMainSidebar>
      {!hide && (
        <StyledCreateTicketSidebar>
          <Link to="/Organize" className="events__page">
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
            <Link className="event__name">
              {EventData.basicInfo?.eventName}
            </Link>
            <p>{convertTime(EventData.basicInfo?.startDateTime)}</p>
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
            <Link to="/basicinfo" className={basicInfo && 'active'}>
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
            </Link>
            <Link to="/details" className={details && 'active'}>
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
            </Link>
            <Link to="/ticket">
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
            </Link>
            <Link to="/publish">
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
            </Link>
          </div>
          <div className="others">
            <Link
              className={dashboard ? 'active' : ''}
              to={`/dashboard/${localStorage.getItem('eventID')}`}
            >
              <span> Dashboard</span>
            </Link>
            <Link to="/manage">
              <span>Manage Attendees</span>
            </Link>
          </div>
        </StyledCreateTicketSidebar>
      )}
    </>
  );
};

export default Sidebar;
