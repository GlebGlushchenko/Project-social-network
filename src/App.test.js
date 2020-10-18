import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react NavLink', () => {
  const { getByText } = render(<App />);
  const NavLinkElement = getByText(/learn react/i);
  expect(NavLinkElement).toBeInTheDocument();
});
