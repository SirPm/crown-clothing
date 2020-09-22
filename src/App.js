import React from 'react';

import { Route, Switch } from 'react-router-dom';
import { auth } from './firebase/firebase.utils.js';

import Header from './components/header/Header.component';
import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop-page/ShopPage.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp.component';

import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({ currentUser: user })

      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact={true} path={'/'} component={HomePage} />
          <Route exact={true} path={'/shop'} component={ShopPage} />
          <Route exact={true} path={'/sign-in-and-sign-up'} component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
