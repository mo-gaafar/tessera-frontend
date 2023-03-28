import React, { useState } from 'react';
import './navstyle.css';
import { Link } from 'react-router-dom';
import { navItemsLanding } from './Navitems';
import { hamburgerDropdown } from './Navitems';
import DropdownOrganize from './DropdownOrganize';
import DropdownHelp from './DropdownHelp';
import DropdownHamburger from './DropdownHamburger';

import LogoFullTextTicketLarge from '../../assets/LogoFullTextTicketLarge.png';

export default function Navbar() {
  const [dropdownforOrganize, setDropdownOrganize] = useState(false);

  const [dropdownforHelp, setDropdownHelp] = useState(false);

  const [dropdownforHamburger, setDropdownHamburger] = useState(false);

  return (
    <div
      className="container "
      onClick={() => {
        setDropdownHamburger(!dropdownforHamburger);
      }}
    >
      <nav className="navBar">
        <div className="siteLogoSection">
          <Link to="/Home" relative="path">
            <img
              className="logoPng"
              id="hidden"
              src={LogoFullTextTicketLarge}
            />
          </Link>
        </div>
        <div className="searchSection">
          <div className="magnifyingGlassDiv">
            {' '}
            <svg
              className="magnifyingGlass"
              x="0"
              y="0"
              viewBox="0 0 24 24"
              xml:space="preserve"
            >
              <path
                id="magnifying-glass-chunky_svg__eds-icon--magnifying-glass-chunky_base"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 14c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm3.5.9c-1 .7-2.2 1.1-3.5 1.1-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6c0 1.3-.4 2.5-1.1 3.4l5.1 5.1-1.5 1.5-5-5.1z"
              ></path>
            </svg>{' '}
          </div>
          <input
            className="searchBar"
            type="text"
            placeholder="Search events"
          />
        </div>

        <div className="optionsSection">
          <li
            className="navLanding"
            onClick={() => {
              setDropdownHamburger(!dropdownforHamburger);
            }}
          >
            <div className="hamburgerDiv">
              <div className="organizeDiv">
                <svg
                  className="dropdownArrow"
                  id="vertical-dots-chunky_svg__eds-icon--vertical-dots-chunky_svg"
                  x="0"
                  y="0"
                  viewBox="0 0 24 24"
                  xml:space="preserve"
                >
                  <path
                    id="vertical-dots-chunky_svg__eds-icon--vertical-dots-chunky_dot_2"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 18c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"
                  ></path>
                  <circle
                    id="vertical-dots-chunky_svg__eds-icon--vertical-dots-chunky_dot"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    cx="12"
                    cy="12"
                    r="2"
                  ></circle>
                  <circle
                    id="vertical-dots-chunky_svg__eds-icon--vertical-dots-chunky_dot_1"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    cx="12"
                    cy="6"
                    r="2"
                  ></circle>
                </svg>
              </div>
            </div>
            {dropdownforHamburger && <DropdownHamburger />}
          </li>

          {navItemsLanding.map(item => {
            if (item.title === 'Organize') {
              return (
                <li
                  key={item.id}
                  id={item.id}
                  className={item.cName}
                  onMouseEnter={() => {
                    setDropdownOrganize(true);
                  }}
                  onMouseLeave={() => {
                    setDropdownOrganize(false);
                  }}
                >
                  <div className="organizeDiv">
                    <Link to={item.path}>{item.title}</Link>

                    <svg
                      className="dropdownArrow"
                      id="chevron-down-chunky_svg__eds-icon--chevron-down-chunky_svg"
                      x="0"
                      y="0"
                      viewBox="0 0 24 24"
                      xml:space="preserve"
                    >
                      <path
                        id="chevron-down-chunky_svg__eds-icon--chevron-down-chunky_base"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 10.2l5 5 5-5-1.4-1.4-3.6 3.6-3.6-3.6z"
                      ></path>
                    </svg>
                  </div>
                  {dropdownforOrganize && <DropdownOrganize />}
                </li>
              );
            }
            if (item.title === 'Help') {
              return (
                <li
                  key={item.id}
                  id={item.id}
                  className={item.cName}
                  onMouseEnter={() => {
                    setDropdownHelp(true);
                  }}
                  onMouseLeave={() => {
                    setDropdownHelp(false);
                  }}
                >
                  <div className="helpDiv">
                    <Link to={item.path}>{item.title}</Link>
                    <svg
                      className="dropdownArrow"
                      id="chevron-down-chunky_svg__eds-icon--chevron-down-chunky_svg"
                      x="0"
                      y="0"
                      viewBox="0 0 24 24"
                      xml:space="preserve"
                    >
                      <path
                        id="chevron-down-chunky_svg__eds-icon--chevron-down-chunky_base"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 10.2l5 5 5-5-1.4-1.4-3.6 3.6-3.6-3.6z"
                      ></path>
                    </svg>
                  </div>
                  {dropdownforHelp && <DropdownHelp />}
                </li>
              );
            }

            return (
              <li key={item.id} id={item.id} className={item.cName}>
                <div className="optionsDiv">
                  <Link to={item.path}>{item.title}</Link>
                </div>
              </li>
            );
          })}
        </div>
      </nav>

      <div className="imageDiv">
        {/* <img className="landingImage1" id="hidden" src="https://cdn.evbstatic.com/s3-build/fe/build/images/baedf009bb329458ae80eb599fb8a4d5-3_tablet_1067x470.jpg"/> */}
        {/* <img className="landingImage2" id="hidden" src="https://cdn.evbstatic.com/s3-build/fe/build/images/f1333e94d21e22dca2e3597bf2b4a86c-3_mobile_659x494.jpg"/> */}
      </div>
    </div>
  );
}
