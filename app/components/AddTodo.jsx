var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var AddTodo = React.createClass({
  handleSubmitTodo: function(e){
    e.preventDefault();
    var {dispatch} = this.props;
    var text = this.refs.addTodo.value;
    if(text!==''){
      this.refs.addTodo.value = '';
      dispatch(actions.startAddTodo(text));
    }
    else{
      this.refs.addTodo.focus();
    }
  },
  render: function(){
    return (
      <div className="container_footer">
        <form onSubmit={this.handleSubmitTodo}>
          <input ref='addTodo' type='text' placeholder="what do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
});

module.exports = connect()(AddTodo);
