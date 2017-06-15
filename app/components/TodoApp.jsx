import React from 'react';
import * as Redux from 'react-redux';
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
import * as actions from 'actions';
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
  onLogout: function(e){
    var  {dispatch} = this.props;
    e.preventDefault();
    dispatch(actions.wipeTodos());
    dispatch(actions.startLogout());
  },
  render: function(){
    return (
      <div>
        <div className="page-actions">
          <a href="#" onClick={this.onLogout}>Logout</a>
        </div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Redux.connect()(TodoApp);
