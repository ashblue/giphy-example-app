import { IGif } from '../../../remotes/giphy/i-gif';

export interface IFavoritesState {
  list: IGif[];
  ids: Set<string>;
}
