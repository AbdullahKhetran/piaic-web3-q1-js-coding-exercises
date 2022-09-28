let num = [];
// creating an array using loop since it conatins number
for (let i = 1; i < 10; i++) {
    num.push(i);
}
console.log(num);


for (let i = 0; i < num.length; i++) {
    if (num[i] == 1) {
        console.log(`${num[i]}st`);
    } else if (num[i] == 2) {
        console.log(`${num[i]}nd`);
    } else if (num[i] == 3) {
        console.log(`${num[i]}rd`);
    } else {
        console.log(`${num[i]}th`);
    }
}