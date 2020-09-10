import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Header from './components/header/Header.component';
import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop-page/ShopPage.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp.component';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact={true} path={'/'} component={HomePage} />
        <Route exact={true} path={'/shop'} component={ShopPage} />
        <Route exact={true} path={'/sign-in-and-sign-up'} component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
