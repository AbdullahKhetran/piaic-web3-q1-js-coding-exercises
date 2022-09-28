let current_users = ["john", "ADAM", "sMiTh", "bARry", "biLl"];
console.log(current_users);
// makking a new array to contain current users but in lower case
let current_users_lowercase = [];
for (let j = 0; j < current_users.length; j++) {
    current_users_lowercase.push(current_users[j].toLowerCase())
}
console.log(current_users_lowercase)

let new_users = ["anas", "JOHN", "adam", "noah", "harry"];
for (let i = 0; i < new_users.length; i++) {
    if (current_users_lowercase.includes(new_users[i].toLowerCase())) {
        console.log("Username is not available, please enter a new username");
    } else {
        console.log("Username is available");
    }
}; 