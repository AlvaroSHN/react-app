import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/react-app/" component={MovieList} />
        <Route exact path="/react-app/movies/:id/edit" component={EditMovie} />
        <Route exact path="/react-app/movies/new" component={NewMovie} />
        <Route exact path="/react-app/movies/:id" component={MovieDetails} />
        <Route path="/" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
