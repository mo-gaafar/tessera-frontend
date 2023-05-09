/**
 * @file PublishPage.jsx
 * @description This file contains the The Publish page component and its logic
 * @name PublishPage.jsx
 * @author @Clara
 * @requires react
 * @requires react-router-dom
 * @requires ./styles/PublishPage.styled
 * @exports PublishPage
 *
 */

import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link, Route, Routes } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import {
//   InputEmail,
//   Label,
// } from '../../../../tessera-frontend/src/pages/SignUp/styles/SignUpEmail.styled';

const StyleDiv = styled.div`

.publish{
   height: 100%;
   overflow: hidden;
   position: relative;
   width: 100%;
   padding-left: 20px;
   margin-right: 20px;
}

.publish h2{
    /* font-size: 2rem; */
}

.h1{
    /* font-size: 1.875rem; */
    line-height: 2.5rem;
    letter-spacing: .5px;
    margin-right: -0.5px;
}
.previewBox{
   border: 1px solid #eeedf2;
   margin-top: 24px;
   display: flex;
   flex-direction: row;
   width: 100%;
   height: 100%;
   box-shadow: 0 4px 8px 0 rgba(40,44,53,.06), 0 2px 2px 0 rgba(40,44,53,.06);
}
   
.price{
   display: flex;
   line-height: 24px;
   margin-top: 16px;
}

.previewBox img{
   /* height: 100%; */
   width: 42%;
   justify-content: center;
   align-items: center;
   background-color: #f8f7fa;
   display: flex;
}
    
 .publishDetails svg{
    height: 18px;
    border-radius: 2px;
    color: #3659e3;
 }

 .previewLink{
    text-align: center;
    color: #007791;
    border-top: 1px solid #eeedf2;
    margin-top: 20px;
    padding: 12px;
 }

 .priceAmount{
    display: flex;
    margin:16px;
    line-height: 24px;
    margin-top: 16px;
    margin-left: 24px;
 }


 .priceAmount svg{
    margin-right: 8px;

 }
 .publishDetails a{
    line-height: 24px;
    text-align: center;
    color: #3659e3;
    
 }

 .privacy{
    /* font-size: .75rem; */
    line-height: 1rem;
    margin-bottom: 50px;
 }

 .privacy h2{
    display: block;
    /* font-size: 1.5rem; */
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
 }


 .privacyOption{
    display: flex;
 }

 .privacyRadio{
    position: relative;
    min-width: 22px;
    min-height: 22px;
    margin-top:20px;
 }
 .PublishTime{
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
 }
 

 .privacyOption label{
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
 }

 .publishDate{
    display: flex;
    width: 100%;
    justify-content: space-between;
    
 }

 .dateAndZone{
      width: 100%;
 }

 .date, .time{
   display: flex;
   border: 1px solid #ccc;
   background: #f8f7fa;
   font-size: 14px;
   line-height: 22px;
   font-weight: 400;
   border-radius: 2px;
   padding: 1px;
   width: 50%;
   align-items: center;
   color: #333;
   /* text-align: center; */
   input{
      border: none;
      background: #f8f7fa;
   }
   svg{
      margin-left: 10px;
      margin-right: 10px;
   }
   p{
      font-size: 12px;
      line-height: 22px;
   }

   &.disabled{
      background: #f8f7fa;
      color: #333;
      border: 1px solid #ccc;
      cursor: not-allowed;
   }
   
}



 

 .date svg{
    width: 24px;
    height: 24px;
 }
 
 .startDate{
    font-size: 14px;
    line-height: 22px;
    min-height: 22px;
 }

 .time{
    padding-left: 8px;
    margin-left:5px;
    
 }

 .timeAndZone{
    font-size: .875rem;
    line-height: 1.25rem;
 }

 .TipsIcon{
    display: flex;
 }

 .TipsIcon i{
   /* padding: 5px; */
   margin-right: 10px;
   border-radius: 50%;
   background-color: #fff58c;
   /* center vertical */
   display: flex;
   align-items: center;
   width: 40px;
   height: 40px;
   justify-content: center;
 }

 .TipsIcon svg{
    width: 24px;
    height: 24px;
 }

 .Tips{
   background-color: var(--eds-ui-100,var(--eds-ui-100,#f8f7fa));
   padding-left: 40px;
   padding-top: 13px;
   padding-bottom: 20px;
   margin-top: 20px;
 }

 .Links svg{
   width: 16px;
   height: 16px;
   fill: #3d64ff!important;
   margin-left: 5px;
   /* move to right when hover */
   transition: margin-left .24s cubic-bezier(.4,0,.3,1);
   &:hover{
      margin-left: 12px;
   }

 }

 .Links{
   display: flex;
   margin-top: 16px;
   margin-bottom: 8px;
   cursor: pointer;
   &:hover{
      text-decoration: underline;
   }
    
 }

 

 .Links span{
    color: #3659e3;
    color: var(--eds-control,#3659e3);
    font-weight: 500;
 }

 .otherDetails{
    display: flex;
    margin-top: 32px;
    margin-bottom: 80px;
    @media (max-width: 768px) {
      flex-direction: column;
    }
 }

 .privacyAndTime{
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    height: 100%;
    width: 50%;
    @media (max-width: 768px) {
      width: 100%;
    }
 }

 .privacyAndTime h2{
    display: block;
    /* font-size: 1.5rem; */
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
 }

 .PublishTips{
    width: 50%;
    margin-bottom: 32px;

    @media (max-width: 768px) {
      width: 100%;
      margin-top: 20px;
    }
 }

 .publishDetails hr{
    /* width: 90%; */
 }

 .publishDetails{
    width: 50%;
    margin-left: 30px;
    margin-top: 15px;
    
 }

 .PublishTimeRadio{
   div{
      display: flex;
      align-items: center;
      label{
         margin-left: 8px;
         align-items: center;
      }
   }
 }

 .public, .private{
   font-size: 0.875rem;
   margin-left: 8px;
 }

 .PublishButton{
   /* background-color: #d1410c; */
   color:white;
   float: right;
   height: 40px;
   padding: 10px;
   width: 100px;
   /* margin-bottom: 20px; */
   font-size: 16px;
   color: #fff;
   border: none;
   border-radius: 4px;
   outline: none;
   background: #d94618;
   margin-right: 15px   ;
   cursor: pointer;
   &:hover {
      background: #ef5436;
   }
   &:disabled {
      background: #d0cfd9;
      cursor: not-allowed;
      input{
         cursor: not-allowed;
      }
   }
 }

 .bottomBar{
   position: fixed;
   bottom: 0;
   padding: 10px;
   background: white;
   width: 100%;
   border-top: 1px solid #eeedf2;
   left: 0;
 }

`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-bottom: 20px; */
  width: 100%;
  border: 1.5px solid #d0cfd9;
  border-radius: 3px;

  margin: 10px;
  margin-left: 0px;
  padding-left: 12px;
  padding-top: 5px;
  @media (max-width: 960px) {
    width: 100%;
  }

  /* hover animation */
  &:hover {
    border: 1.5px solid #a4a3aa;
  }

  &:focus-within {
    border: 1.5px solid #1e4fff;
  }

  .inputLabel {
    display: flex;
    justify-content: left;
    font-size: 12px;
    color: #6f7287;
    &:focus-within {
      border: 1px solid #1e4fff;
    }
  }

  .inputLabel span {
    color: #ff0000;
    margin-left: 5px;
  }
`;

const FormInput = styled.input`
  width: 100%;
  height: 30px;

  /* padding: 10px; */
  /* margin-bottom: 20px; */
  font-size: 16px;
  color: #000;
  /* border: 1px solid #ebebeb; */
  /* border-radius: 1px; */
  outline: none;
  border: none;
  @media (max-width: 960px) {
    width: 100%;
  }
  /* set active state */
`;

const SelectBox = styled.select`
  width: 100%;
  height: 30px;

  /* padding: 10px; */
  /* margin-bottom: 20px; */
  font-size: 16px;
  color: #000;
  /* border: 1px solid #ebebeb; */
  /* border-radius: 1px; */
  outline: none;
  border: none;
  @media (max-width: 960px) {
    width: 100%;
  }
  /* set active state */
`;

function PublishPage(props) {
  // const event = props.event;
  const event = '643aa09ecbfea68c24d93670';
  const url = "https://www.tessera.social/api/event-management/publish/"
  const [eventType, setEventType] = useState('public');
  const [audienceType, setAudienceType] = useState('anyone');
  const [publishType, setPublishType] = useState('now');
  const [publishDate, setPublishDate] = useState(new Date());
  const [publishButton, setPublishButton] = useState('Schedule');
  const [password, setPassword] = useState('');
  
   async function publishData()
   {
      const data = {   
         "isPublic": (eventType === 'public') ? true : false,
         "publishNow": (publishType === 'now') ? true : false,
         "publicDate": publishDate,
         "link": (audienceType === 'anyone') ? true : false,
         "password": (audienceType === 'password') ? true : false,
         "alwaysPrivate":(eventType === 'public') ? true : false,
         "privateToPublicDate":publishDate   
      }
      const res = await axios.put(url+event, data, {
         headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
         }
      })
   }
  
  return (
     <StyleDiv>
        <div className="publish">
            <h1 className="header">Publish Your Event</h1>
            <div className="previewBox">
                <img src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F399778979%2F1288811134183%2F1%2Foriginal.20221125-142736?w=720&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C158%2C1080%2C540&s=16c699c9a114c13ad66a0bf72412ab25" alt="event" />
                <div className="publishDetails">
                    <h2>Party</h2>
                    <p>Tuesday, June 13, 2023 at 7:00 PM EET</p>
                    <div className="price">
                        <div className="priceAmount">
                           <svg viewBox="0 0 24 24"><path d="M10 13v-2h4v2zm6 5V6h-.4C15 7.4 13.8 8.4 12 8.4S9 7.4 8.4 6H8v12h.4c.6-1.4 1.8-2.4 3.6-2.4s3 1 3.6 2.4zM14 4h4v16h-4s0-2.4-2-2.4-2 2.4-2 2.4H6V4h4s0 2.4 2 2.4S14 4 14 4z"></path></svg>
                           <p>$100.00</p>
                        </div>
                        <div className="priceAmount">
                           <svg id="user-chunky_svg__eds-icon--user-chunky_svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path id="user-chunky_svg__eds-icon--user-chunky_base" fill-rule="evenodd" clip-rule="evenodd" d="M12 18c-1.2 0-2.4-.3-3.5-.7.6-1.3 2-2.2 3.5-2.2s2.9.9 3.5 2.2c-1.1.4-2.3.7-3.5.7zm6.5-2.9c-.4.4-.8.8-1.3 1.1a5.989 5.989 0 00-10.6 0c-.5-.3-.9-.7-1.3-1.1L4 16.5c2.1 2.3 5 3.5 8 3.5s5.9-1.3 8-3.5l-1.5-1.4z"></path><path id="user-chunky_svg__eds-icon--user-chunky_circle" fill-rule="evenodd" clip-rule="evenodd" d="M12 4C9.7 4 7.8 5.9 7.8 8.2s1.9 4.2 4.2 4.2 4.2-1.9 4.2-4.2S14.3 4 12 4zm0 6.4c-1.2 0-2.2-1-2.2-2.2C9.8 7 10.8 6 12 6s2.2 1 2.2 2.2c0 1.2-1 2.2-2.2 2.2z"></path></svg>
                           <p>200</p>
                        </div>
                    </div>
                    <p>descvssad</p>
                    <div className="previewLink">
                        <a data-spec="eds-link" target="_blank" href="" class="eds-link"><span>Preview your event<i class="eds-vector-image eds-icon--small eds-vector-image--ui-blue" data-spec="icon" data-testid="icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M18 18v2H4V6h7v2H6v10h10v-5h2zm1-11.586l-7.293 7.293-1.414-1.414L17.586 5H14V3h7v7h-2z" fill-rule="evenodd"></path></svg></i></span></a>
                    </div>
                </div>
            </div>
            <div className="otherDetails">
               <div className="privacyAndTime">
                  <div className="privacy">
                     <h2>Who can see your event?</h2>
                     <div className="PrivacyRadio">
                        <div className="privacyOption" >
                           <input type="radio" id="public" name="privacy" value="public" onChange={(e) => {setEventType(e.target.value);}}/>
                           <div className="public" onClick={() => setEventType("public")}>
                              <label for="public">Public</label>
                              <p>Shared on Eventbrite and search engines</p>
                           </div>
                        </div>
                        <div className="privacyOption">
                           <input type="radio" id="private" name="privacy" value="private" onChange={(e) => {setEventType(e.target.value);}}/>
                           <div className="private" onClick={() => setEventType("private")}>
                              <label for="private">Private</label>
                              <p>Only available to a selected audience</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  {eventType === "private" && 
                  <div className="privateBox">
                     <h2>Choose your audience</h2>
                     <div className="audienceBox">

                        <InputGroup style={{ width: '50%', marginRight: '0px' }}>
                           <div className="inputLabel">
                              <label for="password">Audience</label>
                           </div>
                           <SelectBox name="audience" id="audience" value={audienceType} onChange={(e) => {setAudienceType(e.target.value);}}>
                              <option value="anyone" >Anyone with the link</option>
                              <option value="password" >Only people with the password</option>
                           </SelectBox>
                        </InputGroup>
                     </div>
                     {audienceType === "password" &&
                        <div className="passwordBox">
                           <InputGroup style={{ width: '50%', marginRight: '0px' }}>
                              <div className="inputLabel">
                                 <label for="password">Password</label>
                              </div>
                              <FormInput
                                 type="text"
                                 id="password"
                                 placeholder='Password'
                                 onChange={e => setPassword(e.target.value)}
                              />
                           </InputGroup>
                           <p>0/50</p>
                        </div>
                     }
                  </div>}
                  {eventType === "public" && <div className="PublishTime">
                     <h2>When should we publish your event?</h2>
                     <div className="PublishTimeRadio">
                        <div>
                           <input type="radio" id="now" name="publish" value="now" onChange={(e) => {setPublishButton("Publish"); setPublishType(e.target.value);}}/>
                           <label for="now">Publish Now</label>
                        </div>
                        <div>
                           <input type="radio" id="later" name="publish" value="later" onChange={(e) => {setPublishButton("Schedule"); setPublishType(e.target.value);}}/>
                           <label for="later">Schedule for later</label>
                        </div>
                     </div>
                     <div className="dateAndZone">
                        <div className="publishDate">
                           <div className={(publishType === "now" ? "date disabled" : "date")}>
                              <svg id="calendar-chunky_svg__eds-icon--calendar-chunky_svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path id="calendar-chunky_svg__eds-icon--calendar-chunky_base" d="M16.9 6.5v-2h-2v2h-6v-2h-2v2h-2v13h14v-13h-2zm0 11h-10v-7h10v7z"></path></svg>
                              <div className="dateContainer">
                                 <p>Start Date</p>
                                 <DatePicker selected={publishDate} disabled={(publishType === "now" ? "disabled" : "")} onChange={(date) => setPublishDate(date)} />
                              </div>

                           </div>
                           <div className="time">
                              <div className="startTime">
                                 <p>Start Time</p>
                                 <p>05:00 PM</p>
                              </div>
                           </div>
                        </div>
                        <p>Time zone is the same as your event's</p>
                     </div>
                  </div>}
                  {eventType === "private" && <div className="changeToPublic">
                     <h2>Will this event ever be public?</h2>
                        <div className="PublishTimeRadio">
                           <div>
                              <input type="radio" id="keepprivate" name="keepprivate" value="private"/>
                              <label for="keepprivate">No, keep it private</label>
                           </div>
                           <div>
                              <input type="radio" id="changepublic" name="keepprivate" value="public"/>
                              <label for="changepublic">Yes, schedule to share publicly</label>
                           </div>
                        </div>
                        <div className="dateAndZone">
                           <div className="publishDate">
                              <div className="date">
                                 <svg id="calendar-chunky_svg__eds-icon--calendar-chunky_svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path id="calendar-chunky_svg__eds-icon--calendar-chunky_base" d="M16.9 6.5v-2h-2v2h-6v-2h-2v2h-2v13h14v-13h-2zm0 11h-10v-7h10v7z"></path></svg>
                                 <div className="startDate">
                                    <p>Start Date</p>
                                    <p>05/04/2023</p>
                                 </div>
                              </div>
                              <div className="time">
                                 <div className="startTime">
                                    <p>Start Time</p>
                                    <p>05:00 PM</p>
                                 </div>
                              </div>
                           </div>
                           <p>Time zone is the same as your event's</p>
                        </div>
                     </div>}
               </div>
               <div className="PublishTips">
                  <div className="TipsIcon">
                     <i class="eds-vector-image eds-icon--small" data-spec="icon" data-testid="icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M15 22.5H9v-2h6zm0-4H9v-3.67a7 7 0 1 1 6 0zm-4-2h2v-3.05l.67-.24a5 5 0 1 0-3.34 0l.67.23z" fill="#39364f"></path></svg></i>
                     <h2>Tips before you publish</h2>
                  </div>
                  <div className="Tips">
                     <div className="Links">
                        <span>Create promo codes for your event</span>
                        <svg class="arrow-right-chunky_svg__eds-icon--arrow-right-chunky_svg" viewBox="0 0 24 24"><path class="arrow-right-chunky_svg__eds-icon--arrow-right-chunky_base" fill-rule="evenodd" clip-rule="evenodd" d="M10.5 5.5L16 11H4v2h12l-5.5 5.5L12 20l8-8-8-8z"></path></svg>
                     </div>
                     <div className="Links">
                        <span>Customize your order form</span>
                        <svg class="arrow-right-chunky_svg__eds-icon--arrow-right-chunky_svg" viewBox="0 0 24 24"><path class="arrow-right-chunky_svg__eds-icon--arrow-right-chunky_base" fill-rule="evenodd" clip-rule="evenodd" d="M10.5 5.5L16 11H4v2h12l-5.5 5.5L12 20l8-8-8-8z"></path></svg>
                     </div>
                     <div className="Links">
                        <span>Manage how you get paid</span>
                        <svg class="arrow-right-chunky_svg__eds-icon--arrow-right-chunky_svg" viewBox="0 0 24 24"><path class="arrow-right-chunky_svg__eds-icon--arrow-right-chunky_base" fill-rule="evenodd" clip-rule="evenodd" d="M10.5 5.5L16 11H4v2h12l-5.5 5.5L12 20l8-8-8-8z"></path></svg>
                     </div>
                     <div className="Links">
                        <span>Set your refund policy</span>
                        <svg class="arrow-right-chunky_svg__eds-icon--arrow-right-chunky_svg" viewBox="0 0 24 24"><path class="arrow-right-chunky_svg__eds-icon--arrow-right-chunky_base" fill-rule="evenodd" clip-rule="evenodd" d="M10.5 5.5L16 11H4v2h12l-5.5 5.5L12 20l8-8-8-8z"></path></svg>
                     </div> 
                     <div className="Links">
                        <span>Add this event to a collection to increase visibility</span>
                        <svg class="arrow-right-chunky_svg__eds-icon--arrow-right-chunky_svg" viewBox="0 0 24 24"><path class="arrow-right-chunky_svg__eds-icon--arrow-right-chunky_base" fill-rule="evenodd" clip-rule="evenodd" d="M10.5 5.5L16 11H4v2h12l-5.5 5.5L12 20l8-8-8-8z"></path></svg>
                     </div>    
                     <div className="Links">
                        <span>Develop a safety plan for your event</span>
                        <svg class="arrow-right-chunky_svg__eds-icon--arrow-right-chunky_svg" viewBox="0 0 24 24"><path class="arrow-right-chunky_svg__eds-icon--arrow-right-chunky_base" fill-rule="evenodd" clip-rule="evenodd" d="M10.5 5.5L16 11H4v2h12l-5.5 5.5L12 20l8-8-8-8z"></path></svg>
                     </div>      
                  </div>
               </div>
            </div>
            <div className="bottomBar">
               <button className="PublishButton" onClick={()=>publishData()}>{publishButton}</button>
            </div>
        </div>
    </StyleDiv>


        

    
  );
}

export default PublishPage;