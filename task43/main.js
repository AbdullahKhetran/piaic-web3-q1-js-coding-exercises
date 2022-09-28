let magicians_name = ["David Blaine", "Criss Angel", "David Cooperfield", "Jon Finch"];
function show_magicians(array_name) {
    for (let i = 0; i < array_name.length; i++) {
        console.log(array_name[i]);
    }
}
// show_magicians(magicians_name);

let copy = [...magicians_name]; // made a copy
console.log(copy);

function make_great(arrName) {
    for (let i = 0; i < arrName.length; i++) {
        arrName[i] = "The Great " + arrName[i]
    }
}
make_great(copy);
show_magicians(copy);
show_magicians(magicians_name);
