let obj={
    age:20,
    wt:20,
    name:"ketan"
}
let dest = {...obj} //cloning of object
obj.age=98;
//obj.hii="kinju"
console.log("obj:",obj)
console.log("dest:",dest)