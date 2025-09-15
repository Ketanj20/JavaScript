//async function getdata() {      //async only use to handle promise and return promise

  //  setTimeout(function(){
    //    console.log("this is async")},3000);
    //}
    //getdata()

    //Fetch API

     async function getdata() {  // WE USE AWAIT TO EXECUTE ASYNC FUNCTION
        //get request - async
        let response=await fetch('https://jsonplaceholder.typicode.com/posts')
        let data=await response.json()
        console.log(data)
    }
    getdata()
