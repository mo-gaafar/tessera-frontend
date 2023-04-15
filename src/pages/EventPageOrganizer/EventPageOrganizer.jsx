import { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import {AboutTheOrganizer,MoreEventsOrganizer,OtherEventsYouMayLike} from './styles/EventOrganizer.styled';
import MoreEvents from './Eventbox'

import {eventsListScroll} from "./EventsList";
import EventBox from '../LandingPage/EventBox';



export default function EventPageOrganizer() {


    const [data, setData] = useState([...eventsListScroll]); // Your array of values
    const [currentIndex, setCurrentIndex] = useState(0); // Current index in the array

    const handleForward = () => {
        if (currentIndex < data.length - 3) {
          setCurrentIndex(currentIndex + 3);
        } else {
          setCurrentIndex(data.length - (data.length % 3));
        }
      };


      const handleBackward = () => {
        if (currentIndex >= 3) {
          setCurrentIndex(currentIndex - 3);
        } else {
          setCurrentIndex(0);
        }
      };

   


    return(
        <> 
        <AboutTheOrganizer> 
            <h2>About the organizer</h2>
            <div className='aboutOrganizerContainer'>
                <div className='organizedBySection'>
                    <div className='organizedBy'>
                     Organized by
                    </div>
                    
                    <a href="https://www.eventbrite.com/o/gomycode-15634961946" className='organizerLink' target="_blank" rel="noreferrer">GoMyCode</a>
                    
                </div>

                <div className='followersSection'>
                    <div className='followersdiv'>
                        <span className='followersAmount'> 2.8k </span>
                        <span className='followersText'> Followers </span>
                    </div>
                </div>
                <ul className='infoSection'>

                    <button className='contactButton'>Contact</button>
                    <button className='followButton'>Follow</button>

                </ul>

                <div className='socialsSection'>
                    <span className='organizerFacebookSpan'>
                        <a href="https://www.facebook.com/gomycode" className='organizerFacebook'>
                            <svg className='facebookSvg'>
                                <path d="M14.893 11.89L15.336 9h-2.773V7.124c0-.79.387-1.562 1.63-1.562h1.26v-2.46s-1.144-.196-2.238-.196c-2.285 0-3.777 1.385-3.777 3.89V9h-2.54v2.89h2.54v6.989a10.075 10.075 0 003.124 0V11.89h2.33"></path>
                            </svg>
                        </a>
                    </span>
                    <span className='organizerTwitterSpan'>
                        <a href="https://www.twitter.com/gomycode" className='organizerTwitter'>
                            <svg className='twitterSvg'>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4 4.1s-.6.4-1.2.7c-.6.2-1.3.4-1.3.4s-2-2.3-4.9-.8c-2.9 1.5-2 4.5-2 4.5s-2.9-.2-4.9-1.2C4.9 6.5 3.4 4.6 3.4 4.6s-.9 1.4-.5 3 1.8 2.5 1.8 2.5-.4 0-.9-.2c-.5-.1-1-.4-1-.4s-.1 1.3.8 2.6S6 13.6 6 13.6l-.8.2h-.9s.2 1.1 1.4 2c1.1.8 2.3.8 2.3.8s-1.1.9-2.7 1.4c-1.6.5-3.3.3-3.3.3s6 4 12.2.3c6.2-3.7 5.7-10.7 5.7-10.7s.6-.4 1-.9l1-1.2s-.7.3-1.3.5c-.5.2-.9.2-.9.2s.6-.4.9-.9c.5-.7.8-1.5.8-1.5z">
                                </path>
                            </svg>
                        </a>
                    </span>

                </div>

            </div>
        </AboutTheOrganizer>

        <MoreEventsOrganizer>
            <h2>More events from this organizer</h2>

            <MoreEvents
              eventName="Atelier Gratuit : construis ton propre ChatGPT ! - GOMYCODE ABIDJAN"
              eventDateTime="Today at 2:00 PM"
              eventLoation="GOMYCODE Côte d'Ivoire • Abidjan, District Autonome d'Abidjan"
              eventPrice="Free"
              organizerName="GoMyCode"
              organizerFollowers="2.8k followers"
              imageSrc="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F487781489%2F233874568789%2F1%2Foriginal.20230407-162824?w=512&amp;auto=format%2Ccompress&amp;q=75&amp;sharp=10&amp;rect=1%2C372%2C8000%2C4000&amp;s=34c811696b0d73045e71f74e745b37ba"
            />

            <MoreEvents
              eventName="Atelier Gratuit : construis ton propre ChatGPT ! - GOMYCODE ABIDJAN"
              eventDateTime="Today at 2:00 PM"
              eventLoation="GOMYCODE Côte d'Ivoire • Abidjan, District Autonome d'Abidjan"
              eventPrice="Free"
              organizerName="GoMyCode"
              organizerFollowers="2.8k followers"
              imageSrc="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F487781489%2F233874568789%2F1%2Foriginal.20230407-162824?w=512&amp;auto=format%2Ccompress&amp;q=75&amp;sharp=10&amp;rect=1%2C372%2C8000%2C4000&amp;s=34c811696b0d73045e71f74e745b37ba"
            />

            <MoreEvents
              eventName="Atelier Gratuit : construis ton propre ChatGPT ! - GOMYCODE ABIDJAN"
              eventDateTime="Today at 2:00 PM"
              eventLoation="GOMYCODE Côte d'Ivoire • Abidjan, District Autonome d'Abidjan"
              eventPrice="Free"
              organizerName="GoMyCode"
              organizerFollowers="2.8k followers"
              imageSrc="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F487781489%2F233874568789%2F1%2Foriginal.20230407-162824?w=512&amp;auto=format%2Ccompress&amp;q=75&amp;sharp=10&amp;rect=1%2C372%2C8000%2C4000&amp;s=34c811696b0d73045e71f74e745b37ba"
            />

        </MoreEventsOrganizer>
        

        <OtherEventsYouMayLike>

        <div className='otherEventsDiv'>

        <div className='titleAndButtons'>

            <div className='title'><h2>Other events you may like</h2></div>

            <div className='buttonsDiv'>
                <span class='backButtonSpan'>
                    <button onClick={handleBackward} disabled={currentIndex === 0} className='backbutton'>
                        <svg class="backSvg" >
                            <path class="arrow-left-chunky_svg__eds-icon--arrow-left-chunky_base" fill-rule="evenodd" clip-rule="evenodd" d="M4 12l8 8 1.5-1.5L8 13h12v-2H8l5.5-5.5L12 4z">
                            </path>
                        </svg>
                    </button>
                </span>

                <span class='forwardButtonSpan'>
                    <button button onClick={handleForward} disabled={currentIndex >= data.length - 3} className='forwardbutton'>
                        <svg class="forwardSvg" >
                            <path class="arrow-right-chunky_svg__eds-icon--arrow-right-chunky_base" fill-rule="evenodd" clip-rule="evenodd" d="M10.5 5.5L16 11H4v2h12l-5.5 5.5L12 20l8-8-8-8z">
                            </path>
                        </svg>
                    </button>
                </span>

            </div>
        </div>
        <div className="allEventsDiv">
        {data
          .slice(currentIndex, currentIndex + 3)
          .map((item, index) => (
            // <div key={index}>{value}</div>
            <EventBox className='eventCard'
                        key={index}
                        image={item.image}
                        eventTitle={item.eventTitle}
                        date={item.date}
                        description={item.description}
                        organizer={item.organizer}
                        followers={item.followers}
                    />
          ))}
      </div>

      </div>


        </OtherEventsYouMayLike>
            
        </>
    );
}

