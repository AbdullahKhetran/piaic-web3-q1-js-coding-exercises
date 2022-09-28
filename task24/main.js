let age = 15;
console.log('Is age == "15"? I predict true');
console.log(age == "15");

console.log('Is age === "15"? I predict false');
console.log(age === "15");


let city = "London";
console.log('Is city == "London"? I predict true');
console.log(city == "London");

console.log('Is city.toLowerCase === "London"? I predict false');
console.log(city.toLowerCase === "London");


let num = 63;
console.log('Is num >= 63? I predict true');
console.log(num >= 63);

console.log('Is num <= 50? I predict false');
console.log(num <= 50);


let num2 = 75;
console.log('Is num2 > 63 && num2 < 80? I predict true');
console.log(num2 > 63 && num2 < 80);

console.log('num2 > 80 || num < 70? I predict true');
console.log(num2 > 80 || num < 70);


let cities = ["Karachi", "Lahore", "Peshawar", "Quetta"];
console.log('Is cities.includes("Lahore")? I predict true');
console.log(cities.includes("Lahore"));

console.log('Is cities.includes("Lahore, 2")? I predict false');
console.log(cities.includes("Lahore", 2));


let brands = ["Satrangi", "Bonanza", "Junaid.", "Levis"];
let found = false;
if (brands.indexOf("Junaid Jamshed") !== -1) {
    found = true;
} else {
    found = false;
}
console.log('Is found true or false? I predict false');
console.log(found);

let found2 = false;
if (brands.indexOf("Bonanza") !== -1) {
    found2 = true;
} else {
    found2 = false;
}
console.log('Is found2 true or false? I predict true');
console.log(found2);