import { render, screen } from '@testing-library/react';
import Landing from '../components/Landing';
import { describe, it, expect } from 'vitest';
import EventBox from '../components/EventBox';

describe('Landing', () => {
  it('renders headline', () => {
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
});

describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});
