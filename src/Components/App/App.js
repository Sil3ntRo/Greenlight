import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Header from '../globals/Header/Header'
import Homepage from '../Homepage/Homepage'
import Movie from '../Movie/Movie'
import NotFound from '../globals/NotFound/NotFound'

const App = () => {
  return (
      <BrowserRouter>
          <React.Fragment>
              <Header />
              <Switch>
                  <Route path="/" component={Homepage} exact />
                  <Route path="/:movieId" component={Movie} exact />
                  <Route component={NotFound} />
              </Switch>

          </React.Fragment>
      </BrowserRouter>
  )
};

export default App;
