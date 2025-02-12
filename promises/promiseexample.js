const data = [{ "username": "reddy", "password": "1234", "phone":"1234567890", "email":"qwerty@1234" },
{ "username": "ramu", "password": "2345" }];

function isAuthenticated(username, password) {

    const isuser = data.find((user) => user.username === username && user.password === password);

    if (isuser) {
        console.log("user found")
    } else {
        console.log("user not found")
    }

}
isAuthenticated("reddy", "1234");

//--------------------same thing using promises now--------------

function isAuthenticatedPromise(username, password) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const isUser = data.find((user) => user.username === username && user.password === password);
            if (isUser) {
                resolve(isUser);
            } else {
                reject("user not found");
            }
        }, 2000)
    })
}


isAuthenticatedPromise("reddy","1234").then(handleUserData).catch((err) => console.log(err)).then()


//-----------------------------------------------------------
const users = [{username:"reddy", password:"12345", details:[{name:"reddy", designation:"software", skills:"react"}]},
               {username:"rakesh", password:"123456", details:[{name:"rakesh", designation:"software", skills:"react"}]}]

function authenticateUser(username, password){
    return new Promise ((resolve, reject) =>{
        setTimeout(()=>{
        let isUser = users.find((user)=> user.username === username && user.password === password);
        if(isUser){
            resolve(isUser.details);
        }else{
            reject("user is not found...!");
        }
        },1000)
    })
} 

function getUserdetails(userDetails){
    return new Promise((resolve)=>{
        setTimeout(()=>{
           resolve(`user details are: name:${userDetails.name}, designation:${userDetails.designation}, skills:${userDetails.skills}`)
        },1000)
    })
}

authenticateUser("reddy", "12345").then((userDetails)=> getUserdetails(userDetails))
                                 .then(details => console.log(details))
                                 .catch(err => console.log(err.message))
