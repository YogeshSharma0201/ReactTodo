var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  handleSubmitTodo: function(e){
    e.preventDefault();
    var {dispatch} = this.props;
    var text = this.refs.addTodo.value;
    if(text!==''){
      this.props.onAddTodo(text);
      dispatch(actions.addTodo(text));
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

export default connect()(AddTodo);
