// code from task 3
function toTitleCase(phrase) {
    return phrase.replace(/\b[a-z]/g, (l) => l.toUpperCase())
    // l for letter, it can be anything
}
console.log(toTitleCase(personName));
// I have created a function using regex that looks for the first letter after a word boundary and converts it into uppercase, then this function is called with the name of person as a argument.

// -------------------------------------------------

// code from task 6
let personName = "  John\n \tSmith   "
console.log(personName);

console.log(personName.replace(/\s/g, ""));
// all the white spaced including a tab and linebreak are converted to empty string meaning they will be removed. Note that this will also remove the space between the first name and last name.