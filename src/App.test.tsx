import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./atomic-design/pages/PageSearch/PageSearch', () => ({
  __esModule: true,
  default: () => <div data-testid="app__page" />,
}));

// Prevent a crash due to SVG imports
jest.mock('./atomic-design/pages/PageFavorites/PageFavorites', () => ({
  __esModule: true,
  default: () => <div />,
}));

describe('App component', () => {
  it('should render the search page', () => {
    render(<App />);

    const page = screen.getByTestId('app__page');

    expect(page).toBeTruthy();
  });
});
