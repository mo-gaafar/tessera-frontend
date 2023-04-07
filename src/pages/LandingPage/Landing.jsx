/**
 * @file Landing.jsx
 * @name Landing.jsx
 * @author @moSaeed15
 * @requires react
 * @requires react-router-dom
 * @requires ./styles/Landing.styled
 * @requires ./EventBox
 * @exports Landing
 * @description This file contains the Landing page components and its logic
 */
import DateRangePicker from "tw-daterange"
import DatePicker from "react-datepicker";
import format from "date-fns/format";
import  'react-dater/dist/index.css'

import { useEffect, useState } from 'react';
import { StyledLandingEvents } from './styles/Landing.styled';
import { StyledEventsContainer } from './styles/Landing.styled';
import { Link, Route, Routes } from 'react-router-dom';

import logo from '../../assets/icon-down.png';
import cross from '../../assets/x-10327.png';
import EventBox from './EventBox';
import Navbar from './nav2';
import { setDate } from "date-fns/esm";

export default function Landing() {
  const [city, setCity] = useState('');

  /**
   * @function useEffect
   * @name useEffect
   * @description This function is a hook that fetches the city name from the latitude and longitude
   * @param {function} fetchData
   * @param {function} navigator.geolocation.getCurrentPosition
   * @returns {JSX.Element} A React component representing the event box
   */
  const [forYouElement,setForYouElement] = useState(false);
  const [showCalender,setShowCalender] = useState(false);
  const [showMenu,setShowMenu] = useState(false);

  const [count,setCount] = useState(0);
  const [showDateRange,setShowDate] = useState(false)
  
    
    
  const [range, setRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  })

  const [select,setSelect] = useState("")
  

  function onClickCalender(e){
    const {name,value} = e.target
    if (name === "calender"){
      setShowCalender(true)
      setShowMenu(false)
    }
    else {
      setShowMenu(false)
      setSelect(name)
     
    }
  }
  function showDropdown(){ 
    if (!select){
      setShowMenu(true)}
    
  }
  const [focused, setFocused] =  useState({
    All: true,
    forYou: false,
    online: false,
    today: false,
    weekend: false,
    women: false,
    free: false,
    music: false,
    food: false,
    charity: false,
  });

  useEffect(() => {
    const fetchData = async (latitude, longitude) => {
      const data = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyC-V5bPta57l-zo8nzZ9MIxxGqvONc74XI`
      );

      const json = await data.json();
      const cityName =
        json.results[0].address_components[4].long_name.split(' ')[0];
      setCity(cityName);
    };

    navigator.geolocation?.getCurrentPosition(poistion => {
      const { latitude, longitude } = poistion.coords;

      fetchData(latitude, longitude);
    });
  }, []);

  function handleForYou (){
    setForYouElement(true)
    setFocused(prevFocus => {
      return {
        forYou: true,
      };
    });
  }

  function onClickAll(e){
    setForYouElement(false)
    const {name,value} = e.target
    setFocused(prevFocus => {
      return {
        [name]: true,
      };
    
    });
    
  }

  function removeDate(){
    setShowDate(false)
    setSelect("")
    
  }
  
  useEffect(() => {
    if(range.startDate && range.endDate && count===1){
      setShowCalender(false)
      setShowMenu(false)
      setShowDate(true)
      
    }
    else{setCount(1)}
  },[range.startDate])
  
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "August", "Sep", "Oct", "Nov", "Dec"
];

  return (
    <>
      <Navbar />
      <StyledLandingEvents>
        {/* <h3>
        Popular in
        <svg
          id="chevron-down-chunky_svg__eds-icon--chevron-down-chunky_svg"
          x="0"
          y="0"
          viewBox="0 0 24 24"
          xmlSpace="preserve"
        >
          <path
            id="chevron-down-chunky_svg__eds-icon--chevron-down-chunky_base"
            fill="evenodd"
            clip="evenodd"
            d="M7 10.2l5 5 5-5-1.4-1.4-3.6 3.6-3.6-3.6z"
          ></path>
        </svg>
        <span>{city}</span>
      </h3> */}
    
        <div className="">
          <nav> 
            <ul> 
            <li className="first-Filter">
              <button
              className="nav--filter"
              name="All"
              onClick={onClickAll}
              style={focused.All ?
               {color:"blue", paddingBottom: "3px",
               borderBottom:"2px solid blue"}:{background:"none"}}>
                
                All 
                
              </button>
            </li>
            
            <li>
              <button 
              onClick={handleForYou}
              className="nav--filter"
              style={focused.forYou ?
               {color:"blue", paddingBottom: "3px",
               borderBottom:"2px solid blue"}:{background:"none"}}>
                <span>
                  For you
                </span>
              </button>
            </li>

            <li>
              <button
              className="nav--filter"
              name="online"
              onClick={onClickAll}
              style={focused.online ?
                {color:"blue", paddingBottom: "3px",
                borderBottom:"2px solid blue"}:{background:"none"}}>
                
                  Online
                
                
              </button>
            </li>

            <li>
              <button
              className="nav--filter"
              name="today"
              onClick={onClickAll}
                style={focused.today ?
               {color:"blue", paddingBottom: "3px",
               borderBottom:"2px solid blue"}:{background:"none"}}>
                
                  Today
                
                
              </button>
            </li>

            <li>
              <button
              className="nav--filter"
              name="weekend"
              onClick={onClickAll}
               style={focused.weekend ?
               {color:"blue", paddingBottom: "3px",
               borderBottom:"2px solid blue"}:{background:"none"}}>
                
                  This Weekend
                
                
              </button>
            </li>

          

            <li>
              <button 
              onClick={onClickAll}
              name="free"
              className="nav--filter"
               style={focused.free ?
               {color:"blue", paddingBottom: "3px",
               borderBottom:"2px solid blue"}:{background:"none"}}>
                
                  Free
                
                
              </button>
            </li>

            <li>
              <button 
              onClick={onClickAll}
              name="music"
              className="nav--filter"
              style={focused.music ?
               {color:"blue", paddingBottom: "3px",
               borderBottom:"2px solid blue"}:{background:"none"}}>
                
                  Music
                
                
              </button>
            </li>

            <li>
              <button 
              className="nav--filter"
              onClick={onClickAll}
              name="food"
              style={focused.food ?
               {color:"blue", paddingBottom: "3px",
               borderBottom:"2px solid blue"}:{background:"none"}}>
                
                  Food & Drink
                
                
              </button>
            </li>

            <li>
              <button 
              className="nav--filter"
              onClick={onClickAll}
              name="charity"
              style={focused.charity ?
               {color:"blue", paddingBottom: "3px",
               borderBottom:"2px solid blue"}:{background:"none"}}>
                
                  Charity & causes
                
                
              </button>
            </li>
          </ul>
          </nav>
        
          {forYouElement&&
            <div className="date-dropdown" onClick={showDropdown}>
              <div className="you--options" >
                {showDateRange ?
                <span> 
                  {monthNames[range.startDate.getMonth()]+" "+range.startDate.getDate() + " - " +monthNames[range.endDate.getMonth()]+" "+ range.endDate.getDate()}
                    <button
                      onClick={removeDate}
                    className="remove-button">
                      <img src={cross}/>
                    </button>
                      
                </span> 
                : select ?
                <span>
                      {select}
                      <button
                      onClick={removeDate}
                    className="remove-button">
                      <img src={cross}/>
                    </button>
                </span>
                : <span>
                      Date
                      <img src={logo}/>
                </span>
                }
                
              </div>
              {
                showMenu &&
                <div id="myDropdown" className="dropdown-content">
                <ul>
                  <div>
                  <button 
                  name="calender"
                  className="drop-button"
                  onClick={onClickCalender}
                  >
                    Calender
                  </button>
                  </div>
                  <div>
                    <button
                    name="Today"
                    className="drop-button"
                    onClick={onClickCalender}>
                      Today
                    </button>
                  </div>
                  <div>
                    <button
                    onClick={onClickCalender}
                    name="Tomorrow"
                    className="drop-button">
                      Tomorrow
                    </button>
                  </div>
                  <div>
                    <button 
                    name="This weekend"
                    onClick={onClickCalender}
                    className="drop-button">
                      This weekend
                    </button>
                  </div>
                </ul>
                
              </div>
              }
              
              {
                  showCalender&&
                  <div>
                <div className="dropdown-content">
                <DateRangePicker
                wrapperClassName="datePicker"
                initialRange={range}
                onUpdate={(dateRange) => {
                  setRange(dateRange)
                }}
              />
              
               
              </div>
              </div>
              
                }
              
            </div>
          }
          
          <h4>Events in {city}</h4>
          <StyledEventsContainer img="../../src/assets/svgviewer-output.svg">
            <EventBox
              image="/images/event__1.avif"
              eventTitle="Certified DeFi Associate | Cairo"
              date="Tue, Apr 18, 7:00 AM "
              description="Cairo • Omar Al Khayam, Cairo Governorate Starts at $399.00"
              organizer="Blockchain Smart Solutions"
              followers="917 followers"
            />
            <EventBox
              image="/images/event__2.avif"
              eventTitle="The Future Of Leadership Congress 2023"
              date="Mon, May 15, 9:00 AM "
              description="Cairo • Cairo, Cairo Governorate Starts at A$751.69"
              organizer="Erudite Training Solutions"
              followers="47 followers"
            />
            <EventBox
              image="/images/event__3.avif"
              eventTitle="Unravelling NFTs | Cairo"
              date="Tue, Apr 11, 7:00 AM  "
              description="Cairo • Omar Al Khayam, Cairo Governorate Starts at $399.00"
              organizer="Blockchain Smart Solutions"
              followers="917 followers"
            />
            <EventBox
              image="/images/event__4.avif"
              eventTitle="Certified Crypto Associate | Cairo"
              date="Tomorrow at 4:00 PM"
              description="Cairo • Omar Al Khayam, Cairo Governorate Starts at $399.00"
              organizer="Blockchain Smart Solutions"
              followers="917 followers"
            />
            <EventBox
              image="/images/event__5.avif"
              eventTitle="Cloudflight Coding Contest (CCC) - Cairo"
              date="Fri, Mar 31, 3:00 PM"
              description="German University in Cairo • Cairo, محافظة القاهرة"
              isFree={true}
              organizer="Cloudflight GmbH"
              followers="213 followers"
            />
            <EventBox
              image="/images/event__6.avif"
              eventTitle="How to Improve Your Memory - Cairo"
              date="Wed, Mar 29, 4:00 PM "
              description="Cairo • Cairo, Cairo Governorate"
              isFree={true}
              organizer="Iris Reading"
              followers="213 followers"
            />
          </StyledEventsContainer>
        </div>
      </StyledLandingEvents>
    </>
  );
}
