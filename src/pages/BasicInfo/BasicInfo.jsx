//DONE
//design is almost done only a few things left 
//functionalities are not done 

//MISSING
//Labels above the input boxes should change colors
//venue in location
//* beside event title
//lesa hazabat el style sheet 3ashan ma3lmsh import ll hagat deh kolaha
import React from 'react';
import { useRef, useEffect, useState } from 'react';
import {
  WholePage
} from './Styles/BasicInfo.styled'

export default function BasicInfo(){
  const [focused,setFocused] = React.useState(false, {flag:false})
  const [title, setTitle] = React.useState("")
  const [inputerror, setinputerror] = React.useState("")
  const [value, setValue] = React.useState("")
  const [tagvalue, setTagValue] = React.useState("")
  const [organizervalue, setOrganizerValue] = React.useState("")
  const [count, setCount] = useState(0);
  const [displayValue, setDisplayValue] = useState([]);
  const [showvenue, setShowVenue] = useState(true);
  const [showonline, setShowOnline] = useState(false);
  const [shownone, setShowNone] = useState(false);
  const [showsingle, setShowSingle] = useState(true);
  const [showrecurring, setShowRecurring] = useState(false);
  function handleDivClick(event) {
    const {name, locvalue} = event.target.getAttribute('name');
    console.log(name)
    if (name === 'venue') {
      setShowVenue(true);
      setShowOnline(false); // hide the other div if it was previously shown
      setShowRecurring(false);
      setShowSingle(false);
      setShowNone(false);
    } else if (name === 'online') {
      setShowOnline(true);
      setShowVenue(false); // hide the other div if it was previously shown
      setShowNone(false);
      setShowRecurring(false);
      setShowSingle(false);
    }
    else if (name == "recurring"){
      setShowRecurring(true);
      setShowSingle(false); // hide the other div if it was previously shown
      setShowNone(false);
      setShowOnline(false);
      setShowVenue(false);
    }
    else if (name == "single"){
      setShowRecurring(false);
      setShowSingle(true); // hide the other div if it was previously shown
      setShowNone(false);
      setShowOnline(false);
      setShowVenue(false);
    }
    else if (name == "none"){
      setShowRecurring(false);
      setShowSingle(false); // hide the other div if it was previously shown
      setShowNone(true);
      setShowOnline(false);
      setShowVenue(false);
    }
    event.preventDefault();
    console.log(event)
  }

  function handleChange(event){
    setValue(event.target.value);
    //console.log("Value:", value);
    //console.log("count:", count);
  }
  function handleTagChange(event){
    setTagValue(event.target.value)
    setCount(prevCount => event.target.value.length);
  }
  function handleButtonClick(e) {
    //this allows the user to enter 10 tags only 
    if (displayValue.length < 10) {
      setDisplayValue([...displayValue, tagvalue]);
      setTagValue('');
    }
    e.preventDefault();
  }
  //This function doesn't allow the user to enter anything other than letters, numbers and underscores
  function handleKeyPress(event) {
    const format = /^[a-zA-Z0-9_]+$/;
    const key = event.key;
    if (!format.test(key)) {
      event.preventDefault();
    }
  }
  
  //this function allows the user to delete a tag they entered
  function handleTagDelete(index, event) {
    const newDisplayValue = [...displayValue];
    newDisplayValue.splice(index, 1);
    setDisplayValue(newDisplayValue);
    event.preventDefault();
  }
  function handleOrganizerChange(event){
    setOrganizerValue(event.target.value)
  }
  function handleValidation(event){
  if (value.trim() === '') {
    return; // Exit the function if input is empty or only contains whitespace
  }
  }
  const saveButtonStyle ={
    backgroundColor: '#d1410c',
    fill: '#fff',
    color: 'white',
    borderColor: "#d1410c",
  };
  //DONE
//design is almost done only a few things left 
//functionalities are not done 

//MISSING
//Labels above the input boxes should change colors
//venue in location
//* beside event title
//lesa hazabat el style sheet 3ashan ma3lmsh import ll hagat deh kolaha
import React from 'react';
import { useRef, useEffect, useState } from 'react';
import {
  WholePage
} from './Styles/BasicInfo.styled'

export default function BasicInfo(){
  const [focused,setFocused] = React.useState(false, {flag:false})
  const [title, setTitle] = React.useState("")
  const [inputerror, setinputerror] = React.useState("")
  const [value, setValue] = React.useState("")
  const [tagvalue, setTagValue] = React.useState("")
  const [organizervalue, setOrganizerValue] = React.useState("")
  const [count, setCount] = useState(0);
  const [displayValue, setDisplayValue] = useState([]);
  const [showvenue, setShowVenue] = useState(true);
  const [showonline, setShowOnline] = useState(false);
  const [shownone, setShowNone] = useState(false);
  const [showsingle, setShowSingle] = useState(true);
  const [showrecurring, setShowRecurring] = useState(false);
  function handleDivClick(event) {
    const {name, locvalue} = event.target.getAttribute('name');
    console.log(name)
    if (name === 'venue') {
      setShowVenue(true);
      setShowOnline(false); // hide the other div if it was previously shown
      setShowRecurring(false);
      setShowSingle(false);
      setShowNone(false);
    } else if (name === 'online') {
      setShowOnline(true);
      setShowVenue(false); // hide the other div if it was previously shown
      setShowNone(false);
      setShowRecurring(false);
      setShowSingle(false);
    }
    else if (name == "recurring"){
      setShowRecurring(true);
      setShowSingle(false); // hide the other div if it was previously shown
      setShowNone(false);
      setShowOnline(false);
      setShowVenue(false);
    }
    else if (name == "single"){
      setShowRecurring(false);
      setShowSingle(true); // hide the other div if it was previously shown
      setShowNone(false);
      setShowOnline(false);
      setShowVenue(false);
    }
    else if (name == "none"){
      setShowRecurring(false);
      setShowSingle(false); // hide the other div if it was previously shown
      setShowNone(true);
      setShowOnline(false);
      setShowVenue(false);
    }
    event.preventDefault();
    console.log(event)
  }

  function handleChange(event){
    setValue(event.target.value);
    //console.log("Value:", value);
    //console.log("count:", count);
  }
  function handleTagChange(event){
    setTagValue(event.target.value)
    setCount(prevCount => event.target.value.length);
  }
  function handleButtonClick(e) {
    //this allows the user to enter 10 tags only 
    if (displayValue.length < 10) {
      setDisplayValue([...displayValue, tagvalue]);
      setTagValue('');
    }
    e.preventDefault();
  }
  //This function doesn't allow the user to enter anything other than letters, numbers and underscores
  function handleKeyPress(event) {
    const format = /^[a-zA-Z0-9_]+$/;
    const key = event.key;
    if (!format.test(key)) {
      event.preventDefault();
    }
  }
  
  //this function allows the user to delete a tag they entered
  function handleTagDelete(index, event) {
    const newDisplayValue = [...displayValue];
    newDisplayValue.splice(index, 1);
    setDisplayValue(newDisplayValue);
    event.preventDefault();
  }
  function handleOrganizerChange(event){
    setOrganizerValue(event.target.value)
  }
  function handleValidation(event){
  if (value.trim() === '') {
    return; // Exit the function if input is empty or only contains whitespace
  }
  }
  const saveButtonStyle ={
    backgroundColor: '#d1410c',
    fill: '#fff',
    color: 'white',
    borderColor: "#d1410c",
  };
  return(
    <WholePage>
      <div className='wholepage'>
      <div className='page'>
        <main className='main'>
          <section>
            <div>
              <div>
                <div
                style={
                  {paddingTop: '1.6rem'}
                }>
                  <button className = 'eventsbutton'>
                    <div className = 'backevents'>
                      <i className='smallI'>
                        <svg className='smallSvg'
                        x="0"
                        y="0" 
                        viewBox="0 0 24 24" 
                        xmlSpace="preserve">
                          <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          fill= '#3659e3'
                          d="M13.8 7l-5 5 5 5 1.4-1.4-3.6-3.6 3.6-3.6z">
                          </path>
                        </svg>
                      </i>
                      <p className='eventsword'>
                        Events
                      </p>
                    </div>
                  </button>
                </div>
                <div className='lowerdiv'>
                  <form>
                    <div className='basicinfodiv'>
                      <div className='iconsdiv'>
                        <i className='mediumI'>
                          <svg className='mediumSvg'
                          x="0"
                          y="0" 
                          viewBox="0 0 24 24" 
                          xmlSpace="preserve">
                            <path
                            fill='#dbdae3'
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2 2v3h1V3h5v10H6v1h5v-1H9V3h5v2h1V2H2z">
                            </path>
                            <g
                            fillRule="evenodd"
                            clipRule="evenodd">
                              <path
                              fill='#dbdae3'
                              d="M15 9h7v1h-7zM15 13h7v1h-7zM6 17h16v1H6zM6 21h16v1H6z">
                              </path>
                            </g>
                          </svg>
                        </i>
                      </div>
                      <div className='infodiv'>
                        <div>
                          <h1 className='sectiontitle'>
                            Basic Info
                          </h1>
                          <div
                          style={
                            {
                              width: '75%'
                            }
                          }>
                            <p className='explanationp'>
                              <span className='explanationspan'>
                                Name your event and tell event-goers why they should come. Add details that highlight what makes it unique.
                              </span>
                            </p>
                          </div>
                        </div>
                        <div
                        style={
                          {
                            marginTop : '16px'
                          }
                        }>
                            <form className='form' >
                              <div>
                                <label className='label'> 
                                  <span style={{WebkitBoxDirection: "normal"}}>Event Title</span>
                                </label>
                                <input
                                  className='inputdata'
                                  invalid={focused && value.trim() === ''} 
                                  data-testid="title"
                                  type="text"
                                  maxLength="75" 
                                  name="titleinput" 
                                  id="title-input"
                                  placeholder="Be clear and descriptive."
                                  value={value}
                                  onChange={handleChange}
                                  onFocus={() => setFocused(true)}
                                  />
                                {inputerror && (
                                <span style={{color:"red"}}>{inputerror}</span>
                                )}
                              </div>
                          </form>
                            <div
                            style={
                              {
                                display: 'flex',
                                WebkitBoxPack: 'justify',
                                justifyContent: 'space-between'
                              }
                            }>
                                <div
                                style={
                                  {
                                    WebkitBoxFlex: '1',
                                    flex: '1 1 auto'
                                  }
                                }>
                                <aside className='aside'>
                                  {focused && value.trim() === '' && (
                                  <p className='errormessage'>Title is required</p>
                                  )}
                                </aside>
                                </div>
                                <div
                                  style={
                                    {
                                      WebkitBoxFlex: '1',
                                      flex: '1 1 auto',
                                      textAlign: 'right'
                                    }
                                  }>
                                  <aside className='aside'>
                                    {value.length}/75
                                  </aside>
                                </div>
                              </div>
                            <form className='form'>
                              <div >
                                <label className='label'> 
                                  <span style={{WebkitBoxDirection: "normal"}}>Organizer</span>
                                </label>
                                <input 
                                 className='inputdata2'
                                 data-testid="input" 
                                  type="input" 
                                  name="enter-organizer" 
                                  id="organizer-input"
                                  placeholder='Tell attendees who is organizing this event.'
                                  value={organizervalue}
                                  onChange={handleOrganizerChange}
                                  onFocus={() => setFocused(true)}
                                  />
                              </div>
                          </form>
                            <p className='inputdescription'>
                              This profile describes a unique organizer and shows all of the events on one page.
                              <a className='organizerinfolink'>View Organizer Info</a>
                            </p>
                          <fieldset className='fieldset'>
                            <div className='typedropdown'>
                              <div
                              style={
                                {
                                  marginBottom: '16px'
                                }
                              }>
                                <div className='typeborder'>
                                  <div>
                                    <div>
                                      <div
                                      style={
                                        {
                                          width: '100%',
                                          height: '46px',
                                          position: 'relative'
                                        }
                                      }>
                                        <span className='dropdownspan'>
                                          <span className='dropdowntitlespan'>Type</span>
                                          <span className='dropdownarrowspan'>
                                            <i className='"smallI'>
                                              <svg className='smallSvg'
                                              x="0"
                                              y="0" 
                                              viewBox="0 0 24 24" 
                                              xmlSpace="preserve">
                                                <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M7 10.2l5 5 5-5-1.4-1.4-3.6 3.6-3.6-3.6z">
                                                </path>
                                              </svg>
                                            </i>
                                          </span>
                                        </span>
                                        <select className='dropdownselect'>
                                        <option
                                          className='dropdownoption' 
                                          value
                                          data-spec="select-option">
                                            Type
                                          </option>
                                          <option
                                          className='dropdownoption' 
                                          value="3" 
                                          data-spec="select-option">
                                            Tradeshow, Consumer Show, or Expo
                                          </option>
                                          <option
                                          className='dropdownoption' 
                                          value="13" 
                                          data-spec="select-option">
                                            Tournament
                                          </option>
                                          <option
                                          className='dropdownoption'  
                                          value="16" 
                                          data-spec="select-option">
                                            Tour
                                          </option>
                                          <option
                                          className='dropdownoption'  
                                          value="2" 
                                          data-spec="select-option">
                                            Seminar or Talk
                                          </option>
                                          <option
                                          className='dropdownoption'  
                                          value="7" 
                                          data-spec="select-option">
                                            Screening
                                          </option>
                                          <option
                                          className='dropdownoption'  
                                          value="12" 
                                          data-spec="select-option">
                                            Rally
                                          </option>
                                          <option
                                          className='dropdownoption'  
                                          value="15" 
                                          data-spec="select-option">
                                            Race or Endurance Event
                                          </option>
                                          <option
                                          className='dropdownoption'  
                                          value="11" 
                                          data-spec="select-option">
                                            Party or Social Gathering
                                          </option>
                                          <option
                                          className='dropdownoption'  
                                          value="100" 
                                          data-spec="select-option">
                                            Other
                                          </option>
                                          <option
                                          className='dropdownoption'  
                                          value="10" 
                                          data-spec="select-option">
                                            Meeting or Networking Event
                                          </option>
                                          <option
                                          className='dropdownoption'  
                                          value="14" 
                                          data-spec="select-option">
                                            Game or Competition
                                          </option>
                                          <option
                                          className='dropdownoption'  
                                          value="5" 
                                          data-spec="select-option">
                                            Festival or Fair
                                          </option>
                                          <option
                                          className='dropdownoption'  
                                          value="8" 
                                          data-spec="select-option">
                                            Dinner or Gala
                                          </option>
                                          <option
                                          className='dropdownoption'  
                                          value="4" 
                                          data-spec="select-option">
                                            Convention
                                          </option>
                                          <option
                                          className='dropdownoption'  
                                          value="1" 
                                          data-spec="select-option">
                                            Conference
                                          </option>
                                          <option
                                          className='dropdownoption'  
                                          value="6" 
                                          data-spec="select-option">
                                            Concert or Performance
                                          </option>
                                          <option
                                          className='dropdownoption'  
                                          value="9" 
                                          data-spec="select-option">
                                            Class, Training, or Workshop
                                          </option>
                                          <option
                                          className='dropdownoption'  
                                          value="18" 
                                          data-spec="select-option">
                                            Camp, Trip, or Retreat
                                          </option>
                                          <option
                                          className='dropdownoption'  
                                          value="17" 
                                          data-spec="select-option">
                                            Attraction
                                          </option>
                                          <option
                                          className='dropdownoption'  
                                          value="19" 
                                          data-spec="select-option">
                                            Appearance or Signing
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='typedropdown'>
                              <div
                              style={
                                {
                                  marginBottom:'16px'
                                }
                              }>
                                <div
                                className='typeborder'>
                                  <div>
                                    <div>
                                    <div
                                      style={
                                        {
                                          width: '100%',
                                          height: '46px',
                                          position: 'relative'
                                        }
                                      }>
                                        <span className='dropdownspan'>
                                          <span className='dropdowntitlespan'>Category</span>
                                          <span className='dropdownarrowspan'>
                                            <i className='smallI'>
                                              <svg className='smallSvg'
                                              x="0"
                                              y="0" 
                                              viewBox="0 0 24 24" 
                                              xmlSpace="preserve">
                                                <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M7 10.2l5 5 5-5-1.4-1.4-3.6 3.6-3.6-3.6z">
                                                </path>
                                              </svg>
                                            </i>
                                          </span>
                                        </span>
                                        <select className='dropdownselect'>
                                        <option
                                          className='dropdownoption'  
                                          value
                                          data-spec="select-option">
                                            Category
                                          </option>
                                          <option
                                          className='dropdownoption'  
                                          value="118" 
                                          data-spec="select-option">
                                            Auto, Boat & Air
                                          </option>
                                          <option
                                          className='dropdownoption'  
                                          value="101" 
                                          data-spec="select-option">
                                            Business & Professional
                                          </option>
                                          <option
                                          className='dropdownoption'  
                                          value="111" 
                                          data-spec="select-option">
                                            Charity & Causes
                                          </option>
                                          <option
                                          className='dropdownoption'  
                                          value="113" 
                                          data-spec="select-option">
                                            Community & Culture
                                          </option>
                                          <option
                                          className='dropdownoption'  
                                          value="115" 
                                          data-spec="select-option">
                                            Family & Education
                                          </option>
                                          <option
                                          className='dropdownoption'  
                                          value="106" 
                                          data-spec="select-option">
                                            Fashion & Beauty
                                          </option>
                                          <option
                                          className='dropdownoption'  
                                          value="104" 
                                          data-spec="select-option">
                                            Film, Media & Entertainment
                                          </option>
                                          <option
                                          className='dropdownoption'  
                                          value="110" 
                                          data-spec="select-option">
                                            Food & Drink
                                          </option>
                                          <option
                                          className='dropdownoption'  
                                          value="112" 
                                          data-spec="select-option">
                                            Government & Politics
                                          </option>
                                          <option
                                          className='dropdownoption'  
                                          value="107" 
                                          data-spec="select-option">
                                            Health & Wellness
                                          </option>
                                          <option
                                          className='dropdownoption'  
                                          value="119" 
                                          data-spec="select-option">
                                            Hobbies & Special Interest
                                          </option>
                                          <option
                                          className='dropdownoption'  
                                          value="117" 
                                          data-spec="select-option">
                                            Home & Lifestyle
                                          </option>
                                          <option
                                          className='dropdownoption'  
                                          value="103" 
                                          data-spec="select-option">
                                            Music
                                          </option>
                                          <option
                                          className='dropdownoption'  
                                          value="199" 
                                          data-spec="select-option">
                                            Other
                                          </option>
                                          <option
                                          className='dropdownoption'  
                                          value="105" 
                                          data-spec="select-option">
                                            Performing & Visual Arts
                                          </option>
                                          <option
                                          className='dropdownoption'  
                                          value="114" 
                                          data-spec="select-option">
                                            Religion & Spirituality
                                          </option>
                                          <option
                                          className='dropdownoption'  
                                          value="120" 
                                          data-spec="select-option">
                                            School Activities
                                          </option>
                                          <option
                                          className='dropdownoption'  
                                          value="102" 
                                          data-spec="select-option">
                                            Science & Technology
                                          </option>
                                          <option
                                          className='dropdownoption'  
                                          value="116" 
                                          data-spec="select-option">
                                            Seasonal & Holiday
                                          </option>
                                          <option
                                          className='dropdownoption'  
                                          value="108" 
                                          data-spec="select-option">
                                            Sports & Fitness
                                          </option>
                                          <option
                                          className='dropdownoption'  
                                          value="109" 
                                          data-spec="select-option">
                                            Travel & Outdoor  
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </fieldset>
                          <div 
                          style={
                            {
                              marginTop: '16px'
                            }
                          }>
                            <div className='tagstitlediv'>Tags</div>
                            <div className='explanationdiv'>
                              Improve discoverability of your event by adding tags relevant to the subject matter.
                            </div>
                            <div >
                              <div style={{display: "flex", marginBottom: '16px'}}>
                                <div className='tagsinputdiv'>
                                  <div tabIndex="-1">
                                    <div>
                                      <div style={{position: "relative"}}>
                                        <div
                                        style={
                                          {
                                            marginBottom: '8px'
                                          }
                                        }>
                                          <form className='form'>
                                            <div >
                                              <label
                                              className='tagslabel'> 
                                                <span style={{WebkitBoxDirection: "normal"}}>Press Enter to add a tag</span>
                                              </label>
                                              <input
                                                className = 'inputtagsdata'
                                                data-testid="tags"
                                                type="input" 
                                                name="taginput" 
                                                id="tags-input"
                                                maxLength="25"
                                                placeholder="Add search keywords to your event"
                                                value={tagvalue}
                                                onChange={handleTagChange}
                                                onKeyPress={handleKeyPress}
                                                onFocus={() => setFocused(true)}
                                                />
                                            </div>
                                        </form>
                                        <div
                                          style={
                                            {
                                              display: 'flex',
                                              WebkitBoxPack: 'justify',
                                              justifyContent: 'space-between'
                                            }
                                          }>
                                          <div
                                            style={
                                              {
                                                WebkitBoxFlex: '1',
                                                flex: '1 1 auto'
                                              }
                                            }>
                                          <aside className = 'aside'>
                                          {displayValue.length}/10 tags
                                          </aside>
                                          </div>
                                          <div
                                            style={
                                              {
                                                WebkitBoxFlex: '1',
                                                flex: '1 1 auto',
                                                textAlign: 'right'
                                              }
                                            }>
                                            <aside className = 'aside'>
                                              {tagvalue.length}/25
                                            </aside>
                                            </div>
                                        </div>
                                      </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <button className='usedbutton' onClick={handleButtonClick}>Add</button>
                              </div>
                                  {displayValue.map((value, index) => (
                                    <div className='tagsdisplayeddiv' key={index}>
                                      <div className='tagsdisplayed'>
                                        <div
                                        style={
                                          {
                                            display:'inline-block',
                                            padding: '0 8px 16px'
                                          }
                                        }>
                                          <div className='singletag'>
                                            <span className='singletagspan'>
                                              <p>{value}</p>
                                            </span>
                                            <div className='closebuttondiv'>
                                              <button className='closebutton' onClick={(event) => handleTagDelete(index, event)}>
                                                <i className = 'smallI'>
                                                  <svg className='smallSvg' x="0" y="0" viewBox="0 0 24 24" xmlSpace="preserve">
                                                    <path fill="#4b4d63" d="M13.4 12l3.5-3.5-1.4-1.4-3.5 3.5-3.5-3.5-1.4 1.4 3.5 3.5-3.5 3.5 1.4 1.4 3.5-3.5 3.5 3.5 1.4-1.4z"></path>
                                                  </svg>
                                                </i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className = 'linedivider'></hr>
                    <div className='locationdiv'>
                    <div className='iconsdiv'>
                        <i className = 'mediumI'>
                          <svg className='mediumsvg'
                          x="0"
                          y="0" 
                          viewBox="0 0 24 24" 
                          xmlSpace="preserve">
                            <path
                            fill='#dbdae3'
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20 3c-1.1 0-2 .9-2 2H2v16h17.8c1.1 0 2.1-.9 2.1-2V5c.1-1.1-.8-2-1.9-2zm-.2 17H3V6h15v13h1c0-.6.4-1 1-1 .5 0 .9.4 1 .9-.1.6-.6 1.1-1.2 1.1zm1.2-2.7c-.3-.2-.6-.3-1-.3s-.7.1-1 .3V5c0-.6.4-1 1-1s1 .4 1 1v12.3z">
                            </path>
                            <path
                              fill='#dbdae3'
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.8 12.7l.7-.7-1.1-1 1.1-1-.7-.7-1.1 1-1-1-.7.7 1 1-1 1 .7.7 1-1z">
                            </path>
                            <path
                              fill='#dbdae3'
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 10h2v1h-2z">
                            </path>
                            <path
                              fill='#dbdae3'
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M15 12h1v2h-1z">
                            </path>
                            <path
                              fill='#dbdae3'
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 15h2v1h-2z">
                            </path>
                            <path
                              fill='#dbdae3'
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8 15h2v1H8z">
                            </path>
                          </svg>
                        </i>
                      </div>
                      <div style={{display: "block"}}>
                        <div>
                          <h1 
                          style={
                            {
                              color: '#1e0a3c'
                            }
                          }>
                            Location
                          </h1>
                          <div style={
                            {width: '75%'}
                          }>
                            <p className = 'explanationp'>
                              <span className = 'explanationspan'>
                                Help people in the area discover your event and let attendees know where to show up.
                              </span>
                            </p>
                          </div>
                        </div>
                        <div style={{marginTop: 20}}>
                          <div className = 'locationsbuttonsdiv'>
                            <div
                            style={
                              {
                                display:'flex',
                                marginBottom: '20px'
                              }
                            }>
                              <div className = 'buttonsdiv'>
                                <label className = 'buttonslabels' name='venue' onClick={handleDivClick}>
                                  Venue
                                </label>
                              <div>
                              <div className = 'buttonsdiv'>
                                <label className = 'buttonslabels' name='online' onClick={handleDivClick}>
                                  Online Event
                                </label>
                              <div>
                              <div className = 'buttonsdiv'>
                                <label className = 'buttonslabels' name='none' onClick={handleDivClick}>
                                  To Be Announced
                                </label>
                              <div>
                              {/* {showvenue && (
                                <div>
                                  This is the venue div.
                                  <button>Like</button>
                                </div>
                              )}
                              {showonline && (
                                <div>
                                  This is the online event div.
                                </div>
                              )}
                              {shownone && (
                                <div>
                                  This is the none event div.
                                </div>
                              )} */}
                            </div>
                          </div>
                          <div style={
                            {width: '75%'}
                          }>
                            <p className = 'explanationp'
                            style={
                              {fontWeight: 600}
                            }
                            >
                              Venue location
                            </p>
                          </div>
                          <div 
                          style={
                            {
                              marginBottom:8
                            }
                          }>
                            <div className = 'searchvenuediv1'>
                              <div className = 'searchvenuediv'>
                                <span className = 'searchcalendarspan'
                                style={
                                  {
                                    paddingLeft: '10px',
                                    maxHeight: '49px'
                                  }
                                }>
                                  <i
                                  style={
                                    {display:'block'}
                                  }>
                                    <svg className='smallSvg'
                                      x="0"
                                      y="0" 
                                      viewBox="0 0 24 24" 
                                      xmlSpace="preserve">
                                      <path
                                      style={{fill:"#6f7287"}}
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M10 14c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm3.5.9c-1 .7-2.2 1.1-3.5 1.1-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6c0 1.3-.4 2.5-1.1 3.4l5.1 5.1-1.5 1.5-5-5.1z"
                                      >
                                      </path>
                                    </svg>
                                  </i>
                                </span>
                                {/* <InputData 
                                style={
                                  {paddingTop: 0}
                                }
                                placeholder="Search for a venue or address.">
                                </InputData> */}
                                <div
                                style={
                                  {
                                    display: 'flex',
                                    WebkitBoxOrient: 'horizontal',
                                    WebkitBoxDirection: 'normal',
                                    flexDirection: 'row',
                                    position:'relative',
                                    WebkitBoxFlex: '1',
                                    flex: '1',
                                    minWidth: '0'
                                  }
                                }>
                                  <input className = 'inputtagsdata'
                                  style={
                                    {
                                      border:'none',
                                      paddingTop: '0',
                                      marginTop: '0'
                                    }
                                  }
                                  placeholder='Search for a venue or address'
                                  value={organizervalue}
                                  onChange={handleOrganizerChange}
                                  onFocus={() => setFocused(true)}>
                                  </input>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className = 'linedivider'></hr>
                    <div className = 'dateandtimediv'>
                    <div className='iconsdiv'>
                        <i className = 'mediumI'>
                          <svg className='mediumsvg'
                          x="0"
                          y="0" 
                          viewBox="0 0 24 24" 
                          xmlSpace="preserve">
                            <path
                            fill='#dbdae3'
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17 4V2h-1v2H8V2H7v2H2v18h20V4h-5zm4 17H3V9h18v12zM3 8V5h4v1h1V5h8v1h1V5h4v3H3z">
                            </path>
                            <g
                            fillRule="evenodd"
                            clipRule="evenodd">
                              <path
                              fill='#dbdae3'
                              d="M15 16h2v2h-2zM11 16h2v2h-2zM7 16h2v2H7zM15 12h2v2h-2zM11 12h2v2h-2zM7 12h2v2H7z">
                              </path>
                            </g>
                          </svg>
                        </i>
                      </div>
                      <div style={{display: "block"}}>
                        <div>
                          <h1 className = 'sectiontitle'>
                            Date and time
                          </h1>
                          <div style={
                            {width: '75%'}
                          }>
                            <p className = 'explanationp'>
                              <span className = 'explanationspan'>
                                Tell event-goers when your event starts and ends so they can make plans to attend.
                              </span>
                            </p>
                          </div>
                        </div>
                        <div style={{marginTop: 20}}>
                          <div className = 'locationsbuttonsdiv'>
                            <div
                            style={
                              {
                                display:'flex',
                                marginBottom: '20px'
                              }
                            }>
                              <div className = 'buttonsdiv'>
                                <label className = 'buttonslabels' name='single' onClick={handleDivClick}>
                                  Single Event
                                </label>
                              <div>
                              <div className = 'buttonsdiv'>
                                <label className = 'buttonslabels' name='recurring' onClick={handleDivClick}>
                                  Recurring Event
                                </label>
                              <div>
                              {/* {showsingle && (
                                <div>
                                  This is the single div.
                                  <button>Like</button>
                                </div>
                              )}
                              {showrecurring && (
                                <div>
                                  This is the recurring event div.
                                </div>
                              )} */}
                            </div>
                          </div>
                        </div>
                        <div
                         style={
                            {
                              width: '75%',
                              marginBottom: '16px'
                            }
                          }>
                            <p className = 'explanationp'>
                            You’ll be able to set a schedule for your recurring event in the next step. Event details and ticket types will apply to all instances.
                            </p>
                          </div>
                          <div
                          style={
                            {marginTop: 16}
                          }>
                            <div
                            style={
                              {marginBottom: 20}
                            }>
                              <div>
                                <div className = 'displayendtime'
                                style={
                                  {
                                    marginTop: '20px'
                                  }
                                }>
                                  <input
                                  className='checkbox'
                                   type='checkbox'
                                   checked>
                                   </input>
                                  <label
                                  className='checklabel'>

                                  </label>
                                  <label className='checktextlabel'>
                                    <span
                                    style={
                                      {
                                        display: 'block',
                                        cursor: 'pointer',
                                        fontWeight: '400'
                                      }
                                    }>
                                      <p
                                      style={
                                        {color:'#39364f'}
                                      }>
                                        Display end time.
                                      </p>
                                      <p className='textp'
                                      style={
                                        {marginTop: '7px'}
                                      }>
                                        The end time of your event will be displayed to attendees.
                                      </p>
                                    </span>
                                  </label>
                                </div>
                                <div 
                                style={
                                  {marginTop: 24,
                                  position: 'relative',
                                  cursor: 'pointer'
                                }
                                }>
                                  <div className ='placeholder2'
                                    style={
                                      {position:'absolute',
                                        top: '-10px',
                                        left:"-5px",
                                        width:' 100%',
                                        height: '70px',
                                        zIndex: '2'                                                  
                                      }
                                    }
                                  >
                                    <label className='label'>
                                      <span className='spantext2'>
                                        Time Zone
                                      </span>
                                    </label>
                                  </div>
                                  <div>
                                    <div className = 'timedropdowndiv'>
                                      <div 
                                      style={
                                        {marginBottom: 8}
                                      }>
                                        <div className = 'searchvenuediv1'>
                                          <div className = 'searchvenuediv'>
                                            <div className = 'searchvenuediv'>
                                              
                                              <div className='dropdownLast'>
                                                <span className = 'dropdownspan'>
                                                  <span className = 'dropdowntitlespan'
                                                  style={
                                                    {paddingTop: '5px'}
                                                  }>
                                                    (GMT+0200) Egypt Time
                                                  </span>
                                                  <span className = 'dropdownarrowspan'
                                                  style={
                                                    {
                                                      paddingLeft: '30px',
                                                      paddingTop: '5px'
                                                    }
                                                  }>
                                                    <i className = 'smallI'>
                                                      <svg className='smallSvg'
                                                      x="0"
                                                      y="0" 
                                                      viewBox="0 0 24 24" 
                                                      xmlSpace="preserve">
                                                        <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M7 10.2l5 5 5-5-1.4-1.4-3.6 3.6-3.6-3.6z">
                                                        </path>
                                                      </svg>
                                                    </i>
                                                  </span>
                                                </span>
                                                <select
                                                style={
                                                  {
                                                    padding: '18px 12px 6px',
                                                    background: 'none',
                                                    border: 'none',
                                                    color: '#39364f',
                                                    whiteSpace: 'nowrap',
                                                    outline: 'none',
                                                    transition: 'padding .16s cubic-bezier(.4,0,.3,1),color .4s cubic-bezier(.4,0,.3,1)',
                                                    width: '100%',
                                                    height: '100%',
                                                    cursor: 'pointer',
                                                    position: 'absolute',
                                                    top: '0',
                                                    left: '0',
                                                    opacity: '0',
                                                    WebkitAppearance: 'menulist-button',
                                                    WebkitBoxFlex: '1',
                                                    minWidth: '0'
                                                  }
                                                }>
                                                  <option value="Pacific/Pago_Pago" data-spec="select-option">(GMT-1100) American Samoa Time</option>
                                                  <option value="Pacific/Niue" data-spec="select-option">(GMT-1100) Niue Time</option>
                                                  <option value="Pacific/Midway" data-spec="select-option">(GMT-1100) U.S. Outlying Islands (Midway) Time</option>
                                                  <option value="Pacific/Rarotonga" data-spec="select-option">(GMT-1000) Cook Islands Time</option>
                                                  <option value="Pacific/Tahiti" data-spec="select-option">(GMT-1000) French Polynesia Time</option>
                                                  <option value="Pacific/Honolulu" data-spec="select-option">(GMT-1000) United States (Honolulu) Time</option>
                                                  <option value="Pacific/Marquesas" data-spec="select-option">(GMT-0930) World (Marquesas) Time</option>
                                                  <option value="America/Adak" data-spec="select-option">(GMT-0900) World (Adak) Time</option>
                                                  <option value="Pacific/Gambier" data-spec="select-option">(GMT-0900) World (Gambier) Time</option>
                                                  <option value="America/Anchorage" data-spec="select-option">(GMT-0800) United States (Anchorage) Time</option>
                                                  <option value="America/Juneau" data-spec="select-option">(GMT-0800) United States (Juneau) Time</option>
                                                  <option value="America/Metlakatla" data-spec="select-option">(GMT-0800) United States (Metlakatla) Time</option>
                                                  <option value="America/Nome" data-spec="select-option">(GMT-0800) United States (Nome) Time</option>
                                                  <option value="America/Sitka" data-spec="select-option">(GMT-0800) United States (Sitka) Time</option>
                                                  <option value="America/Yakutat" data-spec="select-option">(GMT-0800) United States (Yakutat) Time</option>
                                                  <option value="Pacific/Pitcairn" data-spec="select-option">(GMT-0800) World (Pitcairn) Time</option>
                                                  <option value="America/Creston" data-spec="select-option">(GMT-0700) Canada (Creston) Time</option>
                                                  <option value="America/Dawson_Creek" data-spec="select-option">(GMT-0700) Canada (Dawson Creek) Time</option>
                                                  <option value="America/Dawson" data-spec="select-option">(GMT-0700) Canada (Dawson) Time</option>
                                                  <option value="America/Fort_Nelson" data-spec="select-option">(GMT-0700) Canada (Fort Nelson) Time</option>
                                                  <option value="America/Vancouver" data-spec="select-option">(GMT-0700) Canada (Vancouver) Time</option>
                                                  <option value="America/Whitehorse" data-spec="select-option">(GMT-0700) Canada (Whitehorse) Time</option>
                                                  <option value="America/Hermosillo" data-spec="select-option">(GMT-0700) Mexico (Hermosillo) Time</option>
                                                  <option value="America/Santa_Isabel" data-spec="select-option">(GMT-0700) Mexico (Santa Isabel) Time</option>
                                                  <option value="America/Tijuana" data-spec="select-option">(GMT-0700) Mexico (Tijuana) Time</option>
                                                  <option value="America/Los_Angeles" data-spec="select-option">(GMT-0700) United States (Los Angeles) Time</option>
                                                  <option value="America/Phoenix" data-spec="select-option">(GMT-0700) United States (Phoenix) Time</option>
                                                  <option value="America/Belize" data-spec="select-option">(GMT-0600) Belize Time</option>
                                                  <option value="America/Cambridge_Bay" data-spec="select-option">(GMT-0600) Canada (Cambridge Bay) Time</option>
                                                  <option value="America/Edmonton" data-spec="select-option">(GMT-0600) Canada (Edmonton) Time</option>
                                                  <option value="America/Inuvik" data-spec="select-option">(GMT-0600) Canada (Inuvik) Time</option>
                                                  <option value="America/Regina" data-spec="select-option">(GMT-0600) Canada (Regina) Time</option>
                                                  <option value="America/Swift_Current" data-spec="select-option">(GMT-0600) Canada (Swift Current) Time</option>
                                                  <option value="America/Yellowknife" data-spec="select-option">(GMT-0600) Canada (Yellowknife) Time</option>
                                                  <option value="Pacific/Easter" data-spec="select-option">(GMT-0600) Chile (Easter) Time</option>
                                                  <option value="America/Costa_Rica" data-spec="select-option">(GMT-0600) Costa Rica Time</option>
                                                  <option value="Pacific/Galapagos" data-spec="select-option">(GMT-0600) Ecuador (Galapagos) Time</option>
                                                  <option value="America/El_Salvador" data-spec="select-option">(GMT-0600) El Salvador Time</option>
                                                  <option value="America/Guatemala" data-spec="select-option">(GMT-0600) Guatemala Time</option>
                                                  <option value="America/Tegucigalpa" data-spec="select-option">(GMT-0600) Honduras Time</option>
                                                  <option value="America/Chihuahua" data-spec="select-option">(GMT-0600) Mexico (Chihuahua) Time</option>
                                                  <option value="America/Mazatlan" data-spec="select-option">(GMT-0600) Mexico (Mazatlan) Time</option>
                                                  <option value="America/Ojinaga" data-spec="select-option">(GMT-0600) Mexico (Ojinaga) Time</option>
                                                  <option value="America/Managua" data-spec="select-option">(GMT-0600) Nicaragua Time</option>
                                                  <option value="America/Boise" data-spec="select-option">(GMT-0600) United States (Boise) Time</option>
                                                  <option value="America/Denver" data-spec="select-option">(GMT-0600) United States (Denver) Time</option>
                                                  <option value="America/Eirunepe" data-spec="select-option">(GMT-0500) Brazil (Eirunepe) Time</option>
                                                  <option value="America/Rio_Branco" data-spec="select-option">(GMT-0500) Brazil (Rio Branco) Time</option>
                                                  <option value="America/Atikokan" data-spec="select-option">(GMT-0500) Canada (Atikokan) Time</option>
                                                  <option value="America/Rainy_River" data-spec="select-option">(GMT-0500) Canada (Rainy River) Time</option>
                                                  <option value="America/Rankin_Inlet" data-spec="select-option">(GMT-0500) Canada (Rankin Inlet) Time</option>
                                                  <option value="America/Resolute" data-spec="select-option">(GMT-0500) Canada (Resolute) Time</option>
                                                  <option value="America/Winnipeg" data-spec="select-option">(GMT-0500) Canada (Winnipeg) Time</option>
                                                  <option value="America/Cayman" data-spec="select-option">(GMT-0500) Cayman Islands Time</option>
                                                  <option value="America/Bogota" data-spec="select-option">(GMT-0500) Colombia Time</option>
                                                  <option value="America/Guayaquil" data-spec="select-option">(GMT-0500) Ecuador (Guayaquil) Time</option>
                                                  <option value="America/Jamaica" data-spec="select-option">(GMT-0500) Jamaica Time</option>
                                                  <option value="America/Bahia_Banderas" data-spec="select-option">(GMT-0500) Mexico (Bahia Banderas) Time</option>
                                                  <option value="America/Cancun" data-spec="select-option">(GMT-0500) Mexico (Cancun) Time</option>
                                                  <option value="America/Matamoros" data-spec="select-option">(GMT-0500) Mexico (Matamoros) Time</option>
                                                  <option value="America/Merida" data-spec="select-option">(GMT-0500) Mexico (Merida) Time</option>
                                                  <option value="America/Mexico_City" data-spec="select-option">(GMT-0500) Mexico (Mexico City) Time</option>
                                                  <option value="America/Monterrey" data-spec="select-option">(GMT-0500) Mexico (Monterrey) Time</option>
                                                  <option value="America/Panama" data-spec="select-option">(GMT-0500) Panama Time</option>
                                                  <option value="America/Lima" data-spec="select-option">(GMT-0500) Peru Time</option>
                                                  <option value="America/North_Dakota/Beulah" data-spec="select-option">(GMT-0500) United States (Beulah, North Dakota) Time</option>
                                                  <option value="America/North_Dakota/Center" data-spec="select-option">(GMT-0500) United States (Center, North Dakota) Time</option>
                                                  <option value="America/Chicago" data-spec="select-option">(GMT-0500) United States (Chicago) Time</option>
                                                  <option value="America/Indiana/Knox" data-spec="select-option">(GMT-0500) United States (Knox, Indiana) Time</option>
                                                  <option value="America/Menominee" data-spec="select-option">(GMT-0500) United States (Menominee) Time</option>
                                                  <option value="America/North_Dakota/New_Salem" data-spec="select-option">(GMT-0500) United States (New Salem, North Dakota) Time</option>
                                                  <option value="America/Indiana/Tell_City" data-spec="select-option">(GMT-0500) United States (Tell City, Indiana) Time</option>
                                                  <option value="America/Anguilla" data-spec="select-option">(GMT-0400) Anguilla Time</option>
                                                  <option value="America/Antigua" data-spec="select-option">(GMT-0400) Antigua &amp; Barbuda Time</option>
                                                  <option value="America/Aruba" data-spec="select-option">(GMT-0400) Aruba Time</option>
                                                  <option value="America/Nassau" data-spec="select-option">(GMT-0400) Bahamas Time</option>
                                                  <option value="America/Barbados" data-spec="select-option">(GMT-0400) Barbados Time</option>
                                                  <option value="America/La_Paz" data-spec="select-option">(GMT-0400) Bolivia Time</option>
                                                  <option value="America/Boa_Vista" data-spec="select-option">(GMT-0400) Brazil (Boa Vista) Time</option>
                                                  <option value="America/Campo_Grande" data-spec="select-option">(GMT-0400) Brazil (Campo Grande) Time</option>
                                                  <option value="America/Cuiaba" data-spec="select-option">(GMT-0400) Brazil (Cuiaba) Time</option>
                                                  <option value="America/Manaus" data-spec="select-option">(GMT-0400) Brazil (Manaus) Time</option>
                                                  <option value="America/Porto_Velho" data-spec="select-option">(GMT-0400) Brazil (Porto Velho) Time</option>
                                                  <option value="America/Tortola" data-spec="select-option">(GMT-0400) British Virgin Islands Time</option>
                                                  <option value="America/Blanc-Sablon" data-spec="select-option">(GMT-0400) Canada (Blanc-Sablon) Time</option>
                                                  <option value="America/Iqaluit" data-spec="select-option">(GMT-0400) Canada (Iqaluit) Time</option>
                                                  <option value="America/Nipigon" data-spec="select-option">(GMT-0400) Canada (Nipigon) Time</option>
                                                  <option value="America/Pangnirtung" data-spec="select-option">(GMT-0400) Canada (Pangnirtung) Time</option>
                                                  <option value="America/Thunder_Bay" data-spec="select-option">(GMT-0400) Canada (Thunder Bay) Time</option>
                                                  <option value="America/Toronto" data-spec="select-option">(GMT-0400) Canada (Toronto) Time</option>
                                                  <option value="America/Kralendijk" data-spec="select-option">(GMT-0400) Caribbean Netherlands Time</option>
                                                  <option value="America/Santiago" data-spec="select-option">(GMT-0400) Chile (Santiago) Time</option>
                                                  <option value="America/Havana" data-spec="select-option">(GMT-0400) Cuba Time</option>
                                                  <option value="America/Curacao" data-spec="select-option">(GMT-0400) Curaçao Time</option>
                                                  <option value="America/Dominica" data-spec="select-option">(GMT-0400) Dominica Time</option>
                                                  <option value="America/Santo_Domingo" data-spec="select-option">(GMT-0400) Dominican Republic Time</option>
                                                  <option value="America/Grenada" data-spec="select-option">(GMT-0400) Grenada Time</option>
                                                  <option value="America/Guadeloupe" data-spec="select-option">(GMT-0400) Guadeloupe Time</option>
                                                  <option value="America/Guyana" data-spec="select-option">(GMT-0400) Guyana Time</option>
                                                  <option value="America/Port-au-Prince" data-spec="select-option">(GMT-0400) Haiti Time</option>
                                                  <option value="America/Martinique" data-spec="select-option">(GMT-0400) Martinique Time</option>
                                                  <option value="America/Montserrat" data-spec="select-option">(GMT-0400) Montserrat Time</option>
                                                  <option value="America/Asuncion" data-spec="select-option">(GMT-0400) Paraguay Time</option>
                                                  <option value="America/Puerto_Rico" data-spec="select-option">(GMT-0400) Puerto Rico Time</option>
                                                  <option value="America/Lower_Princes" data-spec="select-option">(GMT-0400) Sint Maarten Time</option>
                                                  <option value="America/St_Barthelemy" data-spec="select-option">(GMT-0400) St. Barthélemy Time</option>
                                                  <option value="America/St_Kitts" data-spec="select-option">(GMT-0400) St. Kitts &amp; Nevis Time</option>
                                                  <option value="America/St_Lucia" data-spec="select-option">(GMT-0400) St. Lucia Time</option>
                                                  <option value="America/Marigot" data-spec="select-option">(GMT-0400) St. Martin Time</option>
                                                  <option value="America/St_Vincent" data-spec="select-option">(GMT-0400) St. Vincent &amp; Grenadines Time</option>
                                                  <option value="America/Port_of_Spain" data-spec="select-option">(GMT-0400) Trinidad &amp; Tobago Time</option>
                                                  <option value="America/Grand_Turk" data-spec="select-option">(GMT-0400) Turks &amp; Caicos Islands Time</option>
                                                  <option value="America/St_Thomas" data-spec="select-option">(GMT-0400) U.S. Virgin Islands Time</option>
                                                  <option value="America/Detroit" data-spec="select-option">(GMT-0400) United States (Detroit) Time</option>
                                                  <option value="America/Indiana/Indianapolis" data-spec="select-option">(GMT-0400) United States (Indianapolis) Time</option>
                                                  <option value="America/Kentucky/Louisville" data-spec="select-option">(GMT-0400) United States (Louisville) Time</option>
                                                  <option value="America/Indiana/Marengo" data-spec="select-option">(GMT-0400) United States (Marengo, Indiana) Time</option>
                                                  <option value="America/Kentucky/Monticello" data-spec="select-option">(GMT-0400) United States (Monticello, Kentucky) Time</option>
                                                  <option value="America/New_York" data-spec="select-option">(GMT-0400) United States (New York) Time</option>
                                                  <option value="America/Indiana/Petersburg" data-spec="select-option">(GMT-0400) United States (Petersburg, Indiana) Time</option>
                                                  <option value="America/Indiana/Vevay" data-spec="select-option">(GMT-0400) United States (Vevay, Indiana) Time</option>
                                                  <option value="America/Indiana/Vincennes" data-spec="select-option">(GMT-0400) United States (Vincennes, Indiana) Time</option>
                                                  <option value="America/Indiana/Winamac" data-spec="select-option">(GMT-0400) United States (Winamac, Indiana) Time</option>
                                                  <option value="America/Caracas" data-spec="select-option">(GMT-0400) Venezuela Time</option>
                                                  <option value="Antarctica/Palmer" data-spec="select-option">(GMT-0300) Antarctica (Palmer) Time</option>
                                                  <option value="Antarctica/Rothera" data-spec="select-option">(GMT-0300) Antarctica (Rothera) Time</option>
                                                  <option value="America/Argentina/La_Rioja" data-spec="select-option">(GMT-0300) Argentina (Argentina/La Rioja) Time</option>
                                                  <option value="America/Argentina/Rio_Gallegos" data-spec="select-option">(GMT-0300) Argentina (Argentina/Rio Gallegos) Time</option>
                                                  <option value="America/Argentina/Salta" data-spec="select-option">(GMT-0300) Argentina (Argentina/Salta) Time</option>
                                                  <option value="America/Argentina/San_Juan" data-spec="select-option">(GMT-0300) Argentina (Argentina/San Juan) Time</option>
                                                  // <option value="America/Argentina/San_Luis" data-spec="select-option">(GMT-0300) Argentina (Argentina/San Luis) Time</option><option value="America/Argentina/Tucuman" data-spec="select-option">(GMT-0300) Argentina (Argentina/Tucuman) Time</option><option value="America/Argentina/Ushuaia" data-spec="select-option">(GMT-0300) Argentina (Argentina/Ushuaia) Time</option><option value="America/Argentina/Buenos_Aires" data-spec="select-option">(GMT-0300) Argentina (Buenos Aires) Time</option><option value="America/Argentina/Catamarca" data-spec="select-option">(GMT-0300) Argentina (Catamarca) Time</option><option value="America/Argentina/Cordoba" data-spec="select-option">(GMT-0300) Argentina (Cordoba) Time</option><option value="America/Argentina/Jujuy" data-spec="select-option">(GMT-0300) Argentina (Jujuy) Time</option><option value="America/Argentina/Mendoza" data-spec="select-option">(GMT-0300) Argentina (Mendoza) Time</option><option value="Atlantic/Bermuda" data-spec="select-option">(GMT-0300) Bermuda Time</option><option value="America/Araguaina" data-spec="select-option">(GMT-0300) Brazil (Araguaina) Time</option><option value="America/Bahia" data-spec="select-option">(GMT-0300) Brazil (Bahia) Time</option><option value="America/Belem" data-spec="select-option">(GMT-0300) Brazil (Belem) Time</option><option value="America/Fortaleza" data-spec="select-option">(GMT-0300) Brazil (Fortaleza) Time</option><option value="America/Maceio" data-spec="select-option">(GMT-0300) Brazil (Maceio) Time</option><option value="America/Recife" data-spec="select-option">(GMT-0300) Brazil (Recife) Time</option><option value="America/Santarem" data-spec="select-option">(GMT-0300) Brazil (Santarem) Time</option><option value="America/Sao_Paulo" data-spec="select-option">(GMT-0300) Brazil (Sao Paulo) Time</option><option value="America/Glace_Bay" data-spec="select-option">(GMT-0300) Canada (Glace Bay) Time</option><option value="America/Goose_Bay" data-spec="select-option">(GMT-0300) Canada (Goose Bay) Time</option><option value="America/Halifax" data-spec="select-option">(GMT-0300) Canada (Halifax) Time</option><option value="America/Moncton" data-spec="select-option">(GMT-0300) Canada (Moncton) Time</option><option value="Atlantic/Stanley" data-spec="select-option">(GMT-0300) Falkland Islands Time</option><option value="America/Cayenne" data-spec="select-option">(GMT-0300) French Guiana Time</option><option value="America/Thule" data-spec="select-option">(GMT-0300) Greenland (Thule) Time</option><option value="America/Paramaribo" data-spec="select-option">(GMT-0300) Suriname Time</option><option value="America/Punta_Arenas" data-spec="select-option">(GMT-0300) Unknown Region (Punta Arenas) Time</option><option value="America/Montevideo" data-spec="select-option">(GMT-0300) Uruguay Time</option><option value="America/St_Johns" data-spec="select-option">(GMT-0230) Canada (St. John’s) Time</option><option value="America/Noronha" data-spec="select-option">(GMT-0200) Brazil (Noronha) Time</option><option value="Atlantic/South_Georgia" data-spec="select-option">(GMT-0200) South Georgia &amp; South Sandwich Islands Time</option><option value="America/Nuuk" data-spec="select-option">(GMT-0200) Unknown Region (Nuuk) Time</option><option value="America/Miquelon" data-spec="select-option">(GMT-0200) World (Miquelon) Time</option><option value="Atlantic/Cape_Verde" data-spec="select-option">(GMT-0100) Cape Verde Time</option><option value="Africa/Ouagadougou" data-spec="select-option">(GMT+0000) Burkina Faso Time</option><option value="Africa/Abidjan" data-spec="select-option">(GMT+0000) Côte d’Ivoire Time</option><option value="Africa/Banjul" data-spec="select-option">(GMT+0000) Gambia Time</option><option value="Africa/Accra" data-spec="select-option">(GMT+0000) Ghana Time</option><option value="America/Danmarkshavn" data-spec="select-option">(GMT+0000) Greenland (Danmarkshavn) Time</option><option value="America/Scoresbysund" data-spec="select-option">(GMT+0000) Greenland (Ittoqqortoormiit) Time</option><option value="Africa/Conakry" data-spec="select-option">(GMT+0000) Guinea Time</option><option value="Africa/Bissau" data-spec="select-option">(GMT+0000) Guinea-Bissau Time</option><option value="Atlantic/Reykjavik" data-spec="select-option">(GMT+0000) Iceland Time</option><option value="Africa/Monrovia" data-spec="select-option">(GMT+0000) Liberia Time</option><option value="Africa/Bamako" data-spec="select-option">(GMT+0000) Mali Time</option><option value="Africa/Nouakchott" data-spec="select-option">(GMT+0000) Mauritania Time</option><option value="Atlantic/Azores" data-spec="select-option">(GMT+0000) Portugal (Azores) Time</option><option value="Africa/Sao_Tome" data-spec="select-option">(GMT+0000) São Tomé &amp; Príncipe Time</option><option value="Africa/Dakar" data-spec="select-option">(GMT+0000) Senegal Time</option><option value="Africa/Freetown" data-spec="select-option">(GMT+0000) Sierra Leone Time</option><option value="Atlantic/St_Helena" data-spec="select-option">(GMT+0000) St. Helena Time</option><option value="Africa/Lome" data-spec="select-option">(GMT+0000) Togo Time</option><option value="UTC" data-spec="select-option">UTC</option><option value="Africa/Algiers" data-spec="select-option">(GMT+0100) Algeria Time</option><option value="Africa/Luanda" data-spec="select-option">(GMT+0100) Angola Time</option><option value="Africa/Porto-Novo" data-spec="select-option">(GMT+0100) Benin Time</option><option value="Africa/Douala" data-spec="select-option">(GMT+0100) Cameroon Time</option><option value="Africa/Bangui" data-spec="select-option">(GMT+0100) Central African Republic Time</option><option value="Africa/Ndjamena" data-spec="select-option">(GMT+0100) Chad Time</option><option value="Africa/Brazzaville" data-spec="select-option">(GMT+0100) Congo - Brazzaville Time</option><option value="Africa/Kinshasa" data-spec="select-option">(GMT+0100) Congo - Kinshasa (Kinshasa) Time</option><option value="Africa/Malabo" data-spec="select-option">(GMT+0100) Equatorial Guinea Time</option><option value="Atlantic/Faroe" data-spec="select-option">(GMT+0100) Faroe Islands Time</option><option value="Africa/Libreville" data-spec="select-option">(GMT+0100) Gabon Time</option><option value="Europe/Guernsey" data-spec="select-option">(GMT+0100) Guernsey Time</option><option value="Europe/Dublin" data-spec="select-option">(GMT+0100) Ireland Time</option><option value="Europe/Isle_of_Man" data-spec="select-option">(GMT+0100) Isle of Man Time</option><option value="Europe/Jersey" data-spec="select-option">(GMT+0100) Jersey Time</option><option value="Africa/Casablanca" data-spec="select-option">(GMT+0100) Morocco Time</option><option value="Africa/Niamey" data-spec="select-option">(GMT+0100) Niger Time</option><option value="Africa/Lagos" data-spec="select-option">(GMT+0100) Nigeria Time</option><option value="Europe/Lisbon" data-spec="select-option">(GMT+0100) Portugal (Lisbon) Time</option><option value="Atlantic/Madeira" data-spec="select-option">(GMT+0100) Portugal (Madeira) Time</option><option value="Atlantic/Canary" data-spec="select-option">(GMT+0100) Spain (Canary) Time</option><option value="Africa/Tunis" data-spec="select-option">(GMT+0100) Tunisia Time</option><option value="Europe/London" data-spec="select-option">(GMT+0100) United Kingdom Time</option><option value="Africa/El_Aaiun" data-spec="select-option">(GMT+0100) Western Sahara Time</option><option value="Europe/Tirane" data-spec="select-option">(GMT+0200) Albania Time</option><option value="Europe/Andorra" data-spec="select-option">(GMT+0200) Andorra Time</option><option value="Europe/Vienna" data-spec="select-option">(GMT+0200) Austria Time</option><option value="Europe/Brussels" data-spec="select-option">(GMT+0200) Belgium Time</option><option value="Europe/Sarajevo" data-spec="select-option">(GMT+0200) Bosnia &amp; Herzegovina Time</option><option value="Africa/Gaborone" data-spec="select-option">(GMT+0200) Botswana Time</option><option value="Africa/Bujumbura" data-spec="select-option">(GMT+0200) Burundi Time</option><option value="Africa/Lubumbashi" data-spec="select-option">(GMT+0200) Congo - Kinshasa (Lubumbashi) Time</option><option value="Europe/Zagreb" data-spec="select-option">(GMT+0200) Croatia Time</option><option value="Europe/Prague" data-spec="select-option">(GMT+0200) Czech Republic Time</option><option value="Europe/Copenhagen" data-spec="select-option">(GMT+0200) Denmark Time</option><option value="Africa/Cairo" data-spec="select-option">(GMT+0200) Egypt Time</option><option value="Europe/Paris" data-spec="select-option">(GMT+0200) France Time</option><option value="Europe/Berlin" data-spec="select-option">(GMT+0200) Germany (Berlin) Time</option><option value="Europe/Busingen" data-spec="select-option">(GMT+0200) Germany (Busingen) Time</option><option value="Europe/Gibraltar" data-spec="select-option">(GMT+0200) Gibraltar Time</option><option value="Europe/Budapest" data-spec="select-option">(GMT+0200) Hungary Time</option><option value="Europe/Rome" data-spec="select-option">(GMT+0200) Italy Time</option><option value="Africa/Maseru" data-spec="select-option">(GMT+0200) Lesotho Time</option><option value="Africa/Tripoli" data-spec="select-option">(GMT+0200) Libya Time</option><option value="Europe/Vaduz" data-spec="select-option">(GMT+0200) Liechtenstein Time</option><option value="Europe/Luxembourg" data-spec="select-option">(GMT+0200) Luxembourg Time</option><option value="Europe/Skopje" data-spec="select-option">(GMT+0200) Macedonia Time</option><option value="Africa/Blantyre" data-spec="select-option">(GMT+0200) Malawi Time</option><option value="Europe/Malta" data-spec="select-option">(GMT+0200) Malta Time</option><option value="Europe/Monaco" data-spec="select-option">(GMT+0200) Monaco Time</option><option value="Europe/Podgorica" data-spec="select-option">(GMT+0200) Montenegro Time</option><option value="Africa/Maputo" data-spec="select-option">(GMT+0200) Mozambique Time</option><option value="Africa/Windhoek" data-spec="select-option">(GMT+0200) Namibia Time</option><option value="Europe/Amsterdam" data-spec="select-option">(GMT+0200) Netherlands Time</option><option value="Europe/Oslo" data-spec="select-option">(GMT+0200) Norway Time</option><option value="Europe/Warsaw" data-spec="select-option">(GMT+0200) Poland Time</option><option value="Europe/Kaliningrad" data-spec="select-option">(GMT+0200) Russia (Kaliningrad) Time</option><option value="Africa/Kigali" data-spec="select-option">(GMT+0200) Rwanda Time</option><option value="Europe/San_Marino" data-spec="select-option">(GMT+0200) San Marino Time</option><option value="Europe/Belgrade" data-spec="select-option">(GMT+0200) Serbia Time</option><option value="Europe/Bratislava" data-spec="select-option">(GMT+0200) Slovakia Time</option><option value="Europe/Ljubljana" data-spec="select-option">(GMT+0200) Slovenia Time</option><option value="Africa/Johannesburg" data-spec="select-option">(GMT+0200) South Africa Time</option><option value="Africa/Ceuta" data-spec="select-option">(GMT+0200) Spain (Ceuta) Time</option><option value="Europe/Madrid" data-spec="select-option">(GMT+0200) Spain (Madrid) Time</option><option value="Africa/Khartoum" data-spec="select-option">(GMT+0200) Sudan Time</option><option value="Arctic/Longyearbyen" data-spec="select-option">(GMT+0200) Svalbard &amp; Jan Mayen Time</option><option value="Africa/Mbabane" data-spec="select-option">(GMT+0200) Swaziland Time</option><option value="Europe/Stockholm" data-spec="select-option">(GMT+0200) Sweden Time</option><option value="Europe/Zurich" data-spec="select-option">(GMT+0200) Switzerland Time</option><option value="Europe/Vatican" data-spec="select-option">(GMT+0200) Vatican City Time</option><option value="Antarctica/Troll" data-spec="select-option">(GMT+0200) World (Troll) Time</option><option value="Africa/Lusaka" data-spec="select-option">(GMT+0200) Zambia Time</option><option value="Africa/Harare" data-spec="select-option">(GMT+0200) Zimbabwe Time</option><option value="Europe/Mariehamn" data-spec="select-option">(GMT+0300) Åland Islands Time</option><option value="Antarctica/Syowa" data-spec="select-option">(GMT+0300) Antarctica (Syowa) Time</option><option value="Asia/Bahrain" data-spec="select-option">(GMT+0300) Bahrain Time</option><option value="Europe/Minsk" data-spec="select-option">(GMT+0300) Belarus Time</option><option value="Europe/Sofia" data-spec="select-option">(GMT+0300) Bulgaria Time</option><option value="Indian/Comoro" data-spec="select-option">(GMT+0300) Comoros Time</option><option value="Asia/Nicosia" data-spec="select-option">(GMT+0300) Cyprus Time</option><option value="Africa/Djibouti" data-spec="select-option">(GMT+0300) Djibouti Time</option><option value="Africa/Asmara" data-spec="select-option">(GMT+0300) Eritrea Time</option><option value="Europe/Tallinn" data-spec="select-option">(GMT+0300) Estonia Time</option><option value="Africa/Addis_Ababa" data-spec="select-option">(GMT+0300) Ethiopia Time</option><option value="Europe/Helsinki" data-spec="select-option">(GMT+0300) Finland Time</option><option value="Europe/Athens" data-spec="select-option">(GMT+0300) Greece Time</option><option value="Asia/Baghdad" data-spec="select-option">(GMT+0300) Iraq Time</option><option value="Asia/Jerusalem" data-spec="select-option">(GMT+0300) Israel Time</option><option value="Asia/Amman" data-spec="select-option">(GMT+0300) Jordan Time</option><option value="Africa/Nairobi" data-spec="select-option">(GMT+0300) Kenya Time</option><option value="Asia/Kuwait" data-spec="select-option">(GMT+0300) Kuwait Time</option><option value="Europe/Riga" data-spec="select-option">(GMT+0300) Latvia Time</option><option value="Asia/Beirut" data-spec="select-option">(GMT+0300) Lebanon Time</option><option value="Europe/Vilnius" data-spec="select-option">(GMT+0300) Lithuania Time</option><option value="Indian/Antananarivo" data-spec="select-option">(GMT+0300) Madagascar Time</option><option value="Indian/Mayotte" data-spec="select-option">(GMT+0300) Mayotte Time</option><option value="Europe/Chisinau" data-spec="select-option">(GMT+0300) Moldova Time</option><option value="Asia/Qatar" data-spec="select-option">(GMT+0300) Qatar Time</option><option value="Europe/Bucharest" data-spec="select-option">(GMT+0300) Romania Time</option><option value="Europe/Moscow" data-spec="select-option">(GMT+0300) Russia (Moscow) Time</option><option value="Europe/Simferopol" data-spec="select-option">(GMT+0300) Russia (Simferopol) Time</option><option value="Asia/Riyadh" data-spec="select-option">(GMT+0300) Saudi Arabia Time</option><option value="Africa/Mogadishu" data-spec="select-option">(GMT+0300) Somalia Time</option><option value="Africa/Juba" data-spec="select-option">(GMT+0300) South Sudan Time</option><option value="Asia/Damascus" data-spec="select-option">(GMT+0300) Syria Time</option><option value="Africa/Dar_es_Salaam" data-spec="select-option">(GMT+0300) Tanzania Time</option><option value="Europe/Istanbul" data-spec="select-option">(GMT+0300) Turkey Time</option><option value="Africa/Kampala" data-spec="select-option">(GMT+0300) Uganda Time</option><option value="Europe/Kiev" data-spec="select-option">(GMT+0300) Ukraine (Kiev) Time</option><option value="Europe/Uzhgorod" data-spec="select-option">(GMT+0300) Ukraine (Uzhhorod) Time</option><option value="Europe/Zaporozhye" data-spec="select-option">(GMT+0300) Ukraine (Zaporozhye) Time</option><option value="Asia/Famagusta" data-spec="select-option">(GMT+0300) Unknown Region (Famagusta) Time</option><option value="Europe/Kirov" data-spec="select-option">(GMT+0300) Unknown Region (Kirov) Time</option><option value="Asia/Gaza" data-spec="select-option">(GMT+0300) World (Gaza) Time</option><option value="Asia/Hebron" data-spec="select-option">(GMT+0300) World (Hebron) Time</option><option value="Asia/Aden" data-spec="select-option">(GMT+0300) Yemen Time</option><option value="Asia/Yerevan" data-spec="select-option">(GMT+0400) Armenia Time</option><option value="Asia/Baku" data-spec="select-option">(GMT+0400) Azerbaijan Time</option><option value="Asia/Tbilisi" data-spec="select-option">(GMT+0400) Georgia Time</option><option value="Indian/Mauritius" data-spec="select-option">(GMT+0400) Mauritius Time</option><option value="Asia/Muscat" data-spec="select-option">(GMT+0400) Oman Time</option><option value="Indian/Reunion" data-spec="select-option">(GMT+0400) Réunion Time</option><option value="Europe/Samara" data-spec="select-option">(GMT+0400) Russia (Samara) Time</option><option value="Europe/Volgograd" data-spec="select-option">(GMT+0400) Russia (Volgograd) Time</option><option value="Indian/Mahe" data-spec="select-option">(GMT+0400) Seychelles Time</option><option value="Asia/Dubai" data-spec="select-option">(GMT+0400) United Arab Emirates Time</option><option value="Europe/Astrakhan" data-spec="select-option">(GMT+0400) Unknown Region (Astrakhan) Time</option><option value="Europe/Saratov" data-spec="select-option">(GMT+0400) Unknown Region (Saratov) Time</option><option value="Europe/Ulyanovsk" data-spec="select-option">(GMT+0400) Unknown Region (Ulyanovsk) Time</option><option value="Asia/Kabul" data-spec="select-option">(GMT+0430) Afghanistan Time</option><option value="Asia/Tehran" data-spec="select-option">(GMT+0430) Iran Time</option><option value="Antarctica/Mawson" data-spec="select-option">(GMT+0500) Antarctica (Mawson) Time</option><option value="Indian/Kerguelen" data-spec="select-option">(GMT+0500) French Southern Territories Time</option><option value="Asia/Aqtau" data-spec="select-option">(GMT+0500) Kazakhstan (Aqtau) Time</option><option value="Asia/Aqtobe" data-spec="select-option">(GMT+0500) Kazakhstan (Aqtobe) Time</option><option value="Asia/Oral" data-spec="select-option">(GMT+0500) Kazakhstan (Oral) Time</option><option value="Asia/Qyzylorda" data-spec="select-option">(GMT+0500) Kazakhstan (Qyzylorda) Time</option><option value="Indian/Maldives" data-spec="select-option">(GMT+0500) Maldives Time</option><option value="Asia/Karachi" data-spec="select-option">(GMT+0500) Pakistan Time</option><option value="Asia/Yekaterinburg" data-spec="select-option">(GMT+0500) Russia (Yekaterinburg) Time</option><option value="Asia/Dushanbe" data-spec="select-option">(GMT+0500) Tajikistan Time</option><option value="Asia/Ashgabat" data-spec="select-option">(GMT+0500) Turkmenistan Time</option><option value="Asia/Atyrau" data-spec="select-option">(GMT+0500) Unknown Region (Atyrau) Time</option><option value="Asia/Samarkand" data-spec="select-option">(GMT+0500) Uzbekistan (Samarkand) Time</option><option value="Asia/Tashkent" data-spec="select-option">(GMT+0500) Uzbekistan (Tashkent) Time</option><option value="Asia/Kolkata" data-spec="select-option">(GMT+0530) India Time</option><option value="Asia/Colombo" data-spec="select-option">(GMT+0530) Sri Lanka Time</option><option value="Asia/Kathmandu" data-spec="select-option">(GMT+0545) Nepal Time</option><option value="Antarctica/Vostok" data-spec="select-option">(GMT+0600) Antarctica (Vostok) Time</option><option value="Asia/Dhaka" data-spec="select-option">(GMT+0600) Bangladesh Time</option><option value="Asia/Thimphu" data-spec="select-option">(GMT+0600) Bhutan Time</option><option value="Indian/Chagos" data-spec="select-option">(GMT+0600) British Indian Ocean Territory Time</option><option value="Asia/Urumqi" data-spec="select-option">(GMT+0600) China (Urumqi) Time</option><option value="Asia/Almaty" data-spec="select-option">(GMT+0600) Kazakhstan (Almaty) Time</option><option value="Asia/Bishkek" data-spec="select-option">(GMT+0600) Kyrgyzstan Time</option><option value="Asia/Omsk" data-spec="select-option">(GMT+0600) Russia (Omsk) Time</option><option value="Asia/Qostanay" data-spec="select-option">(GMT+0600) Unknown Region (Qostanay) Time</option><option value="Indian/Cocos" data-spec="select-option">(GMT+0630) Cocos (Keeling) Islands Time</option><option value="Asia/Rangoon" data-spec="select-option">(GMT+0630) Myanmar (Burma) Time</option><option value="Asia/Yangon" data-spec="select-option">(GMT+0630) Unknown Region (Yangon) Time</option><option value="Antarctica/Davis" data-spec="select-option">(GMT+0700) Antarctica (Davis) Time</option><option value="Asia/Phnom_Penh" data-spec="select-option">(GMT+0700) Cambodia Time</option><option value="Indian/Christmas" data-spec="select-option">(GMT+0700) Christmas Island Time</option><option value="Asia/Jakarta" data-spec="select-option">(GMT+0700) Indonesia (Jakarta) Time</option><option value="Asia/Pontianak" data-spec="select-option">(GMT+0700) Indonesia (Pontianak) Time</option><option value="Asia/Vientiane" data-spec="select-option">(GMT+0700) Laos Time</option><option value="Asia/Krasnoyarsk" data-spec="select-option">(GMT+0700) Russia (Krasnoyarsk) Time</option><option value="Asia/Novokuznetsk" data-spec="select-option">(GMT+0700) Russia (Novokuznetsk) Time</option><option value="Asia/Novosibirsk" data-spec="select-option">(GMT+0700) Russia (Novosibirsk) Time</option><option value="Asia/Bangkok" data-spec="select-option">(GMT+0700) Thailand Time</option><option value="Asia/Barnaul" data-spec="select-option">(GMT+0700) Unknown Region (Barnaul) Time</option><option value="Asia/Tomsk" data-spec="select-option">(GMT+0700) Unknown Region (Tomsk) Time</option><option value="Asia/Ho_Chi_Minh" data-spec="select-option">(GMT+0700) Vietnam Time</option><option value="Asia/Hovd" data-spec="select-option">(GMT+0700) World (Hovd) Time</option><option value="Antarctica/Casey" data-spec="select-option">(GMT+0800) Antarctica (Casey) Time</option><option value="Australia/Perth" data-spec="select-option">(GMT+0800) Australia (Perth) Time</option><option value="Asia/Brunei" data-spec="select-option">(GMT+0800) Brunei Time</option><option value="Asia/Shanghai" data-spec="select-option">(GMT+0800) China (Shanghai) Time</option><option value="Asia/Hong_Kong" data-spec="select-option">(GMT+0800) Hong Kong SAR China Time</option><option value="Asia/Makassar" data-spec="select-option">(GMT+0800) Indonesia (Makassar) Time</option><option value="Asia/Macau" data-spec="select-option">(GMT+0800) Macau SAR China Time</option><option value="Asia/Kuala_Lumpur" data-spec="select-option">(GMT+0800) Malaysia (Kuala Lumpur) Time</option><option value="Asia/Kuching" data-spec="select-option">(GMT+0800) Malaysia (Kuching) Time</option><option value="Asia/Choibalsan" data-spec="select-option">(GMT+0800) Mongolia (Choibalsan) Time</option><option value="Asia/Ulaanbaatar" data-spec="select-option">(GMT+0800) Mongolia (Ulaanbaatar) Time</option><option value="Asia/Manila" data-spec="select-option">(GMT+0800) Philippines Time</option><option value="Asia/Irkutsk" data-spec="select-option">(GMT+0800) Russia (Irkutsk) Time</option><option value="Asia/Singapore" data-spec="select-option">(GMT+0800) Singapore Time</option><option value="Asia/Taipei" data-spec="select-option">(GMT+0800) Taiwan Time</option><option value="Australia/Eucla" data-spec="select-option">(GMT+0845) World (Eucla) Time</option><option value="Asia/Jayapura" data-spec="select-option">(GMT+0900) Indonesia (Jayapura) Time</option><option value="Asia/Tokyo" data-spec="select-option">(GMT+0900) Japan Time</option><option value="Asia/Pyongyang" data-spec="select-option">(GMT+0900) North Korea Time</option><option value="Pacific/Palau" data-spec="select-option">(GMT+0900) Palau Time</option><option value="Asia/Chita" data-spec="select-option">(GMT+0900) Russia (Chita) Time</option><option value="Asia/Khandyga" data-spec="select-option">(GMT+0900) Russia (Khandyga) Time</option><option value="Asia/Yakutsk" data-spec="select-option">(GMT+0900) Russia (Yakutsk) Time</option><option value="Asia/Seoul" data-spec="select-option">(GMT+0900) South Korea Time</option><option value="Asia/Dili" data-spec="select-option">(GMT+0900) Timor-Leste Time</option><option value="Australia/Adelaide" data-spec="select-option">(GMT+0930) Australia (Adelaide) Time</option><option value="Australia/Broken_Hill" data-spec="select-option">(GMT+0930) Australia (Broken Hill) Time</option><option value="Australia/Darwin" data-spec="select-option">(GMT+0930) Australia (Darwin) Time</option><option value="Antarctica/DumontDUrville" data-spec="select-option">(GMT+1000) Antarctica (Dumont d’Urville) Time</option><option value="Australia/Brisbane" data-spec="select-option">(GMT+1000) Australia (Brisbane) Time</option><option value="Australia/Currie" data-spec="select-option">(GMT+1000) Australia (Currie) Time</option><option value="Australia/Hobart" data-spec="select-option">(GMT+1000) Australia (Hobart) Time</option><option value="Australia/Lindeman" data-spec="select-option">(GMT+1000) Australia (Lindeman) Time</option><option value="Australia/Melbourne" data-spec="select-option">(GMT+1000) Australia (Melbourne) Time</option><option value="Australia/Sydney" data-spec="select-option">(GMT+1000) Australia (Sydney) Time</option><option value="Pacific/Guam" data-spec="select-option">(GMT+1000) Guam Time</option><option value="Pacific/Chuuk" data-spec="select-option">(GMT+1000) Micronesia (Chuuk) Time</option><option value="Pacific/Saipan" data-spec="select-option">(GMT+1000) Northern Mariana Islands Time</option><option value="Pacific/Port_Moresby" data-spec="select-option">(GMT+1000) Papua New Guinea (Port Moresby) Time</option><option value="Asia/Ust-Nera" data-spec="select-option">(GMT+1000) Russia (Ust-Nera) Time</option><option value="Asia/Vladivostok" data-spec="select-option">(GMT+1000) Russia (Vladivostok) Time</option><option value="Australia/Lord_Howe" data-spec="select-option">(GMT+1030) World (Lord Howe) Time</option><option value="Antarctica/Macquarie" data-spec="select-option">(GMT+1100) Australia (Macquarie) Time</option><option value="Pacific/Kosrae" data-spec="select-option">(GMT+1100) Micronesia (Kosrae) Time</option><option value="Pacific/Pohnpei" data-spec="select-option">(GMT+1100) Micronesia (Pohnpei) Time</option><option value="Pacific/Noumea" data-spec="select-option">(GMT+1100) New Caledonia Time</option><option value="Pacific/Norfolk" data-spec="select-option">(GMT+1100) Norfolk Island Time</option><option value="Pacific/Bougainville" data-spec="select-option">(GMT+1100) Papua New Guinea (Bougainville) Time</option><option value="Asia/Magadan" data-spec="select-option">(GMT+1100) Russia (Magadan) Time</option><option value="Asia/Sakhalin" data-spec="select-option">(GMT+1100) Russia (Sakhalin) Time</option><option value="Asia/Srednekolymsk" data-spec="select-option">(GMT+1100) Russia (Srednekolymsk) Time</option><option value="Pacific/Guadalcanal" data-spec="select-option">(GMT+1100) Solomon Islands Time</option><option value="Pacific/Efate" data-spec="select-option">(GMT+1100) Vanuatu Time</option><option value="Antarctica/McMurdo" data-spec="select-option">(GMT+1200) Antarctica (McMurdo) Time</option><option value="Pacific/Fiji" data-spec="select-option">(GMT+1200) Fiji Time</option><option value="Pacific/Tarawa" data-spec="select-option">(GMT+1200) Kiribati (Tarawa) Time</option><option value="Pacific/Kwajalein" data-spec="select-option">(GMT+1200) Marshall Islands (Kwajalein) Time</option><option value="Pacific/Majuro" data-spec="select-option">(GMT+1200) Marshall Islands (Majuro) Time</option><option value="Pacific/Nauru" data-spec="select-option">(GMT+1200) Nauru Time</option><option value="Pacific/Auckland" data-spec="select-option">(GMT+1200) New Zealand Time</option><option value="Asia/Anadyr" data-spec="select-option">(GMT+1200) Russia (Anadyr) Time</option><option value="Asia/Kamchatka" data-spec="select-option">(GMT+1200) Russia (Kamchatka) Time</option><option value="Pacific/Funafuti" data-spec="select-option">(GMT+1200) Tuvalu Time</option><option value="Pacific/Wake" data-spec="select-option">(GMT+1200) U.S. Outlying Islands (Wake) Time</option><option value="Pacific/Wallis" data-spec="select-option">(GMT+1200) Wallis &amp; Futuna Time</option><option value="Pacific/Chatham" data-spec="select-option">(GMT+1245) World (Chatham) Time</option><option value="Pacific/Enderbury" data-spec="select-option">(GMT+1300) Kiribati (Enderbury) Time</option><option value="Pacific/Apia" data-spec="select-option">(GMT+1300) Samoa Time</option><option value="Pacific/Fakaofo" data-spec="select-option">(GMT+1300) Tokelau Time</option><option value="Pacific/Tongatapu" data-spec="select-option">(GMT+1300) Tonga Time</option><option value="Pacific/Kiritimati" data-spec="select-option">(GMT+1400) Kiribati (Kiritimati) Time</option>
                                                </select>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div 
                                style={
                                  {marginTop: 10,
                                  position: 'relative',
                                  cursor: 'pointer'
                                }
                                }>
                                  <div className ='placeholder2'
                                    style={
                                      {position:'absolute',
                                        top: '-10px',
                                        left:"-5px",
                                        width:' 100%',
                                        height: '70px',
                                        zIndex: '2'                                                  
                                      }
                                    }
                                  >
                                    <label className='label'>
                                      <span className='spantext2'>
                                      Event Page Language
                                      </span>
                                    </label>
                                  </div>
                                  <div>
                                    <div className = 'timedropdowndiv'>
                                      <div 
                                      style={
                                        {marginBottom: 8}
                                      }>
                                        <div className = 'searchvenuediv1'>
                                          <div className = 'searchvenuediv'>
                                            <div className = 'searchvenuediv'>
                                              
                                              <div className='dropdownLast'>
                                                <span className = 'dropdownspan'>
                                                  <span className = 'dropdowntitlespan'
                                                  style={
                                                    {paddingTop: '5px'}
                                                  }>
                                                    English (US)
                                                  </span>
                                                  <span className = 'dropdownarrowspan'
                                                  style={
                                                    {
                                                      paddingLeft: '110px',
                                                      paddingTop: '5px'
                                                    }
                                                  }>
                                                    <i className = 'smallI'>
                                                      <svg className='smallSvg'
                                                      x="0"
                                                      y="0" 
                                                      viewBox="0 0 24 24" 
                                                      xmlSpace="preserve">
                                                        <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M7 10.2l5 5 5-5-1.4-1.4-3.6 3.6-3.6-3.6z">
                                                        </path>
                                                      </svg>
                                                    </i>
                                                  </span>
                                                </span>
                                                <select
                                                style={
                                                  {
                                                    padding: '18px 12px 6px',
                                                    background: 'none',
                                                    border: 'none',
                                                    color: '#39364f',
                                                    whiteSpace: 'nowrap',
                                                    outline: 'none',
                                                    transition: 'padding .16s cubic-bezier(.4,0,.3,1),color .4s cubic-bezier(.4,0,.3,1)',
                                                    width: '100%',
                                                    height: '100%',
                                                    cursor: 'pointer',
                                                    position: 'absolute',
                                                    top: '0',
                                                    left: '0',
                                                    opacity: '0',
                                                    WebkitAppearance: 'menulist-button',
                                                    WebkitBoxFlex: '1',
                                                    minWidth: '0'
                                                  }
                                                }>
                                                </select>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>
                    </div>
                    </form>
                    </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <div className='fixeddiv'>
        <div className='fixedinnerdiv'>
          <div className='fixedbuttondiv'>
            <div>
              <button className='usedbutton' 
                style={{marginRight: 16}}>
                Discard
              </button>
              <button className='usedbutton' 
                style={saveButtonStyle}>
                Save & Continue
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </WholePage>
  )
}