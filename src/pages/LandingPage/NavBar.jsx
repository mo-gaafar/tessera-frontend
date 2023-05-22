import React, { useState } from 'react';
import './navstyle.css';
import { Link } from 'react-router-dom';
import { navItemsLanding } from './Navitems';
import { hamburgerDropdown } from './Navitems';
import DropdownOrganize from './DropdownOrganize';
import DropdownHelp from './DropdownHelp';
import DropdownHamburger from './DropdownHamburger';

import LogoFullTextTicketLarge from '/images/LogoFullTextTicketLarge.png';

export default function Navbar(props) {
  const [dropdownforOrganize, setDropdownOrganize] = useState(false);

  const [dropdownforHelp, setDropdownHelp] = useState(false);

  const [dropdownforHamburger, setDropdownHamburger] = useState(false);

  return (
    <div
      className="container"
      onClick={() => {
        dropdownforHamburger && setDropdownHamburger(!dropdownforHamburger);
      }}
    >
      <nav className="navBar">
        <div className="siteLogoSection">
          <Link to="/" relative="path">
            <img
              className="logoPng"
              id="hidden"
              src={LogoFullTextTicketLarge}
            />
          </Link>
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
                  xmlSpace="preserve"
                >
                  <path
                    id="vertical-dots-chunky_svg__eds-icon--vertical-dots-chunky_dot_2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 18c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"
                  ></path>
                  <circle
                    id="vertical-dots-chunky_svg__eds-icon--vertical-dots-chunky_dot"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    cx="12"
                    cy="12"
                    r="2"
                  ></circle>
                  <circle
                    id="vertical-dots-chunky_svg__eds-icon--vertical-dots-chunky_dot_1"
                    fillRule="evenodd"
                    clipRule="evenodd"
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
                  <div
                    onMouseEnter={() => {
                      setDropdownOrganize(true);
                    }}
                    onMouseLeave={() => {
                      setDropdownOrganize(false);
                    }}
                    className="organizeDiv"
                  >
                    <Link to={item.path}>{item.title}</Link>

                    {/* <svg
                      onMouseEnter={() => {
                        setDropdownOrganize(true);
                      }}
                      onMouseLeave={() => {
                        setDropdownOrganize(false);
                      }}
                      className="dropdownArrow"
                      id="chevron-down-chunky_svg__eds-icon--chevron-down-chunky_svg"
                      x="0"
                      y="0"
                      viewBox="0 0 24 24"
                      xmlSpace="preserve"
                    >
                      <path
                        id="chevron-down-chunky_svg__eds-icon--chevron-down-chunky_base"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7 10.2l5 5 5-5-1.4-1.4-3.6 3.6-3.6-3.6z"
                      ></path>
                    </svg> */}
                  </div>
                  {/* {!dropdownforOrganize && <DropdownOrganize />} */}
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

      <picture className="imageDiv">
        <source
          media="(min-width: 40em)"
          srcSet="https://cdn.evbstatic.com/s3-build/fe/build/images/248d7e11d9885236625a1b207adf62c6-4_tablet_1067x470.jpg"
        />

        <source
          media="(min-width: 60em)"
          srcSet="https://cdn.evbstatic.com/s3-build/fe/build/images/83079b4f5dd9305720cddfba5b614445-4_web_1919x543.jpg"
        />

        {props.show && (
          <img
            src="https://cdn.evbstatic.com/s3-build/fe/build/images/542fec493f093cb39b6e1610cad9ff9a-4_mobile_659x494.jpg"
            alt="Homepage header"
          />
        )}
      </picture>
    </div>
  );
}
