import {
  render,
  screen,
  fireEvent,
  getAllByTestId,
} from '@testing-library/react';
import Landing from '../components/Landing';
import { describe, it, expect } from 'vitest';
import EventBox from '../components/EventBox';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

describe('Landing', () => {
  it('renders Event', () => {
    const { getByText } = render(
      <EventBox
        image="../../src/assets/event__2.avif"
        eventTitle="The Future Of Leadership Congress 2023"
        date="Mon, May 15, 9:00 AM "
        description="Cairo • Cairo, Cairo Governorate Starts at A$751.69"
        organizer="Erudite Training Solutions"
        followers="47 followers"
      />
    );
    const title = getByText(
      'The Future Of Leadership Congress 2023'
    ).textContent;
    expect(title).toBe('The Future Of Leadership Congress 2023');
  });

  it('renders geolocation', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    );

    const title = getByText('Events in').textContent;
    console.log(title);
    expect(title).toBe('Events in ');
  });
});
