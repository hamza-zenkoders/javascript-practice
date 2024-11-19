
// Create an object person with the following properties:
// name: "John"
// age: 30
// city: "New York"

const person = {
    name: 'John',
    age: 30,
    city: 'New York'
}


// Access the name property of the person object and store it in a variable. 
const personName = person.name;


// Add a new property isMarried with the value false to the person object.
person.isMarried = false;


// Delete the city property from the person object.
delete person.city;


// Add a method greet to the person object that logs "Hello, my name is John" to the console when called.
person.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
}


// Call the greet method of the person object.
person.greet();


// Write a loop to print all keys of the person object.
for (let key in person) {
    console.log(key);
}


// Write a loop to print all values of the person object. 
for (let key in person) {
    console.log(person[key]);
}


// Use destructuring to extract the name and age properties from the person object.
const {name, age} = person;


// Provide default values for destructuring if the properties gender and city do not exist. 
const {gender: gender = 'N/A', city: city = 'N/A'} = person;


// Advanced Operations

// Create a new object student that has the same properties as person, 
// but add an additional property grade: "A".
const student = {...person, grade: 'A'};


// Merge two objects obj1 = { a: 1, b: 2 } and obj2 = { b: 3, c: 4 } into a new object.
const obj1 = { a: 1, b: 2 }; 
const obj2 = { b: 3, c: 4 };

const obj3 = {...obj1, ...obj2};


// Use Object.keys to get an array of all keys in the person object.
const objKeys = Object.keys(person);


// Use Object.values to get an array of all values in the person object.
const objVals = Object.values(person);


// Use Object.entries to get an array of key-value pairs in the person object. 
const objEntries = Object.entries(person);


// Check if the age property exists in the person object. 
console.log(person.hasOwnProperty('age'));


// Use Object.hasOwn() to check if isMarried is a direct property of person.
console.log(Object.hasOwn(person, 'isMarried'));


// Freezing and Sealing

// Use Object.freeze to make the person object immutable. Try changing the age property.
Object.freeze(person);
person.age = 50;        // value will not change because the object is freezed


// Use Object.seal on the person object and add a new property salary.
Object.seal(person);
person.salary = 1000;   // will not be added because object is sealed


// Write code to create a deep copy of the person object using JSON.stringify and JSON.parse.
const personCopy = JSON.parse(JSON.stringify(person));

// Create an array of objects representing books.
const books = [
    {
        title: 'Diary of a CEO',
        author: 'Steven Bartlett',
        price: 190 
    },
    {
        title: 'Read People Like a Book',
        author: 'Patrick King',
        price: 250 
    },
    {
        title: 'Ikigai',
        author: 'Hector Garcia',
        price: 120 
    },
    {
        title: 'Deviant King',
        author: 'Rina Kent',
        price: 115 
    },
]


// Use filter to find all books with a price greater than 150.
const priceGreaterThan50 = books.filter(book => book.price > 150);


// Use map to create an array of book titles. 
const bookTitles = books.map(book => book.title);


// Use reduce to calculate the total price of all books. 
const totalBookPrice = books.reduce((acc, curr) => acc + curr.price, 0);


// Bonus Questions
// Use a for...of loop to print the title and author of each book in the books array. 
for (let book of books) {
    console.log(`Title : ${book.title}, Author : ${book.author}`);
}


// Write a function updateAge that takes an object and an age parameter, 
// updates the object's age, and returns the updated object. 
function updateAge (obj, age) {
    obj.age = age;
    return obj;
}

updateAge(person, 50);