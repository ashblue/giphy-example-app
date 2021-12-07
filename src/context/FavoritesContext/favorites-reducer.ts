import { IGif } from '../../remotes/giphy/i-gif';
import { FavoritesAction } from './types/favorites-action';
import { saveFavorites } from './favorites-storage';
import { IFavoritesState } from './types/i-favorites-state';
import { IFavoritesAction } from './types/i-favorites-action';

const add = (gif: IGif, state: IFavoritesState): IFavoritesState => {
  const newState = {
    ...state,
    list: [gif, ...state.list],
    ids: {
      ...state.ids,
      [gif.id]: true,
    },
  };

  saveFavorites(newState);
  return newState;
};

const remove = (id: string, state: IFavoritesState) => {
  const { [id]: omit, ...ids } = state.ids;

  const newState = {
    ...state,
    list: state.list.filter((gif) => gif.id !== id),
    ids,
  };

  saveFavorites(newState);
  return newState;
};

export const favoritesReducer = (
  state: IFavoritesState,
  { type, payload }: IFavoritesAction,
) => {
  switch (type) {
    case FavoritesAction.Add:
      if (typeof payload === 'string') throw new Error('Invalid IGif type');
      return add(payload, state);
    case FavoritesAction.Remove:
      if (typeof payload !== 'string') throw new Error('Invalid ID type');
      return remove(payload, state);
    default:
      throw new Error(`Reducer Action: ${type}. Does not exist`);
  }
};
