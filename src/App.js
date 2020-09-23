import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils.js';
import { connect } from 'react-redux';

import Header from './components/header/Header.component';
import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop-page/ShopPage.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp.component';

import './App.css';
import { setCurrentUser } from './redux/user/userAction.js';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    // when the user signs out the userAuth becomes null
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      // check to only set the current user based on if the user is signed in
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot( snapshot => {
          // setCurrentUser takes a parameter, the user which is an object containing the id and the 
          // snapshot data i.e the data of the current user
          setCurrentUser({
            id: snapshot.id,
              ...snapshot.data()
          })

          // console.log(this.state)
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path={'/'} component={HomePage} />
          <Route exact={true} path={'/shop'} component={ShopPage} />
          <Route exact path={'/sign-in-and-sign-up'} render={ () => {
            return this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)
          } }/>
        </Switch>
      </div>
    );
  }
}

// we destructure the userReducer state off the user key in the state 
// stored in the rootReducer so that we can have access to the currentUser in
// the userReducer state
const mapStateToProps = ({ user }) => {
  return {
    currentUser: user.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: user =>  {
      dispatch( setCurrentUser(user) )
    } 
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(App);
