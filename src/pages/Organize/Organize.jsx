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
import { useNavigate } from 'react-router-dom';
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

export default function Organize(props) {
  const [showMenu,setShowMenu] = useState(false);
  //const [showEdit,setShowEdit] = useState(false);
 
  const [doneSelect,setDone] = useState(false);
  const [isAvailable,setIsAvailable] = useState(true);
  const [issearch,setIsSearch] = useState();
  const [select,setSelect] = useState("All events");
  const [nameInput,setNameInput] = useState("");
  const [filter,setFilter] = useState("allevents");
  const [eventsList,setList] = useState();
  const [selectedEventIndex,setSelectedEventIndex]= useState();
  let navigate;
  if (!props.test) {
    navigate = useNavigate();
  }
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const [nameEvents,setNameEvents] = useState(
    //{
    //   "filteredEvents": [
    //     {
    //       "basicInfo": {
    //         "location": {
    //           "longitude": 45.523064,
    //           "latitude": -122.676483,
    //           "placeId": "ChIJN1t_tDeuEmsRUsoyG83frY4",
    //           "venueName": "My Venue",
    //           "streetNumber": 123,
    //           "route": "Main St",
    //           "administrativeAreaLevel1": "OR",
    //           "country": "US",
    //           "city": "Portland"
    //         },
    //         "eventName": "Tessseraaaaaa",
    //         "startDateTime": "2023-05-01T14:30:00.000Z",
    //         "endDateTime": "2023-05-01T18:00:00.000Z",
    //         "eventImage": "https://picsum.photos/282/140",
    //         "categories": "Music"
    //       },
    //       "eventUrl": "https://example.com/my-event"
    //     },
    //     {
    //       "basicInfo": {
    //         "location": {
    //           "longitude": -96,
    //           "latitude": 37,
    //           "placeId": "ChIJCzYy5IS16lQRQrfeQ5K5Oxw",
    //           "venueName": "United Center ",
    //           "streetNumber": 55,
    //           "route": "Magnificent Mile",
    //           "administrativeAreaLevel1": "Illinois",
    //           "country": "United States",
    //           "city": "Chicago"
    //         },
    //         "eventName": "Adult Mental Health First Aid Training April 18 & 25",
    //         "startDateTime": "2023-07-03T20:30:15.528Z",
    //         "endDateTime": "2023-09-09T22:52:38.471Z",
    //         "eventImage": "https://picsum.photos/282/140",
    //         "categories": "Home & Lifestyle"
    //       },
    //       "eventUrl": "https://www.tessera.social/"
    //     },
    //     {
    //       "basicInfo": {
    //         "location": {
    //           "longitude": 45.523064,
    //           "latitude": -122.676483,
    //           "placeId": "ChIJN1t_tDeuEmsRUsoyG83frY4",
    //           "venueName": "My Venue",
    //           "streetNumber": 123,
    //           "route": "Main St",
    //           "administrativeAreaLevel1": "OR",
    //           "country": "US",
    //           "city": "Portland"
    //         },
    //         "eventName": "Cross Platform",
    //         "startDateTime": "2023-05-01T14:30:00.000Z",
    //         "endDateTime": "2023-05-01T18:00:00.000Z",
    //         "eventImage": "https://picsum.photos/282/140",
    //         "categories": "Music"
    //       },
    //       "eventUrl": "https://example.com/my-event"
    //     }
    //   ],
    //   "eventsoldtickets": [
    //     118,
    //     2,
    //     2
    //   ],
    //   "isEventOnSale": [
    //     false,
    //     false,
    //     false
    //   ],
    //   "gross": [
    //     0,
    //     7943.16,
    //     0
    //   ],
    //   "maxCapacity": [
    //     6150,
    //     2,
    //     150
    //   ]
    // }
  )
  console.log(filter)
  useEffect(() => {
    fetch("https://www.tessera.social/api/event-management/listEvents/?filterBy="+filter, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
          setNameEvents(data);
          if (!data.filteredEvents.length){
            setIsAvailable(false);
          }
        })
        .catch(error => {
          console.error("There was a problem fetching the data:", error);
        })
        
      }
  ,[filter]);

  console.log(nameEvents);
  const reference = useRef(null);
  const referenceEdit = useRef(null);
  let showOpt = nameEvents ? Array(nameEvents.filteredEvents.length).fill(false):"";
  const [showEdit, setShowEdit] = useState(showOpt);
  

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
      setShowEdit(Array(nameEvents.filteredEvents.length).fill(false));
      
    }
  };
  /**
   * Updates the dropdown menu and handles the category selected.
   *
   * @param {Object} e - The event object.
   */
  function onClickEdit(index){
    //console.log(index);
    setSelectedEventIndex(index);
    //console.log(selectedEventIndex)

    const newShowEdit = [...showEdit];
    newShowEdit[index] = !newShowEdit[index];
    setShowEdit(newShowEdit);
    
  }
  function onClickMenu(e){
    setDone(true)
    const {name,value} = e.target;
    setShowMenu(false);
    setSelect(name);
    setFilter(name)
  }
  function onClickEditButton(e){
    const {name,value} = e.target;
    setShowEdit(Array(nameEvents.filteredEvents.length).fill(false));
  }
  
  const convertUtcToLocalTime = (dateString, loc) =>  {
    let date = new Date(dateString);
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
    const milliseconds = Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds()
    );
    const localTime = new Date(milliseconds);
    if(loc){
      return localTime;
    }
    return `${dayName}, ${
      monthNames[localTime.getMonth()]
    } ${localTime.getDate()} at ${localTime.getHours()}:${
      localTime.getMinutes() === 0 ? '00' : localTime.getMinutes()
    } EET`;
  };
  //console.log(showEdit)

  useEffect(() => {
    if (!nameEvents){
      return
    }
    const element = issearch 
    ?issearch
    : nameEvents.filteredEvents
    // console.log(element)
    // console.log("element")
    // console.log(issearch)
    setList(//nameEvents.filteredEvents
      element.map((list,index) => (
      <div>
      <div className="event-details" >
        {/* onClick={() => navigate('/')} */}
        <div className="event-data">

          <div className="data-date">
            <div className="month">{monthNames[(convertUtcToLocalTime(list.basicInfo.startDateTime, true)).getMonth()].toUpperCase()}</div>
            <div>{(convertUtcToLocalTime(list.basicInfo.startDateTime, true)).getDay()}</div>
          </div>

          <div>
            {list.basicInfo.eventImage ?
            <img src={list.basicInfo.eventImage}/>
            :
            <img src="https://cdn.evbstatic.com/s3-build/perm_001/5287e3/django/images/pages/organizations/no-event-image-placeholder-2x.png"/>
            }
          </div>

          <div className="data-name">
            <div className="name">{list.basicInfo.eventName}</div>
            <div className="date">{convertUtcToLocalTime(list.basicInfo.startDateTime, false)}</div>
          </div>

        </div>
        
        <div className="event-price-status">

          <div className="event-sold">
            <div className="rate-div">
             {nameEvents.eventsoldtickets[index]}/{nameEvents.maxCapacity[index]}
            </div>
            <div className="App">
              <div className="progress">
                <LinearProgress
                  className="charProgress"
                  variant="determinate"
                  value={(nameEvents.eventsoldtickets[index]/nameEvents.maxCapacity[index])*100}
                />
              </div>
            </div>
          </div>
          
          <div className="gross">
           ${nameEvents.gross[index]} <a>Gross</a>
          </div>
          <div className="status">
            <svg
             id="status-dot"
              x="0"
               y="0"
                viewBox="0 0 24 24"
                 xml:space="preserve"
                 style={{fill: !nameEvents.isEventOnSale[index] && "yellow"}}>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <div id="status-name">
              {nameEvents.isEventOnSale[index]? "On sale":"Scheduled"}
            </div>
            
          </div>
          
            
        </div>
        <div className="opt">
              <button className="other-options" onClick={() => onClickEdit(index)}>
              <svg id="vertical-dots" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve">
                  <path id="vertical-dots" fill-rule="evenodd" clip-rule="evenodd" d="M10 18c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z">
                  </path>
                  <circle id="vertical-dots" fill-rule="evenodd" clip-rule="evenodd" cx="12" cy="12" r="2">
                  </circle>
                  <circle id="vertical-dots" fill-rule="evenodd" clip-rule="evenodd" cx="12" cy="6" r="2">
                  </circle>
              </svg>
              </button>
              {showEdit[index] && selectedEventIndex === index && (
                <div id="myDropdown" className="dropdown-content" ref={referenceEdit}>
                  <ul>
                    <div>
                      <button
                        name="view"
                        className="drop-button"
                        onClick={() => {
                          setShowEdit(Array(nameEvents.filteredEvents.length).fill(false));
                          window.location.href = list.eventUrl;
                        }}
                       
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
                        name="copy"
                        //onClick={onClickEditButton}
                        onClick={() => {
                          setShowEdit(Array(nameEvents.filteredEvents.length).fill(false));
                          navigator.clipboard.writeText(list.eventUrl)
                        }}
                      >
                        Copy URL
                      </button>
                    </div>
                    <div>
                      <button
                        name="delete"
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
      </div>
      ))
    );
  }, [nameEvents,showEdit,issearch]);

  function handleSearch(){
    if (!nameInput){
      setIsSearch()
    }
    const filtered = nameEvents.filteredEvents.filter(obj => {
      return obj.basicInfo.eventName.toLowerCase().includes(nameInput.toLowerCase());
    });
    const index = nameEvents.filteredEvents.findIndex((obj) => obj === filtered[0]);
    console.log("filtered")
    console.log(filtered)
    
    if (filtered.length){
      setIsAvailable(true);
      console.log(index);
      setIsSearch(filtered)
    } else {
      setIsAvailable(false);
    }
  }

  function handleChange(event) {
    const {name, value} = event.target
    setNameInput(value)
  }


  const token = localStorage.getItem('token') 
  ? localStorage.getItem('token') : ''
  //console.log(token)
  const email = localStorage.getItem('email')
    ? localStorage.getItem('email')
    : localStorage.getItem('authEmail');
    

 
  return (
   <PageContainer>
    <StyledNav>
          {email && email !== 'undefined' ? (
            <NavbarLoggedIn creator={true} email={email} />
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
                    <button onClick={handleSearch} className="search-button">
                      <img src={search}  data-testid="search-inp"/>
                    </button>
                    <input onChange={handleChange} placeholder="Search events"/>
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
                <button className="plus-button" onClick={() => {navigate('/')}}>
                  <img src={logoPlus}/>
                </button>
                <button className="create-button" onClick={() => {navigate('/')}}>
                    Create Event
                </button>
              </div>
              
          </div>
            
            {!isAvailable &&
             <div className="event-body">
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
            </div> 
            }
            {isAvailable &&
            <div>
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
              {eventsList}
            
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
            </div>}
            
        

    </div>
   </PageContainer>
  )
}