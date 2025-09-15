//syntax,runtime error//

//try,catch,block

try{
   console.log("try block start here")
   console.log(x)      //error occur so next line(3) not run and we move to catch block
    console.log("ketan jain")
}
catch(e){
() use to define ,error ke saath kya krna chahte he aap
retry logic
fallback mechanism
logging
custom error
console.log("aajao mere pass bae")
console.log("your error is here",e)
}
finally{             //run everytime no matter the error is
   console.log("i will run everytime")
}


(let create custom error(using throw)

try{
   console.log(x);
} 
catch(err){
   throw new Error("me decide karunga error kya he")
}

let errcode=100;
if(errcode==100){
    throw new Error("Invalid")
}

