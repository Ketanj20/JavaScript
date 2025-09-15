//console.log("ketan.js");
// const Phonenumber=12356
// let myname="ketan doshi"
// var emailnumber="ketan3256gmail.com"
//  accountcity="indore"
//  gender="male"
//Phonenumber=321456  //const value can not be changed
//accountcity="ujjain" //reassigning the value of accountcity

//console.table([Phonenumber,myname,emailnumber,accountcity,gender]) //table is used to display the data in tabular form

//data types in js
// let name="ketan" //string
// let age=20 //number     
// let height=5.6 //number
// let ismale=true //boolean
// let isfemale=false //boolean
// let location //undefined
// let color=null //null //standalone value
// let myarray=[1,2,3,4,5] //array
// let myobject={name:"ketan",age:20,location:"indore"} //object

// let age=20
// console.log(typeof age)
// let mynumber=20
// let booleanNumber=Boolean(mynumber) //converts number to boolean
//console.log(typeof booleanNumber)
//console.log(booleanNumber) //true

// let sql={
//     name:"ketan",
//     location:"Indore",
//     age:20
//     }
//     console.table(sql)
//     console.log(sql.location)

//  stack(primitive data types,give copy) and heap(reference data types)
// let myname="dharmesh"
// let yourname=myname
 //yourname="ketan"
//console.table([myname,yourname])

//STRING
// console.log(Math.round(4.4))

//Date

// let myDate=new Date()       //current date
// console.log(myDate.toLocaleDateString())
// console.log(typeof myDate)
// //console.log(newdate.getDate())

// let hiidate=new Date("2004-08-13")  //yyyy-mm-dd
// console.log(hiidate.toLocaleDateString())
// console.log(typeof hiidate)


//Arrays
// let myarray=[1,3,5,7]
// //console.log(myarray["2"]) //indexing of array
// myarray[2]=9      //reassigning the value of array
// myarray[5]=11 //adding element to array
// //console.log(myarray)

// let secondarray=new Array(1,3,5,7) //another way to create array
// console.log(secondarray)

// //Array Methods
// secondarray.push(10) //add element at the end of array
// console.log(secondarray)
// secondarray.pop() //remove element from end of array
// console.log(secondarray)
// secondarray.unshift(0) //add element at the start of array
// console.log(secondarray)
// secondarray.shift() //remove element from start of array
// console.log(secondarray)

// let newarray=[1,2,3,[2,4,5],6,7]
// let real_array=newarray.flat(Infinity) //converts nested array to single array
// console.log(real_array)

// let str1=200
// let str2=100
// let str3="ketan"
// console.table(Array.of(str1,str2,str3)) //converts string to array

// Object literals
const mySym=Symbol("key1") //symbol key
let jsuser={
    name:"ketan",
    "fullname":"ketan doshi", 
    [mySym]:"mykey1", //symbol key
    age:20,
    location:"jaipur",
    isLogin:true,
    hobbies:["coding","reading"],
}
// console.log(jsuser["fullname"]) //accessing object using key
// console.log(jsuser[mySym])
// // console.log(jsuser["age"]) //accessing object using key
// console.log(jsuser) //accessing object using key
// console.log(jsuser.location) //accessing object using key
// console.log(jsuser.hobbies[1]) //accessing object using key

// jsuser.greet=function(){
//     console.log("hello jsuser")
// }
// jsuser.greet2=function(){
//     console.log(`hello jsuser,${this.name}`);
// }
// console.log(jsuser.greet())
// console.log(jsuser.greet2())

// regularuser={
//     email:"ketangmail.com",
//     fullname:{
//         username: {
//             firstname:"ketan",
//             lastname:"doshi"
//         }
//     }
// }
// console.log(regularuser.email)
// console.log(regularuser.fullname.username.firstname)
// console.log(regularuser.fullname)

// let obj1={1:"hii",2:"byy"}
// let obj2={3:"hello",4:"byee"}
// let obj3=Object.assign({},obj1,obj2) //merging two objects into one object //target object,source object
// //or
// obj3={...obj1,...obj2} //merging two objects into one object 
// //console.log(obj1)
// console.log(obj3)

//let entry=Object.entries(jsuser)  //converts object into array
//console.log(entry)

// let course={
//     name:"js",
//     courseprice:2000,
//     author:"ketan",
// }
// const {author}= course //destructuring
// console.log(author)

//FUNCTIONS IN JS
// function twosum(a,b){
//     console.log(a*b)
// }
// twosum(10,20)
// function addtwonumber(a,b){
//     return a+b
// }
// let sum=addtwonumber(10,50)
// console.log("Sum:",sum)

// function calculateCartprice(...num1){  //rest operator //converts all the arguments into array
//     return num1;
// }
// console.log(calculateCartprice(100,200,300,400,500))

//global Scope and block scope
// var c=300
// {let a=10
// const b=10
// var c=20}
// //console.log (a)
// console.log(c)
//console.log(a) //error

// let username=(a,b) =>{
//     return a*b

// }
// let name=username(10,20)
// console.log(name) //arrow function

//or IMPORTANT TECHNIQUE WITHOUT CURLY BRACES{}
 
 let sum=(b,c)=> b*c //most important technique without curly braces and return keyword used in react js
 //console.log(sum(10,5))

// let myarray=[1,2,3,4,5]
// myarray.forEach((element,index,array) => {
//     console.log(element,index,array)
// });

// //Control Statements in JS  //if else 
// let a=20
// let b=30
// if(a<b){
//     console.log("a is greater")
// }
// else if(a==b)
// {console.log("a is equal to b")}

// let justloggedin=false
// let isloggedin=true
// let islogged=false
// let justlogged=true
// //if(justloggedin && isloggedin){   //and operator
//     //console.log("welcome user")
// //}
// if(islogged || justlogged){   //or operator
//     console.log("please login")
//}

// let month=5
// switch(month){
//     case 1:
//         console.log("january")
//         break
//     case 2:
//         console.log("february")
//         break
//     case 3:
//         console.log("   march")
//         break
//     case 4:
//         console.log("april")
//         break
//     case 5:
//         console.log("may")
//         break
//     default:
//         console.log("no month found")
//         break
// }
// let month="march"
// switch(month){
//     case "january":
//         console.log("january")
//         break
//     case "february":
//         console.log("february")
//         break
//     case "march":
//         console.log("march")
//         break
//     case "april":
//         console.log("april")
//         break
//     default:
//         console.log("no month found")
//         break
// }

//truthy and falsy values

//false values: 0,-0,BigInt 0n,undefined,null,"",NaN,false

//true values: {},[],"0",1,"false",true,'false'

//Iterators in JS
//for loop
//for(i=0;i<=10;i++){
    //console.log(2*i)
//}

// for(let i=0;i<=10;i++){
//     console.log(2*i);
//     for(let j=0;j<=10;j++){
//         console.log(3*j)
//     } 
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(2 * i);
//     for (let j = 0; j <= 10; j++) {
//         console.log(3 * j);
//     }
//}
// console.log("Table of 2*i and 3*j values:");
// for (let i = 1; i <= 10; i++) {
//     console.log(`outer loop:${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(i + '*'+ j + '=' + i*j );
//     }
// }

// Map in JS
// let map=new Map()
// map.set("name","ketan")
// map.set("IN","India")
// map.set("age",20)
// map.set("IN","India") //duplicate value is not allowed in map //it will overwrite the value
// //console.log(map)
// for (const [key,value] of map) {
//     console.log(key,'->',value)
    
// }

// let myobject={
//     js:"javascript",
//     swf:"swift",
//     py:"python"
//     }
//     for(const key in myobject){  //for of loop
//         console.log(`${key} shortcut for ${myobject[key]}`)
//     }

    //forEach in loop  used in array
    // let myarray=[1,2,3,4,5]
    // myarray.forEach(function(item){
    //     console.log(item)
    // })

//     let newarray=[{     //array of objects 
//         name:"ketan",
//         age:20
//     },
// {
//     name:"dharmesh",
//     age:25
// },
// {
//     name:"apurva",
//     age:20
// }]
// newarray.forEach((item)=>{ //arrow function used in forEach loop 
//     console.log(item.age) //accessing the value of age1 from array of objects 
// })
// let getsum = (num1, num2) => console.log(num1 + num2);
// getsum(10, 20); //calling the function


//Classes and object in JS

// let user={
//     username:"ketan",
//     email:"ketangmail.com",
//     logincount:8,
//     getUserDetails:function(){
//         console.log(this.username)
//     }
// }
// console.log(user.logincount)
// console.log(user.getUserDetails())

// //constructor function

// function User(username,logincount,isloggedin){
//     this.username=username  //this keyword is used to access the object properties
//     this.logincount=logincount
//     this.isloggedin=isloggedin
//    //return this
// }
// const userone=new User("ketan",5,true) //object creation 
//  const usertwo=new User("dharmesh",3,false) //object creation
// console.log(usertwo)  //object 
// console.log(userone) //object 
//console.log(userone.username)

// let newarray = [1,3,5,7]
// newarray.push(10)
// newarray.unshift(5)
// newarray.shift()
// newarray.pop()
// console.log(newarray)

//Prototype in JS

// function createUser(username,score){
//     this.username=username
//     this.score=score
// }
// let usersir=new createUser("ketan",21)
// console.log(usersir)

// function createUser(username,score){
//     this.username=username
//     this.score=score
// }
// createUser.prototype.increment = function(){
//     this.score++
// }
// createUser.prototype.printMe=function(){
//     console.log(`score is ${this.score}`)
// }
// let chai= new createUser("ketan",21)
// let tea = new createUser("dharmesh",25)
// chai.printMe()

// let myname="ketan   "
// let yourname="dharmesh"
// console.log(myname.truelength())

//let myHeros=["spiderman","superman","batman"]
let heropower={
    name:"ketan",
    power:"coding",
 
 //getspiderpower:function(){
   // console.log(`spidy power is:${this.name}`)
}
//}
Object.prototype.hitesh=function(){  //adding new method to object
   // console.log(`hitesh is the best`);
}

Array.prototype.heyhitesh=function(){
    //console.log(`hitesh is the best`);
}
//myHeros.hitesh()
//myHeros.heyhitesh()
// heropower.getspiderpower()
// console.log(heropower)

//Inheritance
//class

class user{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }
    encryptPassword(){
        return `${this.encryptPassword}`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}
//let chai= new user("ketan","chai@mail.com","1234")
let tea=new user("dharmesh","dharmesh@mail.com","1243")
//console.log(chai,tea)

//staticprop

class User{
    constructor(username){
        this.username=username
    }
    logme(){
      //  console.log(`username:${this.username}`)
    }
}

const chai={
    price:250,
    "name":'mojito',
    isAvailable:true
}
console.log(Object.getOwnPropertyDescriptor(chai,"name",))
// Object.defineProperty(chai,'name',{
//     writable:false,
//     enumerable:false
// })
// console.log(Object.getOwnPropertyDescriptor(chai,"name",));
 

class consumer {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    /**
     * Getter method for the password property.
     * Converts the password to uppercase before returning it.
     * 
     * @returns {string} The password in uppercase.
     */
    get password() {
        return this.password.toUpperCase();
    }
    set password(value){
        this.password.toUpperCase()

    }
}
const ketan= new consumer("ketan@mail.com","1258")
console.log(ketan)

function customer(email,password){
    this.email=email
this.password=password

Object.defineProperty(this,'email',{
   get:function(){
     return this._email.toUpperCase
   },
set:function(){
    this.email=value
} })
}











































































