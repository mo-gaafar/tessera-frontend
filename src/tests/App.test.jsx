import {
  render,
  screen,
  fireEvent,
  getAllByTestId,
  getByDisplayValue,
  getByText,
} from '@testing-library/react';

import Landing from '../pages/LandingPage/Landing';
import { describe, it, expect } from 'vitest';
import EventBox from '../pages/LandingPage/EventBox';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import TermsAndConditions from '../pages/LandingPage/TermsAndConditions';

describe('Landing', () => {
  it('renders Event', () => {
    const { getByText } = render(
      <EventBox
        test={true}
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

  it('renders filterbar', () => {
    const { getAllByRole, getByText } = render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    );

    const continueButton = getAllByRole('button', { name: 'For you' })[0];
    fireEvent.click(continueButton);
    const dropbutton = getByText('Date').textContent;
    expect(dropbutton).toEqual('Date');
  });

  it('renders calender', () => {
    const { getAllByRole, getByText, getAllByText } = render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    );

    const continueButton = getAllByRole('button', { name: 'For you' })[0];
    fireEvent.click(continueButton);
    const dropButton = getByText('Date');
    fireEvent.click(dropButton);
    const calenderButton = getAllByRole('button', { name: 'Calender' })[0];
    fireEvent.click(calenderButton);
    const calenderData = getAllByText('Sun')[0].textContent;
    expect(calenderData).toEqual('Sun');
  });

  it('filter bar Today selected', () => {
    const { getAllByRole, getAllByTestId } = render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    );

    const forYouButton = getAllByRole('button', { name: 'For you' })[0];
    fireEvent.click(forYouButton);
    const dropButton = getAllByTestId('forYou')[0];
    fireEvent.click(dropButton);
    const calenderButton = getAllByRole('button', { name: 'Tomorrow' })[0];
    fireEvent.click(calenderButton);
    let dropButtonText = dropButton.textContent;
    expect(dropButtonText).toEqual('Tomorrow');
  });
});
