import React from 'react';
import PageSearch from './atomic-design/pages/PageSearch/PageSearch';
import { FavoritesContextProvider } from './context/FavoritesContext/FavoritesContext';

const App = () => (
  <FavoritesContextProvider>
    <PageSearch />
  </FavoritesContextProvider>
);

export default App;
