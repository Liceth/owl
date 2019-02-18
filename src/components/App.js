import { Router, Route, Switch } from "react-router-dom";
import FeedPage from "./pages/FeedPage";
import ConfigPage from "./pages/ConfigPage";


import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import { history } from '../helpers/history';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route  exact path="/" component={FeedPage} />
            <Route  exact path="/settings" component={ConfigPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
