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

  const printGifs = useCallback(
    () =>
      items.map(({ data, isFavorite }) => (
        <GiphyImage
          key={data.id}
          gif={data}
          onClickFavorite={onClickFavorite}
          isFavorite={isFavorite}
        />
      )),
    [items, onClickFavorite],
  );

  return <div className={classes}>{printGifs()}</div>;
};

export default Gallery;
