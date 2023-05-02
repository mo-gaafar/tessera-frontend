/**
 * @file Organize.jsx
 * @name Organize.jsx
 * @author @hlasultanhassan
 * @requires react
 * @requires react-router-dom
 * @requires ./styles/OrganizeEvents.styled
 * @exports Organize
 * @description This file contains the Organize component and its logic
 */
import {PageContainer} from "./styles/OrganizeEvents.Styled";
import { useEffect, useState } from 'react';
import logoDown from '../../assets/icon-down.png';
import logoPlus from '../../assets/plus-white.png';
import bullet from '../../assets/bullet-list.png';
import noEvent from '../../assets/noEvents.png';
import checkmark from '../../assets/checkmark.png';
import search from  '../../assets/search.png';
import { useRef } from 'react';
import { StyledNav } from '../LandingPage/styles/Landing.styled';
import NavbarLoggedIn from '../LandingPage/NavbarLoggedIn';
import Navbar from '../LandingPage/NavBar';
import LinearProgress from "@mui/material/LinearProgress";
/**
 * A functional component that handles the Organization event page.
 * 
 * @returns {JSX.Element} The JSX representation of the component.
 */

export default function Organize() {
  const [showMenu,setShowMenu] = useState(false);
  const [showEdit,setShowEdit] = useState(false);
  const [doneSelect,setDone] = useState(false);
  const [select,setSelect] = useState("All events");
  const reference = useRef(null)
  const referenceEdit = useRef(null)

  function displayMenu(){
    if (!doneSelect)
    {setShowMenu(true)}
    else{
      setDone(false)
    }
  }
  useEffect(() => {
    // add event listener to the document
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // remove event listener when component unmounts
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (reference.current && !reference.current.contains(event.target)) {
      // if clicked outside of the ref div, hide the element
      setShowMenu(false);
    }
  };

  useEffect(() => {
    // add event listener to the document
    document.addEventListener("mousedown", handleClickingOutside);
    return () => {
      // remove event listener when component unmounts
      document.removeEventListener("mousedown", handleClickingOutside);
    };
  }, []);

  const handleClickingOutside = (event) => {
    if (referenceEdit.current && !referenceEdit.current.contains(event.target)) {
      // if clicked outside of the ref div, hide the element
      setShowEdit(false);
    }
  };
  /**
   * Updates the dropdown menu and handles the category selected.
   *
   * @param {Object} e - The event object.
   */
  function onClickEdit(){
    setShowEdit(true)
  }
  function onClickMenu(e){
    setDone(true)
    const {name,value} = e.target;
    setShowMenu(false);
    setSelect(name);
  }
  function onClickEditButton(e){
    //const {name,value} = e.target;
    setShowEdit(false);
  }

  const email = localStorage.getItem('email')
    ? localStorage.getItem('email')
    : localStorage.getItem('authEmail');

 
  return (
   <PageContainer>
    <StyledNav>
          {email && email !== 'undefined' ? (
            <NavbarLoggedIn email={email} />
          ) : (
            <Navbar />
          )}
        </StyledNav>
     <div>
       <p>Events</p>
     </div>
     <div>
       <div className="cat-option">
          <div>
            <button >
              Events
            </button>
          </div>
          
          </div>
          
          <div className="events-bar">
            <div className="first-part-eventbar">
              <div> 
                  <div className="search-field">
                    <button className="search-button">
                      <img src={search}/>
                    </button>
                    <input placeholder="Search events"/>
                  </div>
                </div>
                <div>
                  <button className="bullet-button">
                      <img src={bullet}/>
                      <span>List</span>
                  </button>
                </div>
                <div 
                className="vertical-divider">
                </div>
                <div className="all-events" onClick={displayMenu}>
                <span>
                    {select}
                </span>
                <img src={logoDown}/>

                {showMenu &&
                <div id="myDropdown" 
                className="dropdown-content"
                ref={reference}>
                  <ul>
                    <div>
                    <button 
                    name="Upcoming events"
                    className="drop-button"
                    onClick={onClickMenu}
                    >
                      {select==="Upcoming events" ? <img src={checkmark}/> :<span/>}
                      Upcoming events
                    </button>
                    </div>

                    <div>
                    <button 
                    name="Draft"
                    className="drop-button"
                    onClick={onClickMenu}
                    >
                      {select==="Draft" ?<img src={checkmark}/>:<span/> }
                      Draft
                    </button>
                    </div>

                    <div>
                    <button 
                    name="Past events"
                    className="drop-button"
                    onClick={onClickMenu}
                    >
                      {select==="Past events" ?<img src={checkmark}/> :<span/>}
                      Past events
                    </button>
                    </div>

                    <div>
                    <button 
                    name="All events"
                    className="drop-button"
                    onClick={onClickMenu}
                    >
                      {select==="All events" ? <img src={checkmark}/> :<span/> }
                      All events
                    </button>
                    </div>
                  </ul>
                </div>
                }
                </div>
              </div>

              
              
              <div>
                <button className="plus-button">
                  <img src={logoPlus}/>
                </button>
                <button className="create-button">
                    Create Event
                </button>
              </div>
              
          </div>
            
            {/* <div className="event-body">
                <div className="noEvents-center">
                  <div>
                    <div className="graphic-img-div">
                      <img src={noEvent}/>
                    </div>
                    <div className="status-description">
                      No events to show
                    </div>
                  </div>
                  
                </div>
            </div> */}
            <div>
              <div className="event-header">
                <div className="event-info">
                  Event
                </div>
                <div className="event-sold">
                  Sold
                </div>
                <div className="event-gross">
                  Gross
                </div>
                <div className="event-status">
                  Status
                </div>
              </div>
            </div>

            <div className="event-details">
              <div className="event-data">
  
                <div className="data-date">
                  <div className="month">JUN</div>
                  <div>8</div>
                </div>

                <div>
                  <img src="https://cdn.evbstatic.com/s3-build/perm_001/5287e3/django/images/pages/organizations/no-event-image-placeholder-2x.png"/>
                </div>

                <div className="data-name">
                  <div className="name">Event name</div>
                  <div className="date">Thursday, June 8, 2023 at 7:00 PM EET</div>
                </div>

              </div>
              
              <div className="event-price-status">

                <div className="event-sold">
                  <div className="rate-div">
                    1/20
                  </div>
                  <div className="App">
                    <div className="progress">
                      <LinearProgress
                        className="charProgress"
                        variant="determinate"
                        value="90"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="gross">
                  $0.00 <a>Gross</a>
                </div>
                <div className="status">
                  <svg id="status-dot" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve">
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  <div id="status-name">
                    On sale
                  </div>
                  
                </div>
                
                  
              </div>
              <div className="opt">
                    <button className="other-options" onClick={onClickEdit}>
                    <svg id="vertical-dots" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve">
                        <path id="vertical-dots" fill-rule="evenodd" clip-rule="evenodd" d="M10 18c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z">
                        </path>
                        <circle id="vertical-dots" fill-rule="evenodd" clip-rule="evenodd" cx="12" cy="12" r="2">
                        </circle>
                        <circle id="vertical-dots" fill-rule="evenodd" clip-rule="evenodd" cx="12" cy="6" r="2">
                        </circle>
                    </svg>
                    </button>
                    {showEdit && (
                      <div id="myDropdown" className="dropdown-content" ref={referenceEdit}>
                        <ul>
                          <div>
                            <button
                              className="drop-button"
                              onClick={onClickEditButton}
                            >
                              View
                            </button>
                          </div>
                          <div>
                            <button
                              className="drop-button"
                              onClick={onClickEditButton}
                            >
                              Edit
                            </button>
                          </div>
                          <div>
                            <button
                              className="drop-button"
                              onClick={onClickEditButton}
                            >
                              Copy URL
                            </button>
                          </div>
                          <div>
                            <button
                              className="drop-button"
                              onClick={onClickEditButton}
                            >
                              Delete
                            </button>
                          </div>
                        </ul>
                      </div>
                    )}
                </div>
                
            </div>
            <div className="export-div">
              <svg id="download_svg__eds-icon--download_svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve">
                  <path id="download_svg__eds-icon--download_base" fill="#231F20" d="M16 16v1h5v4H3v-4h5v-1H2v6h20v-6z">
                  </path>
                  <path fill-rule="evenodd" clip-rule="evenodd" fill="#231F20" d="M17.3 11.4l-4.8 4.7V2h-1v14.1l-4.8-4.7-.7.7 6 5.9 6-5.8z">
                    </path>
              </svg>
              <a>
                CSV Export
              </a>
              
            </div>
            
        

    </div>
   </PageContainer>
  )
}