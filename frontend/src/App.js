import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FilmsList from './screens/FilmsList';
import Register from './screens/Register';
import Home from './screens/Home'
import Login from './screens/Login'
import Watch from './screens/Watch'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/filmsList" component={FilmsList} />
        <Route path="/login" component={Login} />
        <Route path="/watch" component={Watch} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
