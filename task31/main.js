let users = ["john", "smith", "eric", "admin", "noah"];
for (let i = 0; i < users.length; i++) {
    if (users[i] == "admin") {
        console.log("Hello admin, would you like to see a status report?");

    } else {
        console.log(`Hello ${users[i]}, thank your for loggin in again`);
    }
}

users.splice(0, users.length); // removing the number of indexes equavilent to length of array basically all indexes so that array becomes empty

if (users.length == 0) {
    console.log("We need to find some users!");
}