import React from 'react';

import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/homepage/HomePage.component'

import './App.css';

const HatPage = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Welcome!</h1>
      <p>This is the Hat Page</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path={'/'} component={HomePage} />
        <Route exact={true} path={'/shop/hats'} component={HatPage} />
      </Switch>
    </div>
  );
}

export default App;
