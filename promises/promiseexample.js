const data = [{ "username": "reddy", "password": "1234" },
{ "username": "raju", "password": "2345" }];

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

function isAuthenticatedPromise() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const isUser = data.find((user) => user.username === username && user.password === password);
            if (isUser) {
                resolve("user found");
            } else {
                reject("user not found");
            }
        }, 2000)
    })
}


isAuthenticatedPromise("reddy","1234").then((message) => {
    console.log(message);
}).catch((err) => console.log(err));


