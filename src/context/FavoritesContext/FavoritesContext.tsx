import React, { createContext, useReducer } from 'react';
import { favoritesReducer } from './favorites-reducer';
import { getDefaultFavorites } from './favorites-storage';

export const FavoritesContext = createContext({});

export const FavoritesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const reducer = useReducer(favoritesReducer, getDefaultFavorites());

  return (
    <FavoritesContext.Provider value={reducer}>
      {children}
    </FavoritesContext.Provider>
  );
};
