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

/**
 * A functional component that handles the Organization event page.
 * 
 * @returns {JSX.Element} The JSX representation of the component.
 */

export default function Organize() {
  const [showMenu,setShowMenu] = useState(false);
  const [doneSelect,setDone] = useState(false);
  const [select,setSelect] = useState("All events")

  function displayMenu(){
    if (!doneSelect)
    {setShowMenu(true)}
    else{
      setDone(false)
    }
  }

  /**
   * Updates the dropdown menu and handles the category selected.
   *
   * @param {Object} e - The event object.
   */
  
  function onClickMenu(e){
    setDone(true)
    const {name,value} = e.target;
    setShowMenu(false);
    setSelect(name) ;
  }

 
  return (
   <PageContainer>
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
                <div id="myDropdown" className="dropdown-content">
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
            
        

     </div>
   </PageContainer>
  )
}