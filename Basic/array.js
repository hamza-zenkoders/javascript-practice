
const fruits = ['Apple', 'Mango', 'Banana'];

// Write code to access the second item in the fruits array. 
console.log(fruits[1])


// Use a forEach loop to print each item in the fruits array.
fruits.forEach(fruit => console.log(fruit));


// Add Orange to the end of the fruits array.
fruits.push('Orange');


// Remove the first item (Apple) from the fruits array. 
fruits.shift();


// Add Grapes to the beginning of the fruits array.
fruits.unshift('Grapes');


// Remove the last item (Orange) from the fruits array. 
fruits.pop();


// Create a new array by adding Cherry and Peach to the existing fruits
const fruits2 = [...fruits, 'Cherry', 'Peach'];


// Use splice to remove Banana from the fruits array (assume it is in the second position).
fruits.splice(2, 1);


// Use splice to insert Pineapple at the second position in the fruits array.
fruits.splice(2, 0, 'Pineapple');


// Use slice to create a new array with the first two items of the fruits array.
const fruits3 = fruits.slice(0, 2);


// Find the index of Mango in the fruits array.
const indexOfMango = fruits.indexOf('Mango');


// Check if Banana exists in the fruits array using includes. 
console.log(fruits.includes('Banana'))


// Use find to locate the first fruit in the fruits array that starts with M. 
const fruit = fruits.find(fruit => fruit[0] === 'M');


// Use filter to create a new array with fruits that have more than 5 letters. 
const fruits4 = fruits.filter(fruit => fruit.length > 5);


// Sort the fruits array alphabetically.
fruits.sort();


// Reverse the fruits array.
fruits.reverse();


// Use reduce to create a single string from the fruits array, 
// with items separated by a comma and a space (, ). 
const singleStr = fruits.reduce((acc, curr) => {
    acc += ', ' + curr;
    return acc;
});


// Use map to create a new array where each fruit is in uppercase. 
const fruits5 = fruits.map(fruit => fruit.toUpperCase());


// Combine all the methods you've learned to:
// 1. Add Kiwi at the start.
fruits.unshift('Kiwi');

// 2. Remove Mango from the array.
fruits.splice(fruits.indexOf('Mango'), 1);

// 3. Sort the remaining fruits alphabetically.
fruits.sort();

console.log(fruits);


// Bonus Questions
// Flatten a nested array [1, [2, 3], [4, [5, 6]]] using flat. 
const arr = [1, [2, 3], [4, [5, 6]]];

const flatArr = arr.flat(2);
console.log(flatArr);


// Use join to create a string from the fruits array with items separated by a hyphen (-).
const fruits6 = fruits.join('-');

console.log(fruits6);