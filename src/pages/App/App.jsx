import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CocktailsProvider from '../../services/CocktailsContext';
import Header from '../../components/Header/Header.jsx';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Home from '../Home/Home.jsx';
import Menu from '../Menu/Menu.jsx';

export default function App() {
  return (
    <CocktailsProvider>
      <Header />
      <Router>
        <Navbar />
        <Switch>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </CocktailsProvider>
  );
}
