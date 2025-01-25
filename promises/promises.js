// what is a promise (promise is an object, which will represent the eventual completion of an async operation)
// promise has 3 states
// 1. pending(when the async operation is not completed)
// 2. fulfilled(resolved)
// 3. rejected(failed)

// learning outcomes
// 1. promise (fetch method - get data from the server(API call))
// 2. how to fetch multiple api calls (promise chaning)
// 3. drawbacks of promise chaining (callback hell)
// 4. how to solve the drawbacks of promise chaining (async and await) promise.all
// 5. study about promise.allsettled

//callbacks  
/* callbacks are the functions which will pass a argument to the another function
- This technique allows a function to call another function

"https://jsonplaceholder.typicode.com/posts/1"
"https://jsonplaceholder.typicode.com/posts/2"
"https://jsonplaceholder.typicode.com/posts/2"
*/

//....................example for promise ----------------------
let promise = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
        resolve('Success');
    } else {   
        reject('Failed');
    }                
});

promise.then((message) => {
    console.log('This is in the then ' + message);
}).catch((message) => {
    console.log('This is in the catch ' + message);
});

//....................example for promise real world API'S ----------------------
const getData = () => {
  
    fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) =>{
        
        if(!response.ok){
            throw new error(`https:// getting error ${response.status}`)
        }
        const data = response.json()
        console.log(data)
        return data.title;

    }).catch((error)=>{
       alert(`https://www.getting error is ${error.message}`)
    })
}
getData();