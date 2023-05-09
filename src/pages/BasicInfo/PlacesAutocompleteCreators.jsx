import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';

import { useState } from 'react';
import { StyledPlaces } from './Styles/BasicInfo.styled';
export default function PlacesAutocomplete({ setLocationValue }) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();
  const [focused, setFocused] = useState(false);

  const [hideDefault, setHideDefault] = useState(false);
  const handleSelect = async e => {
    const address = e.target.innerText;

    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = getLatLng(results[0]);

    const data = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyC-V5bPta57l-zo8nzZ9MIxxGqvONc74XI`
    );

    const json = await data.json();

    setValue(address.split(',')[0], false);

    console.log(json);
    const cities = json.results;
  };

  return (
    <StyledPlaces>
      <div className="">
        <svg viewBox="0 0 24 24">
          <path
            style={{ fill: '#6f7287' }}
            d="M10 14c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm3.5.9c-1 .7-2.2 1.1-3.5 1.1-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6c0 1.3-.4 2.5-1.1 3.4l5.1 5.1-1.5 1.5-5-5.1z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search for a venue or address."
          value={value}
          onChange={e => {
            setHideDefault(true);
            setValue(e.target.value);
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          disabled={!ready}
        />
      </div>
      <ul>
        {status === 'OK' &&
          data.map(data => {
            return (
              <li onClick={handleSelect} key={data.place_id}>
                {data.description}
              </li>
            );
          })}
      </ul>
    </StyledPlaces>
  );
}
