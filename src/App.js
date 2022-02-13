import './App.css';

import { Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';

import HomePage from './pages/homepage/homepage.component';
import { Header } from './components/header/header.component';
import { SignInAndSignUpPage } from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import React from 'react';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentUser :null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log("USER", user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

render(){
  return (
    <div>
      <Header auth={auth} currentUser={this.state.currentUser}/>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
      <Route exact path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  )}
}

export default App;
