import { IGif } from '../../remotes/giphy/i-gif';
import { FavoritesAction } from './types/favorites-action';
import { saveFavorites } from './favorites-storage';
import { IFavoritesState } from './types/i-favorites-state';

interface IAction {
  type: FavoritesAction;
  payload: IGif | string;
}

const add = (gif: IGif, state: IFavoritesState): IFavoritesState => {
  const newState = {
    ...state,
    list: [...state.list, gif],
    ids: new Set(...state.ids, gif.id),
  };

  saveFavorites(newState);
  return newState;
};

const remove = (id: string, state: IFavoritesState) => {
  const ids = new Set(...state.ids);
  ids.delete(id);

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
  { type, payload }: IAction,
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
