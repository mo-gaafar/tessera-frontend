import React from 'react';
import { fireEvent, getByRole, render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import BasicInfo from '../pages/BasicInfo/BasicInfo';
import Details from '../pages/BasicInfo/BasicInfoSecondPage';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

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
    expect(select.value).toBe('true');
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
  // it('calendar renders without crashing', () => {
  //   const { getByTestId } = render(
  //     <BrowserRouter>
  //       <BasicInfo selectedDate={new Date()} />
  //     </BrowserRouter>
  //   );
  //   expect(getByTestId('datepicker-container')).toBeInTheDocument();
  // });
  it('when pressing the continue button with empty input error will appear ', () => {
    const { getAllByRole, getByText } = render(
      <BrowserRouter>
        <GoogleOAuthProvider clientId="749417144932-40bn9j748fbhp5tciuuhd5ehhr8e5gfd.apps.googleusercontent.com">
          <BasicInfo test={true} />
        </GoogleOAuthProvider>
      </BrowserRouter>
    );
    const continueButton = getAllByRole('button', {
      name: 'Save & Continue',
    })[0];
    fireEvent.click(continueButton);
    const labels = getByText('Title is required').textContent;
    expect(labels).toEqual('Title is required');
  });
  it('when pressing the continue button with empty input error will appear ', () => {
    const { getAllByRole, getByText } = render(
      <BrowserRouter>
        <GoogleOAuthProvider clientId="749417144932-40bn9j748fbhp5tciuuhd5ehhr8e5gfd.apps.googleusercontent.com">
          <BasicInfo test={true} />
        </GoogleOAuthProvider>
      </BrowserRouter>
    );
    const continueButton = getAllByRole('button', {
      name: 'Save & Continue',
    })[0];
    fireEvent.click(continueButton);
    const labels = getByText('Address 1 is required').textContent;
    expect(labels).toEqual('Address 1 is required');
  });
  // it('when pressing the continue button with empty input error will appear ', () => {
  //   const { getAllByRole, getByText } = render(
  //     <BrowserRouter>
  //       <GoogleOAuthProvider clientId="749417144932-40bn9j748fbhp5tciuuhd5ehhr8e5gfd.apps.googleusercontent.com">
  //         <BasicInfo test={true} />
  //       </GoogleOAuthProvider>
  //     </BrowserRouter>
  //   );
  //   const continueButton = getAllByRole('button', {
  //     name: 'Save & Continue',
  //   })[0];
  //   fireEvent.click(continueButton);
  //   const labels = getByText('ZIP code is required').textContent;
  //   expect(labels).toEqual('ZIP code is required');
  // });
});

describe('details', () => {
  it('when pressing the continue button with empty summary error will appear ', () => {
    const { getAllByRole, getByTestId } = render(
      <BrowserRouter>
        <GoogleOAuthProvider clientId="749417144932-40bn9j748fbhp5tciuuhd5ehhr8e5gfd.apps.googleusercontent.com">
          <Details test={true} />
        </GoogleOAuthProvider>
      </BrowserRouter>
    );
    const continueButton = getAllByRole('button', {
      name: 'Save & Continue',
    })[0];
    fireEvent.click(continueButton);
    const labels = getByTestId('summaryempty').textContent;
    expect(labels).toEqual('');
  });
});
