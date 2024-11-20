
// Create a Map named student with key-value pairs:
const student = new Map([
    ['name', 'Hamza'],
    ['age', 21],
    ['grade', 'A']
]);


// Add a new key subject with the value "Mathematics" to the student map. 
student.set('subject', 'Mathematics');


// Retrieve the value associated with the key grade in the student map. 
console.log('Grade : ', student.get('grade'))


// Check if the key age exists in the student map.
console.log(student.has('age'));


// Remove the key grade from the student map.
student.delete('grade');


// Clear all key-value pairs from the student map.
// student.clear();


// Create a Map named countryCodes with the following entries:
// US: "United States"
// PK: "Pakistan"
// GB: "United Kingdom"
const countryCodes = new Map([
    ['US', 'United States'],
    ['PK', 'Pakistan'],
    ['GB', 'United Kingdom'],
]);


// Use a for...of loop to print all key-value pairs in the map.
for (let countryCode of countryCodes) {
    console.log(countryCode)
}


// Use the forEach method to print all keys in the countryCodes map.
countryCodes.forEach((val, key) => console.log(key));


// Get an array of all keys in the countryCodes map using Map.keys
console.log(countryCodes.keys());


// Get an array of all values in the countryCodes map using Map.values. 
console.log(countryCodes.values());


// Get an array of all key-value pairs in the countryCodes map using Map.entries. 
console.log(countryCodes.entries());


// Convert the student map to an object.
const studentObj = Object.fromEntries(student);


// Create a Map from the following object: { name: "Bob", age: 25, city: "Paris" }
const obj = { name: "Bob", age: 25, city: "Paris" };

const mapFromObj = new Map(Object.entries(obj));