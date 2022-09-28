let guests = ["Albert Einstein", "Robert Kiyosaki", "Elon Musk"];
console.log(`Looks like ${guests[0]} can't make it to the dinner party`);
guests.splice(0, 1, "Hamza");

console.log(`Hey ${guests[0]}, I found a bigger table so we can have more guests`);
console.log(`Hey ${guests[1]}, I found a bigger table so we can have more guests`);
console.log(`Hey ${guests[2]}, I found a bigger table so we can have more guests`);

guests.unshift("Zain");
guests.splice(2, 0, "Anas"); // adding guest in middle
// console.log(guests);
guests.push("Abdullah");
console.log(guests);

console.log(`Hey ${guests[0]},would you be kind enough to attend my dinner party?`);
console.log(`Hey ${guests[1]},would you be kind enough to attend my dinner party?`);
console.log(`Hey ${guests[2]},would you be kind enough to attend my dinner party?`);
console.log(`Hey ${guests[3]},would you be kind enough to attend my dinner party?`);
console.log(`Hey ${guests[4]},would you be kind enough to attend my dinner party?`);
console.log(`Hey ${guests[5]},would you be kind enough to attend my dinner party?`);
