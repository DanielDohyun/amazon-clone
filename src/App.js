import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {

  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth
      .onAuthStateChanged(authUser => {
        if (authUser) {
          dispatch({
            type: 'SET_USER',
            user: authUser,
          });
        } else {
          dispatch({
            type: 'SET_USER',
            user: null,
          });
        }
      });
    
    return () => {
      //cleanup 
      unsubscribe();
    }
  }, []);

  console.log(user);

  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path='/checkout'>
            <Checkout />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
