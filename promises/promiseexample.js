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

//.............same thing using promises now--------------

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
function handleUserData(userData) {
    console.log("User data received:", userData);
    return userData; 
  }

isAuthenticatedPromise("reddy","1234").then(handleUserData).catch((err) => console.log(err)).then()



