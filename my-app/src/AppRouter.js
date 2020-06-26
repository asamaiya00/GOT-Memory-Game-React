import React from 'react';
import Login from './pages/Login';
import About from './pages/About';
import Index from './pages/Index';
import { Switch, Route, Redirect } from 'react-router-dom';
import Users from './pages/Users';
import Cookies from 'js-cookie'

export default function AppRouter() {
    const token = Cookies.get('token');
  return (
    <Switch>
      <Route path="/login">
      {
          token ? <Redirect to='/' /> :<Login />
      }
        
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/users">
      {
        !token ? <Redirect to='/login' /> :<Users />
    } 
      
      </Route>

      <Route path="/">
        <Index></Index>
      </Route>
    </Switch>
  );
}
