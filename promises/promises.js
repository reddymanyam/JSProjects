// what is a promise (promise is an object, which will represent the eventual completion of an async operation)

//callbacks  
/* callbacks are the functions which will pass a argument to the another function
- This technique allows a function to call another function

"https://jsonplaceholder.typicode.com/posts/1"
"https://jsonplaceholder.typicode.com/posts/2"
"https://jsonplaceholder.typicode.com/posts/2"
*/

const fetchingData = () =>{

    
    fetch("https://jsonplaceholder.typicode.com/posts/1").then((data)=>{ 
           alert(`the data we are getting is :${data.title} `)
     }).catch((err)=>{
           alert(`https://the err is :${err}`)
     })

}

fetchingData();