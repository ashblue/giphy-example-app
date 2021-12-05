import React, { useCallback, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SearchForm from '../organisms/SearchForm/SearchForm';
import { searchGifs } from '../../remotes/giphy/giphy';
import { IGif } from '../../remotes/giphy/i-gif';
import Gallery from '../organisms/Gallery/Gallery';

const DEFAULT_SEARCH = 'marvel';

const PageSearch = () => {
  const [error, setError] = useState<string | undefined>();
  const [gifs, setGifs] = useState<IGif[]>([]);

  const search = useCallback((text?: string) => {
    const getInitData = async () => {
      setError(undefined);

      try {
        const res = await searchGifs(text);
        setGifs(res);
      } catch (e) {
        setError('There was an error, please try searching again');
      }
    };

    getInitData();
  }, []);

  const printError = useCallback(() => {
    if (error) return <p>{error}</p>;

    return null;
  }, [error]);

  useEffect(() => {
    search(DEFAULT_SEARCH);
  }, [search]);

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mt-3">GIPHY Example App</h1>
        </Col>
      </Row>

      <Row>
        <Col lg={{ span: 6, offset: 3 }}>
          <SearchForm className="mb-3" onSubmit={search} />
          {printError()}
        </Col>
      </Row>

      <Row>
        <Col>
          <Gallery className="mt-4" gifs={gifs} />
        </Col>
      </Row>
    </Container>
  );
};

export default PageSearch;
