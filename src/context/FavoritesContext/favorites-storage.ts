import { IFavoritesState } from './types/i-favorites-state';

const FAVORITES_KEY = 'GIPHY:FAVORITES';

export const getDefaultFavorites = (): IFavoritesState => {
  const valueRaw = localStorage.getItem(FAVORITES_KEY);
  if (valueRaw) {
    return JSON.parse(valueRaw);
  }

  return {
    list: [],
    ids: {},
  };
};

export const saveFavorites = (state: IFavoritesState) => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(state));
};
