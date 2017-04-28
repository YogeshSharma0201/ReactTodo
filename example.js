function addPromise(a,b){
  if(typeof a != 'number'|| typeof b!='number'){
    return new Promise(function(reject){
      reject("not a number");
    })
  }
  else{
    return new Promise(function(resolve){
      resolve(a+b);
    });
  }
}

addPromise('j',6).then(function(num){
  console.log(num);
}, function(err){
  console.log(err);
});
