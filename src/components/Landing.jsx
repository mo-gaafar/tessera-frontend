import { useEffect, useState } from 'react';
import { StyledLandingEvents } from './styles/Landing.styled';
import { StyledEventsContainer } from './styles/Landing.styled';
import { Link, Route, Routes } from 'react-router-dom';

import EventBox from './EventBox';

export default function Landing() {
  const [city, setCity] = useState('');

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

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
        </ul>
      </nav>
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
          <h4>Events in {city}</h4>
          <StyledEventsContainer img="../../src/assets/svgviewer-output.svg">
            <EventBox
              image="../../src/assets/event__1.avif"
              eventTitle="Certified DeFi Associate | Cairo"
              date="Tue, Apr 18, 7:00 AM "
              description="Cairo • Omar Al Khayam, Cairo Governorate Starts at $399.00"
              organizer="Blockchain Smart Solutions"
              followers="917 followers"
            />
            <EventBox
              image="../../src/assets/event__2.avif"
              eventTitle="The Future Of Leadership Congress 2023"
              date="Mon, May 15, 9:00 AM "
              description="Cairo • Cairo, Cairo Governorate Starts at A$751.69"
              organizer="Erudite Training Solutions"
              followers="47 followers"
            />
            <EventBox
              image="../../src/assets/event__3.avif"
              eventTitle="Unravelling NFTs | Cairo"
              date="Tue, Apr 11, 7:00 AM  "
              description="Cairo • Omar Al Khayam, Cairo Governorate Starts at $399.00"
              organizer="Blockchain Smart Solutions"
              followers="917 followers"
            />
            <EventBox
              image="../../src/assets/event__4.avif"
              eventTitle="Certified Crypto Associate | Cairo"
              date="Tomorrow at 4:00 PM"
              description="Cairo • Omar Al Khayam, Cairo Governorate Starts at $399.00"
              organizer="Blockchain Smart Solutions"
              followers="917 followers"
            />
            <EventBox
              image="../../src/assets/event__5.avif"
              eventTitle="Cloudflight Coding Contest (CCC) - Cairo"
              date="Fri, Mar 31, 3:00 PM"
              description="German University in Cairo • Cairo, محافظة القاهرة"
              isFree={true}
              organizer="Cloudflight GmbH"
              followers="213 followers"
            />
            <EventBox
              image="../../src/assets/event__6.avif"
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
