var $ = require('jquery');
module.exports = {
  setTodos: function(todos){
    if($.isArray(todos)){
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function(){
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try{
      todos = JSON.parse(stringTodos);
    }catch(e){

    }

    return $.isArray(todos) ? todos : [];
  },
  filterTodos: function(todos, showCompleted, searchText){
    var filteredTodos = todos;

    //Filter by showCompleted
    filteredTodos = filteredTodos.filter(function(todo){
      return !todo.completed||showCompleted;
    });

    //filter by searchText
    filteredTodos = filteredTodos.filter(function(todo){
      var text = todo.text.toLowerCase();
      if(searchText.length>0){
        return text.indexOf(searchText)+1;
      }
      else{
        return 1;
      }
    });

    filteredTodos.sort((a,b)=>{
      if(a.completed===false&&b.completed){
        return -1;
      }else if(a.completed&&!b.completed){
        return 1;
      }else{
        return 0;
      }
    });



    return filteredTodos
  }
};
