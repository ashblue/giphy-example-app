import { IFavoritesState } from './types/i-favorites-state';

const FAVORITES_KEY = 'GIPHY:FAVORITES';

export const getDefaultFavorites = (): IFavoritesState => {
  const defaultValueRaw = localStorage.getItem(FAVORITES_KEY);
  if (defaultValueRaw) {
    return JSON.parse(defaultValueRaw);
  }

  return {
    list: [],
    ids: new Set(),
  };
};

export const saveFavorites = (state: IFavoritesState) => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(state));
};
