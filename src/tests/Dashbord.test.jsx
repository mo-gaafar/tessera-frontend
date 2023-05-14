// import {
//   render,
//   screen,
//   fireEvent,
//   getAllByTestId,
//   getByDisplayValue,
//   getByText,
// } from '@testing-library/react';
// import { describe, it, expect } from 'vitest';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';

describe('Dashboard', () => {
  it('Dashboard renders correctly', () => {
    const { getByText } = render(<Dashboard />);
    const title = getByText(
      'The Future Of Leadership Congress 2023'
    ).textContent;
    expect(title).toBe('The Future Of Leadership Congress 2023');
  });
});
