/*
Array.length
The length data property of an Array instance represents the number of elements in that array. 
*/
const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];
console.log('Clothing items: ', clothing.length); // 4

/*
Array.push()
The push() method adds one or more elements to the end of an array and returns the new length of the array.
*/
const numbers0 = [10, 8];
console.log('array before push: ', numbers0); // [10, 8];
numbers0.push(20, 18); // NOTE: this returns the new length of the array... 4
console.log('array after push: ', numbers0); // [10, 8, 20, 18];

/*
Array.every()
The Array .every(callback) method returns true when every item in the array satisfies the condition provided in the callback.
*/
const numbers1 = [15, 10, 20];
const allAbove10 = numbers1.every((number) => number >= 10); // true
const allAbove15 = numbers1.every((number) => number >= 15); // false

/*
Array.some()
The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
*/
const numbers = [15, 10, 20];
const someOver18 = numbers.some((number) => number >= 18); // true
const someUnder10 = numbers.some((number) => number < 10); // false

/*
Array.filter()
The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
*/
const numbers2 = [9, 5, 14, 3, 11];
const numbersAboveTen = numbers2.filter((number) => number > 10);
console.log('Numbers above 10: ', numbersAboveTen); // [14, 11]

/*
Array.find()
The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
*/
let names = ['Sam', 'Alex', 'Charlie', 'Albert'];
let result = names.find((name) => name[0] === 'A');
console.log('First name starting with A: ', result); // "Alex"

/*
Array.findIndex()
The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
*/
const numbers4 = [5, 12, 8, 130, 44];
const isLargeNumber = (num) => num > 13;
console.log('Index of first large number: ', numbers4.findIndex(isLargeNumber));
// Expected output: 3

/*
Array.forEach()
The forEach() method executes a provided function once for each array element.
*/
const grades1 = [10, 8, 13];
grades1.forEach((grade) => console.log({ grade }));

/*
Array.includes()
The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
*/
const groceries = ['Apple', 'Peach', 'Tomato'];
groceries.includes('Tomato'); // true
groceries.includes('Bread'); // false

/*
Array.join()
The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
*/
const groceries1 = ['Apple', 'Peach', 'Tomato'];
groceries1.join('; '); // "Apple; Peach; Tomato"
groceries1.join(' . '); // "Apple . Peach . Tomato"

/*
Array.map()
The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
*/
const numbers3 = [4, 2, 5, 8];
const doubled = numbers3.map((number) => number * 2);
console.log('Doubled array: ', doubled); // [8, 4, 10, 16]

/*
Array.reduce()
The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
*/
const grades3 = [10, 15, 5];
const sum = grades3.reduce((total, current) => {
  return total + current;
}, 0);
console.log({ sum }); // 30

/*
Array.splice()
The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().
*/
const items = ['Pen', 'Paper', 'Staples'];
const deletedItem = items.splice(0, 1); // removes one element at index 0
console.log('Deleted item: ', deletedItem); // ["Pen"]
console.log('Changed items array: ', items); // ["Paper", "Staples"]

/*
Array.slice()
The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
*/
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log('Shallow copy: ', animals.slice(0)); // ["camel", "duck", "elephant"]

/*
Array.toSpliced(startIndex, deleteCount, item1, item2, ...)
The toSpliced() method returns a NEW array with some elements removed, replaced, and/or added at a given index.
*/
const months = ["Jan", "Mar", "Apr", "May"];
const months2 = months.toSpliced(1, 0, "Feb");
console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]

