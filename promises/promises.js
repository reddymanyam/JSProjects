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

    fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) => {

        if (!response.ok) {
            throw new Error(`https:// getting error ${response.status}`)
        }
        return response.json();

    }).then((data) => {
        console.log(`the response data is ${data.title}`);
    }).catch((error) => {
        alert(`https://www.getting error is ${error.message}`)
    }) .finally(() => {
        console.log("API call completed.");
      });
}
getData();

//--------------------same code re-written in the asyn and await-----------------------
// By using async and await , it is easy to write , understand and maintainable the code , thats why we are using async and await instead of promises.
//Async/await eliminates nested .then() calls, making it ideal for larger-scale asynchronous logic.
const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if(!response.ok){
            throw new Error(`HTTP error! Status:${response.status}`)
        }
        const data = await response.json()
        console.log(`the  data is ${data.title}`)
    }
    catch (err) {
        console.log(`http:// the error is ${err}`)
    }
    finally{
        console.log("API call completed.");
    }
}
fetchData();

//--------------------- same code re-written with axios--------------------
// In axios we are not able to convert it into  data = response.json, this dependency only converts it directly

const fetchDaata = async() =>{
       
      try{
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
            console.log("The response of this particular---->",response.data.title)
      }
      catch(err){
            console.log(`http://the err is: ${err}`)
      }
      finally{
            console.log("API call is completed")
      }

}
fetchDaata();

//--------------------------------------PROMISE CHAINING-----------------------------------------
// promise chainig is useful, when the next api is depending on the previous api
// when the next api will not depends on the previous api, then it will cause waste of time , the next apis to wait for before api call.
// In this case for parallel execution of api calls, we use promise.all and promise.allsettled

const fetchPostsSequentially = () => {
      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch post 1");
          }
          return response.json(); // Parse JSON response for post 1
        })
        .then((post1) => {
          console.log("Post 1:", post1);
          // Fetch post 2 after post 1 is fetched
          return fetch("https://jsonplaceholder.typicode.com/posts/2");
        })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch post 2");
          }
          return response.json(); // Parse JSON response for post 2
        })
        .then((post2) => {
          console.log("Post 2:", post2);
          // Fetch post 3 after post 2 is fetched
          return fetch("https://jsonplaceholder.typicode.com/posts/3");
        })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch post 3");
          }
          return response.json(); // Parse JSON response for post 3
        })
        .then((post3) => {
          console.log("Post 3:", post3);
        })
        .catch((error) => {
          // Handle any error that occurs in the chain
          console.error("Error in promise chain:", error.message);
        })
        .finally(() => {
          console.log("All API calls completed (or error handled).");
        });
    };
    
    fetchPostsSequentially();

    //---------promise chaining implemenatation with async and await......................
    const fetchPostsSequential = async () => {
      try {
        const response1 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const post1 = await response1.json();
        console.log("Post 1:", post1);
    
        const response2 = await fetch("https://jsonplaceholder.typicode.com/posts/2");
        const post2 = await response2.json();
        console.log("Post 2:", post2);
    
        const response3 = await fetch("https://jsonplaceholder.typicode.com/posts/3");
        const post3 = await response3.json();
        console.log("Post 3:", post3);
      } catch (error) {
        console.error("Error in fetching posts:", error);
      }
    };
    
    fetchPostsSequential();
    

    //--------------------------------------PROMISE.ALL.....................................
    