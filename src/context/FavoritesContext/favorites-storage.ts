import { IFavoritesState } from './types/i-favorites-state';

const FAVORITES_KEY = 'GIPHY:FAVORITES';

export const getDefaultFavorites = (): IFavoritesState => {
  const valueRaw = localStorage.getItem(FAVORITES_KEY);
  if (valueRaw) {
    const state = JSON.parse(valueRaw);
    state.ids = new Set<string>(state.ids);
    return state;
  }

  return {
    list: [],
    ids: new Set(),
  };
};

export const saveFavorites = (state: IFavoritesState) => {
  localStorage.setItem(
    FAVORITES_KEY,
    JSON.stringify({
      ...state,
      ids: [...state.ids],
    }),
  );
};
