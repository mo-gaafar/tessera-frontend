import React from 'react';
import { fireEvent, getByRole, render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SignupTwo from '../components/SignupTwo';
import { BrowserRouter } from 'react-router-dom';
import SignUpOne from '../components/SignupOne';

describe('signup', () => {
  it('email displays the correct email from previous page', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <SignupTwo test={true} email="test@email.com" />
      </BrowserRouter>
    );
    const emailValue = getByTestId('email').value;
    expect(emailValue).toEqual('test@email.com');
  });

  it('adding any name in input firstname field ', () => {
    const { getAllByTestId } = render(
      <BrowserRouter>
        <SignupTwo test={true} email="test@email.com" />
      </BrowserRouter>
    );
    const firstnameInput = getAllByTestId('firstname')[0];

    fireEvent.change(firstnameInput, { target: { value: 'test' } });
    expect(firstnameInput.value).toBe('test');
  });

  it('adding spaces in name input lastname field ', () => {
    const { getAllByTestId, getByTestId } = render(
      <BrowserRouter>
        <SignupTwo test={true} email="test@email.com" />
      </BrowserRouter>
    );
    const name = getAllByTestId('firstname')[0];

    fireEvent.change(name, { target: { value: ' ' } });
    const labelMessage = getByTestId('error').textContent;
    expect(labelMessage).toEqual(' First name cannot be spaces');
  });

  it('adding symbols in input firstname field ', () => {
    const { getAllByTestId } = render(
      <BrowserRouter>
        <SignupTwo test={true} email="test@email.com" />
      </BrowserRouter>
    );
    const firstnameInput = getAllByTestId('firstname')[0];

    fireEvent.change(firstnameInput, { target: { value: '@#' } });
    expect(firstnameInput.value).toBe('');
  });

  it('when pressing the submit button with empty password error will appear ', () => {
    const { getAllByRole, getByText } = render(
      <BrowserRouter>
        <SignupTwo test={true} email="test@email.com" />
      </BrowserRouter>
    );
    const submitBtn = getAllByRole('button', { name: 'Create account' })[0];
    fireEvent.click(submitBtn);
    const labels = getByText('Field required').textContent;
    expect(labels).toEqual(' Field required');
  });

  it('adding password less than 8 characters show error', () => {
    const { getAllByTestId } = render(
      <BrowserRouter>
        <SignupTwo test={true} email="test@email.com" />
      </BrowserRouter>
    );
    const passInput = getAllByTestId('password')[0];

    fireEvent.change(passInput, { target: { value: '1234567' } });
    const error = getAllByTestId('passError')[0].textContent;
    expect(error).toEqual('Your password must be at least 8 characters and strong');
  });
});

describe('sign-up', () => {
  it('correct email entered', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <SignUpOne test={true} />
      </BrowserRouter>
    );
    const emailvalue = getByTestId('email').value;
    expect(emailvalue).toEqual('');
  });

  it('when pressing the continue button with empty email error will appear ', () => {
    const { getAllByRole, getByText } = render(
      <BrowserRouter>
        <SignUpOne test={true} />
      </BrowserRouter>
    );
    const continueButton = getAllByRole('button', { name: 'Continue' })[0];
    fireEvent.click(continueButton);
    const labels = getByText('Field required').textContent;

    expect(labels).toEqual('Field required');
  });
});
