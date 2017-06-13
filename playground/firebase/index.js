import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDrlZlXGxYX2OzbL2dO3j11r-GgU4qg96k",
    authDomain: "todo-app-e2fc0.firebaseapp.com",
    databaseURL: "https://todo-app-e2fc0.firebaseio.com",
    projectId: "todo-app-e2fc0",
    storageBucket: "todo-app-e2fc0.appspot.com",
    messagingSenderId: "741274707718"
  };
  firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
firebaseRef.set({
  App: {
    name: 'Todo App',
    version: '1.0'
  },
  isRunning: true,
  user: {
    name: 'Yogesh',
    age: 18
  }
});

firebaseRef.child('App/name').update({
  version: '2.0',
  name: null
});

var todosRef = firebaseRef.child('todos');

var newtodosRef = todosRef.push({
  text: 'Walk the dog!'
});
console.log('Todo id', newtodosRef.key);
