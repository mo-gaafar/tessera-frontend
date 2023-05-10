import React from 'react';
import { fireEvent, getByRole, render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import BasicInfo from '../pages/BasicInfo/BasicInfo';
import { BrowserRouter } from 'react-router-dom';
import Details from '../pages/BasicInfo/BasicInfoSecondPage';
import { GoogleOAuthProvider } from '@react-oauth/google';
import getByTextAcrossNodes from '../pages/BasicInfo/BasicInfo';

describe('basicinfo', () => {
  it('Dropdown Category list selects an option', () => {
    const { getByTestId, getByText } = render(
      <BrowserRouter>
        <BasicInfo test={true} />
      </BrowserRouter>
    );

    const dropdown = getByTestId('timedropdownoptions');
    fireEvent.click(dropdown);

    const option = getByText('Category');
    fireEvent.click(option);

    const select = getByTestId('timedropdownselect');
    expect(select.value).toBe('');
  });

  it('Time Zone Dropdown options list selects an option', () => {
    const { getByTestId, getByText } = render(
      <BrowserRouter>
        <BasicInfo test={true} />
      </BrowserRouter>
    );
    const select = getByTestId('timezoneselect').textContent;
    expect(select).toBe('');
  });
  it('calendar renders without crashing', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <BasicInfo selectedDate={new Date()} />
      </BrowserRouter>
    );
    expect(getByTestId('datepicker-container')).toBeInTheDocument();
  });
});

describe('details', () => {
  // it('uploads a picture when the button is clicked', () => {
  //   // Create a mock function for the handlePhotoChange callback
  //   const handlePhotoChange = jest.fn();
  //   // Render the component
  //   const { getByRole } = render(
  //     <Details handlePhotoChange={handlePhotoChange} />
  //   );
  //   // Get the button element and click it
  //   const button = getByRole('button');
  //   fireEvent.click(button);
  //   // Check that the handlePhotoChange callback was called
  //   expect(handlePhotoChange).toHaveBeenCalled();
  // });
});
