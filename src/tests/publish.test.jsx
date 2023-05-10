import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import PublishPage from './PublishPage';

describe('PublishPage', () => {
  it('should render the radio buttons for who can see the event', () => {
    render(<PublishPage />);
    const privateRadio = screen.getByLabelText('private');
    const publicRadio = screen.getByLabelText('public');
    expect(privateRadio).toBeInTheDocument();
    expect(publicRadio).toBeInTheDocument();
  });

  it('should render the password input when private is selected', () => {
    render(<PublishPage />);
    const privateRadio = screen.getByLabelText('private');
    fireEvent.click(privateRadio);
    const passwordInput = screen.getByLabelText('password');
    expect(passwordInput).toBeInTheDocument();
  });

  it('should not render the link input when private is selected', () => {
    render(<PublishPage />);
    const privateRadio = screen.getByLabelText('private');
    fireEvent.click(privateRadio);
    const linkInput = screen.queryByLabelText('anyone');
    expect(linkInput).not.toBeInTheDocument();
  });

  // it('should render the link input when public is selected', () => {
  //   render(<PublishPage />);
  //   const publicRadio = screen.getByLabelText('Public');
  //   fireEvent.click(publicRadio);
  //   const linkInput = screen.getByLabelText('Link');
  //   expect(linkInput).toBeInTheDocument();
  // });

  it('should render the radio buttons for when to publish the event', () => {
    render(<PublishPage />);
    const publishNowRadio = screen.getByLabelText('now');
    const scheduleLaterRadio = screen.getByLabelText('later');
    expect(publishNowRadio).toBeInTheDocument();
    expect(scheduleLaterRadio).toBeInTheDocument();
  });

  it('should not render the schedule input when publish now is selected', () => {
    render(<PublishPage />);
    const publishNowRadio = screen.getByLabelText('now');
    fireEvent.click(publishNowRadio);
    const scheduleInput = screen.queryByLabelText('later');
    expect(scheduleInput).not.toBeInTheDocument();
  });

  // it('should render the schedule input when schedule later is selected', () => {
  //   render(<PublishPage />);
  //   const scheduleLaterRadio = screen.getByLabelText('later');
  //   fireEvent.click(scheduleLaterRadio);
  //   const scheduleInput = screen.getByLabelText('Schedule');
  //   expect(scheduleInput).toBeInTheDocument();
  // });

  it('should call the publish function when publish button is clicked', () => {
    const publishMock = jest.fn();
    render(<PublishPage publish={publishMock} />);
    const publishButton = screen.getByRole('button', { name: 'Publish' });
    fireEvent.click(publishButton);
    expect(publishMock).toHaveBeenCalled();
  });
});