import React from 'react';
import { fireEvent, getByRole, render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import BasicInfo from '../pages/BasicInfo/BasicInfo';
import { BrowserRouter } from 'react-router-dom';
import { Details } from '../pages/BasicInfo/BasicInfoSecondPage';
import { GoogleOAuthProvider } from '@react-oauth/google';

test('Dropdown list selects an option', () => {
  const { getByTestId, getByText } = render(
    <BrowserRouter>
        <BasicInfo test={true} />
      </BrowserRouter>
  );

  const dropdown = getByTestId('typedropdown');
  fireEvent.click(dropdown);

  const option = getByText('Auto, Boat & Air');
  fireEvent.click(option);

  const select = getByTestId('dropdownselect');
  expect(select.value).toBe('3');
});