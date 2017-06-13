var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import TodoApp from 'TodoApp';

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');
var Main = require('Main');
import Login from 'Login';


store.dispatch(actions.startAddTodos());

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyle')

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="todos" component={TodoApp}/>
        <IndexRoute component={Login}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
