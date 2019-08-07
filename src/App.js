import React, { Component } from 'react';
import './App.css';
import { Router, Switch, Route } from 'react-router-dom';
import { Home, Login, PrivateRoute } from './_components';
import { history } from './_helpers';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <Switch>
              <PrivateRoute exact path='/home' component={Home} />
              <Route exact path='/' component={Login} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
