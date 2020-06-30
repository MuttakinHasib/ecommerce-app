import React, { Component } from 'react';
import './App.css';
import { HomePage } from './pages/HomePage/HomePage';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/Header/Header';
import AuthPage from './pages/AuthPage';
import { auth, createUserProfileDocument } from './Firebase/Utils';
import { connect } from 'react-redux';
import { setUser } from './redux/User/Action';

class App extends Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route
            exact
            path='/signin'
            render={_ => (this.props.user ? <Redirect to='/' /> : <AuthPage />)}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user: user.user });

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
