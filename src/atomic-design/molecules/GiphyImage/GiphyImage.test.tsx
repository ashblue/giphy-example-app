import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import GiphyImage from './GiphyImage';
import { IGif } from '../../../remotes/giphy/i-gif';

// @TODO SVGs should be substituted at the Webpack level
jest.mock('react-icons/all', () => ({
  __esModule: true,
  FaHeart: () => <div />,
}));

describe('GiphyImage component', () => {
  interface IOptions {
    isFavorite?: boolean;
    gifUrl?: string;
    onClickFavorite?: (_: any, favorite: boolean) => void;
  }

  const setup = (options: IOptions = {}) => {
    const { gifUrl, onClickFavorite, isFavorite } = options;

    const gif: IGif = {
      width: 0,
      height: 0,
      id: '',
      title: '',
      url: gifUrl || '',
    };

    return render(
      <GiphyImage
        gif={gif}
        onClickFavorite={onClickFavorite || (() => {})}
        isFavorite={isFavorite || false}
      />,
    );
  };

  it('should render', () => {
    setup();
    const image = screen.getByTestId('giphy-image');

    expect(image).toBeTruthy();
  });

  describe('gif property', () => {
    it('should render the image url', () => {
      const gifUrl = 'google';

      setup({ gifUrl });
      const gif = screen.getByTestId('giphy-image__gif');

      expect(gif.getAttribute('src')).toEqual(gifUrl);
    });
  });

  describe('onClickFavorite property', () => {
    it('should declare the image is a favorite', () => {
      let isFavorite = false;
      const onClickFavorite = (_: any, favorite: boolean) => {
        isFavorite = favorite;
      };

      setup({ onClickFavorite });
      const favorite = screen.getByTestId('giphy-image__favorite');
      fireEvent.click(favorite);

      expect(isFavorite).toEqual(true);
    });

    it('should not declare the image is a favorite on 2nd click', () => {
      let isFavorite = true;
      const onClickFavorite = (_: any, favorite: boolean) => {
        isFavorite = favorite;
      };

      setup({ onClickFavorite });
      const favorite = screen.getByTestId('giphy-image__favorite');
      fireEvent.click(favorite);
      fireEvent.click(favorite);

      expect(isFavorite).toEqual(false);
    });
  });

  describe('isFavorite property', () => {
    const activePostfix = '--active';

    it('should set the favorite class name to --active postfix when true', () => {
      const isFavorite = true;

      setup({ isFavorite });
      const favorite = screen.getByTestId('giphy-image__favorite');

      expect(favorite.className).toContain(activePostfix);
    });

    it('should not set the favorite class name to --active when false', () => {
      const isFavorite = false;

      setup({ isFavorite });
      const favorite = screen.getByTestId('giphy-image__favorite');

      expect(favorite.className).not.toContain(activePostfix);
    });
  });
});
