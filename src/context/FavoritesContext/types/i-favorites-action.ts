import { FavoritesAction } from './favorites-action';
import { IGif } from '../../../remotes/giphy/i-gif';

export interface IFavoritesAction {
  type: FavoritesAction;
  payload: IGif | string;
}
