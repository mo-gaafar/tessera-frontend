import React from 'react';
import { fireEvent, getByRole, render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SignupTwo from '../components/SignupTwo';

import SignUpOne from '../components/SignupOne';

describe('signup', () => {
  it('email displays the correct email from previous page', () => {
    const { getByTestId } = render(
      <SignupTwo test={true} email="test@email.com" />
    );
    const emailValue = getByTestId('email').value;
    expect(emailValue).toEqual('test@email.com');
  });

  it('adding any name in input firstname field ', () => {
    const { getAllByTestId } = render(
      <SignupTwo test={true} email="test@email.com" />
    );
    const firstnameInput = getAllByTestId('firstname')[0];

    fireEvent.change(firstnameInput, { target: { value: 'test' } });
    expect(firstnameInput.value).toBe('test');
  });

  it('adding spaces in name input lastname field ', () => {
    const { getAllByTestId, getByTestId } = render(
      <SignupTwo test={true} email="test@email.com" />
    );
    const name = getAllByTestId('firstname')[0];

    fireEvent.change(name, { target: { value: ' ' } });
    const labelMessage = getByTestId('error').textContent;
    expect(labelMessage).toEqual(' First name cannot be spaces');
  });

  it('adding symbols in input firstname field ', () => {
    const { getAllByTestId } = render(
      <SignupTwo test={true} email="test@email.com" />
    );
    const firstnameInput = getAllByTestId('firstname')[0];

    fireEvent.change(firstnameInput, { target: { value: '@#' } });
    expect(firstnameInput.value).toBe('');
  });

  it('when pressing the submit button with empty password error will appear ', () => {
    const { getAllByRole, getByText } = render(
      <SignupTwo test={true} email="test@email.com" />
    );
    const submitBtn = getAllByRole('button', { name: 'Create account' })[0];
    fireEvent.click(submitBtn);
    const labels = getByText('Field required').textContent;
    expect(labels).toEqual(' Field required');
  });

  it('adding password less than 8 characters show error', () => {
    const { getAllByTestId } = render(
      <SignupTwo test={true} email="test@email.com" />
    );
    const passInput = getAllByTestId('password')[0];

    fireEvent.change(passInput, { target: { value: '1234567' } });
    const error = getAllByTestId('passError')[0].textContent;
    expect(error).toEqual('Your password must be at least 8 characters');
  });
});

describe('sign-up', () => {
  it('correct email entered', () => {
    const { getByTestId } = render(<SignUpOne test={true} />);
    const emailvalue = getByTestId('email').value;
    expect(emailvalue).toEqual('');
  });

  it('when pressing the continue button with empty email error will appear ', () => {
    const { getAllByRole, getByText } = render(<SignUpOne test={true} />);
    const continueButton = getAllByRole('button', { name: 'Continue' })[0];
    fireEvent.click(continueButton);
    const labels = getByText('Field required').textContent;

    expect(labels).toEqual('Field required');
  });
});
