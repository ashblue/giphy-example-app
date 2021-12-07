import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SearchForm from '../../organisms/SearchForm/SearchForm';
import { searchGifs } from '../../../remotes/giphy/giphy';
import Gallery, { IGalleryItem } from '../../organisms/Gallery/Gallery';
import Warning from '../../atoms/Warning/Warning';
import { FavoritesContext } from '../../../context/FavoritesContext/FavoritesContext';
import { IGif } from '../../../remotes/giphy/i-gif';
import { FavoritesAction } from '../../../context/FavoritesContext/types/favorites-action';
import Header from '../../organisms/Header/Header';

const DEFAULT_SEARCH = 'marvel';

const PageSearch = () => {
  const [favorites, favoritesDispatch] = useContext(FavoritesContext);
  const [error, setError] = useState<string | undefined>();
  const [gallery, setGallery] = useState<IGalleryItem[]>([]);

  const search = useCallback((text?: string) => {
    const getInitData = async () => {
      setError(undefined);

      try {
        const res = await searchGifs(text);
        const data = res.map((gif) => ({
          data: gif,
          isFavorite: favorites.ids[gif.id],
        }));

        setGallery(data);
      } catch (e) {
        setError('There was an error, please try searching again');
      }
    };

    getInitData();
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

  useEffect(() => {
    search(DEFAULT_SEARCH);
  }, [search]);

  return (
    <Container>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>

      <Row>
        <Col lg={{ span: 6, offset: 3 }}>
          <SearchForm className="mb-3" onSubmit={search} />
          <Warning text={error} />
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

export default PageSearch;
