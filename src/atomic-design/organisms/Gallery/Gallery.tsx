import React, { useCallback, useMemo } from 'react';
import { IGif } from '../../../remotes/giphy/i-gif';
import './Gallery.scss';

interface IProps {
  gifs: IGif[];
  className?: string;
}

const Gallery = ({ gifs, className }: IProps) => {
  const classes = useMemo(() => `gallery ${className}`, [className]);

  const printGifs = useCallback(
    () =>
      gifs.map(({ title, id, url }) => <img alt={title} src={url} key={id} />),
    [gifs],
  );

  return <div className={classes}>{printGifs()}</div>;
};

export default Gallery;
