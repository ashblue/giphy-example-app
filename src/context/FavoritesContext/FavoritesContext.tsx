import React, { createContext, useReducer } from 'react';
import { favoritesReducer } from './favorites-reducer';
import { getDefaultFavorites } from './favorites-storage';
import { IFavoritesState } from './types/i-favorites-state';
import { IFavoritesAction } from './types/i-favorites-action';

const initialState = getDefaultFavorites();

export const FavoritesContext = createContext<
  [IFavoritesState, React.Dispatch<IFavoritesAction>]
>([initialState, () => null]);

export const FavoritesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const reducer = useReducer(favoritesReducer, initialState);

  return (
    <FavoritesContext.Provider value={reducer}>
      {children}
    </FavoritesContext.Provider>
  );
};
