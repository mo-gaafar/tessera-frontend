import {
  render,
  screen,
  fireEvent,
  getAllByTestId,
  getByDisplayValue,
  getByText,
} from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';
import AttendeeSummary from '../pages/Dashboard/AttendeeSummary';
import Sidebar from '../components/Sidebar';
import CreateTickets from '../pages/Tickets/Tickets';

describe('Dashboard', () => {
  it('Dashboard renders correctly', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );
    const title = getByText('Sales by ticket type').textContent;
    expect(title).toBe('Sales by ticket type');
  });

  it('Attendee Summary renders correctly', () => {
    const { getByText } = render(
      <BrowserRouter>
        <AttendeeSummary />
      </BrowserRouter>
    );
    const title = getByText('Attendee Summary Report').textContent;
    expect(title).toBe('Attendee Summary Report');
  });
});
describe('Sidebar', () => {
  it('Sidebar renders correctly', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );
    const title = getByText('Basic Info').textContent;
    expect(title).toBe('Basic Info');
  });

  // it('Sidebar Routing', () => {
  //   const { getByText, getByTestId } = render(
  //     <BrowserRouter>
  //       <Dashboard />
  //     </BrowserRouter>
  //   );
  //   const ticketPage = getByTestId('ticket');
  //   fireEvent.click(ticketPage);
  //   const getText = getByTestId('ticket-title').textContent;
  //   expect(getText).toBe('Tickets');
  // });
});
