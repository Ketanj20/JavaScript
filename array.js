let arr=[1,2,3,5,'ketan']
console.log(arr)
--new array construction using()--//

let brr=new Array('ketan','hii',2,5);
console.log(brr)
brr.push('dharmesh'); //insert at rightmost position
brr.pop(); //only delete rightmost position
brr.shift();  //remove leftmost element
brr.unshift(2); //insert element at leftmost position
console.log(typeof(brr))
console.log(brr[2])
brr.push(70)
brr.push(50)
brr.push(36)
console.log(brr.slice(2,4))  //exclude 4th  index (i-1)index only//
brr.splice(1,0,'addme')
console.log(brr)

//map function function must required(=>)//--
let arr=[10,20,30]
arr.map((number,index)=>{
   console.log(number*5,index)
})

let ansArray= arr.map((numbers) => {
   return numbers*2;})
console.log(ansArray)

--filter function//
let brr=[10,20,33,5,62,9]
let evenbrr=brr.filter((number)=>{
   if(number%2==0){
       return true;
    }
    else{
       return false;
   }
})
console.log(evenbrr)

let brr=[2,6,10,1,3,18]
brr.sort()
console.log(brr)
console.log(brr.indexOf(3))
console.log(brr.findIndex)

function printnumber(Number){
   for(i=0;i<=Number;i++)
       console.log(i)
}
printnumber(10)

function sum(a,b){
   let sum=a*b
console.log(sum)}
sum(20,1)

let arr=[10,11,16,12,3]
function getsum(arr){
    let len = arr.length;
    let sum = 0;
    for(index=0;index<len;index++){
      sum = sum + arr[index]
}
return sum;
}
let anssum=getsum(arr)
console.log(anssum)


