import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CocktailsProvider from '../../services/CocktailsContext';
import Header from '../../components/Header/Header.jsx';
import Navbar from '../../components/Navbar/Navbar.jsx';
import HomePage from '../Home/Home.jsx';
import MenuPage from '../Menu/Menu.jsx';

const App = () => (
  <CocktailsProvider>
    <Header />
    <Router>
      <Navbar />
      <Switch>
        <Route path="/menu">
          <MenuPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  </CocktailsProvider>
);
export default App;
