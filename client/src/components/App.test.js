import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test ('renders Hello World', () => {
    render(<App />);
    const hello = screen.getByText(/Hello World/i);
    expect(hello).toBeInTheDocument();
})