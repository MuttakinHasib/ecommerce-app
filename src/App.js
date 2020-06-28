import React, { useState } from 'react';
import './App.css';
import { HomePage } from './pages/HomePage/HomePage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/Header/Header';
import AuthPage from './pages/AuthPage';
import { useEffect } from 'react';
import { auth, createUserProfileDocument } from './Firebase/Utils';

const App = () => {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(
      async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapShot =>
            setUsers({ id: snapShot.id, ...snapShot.data() })
          );
        } else {
          setUsers(userAuth);
        }
        console.log(users);
      }
      // setUsers(user)
      // createUserProfileDocument(user)
    );

    return () => {
      unsubscribeFromAuth();
    };
  }, [users]);

  return (
    <div className='App'>
      <Header users={users} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={AuthPage} />
      </Switch>
    </div>
  );
};

export default App;
