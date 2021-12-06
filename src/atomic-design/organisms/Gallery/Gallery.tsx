import React, { useCallback, useMemo } from 'react';
import { IGif } from '../../../remotes/giphy/i-gif';
import './Gallery.scss';
import GiphyImage from '../../molecules/GiphyImage/GiphyImage';

export interface IGalleryItem {
  data: IGif;
  isFavorite: boolean;
}

interface IProps {
  className?: string;
  onClickFavorite: (gif: IGif, favorite: boolean) => void;
  items: IGalleryItem[];
}

const Gallery = ({ items, className, onClickFavorite }: IProps) => {
  const classes = useMemo(() => `gallery ${className}`, [className]);

  const printGifs = useCallback(() => {
    if (items.length === 0)
      return (
        <p className="text-center">
          No gifs added yet. Go back to the search page and add some.
        </p>
      );

    return (
      <div className="gallery__grid">
        {items.map(({ data, isFavorite }) => (
          <GiphyImage
            key={data.id}
            gif={data}
            onClickFavorite={onClickFavorite}
            isFavorite={isFavorite}
          />
        ))}
      </div>
    );
  }, [items, onClickFavorite]);

  return <div className={classes}>{printGifs()}</div>;
};

export default Gallery;
