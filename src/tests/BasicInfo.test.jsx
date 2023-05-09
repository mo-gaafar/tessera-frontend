import React from 'react';
import { fireEvent, getByRole, render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import BasicInfo from '../pages/BasicInfo/BasicInfo';
import { BrowserRouter } from 'react-router-dom';
import { Details } from '../pages/BasicInfo/BasicInfoSecondPage';
import { GoogleOAuthProvider } from '@react-oauth/google';

describe ('basicinfo', () => {
  it('displays an error when leaving the title input empty', () => {
    const { getByLabelText, getByText } = render(
      <BrowserRouter>
        <BasicInfo test={true} email="anytitle" />
      </BrowserRouter>
    );
    const titleInput = getByLabelText('Title');
    fireEvent.blur(titleInput);
    const errorText = getByText('Title is required').textContent;
    expect(errorText).toEqual('Title is required');
  });
})