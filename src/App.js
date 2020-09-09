import React from 'react';

import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop-page/ShopPage.component';

import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path={'/'} component={HomePage} />
        <Route exact={true} path={'/shop'} component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
