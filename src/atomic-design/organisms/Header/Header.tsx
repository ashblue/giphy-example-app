import React, { useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const location = useLocation();

  const getLinkStatus = useCallback((isFavorite: boolean) => {
    const match = location.pathname.includes('favorites');

    if (match === isFavorite) return 'primary';
    return 'secondary';
  }, []);

  return (
    <div>
      <ul className="header__nav list-unstyled mt-3">
        <li className="header__nav-item">
          <Link to="/">
            <Button variant={getLinkStatus(false)}>Search</Button>
          </Link>
        </li>

        <li className="header__nav-item">
          <Link to="/favorites">
            <Button variant={getLinkStatus(true)}>Favorites</Button>
          </Link>
        </li>
      </ul>

      <h1 className="mt-3 text-center">
        GIPHY Example App
        <img
          className="d-inline-block ms-2"
          width="100"
          height="27"
          alt="Giphy attribution"
          src="./giphy-logo.png"
        />
      </h1>
    </div>
  );
};

export default Header;
