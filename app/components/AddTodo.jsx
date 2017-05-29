var React = require('react');

var AddTodo = React.createClass({
  handleSubmitTodo: function(e){
    e.preventDefault();
    var text = this.refs.addTodo.value;
    if(text!==''){
      this.props.onAddTodo(text);
      this.refs.addTodo.value = '';
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

module.exports = AddTodo;
