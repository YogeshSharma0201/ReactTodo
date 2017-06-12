import firebase from 'firebase';

try{
  var config = {
      apiKey: "AIzaSyDrlZlXGxYX2OzbL2dO3j11r-GgU4qg96k",
      authDomain: "todo-app-e2fc0.firebaseapp.com",
      databaseURL: "https://todo-app-e2fc0.firebaseio.com",
      projectId: "todo-app-e2fc0",
      storageBucket: "todo-app-e2fc0.appspot.com",
      messagingSenderId: "741274707718"
    };
    firebase.initializeApp(config);
}catch(e){

}

export var firebaseRef = firebase.database().ref();
export default firebase;
