var React = require('react');
import * as Redux from 'react-redux';

import * as actions from 'actions';

export var Login = React.createClass({
  onLogin: function(){
    var {dispatch} = this.props;
    dispatch(actions.startLogin());
  },
  render: function(){
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="colums small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>
                Login with GitHub account below.
              </p>
              <button onClick={this.onLogin} className="buttton" style={{padding:'8px',
                borderRadius:'2px',backgroundColor:'#0288D1'}}>Login with GitHub</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Redux.connect()(Login);
