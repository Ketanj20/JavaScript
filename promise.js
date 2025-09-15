// const PromiseOne=new Promise(function(resolve,reject){
//     // Do an async task
//     //cryptogyaphy,network request
//  setTimeout(function(){
//     console.log('async task is completed');
//     resolve()
//  },3000)   
// })
// PromiseOne.then(function(){  //then is used to handle(resolve) the success case
//     console.log('task is completed');
// })

// new Promise2(function(resolve,reject){
//     setTimeout(function(){
//         console.log('async task is completed');
//         resolve()
//     },1000)

// }).then(function(){
//     console.log("async 2 is resolve")
// })

const Promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("hii")
        resolve({name:'sachin',age:20,city:'pune'})
    },1000)
})
Promise3.then(function(user){
    console.log(user)
})

const Promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({name:'sachin',age:20,city:'pune'})
        }
        else{
            reject("error occured")
        }
    },1000)
})
Promise4.then((user)=>{   //then is used to handle(resolve) the success case
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=>{
    console.log("hogya")
})

const Promise5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;  //false 
        if(!error){
            resolve({username:'sachin',password:123,city:'pune'})
        }else{
            reject('ERROR:JS went wrong')
        }
    },1000)
});
async function consumePromisefive(){
    let responses=await Promise5
    console.log(responses)}

    consumePromisefive()