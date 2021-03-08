import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FilmsList from './screens/FilmsList';
import Register from './screens/Register';
import Home from './screens/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/filmsList" component={FilmsList} />
        {/*<Route path="/login" component={Login} /> Rota de Login */} 
      </Switch>
    </BrowserRouter>
  );
};

export default App;
