import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Gallery, { IGalleryItem } from '../../organisms/Gallery/Gallery';
import { FavoritesContext } from '../../../context/FavoritesContext/FavoritesContext';
import { IGif } from '../../../remotes/giphy/i-gif';
import { FavoritesAction } from '../../../context/FavoritesContext/types/favorites-action';
import Header from '../../organisms/Header/Header';

const PageFavorites = () => {
  const [favorites, favoritesDispatch] = useContext(FavoritesContext);
  const [gallery, setGallery] = useState<IGalleryItem[]>([]);

  useEffect(() => {
    const data = favorites.list.map((gif) => ({
      data: gif,
      isFavorite: favorites.ids.has(gif.id),
    }));

    setGallery(data);
  }, []);

  const onClickFavorite = useCallback((gif: IGif, isFavorite: boolean) => {
    if (isFavorite) {
      favoritesDispatch({
        type: FavoritesAction.Add,
        payload: gif,
      });

      return;
    }

    favoritesDispatch({
      type: FavoritesAction.Remove,
      payload: gif.id,
    });
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>

      <Row>
        <Col>
          <Gallery
            onClickFavorite={onClickFavorite}
            className="mt-4"
            items={gallery}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default PageFavorites;
