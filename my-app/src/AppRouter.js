import React from 'react';
import Login from './pages/Login';
import About from './pages/About';
import Index from './pages/Index';
import { Switch, Route } from 'react-router-dom';
import Users from './pages/Users';
import CardGame from './pages/CardGame';

export default function AppRouter() {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/card-game">
        <CardGame />
      </Route>
      
      <Route path="/">
        <Index />
      </Route>
    </Switch>
  );
}
