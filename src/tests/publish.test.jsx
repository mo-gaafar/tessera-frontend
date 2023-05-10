import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PublishPage from '../pages/PublishPage';

describe('PublishPage', () => {
  test('renders correctly', () => {
    const { getByText } = render(<PublishPage />);
    const headingElement = getByText(/Publish Your Event/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('shows password input when private audience is selected', () => {
    const { getByLabelText, getByText } = render(<PublishPage />);
    const privateRadioButton = getByLabelText('Private');
    fireEvent.click(privateRadioButton);
    const passwordInput = getByLabelText('Password');
    expect(passwordInput).toBeInTheDocument();
  });

  test('shows start date and time inputs when schedule later is selected', () => {
    const { getByLabelText, getByText } = render(<PublishPage />);
    const scheduleLaterRadioButton = getByLabelText('Schedule Later');
    fireEvent.click(scheduleLaterRadioButton);
    const startDateInput = getByLabelText('Start Date');
    const startTimeInput = getByLabelText('Start Time');
    expect(startDateInput).toBeInTheDocument();
    expect(startTimeInput).toBeInTheDocument();
  });

  test('submits form data when publish button is clicked', () => {
    const handleSubmit = jest.fn();
    const { getByText, getByLabelText } = render(
      <PublishPage onSubmit={handleSubmit} />
    );
    const publicRadioButton = getByLabelText('Public');
    const publishNowRadioButton = getByLabelText('Publish Now');
    const publishButton = getByText('Publish');
    fireEvent.click(publicRadioButton);
    fireEvent.click(publishNowRadioButton);
    fireEvent.click(publishButton);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});