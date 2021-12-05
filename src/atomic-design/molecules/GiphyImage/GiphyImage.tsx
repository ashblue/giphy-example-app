import React, { useCallback, useMemo, useState } from 'react';
import { FaHeart } from 'react-icons/all';
import { IGif } from '../../../remotes/giphy/i-gif';
import './GiphyImage.scss';

interface IProps {
  gif: IGif;
  onClickFavorite: (gif: IGif, favorite: boolean) => void;
  isFavorite: boolean;
}

const GiphyImage = ({ gif, onClickFavorite, isFavorite }: IProps) => {
  const [favorite, setFavorite] = useState(isFavorite);

  const clickFavorite = useCallback(() => {
    onClickFavorite(gif, !favorite);
    setFavorite(!favorite);
  }, [favorite, gif, onClickFavorite]);

  const wrapperStyle = useMemo(() => {
    const { width, height } = gif;

    return {
      width: `${width}px`,
      height: `${height}px`,
    };
  }, [gif]);

  const favoriteClassName = useMemo(() => {
    let className = 'giphy-image__favorite';
    if (favorite) className += ' giphy-image__favorite--active';

    return className;
  }, [favorite]);

  return (
    <div className="giphy-image" style={wrapperStyle}>
      <img
        src={gif.url}
        alt={gif.title}
        width={gif.width}
        height={gif.height}
      />

      <button
        type="button"
        onClick={clickFavorite}
        className={favoriteClassName}
      >
        <FaHeart />
      </button>
    </div>
  );
};

export default GiphyImage;
