let guests = ["Albert Einstein", "Robert Kiyosaki", "Elon Musk"];
console.log(`Looks like ${guests[0]} can't make it to the dinner party`);
guests.splice(0, 1, "Hamza");
// console.log(guests);
console.log(`Hi ${guests[0]}, would you be kind enough to attend my dinner party?`);
console.log(`Hi ${guests[1]}, would you be kind enough to attend my dinner party?`);
console.log(`Hi ${guests[2]}, would you be kind enough to attend my dinner party?`);