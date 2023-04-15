import { render, fireEvent } from '@testing-library/react';
import CheckoutPage from '../components/CheckoutForm';

test('fills out contact information form and submits', () => {
  const { getByLabelText, getByText } = render(<CheckoutPage />);

  // Fill out the form
  fireEvent.change(getByLabelText('First Name'), { target: { value: 'John' } });
  fireEvent.change(getByLabelText('Last Name'), { target: { value: 'Doe' } });
  fireEvent.change(getByLabelText('Email Address'), { target: { value: 'johndoe@example.com' } });

  // Submit the form
  fireEvent.click(getByText('Register'));

  // Check that the success message is displayed
  expect(getByText('Thank you for your purchase!')).toBeInTheDocument();
});
