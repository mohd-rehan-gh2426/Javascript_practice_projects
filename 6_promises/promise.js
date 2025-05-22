const promiseOne = new Promise(function(resolve, reject){
  setTimeout(function(){
  console.log('Async Task is completed');
  resolve();
  }, 1000)
});

promiseOne.then(function(){
    console.log("Promise consumed");
    
    
})

new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log("Async task 2");
    resolve();
    
  }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

const promiseThree = new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log("Async task 3");
    resolve({username: "John", age: 30});
  },1000)
})

promiseThree.then(function(user){
console.log(user);
console.log(user.username);
console.log(user.age);

})

const promiseFour = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = true;
    if(!error){
        resolve({username: "hitesh", age: 30});
    } else{
        reject('ERROR: Something Went Wrong');
    }
  },1000)
})

promiseFour
.then(function(user){
    console.log(user);
    return user.username;
})
.then(function(username){
    console.log(username);
})
.catch(function(error){
    console.log(error);
    
}).finally(function(){
    console.log("The Promise is either solved or rejected");
    
})


const promiseFive = new Promise(function(reslove,reject){
 setTimeout(function(){
    let error = true;
    if(!error){
        reslove({username: "Javascript", password:"123"})
    } else{
        reject('ERROR: JS went wrong')
    }
 },1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
}

consumePromiseFive();

















