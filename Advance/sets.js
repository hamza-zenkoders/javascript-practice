
// Create a Set named numbers containing the values 1, 2, 3, 4, 5.
const numbers = new Set([1,2,3,4,5]);


// Add the value 6 to the numbers set
numbers.add(6)


// Check if the value 3 exists in the numbers set. 
console.log(numbers.has(3));


// Remove the value 2 from the numbers set.
numbers.delete(3);


// Clear all values from the numbers set
// numbers.clear();


// Create a Set of fruits ['Apple', 'Banana', 'Mango']. 
// Use a for...of loop to print each fruit.
const fruits = new Set(['Apple', 'Banana', 'Mango']);

for (let fruit of fruits) {
    console.log(fruit);
}


// Use the forEach method to print each value in the numbers set.
numbers.forEach(number => console.log(number));


// Create two sets, setA = [1, 2, 3] and setB = [3, 4, 5]. Find their union. 
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

console.log(setA.union(setB));


// Find the intersection of setA and setB. 
console.log(setA.intersection(setB));


// Find the difference between setA and setB (values in setA but not in setB). 
console.log(setA.difference(setB));