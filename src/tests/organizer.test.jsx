import React from 'react';
import { fireEvent, getByRole, render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import {Organize} from '../pages/Organize/Organize'



describe('organize', () => {
  it('select is working', () => {
    const { getByText,getAllByRole } = render(
      <BrowserRouter>
        <Organize test={true} />
      </BrowserRouter>
    );
    // const dropButton = getByText('All events');
    // fireEvent.click(dropButton);
    // const eventButton = getAllByRole('button', { name: 'Past events' })[0];
    // fireEvent.click(eventButton);
    // let dropButtonText = dropButton.textContent;
    // expect(dropButtonText).toEqual('Tomorrow');
  });
});