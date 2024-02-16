import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

test('renders login', () => {
  render(<BrowserRouter> <App/> </BrowserRouter>);
  const linkElement = screen.getAllByText(/Login/i);
  expect(linkElement.length).toBeGreaterThan(0);
});
 