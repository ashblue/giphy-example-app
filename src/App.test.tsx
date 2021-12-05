import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./atomic-design/pages/PageSearch', () => ({
  __esModule: true,
  default: () => <div data-testid="app__page" />,
}));

describe('App component', () => {
  it('should render', () => {
    render(<App />);

    const page = screen.getByTestId('app__page');

    expect(page).toBeTruthy();
  });
});
