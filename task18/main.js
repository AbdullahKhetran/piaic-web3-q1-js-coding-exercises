let places = ["Singapore", "Canada", "Kashmir", "Afghanistan", "Russia", "London"];
console.log(places);
console.log([...places].sort()); // see comment at the end for MDN reference
console.log(places);
console.log(([...places].sort()).reverse()); // reverse() on the sorted one, be careful with the parentheses
console.log(places);
console.log(places.reverse());
console.log(places.reverse());


/* MDN reference to sort without changing original array
In case you want sort() to not mutate the original array, but return a shallow-copied array like other array methods (e.g. map()) do, you can do a shallow copy before calling sort(), using the spread syntax or Array.from().
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort 
*/