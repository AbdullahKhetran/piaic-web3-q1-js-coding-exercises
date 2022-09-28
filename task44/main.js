let arr = [];
function sandwich(array) {
    let summary = "You sandwich is a "
    for (let i = 0; i < array.length; i++) {
        summary = summary + array[i] + " "
    }
    console.log(summary);
}
sandwich(["brown bread", "fajita flavour", "large size"]);
sandwich(["white bread", "tuna meat", "medium size", "spicy"]);
sandwich(["honey oat bread", "chicken", "medium size", "ranch sauce", "with cheese"]);