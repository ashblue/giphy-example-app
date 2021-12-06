import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import PageSearch from './atomic-design/pages/PageSearch/PageSearch';
import { FavoritesContextProvider } from './context/FavoritesContext/FavoritesContext';
import PageFavorites from './atomic-design/pages/PageFavorites/PageFavorites';

const App = () => (
  <FavoritesContextProvider>
    <HashRouter>
      <Switch>
        <Route path="/favorites">
          <PageFavorites />
        </Route>

        <Route path="/">
          <PageSearch />
        </Route>
      </Switch>
    </HashRouter>
  </FavoritesContextProvider>
);

export default App;
