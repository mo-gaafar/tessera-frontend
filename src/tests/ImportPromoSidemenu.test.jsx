import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {ImportPromocode} from '../Pages/Tickets/ImportPromoSidemenu';

describe('ImportPromocode component', () => {
  it('renders without errors', () => {
    render(<ImportPromocode />);
    const importPromocodeComponent = screen.getByTestId('import-promocode');
    expect(importPromocodeComponent).toBeInTheDocument();
  });

  it('triggers the import callback with the selected file', () => {
    const mockImportCallback = jest.fn();
    render(<ImportPromocode onImport={mockImportCallback} />);
    const fileInput = screen.getByTestId('file-input');
    const file = new File(['(mock file content)'], 'mockfile.csv', { type: 'text/csv' });

    fireEvent.change(fileInput, { target: { files: [file] } });

    expect(mockImportCallback).toHaveBeenCalledWith(file);
  });

  it('displays an error message when an invalid file type is selected', () => {
    render(<ImportPromocode />);
    const fileInput = screen.getByTestId('file-input');
    const file = new File(['(mock file content)'], 'mockfile.txt', { type: 'text/plain' });

    fireEvent.change(fileInput, { target: { files: [file] } });

    const errorMessage = screen.getByText('Invalid file type. Only CSV files are supported.');
    expect(errorMessage).toBeInTheDocument();
  });

  it('clears the file input when the "Clear" button is clicked', () => {
    render(<ImportPromocode />);
    const fileInput = screen.getByTestId('file-input');
    const clearButton = screen.getByText('Clear');

    fireEvent.change(fileInput, { target: { files: [new File([], 'mockfile.csv')] } });
    expect(fileInput.files.length).toBe(1);

    fireEvent.click(clearButton);
    expect(fileInput.files.length).toBe(0);
  });
});
