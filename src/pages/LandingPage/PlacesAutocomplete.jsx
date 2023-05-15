import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';

import { useState } from 'react';

export default function PlacesAutocomplete({
  setSelected,
  cityData,
  setCity,
  showLocationMenu,
  setShowLocationMenu,
  setURL,
  currentCity,
}) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();
  const [hideDefault, setHideDefault] = useState(false);
  const handleSelect = async e => {
    const address = e.target.innerText;
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = getLatLng(results[0]);
    console.log(results, lat, lng);

    const data = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyC-V5bPta57l-zo8nzZ9MIxxGqvONc74XI`
    );

    const json = await data.json();
    const cities = json.results;

    let country, city;

    for (let i = 0; i < cities.length; i++) {
      const addressComponents = cities[i].address_components;
      for (let j = 0; j < addressComponents.length; j++) {
        const types = addressComponents[j].types;
        if (types.indexOf('locality') !== -1) {
          city = addressComponents[j].long_name;
        }
        if (types.indexOf('country') !== -1) {
          country = addressComponents[j].long_name;
        }
      }
    }

    setCity({
      city: city,
      country: country,
    });
    console.log(city, country);
    setURL(`city=${city}&country=${country}`);
  };

  function handleClick() {
    setShowLocationMenu(true);
  }
  function handleCurrent() {
    setURL(`city=${currentCity.city}&country=${currentCity.country}`);
    setValue(currentCity.city);
  }
  function handleOnline() {
    setURL('eventHosted=online');
    setValue('Online');
  }
  return (
    <>
      <h3>
        dabj,adsjjadjbd
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
        <input
          onClick={handleClick}
          type="text"
          value={value}
          placeholder={cityData.city}
          onChange={e => {
            console.log(hideDefault);
            setHideDefault(true);
            setValue(e.target.value);
          }}
          disabled={!ready}
        />
        {showLocationMenu && (
          <ul className="location__dropdown">
            {!hideDefault && (
              <div className="">
                <li onClick={handleCurrent} className="current__location">
                  <svg viewBox="0 0 24 24">
                    <g
                      id="crosshair_svg__Crosshair"
                      stroke="none"
                      strokeWidth="1"
                      fill="blue"
                      fillRule="evenodd"
                    >
                      <path
                        d="M11 18.93A7.005 7.005 0 015.07 13H3v-2h2.07A7.005 7.005 0 0111 5.07V3h2v2.07A7.005 7.005 0 0118.93 11H21v2h-2.07A7.005 7.005 0 0113 18.93V21h-2v-2.07zM12 17a5 5 0 100-10 5 5 0 000 10zm0-3a2 2 0 110-4 2 2 0 010 4z"
                        id="crosshair_svg__crosshair"
                        fill="#blue"
                      ></path>
                    </g>
                  </svg>
                  Use My Current Location
                </li>
                <li onClick={handleOnline} className="online__location">
                  <svg
                    id="video-chunky_svg__eds-icon--video-chunky_svg"
                    x="0"
                    y="0"
                    viewBox="0 0 24 24"
                    xmlSpace="preserve"
                  >
                    <g id="video-chunky_svg__eds-icon--video-chunky_base">
                      <path
                        d="M19 4v1H5V4H3v16h2v-1h14v1h2V4h-2zm0 13H5V7h14v10z"
                        fill="blue"
                      ></path>
                    </g>
                    <path
                      id="video-chunky_svg__eds-icon--video-chunky_play"
                      d="M10 15l5-3-5-3z"
                      fill="blue"
                    ></path>
                  </svg>
                  Browse Online Events
                </li>
              </div>
            )}

            {status === 'OK' &&
              hideDefault &&
              data.map(data => {
                {
                  /* console.log(data); */
                }
                return (
                  <li onClick={handleSelect} key={data.place_id}>
                    {data.description}
                  </li>
                );
              })}
          </ul>
        )}
      </h3>
    </>
  );
}
