guests = ["Zain", "Hamza", "Anas", "Robert Kisyosaki", "Elon Musk", "Abdullah"];
console.log(guests);
console.log("Unfortunately my new dinner table won't arrive in time so now I can only invite 2 people");

let gone = guests.pop();
console.log(`Hey ${gone}, I am sorry I can't invite you to dinner, maybe next time`);

gone = guests.pop();
console.log(`Hey ${gone}, I am sorry I can't invite you to dinner, maybe next time`);

gone = guests.pop();
console.log(`Hey ${gone}, I am sorry I can't invite you to dinner, maybe next time`);

gone = guests.pop();
console.log(`Hey ${gone}, I am sorry I can't invite you to dinner, maybe next time`);

console.log(guests);
console.log(`Hey ${guests[0]} you are still invited to the dinner. Don't forget to come`);
console.log(`Hey ${guests[1]} you are still invited to the dinner. Don't forget to come`);
guests.pop();
guests.pop();
console.log(guests);