import React from 'react';
import { fireEvent, getByRole, render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import BasicInfo from '../pages/BasicInfo/BasicInfo';
import { BrowserRouter } from 'react-router-dom';
import { Details } from '../pages/BasicInfo/BasicInfoSecondPage';
import { GoogleOAuthProvider } from '@react-oauth/google';

describe ('basicinfo', () => {
  it('when pressing the save button with empty title error will appear ', () => {
    const { getAllByRole, getByText } = render(
      <BrowserRouter>
        <BasicInfo test={true} email="anytitle" />
      </BrowserRouter>
    );
    const submitBtn = getAllByRole('button', { name: 'Save & Continue' })[0];
    fireEvent.click(submitBtn);
    const labels = getByText('Title is required').textContent;
    expect(labels).toEqual(' Title required');
  });
})