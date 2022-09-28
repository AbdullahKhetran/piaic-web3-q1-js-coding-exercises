let personName = "john smith";

console.log(personName.toLowerCase());
console.log(personName.toUpperCase());

function toTitleCase(phrase) {
    return phrase.replace(/\b[a-z]/g, (l) => l.toUpperCase())
    // l for letter, it can be anything
}
console.log(toTitleCase(personName));
