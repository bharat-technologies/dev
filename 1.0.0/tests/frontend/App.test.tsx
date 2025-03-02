import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../frontend/src/components/App';

describe('App Component', () => {
  test('renders the app component', () => {
    render(<App />);
    const linkElement = screen.getByText(/your app text/i); // Replace with actual text
    expect(linkElement).toBeInTheDocument();
  });
});