import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { StyledDashboard } from './styles/Dashboard.styled';
import { StyledNav } from '../LandingPage/styles/Landing.styled';
import NavbarLoggedIn from '../LandingPage/NavbarLoggedIn';
import Navbar from '../LandingPage/NavBar';
import { StyledAttendeeSummary } from './styles/Dashboard.styled';
const AttendeeSummary = () => {
  const [searchTerm, setSearchTerm] = useState('');
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
      <StyledAttendeeSummary>
        <Sidebar hide={true} />
        <div className="attendee">
          <h1>Attendee Summary Report</h1>
          <div className="search">
            <input type="" placeholder="Search for any events with sales" />
            <button>
              <svg
                id="share-ios-chunky_svg__eds-icon--share-ios-chunky_svg"
                x="0"
                y="0"
                viewBox="0 0 24 24"
                xml:space="preserve"
              >
                <path
                  id="share-ios-chunky_svg__eds-icon--share-ios-chunky_base"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18 16v2H6v-2H4v4h16v-4z"
                ></path>
                <path
                  id="share-ios-chunky_svg__eds-icon--share-ios-chunky_arrow"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 4L7 9l1.4 1.4L11 7.8V16h2V7.8l2.6 2.6L17 9l-5-5z"
                ></path>
              </svg>
              Export
            </button>
          </div>
        </div>
      </StyledAttendeeSummary>
    </>
  );
};

export default AttendeeSummary;
