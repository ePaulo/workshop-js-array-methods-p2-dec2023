// Import stylesheets
import './style.css'

// Write Javascript code!
const appDiv = document.getElementById('app')
appDiv.innerHTML = `<div>Maximize Console to see the log file.</div>`
// console.log('test can log to console')

let index

// example arrays:
let numbersArr = [2, 3, 1, 5, 4, 3, 9, 2, 8]
let numberOrig = [2, 3, 1, 5, 4, 3, 9, 2, 8]

let lettersArr = ['a', 'd', 't', 'w', 'h', 'j', 'b', 'e', 'f', 'd', 'k', 'm']
let letterOrig = ['a', 'd', 't', 'w', 'h', 'j', 'b', 'e', 'f', 'd', 'k', 'm']

// ================================================ =============================
// ================================================ =============================

// =========== Methods that GET item(s) ===========

// ----------- Q) How do I GET the last item? -----------
console.log('--- Ex.1: Get the last item in an array ---')
// 1) Method(s) that change the original array:
console.log('1) using method(s) that modify the array')
console.log('original array: ', numberOrig)
console.log('pop() --> ', numbersArr.pop()) // removes original last item and returns 8
console.log('splice() --> ', numbersArr.splice(-1)) // removes new last item and returns [2]
// check for changes to array
console.log('changed array: ', numbersArr) // changed --> last two items removed
console.log('change to array length: ', numbersArr.length - numberOrig.length) // -2
console.log('-----------------')

numbersArr = [...numberOrig] // reset numbers array to original
// 2) Method(s) that do NOT change the original array:
console.log('2) using method(s) that do NOT modify the array')
console.log('original array: ', numberOrig)
console.log('[] notation --> ', numbersArr[numbersArr.length - 1]) // 8
console.log('at() --> ', numbersArr.at(-1)) // 8
console.log('slice() --> ', numbersArr.slice(-1)) // [8]
console.log('toSpliced() --> ', numbersArr.toSpliced(0, numbersArr.length - 1)) // [8]
// check for changes to array
console.log('current array: ', numbersArr) // unchanged
console.log('change to array length: ', numbersArr.length - numberOrig.length) // 0

console.log('----------------- -----------------')
// ---------------------------------------------

// ----------- Q) How do I GET the smallest item? -----------
console.log('--- Ex.2: Get the smallest item in an array ---')
// 1) Method(s) that change the original array:
console.log('1) using array method(s) that modify')
console.log('original array: ', numberOrig)
console.log('sort() + shift() --> ', numbersArr.sort().shift()) // 1
// check for changes to array
console.log('changed array: ', numbersArr) // changed --> sorted and 1st item removed
console.log('change to array length: ', numbersArr.length - numberOrig.length) // -1
console.log('-----------------')

numbersArr = [...numberOrig] // reset numbers array to original
// 2) Method(s) that do NOT change the original array:
console.log('2) using array method(s) that do NOT modify')
console.log('original array: ', numberOrig)
console.log('toSorted()[0] ---> ', numbersArr.toSorted()[0]) // 1
console.log('toSorted().at() --> ', numbersArr.toSorted().at(0)) // 1
console.log('toSorted().slice() --> ', numbersArr.toSorted().slice(0, 1)) // [1]
// check for changes to array
console.log('unchanged array: ', numbersArr) // unchanged
console.log('change to array length: ', numbersArr.length - numberOrig.length) // 0

console.log('----------------- -----------------')
// ---------------------------------------------

// ----------- Q) How do I GET the item at a specified array index -----------
console.log('--- Ex.3: Get the 3th item (index 2) in the array ---')
// 1) Method(s) that change the original array:
console.log('1) using array method(s) that modify')
console.log('original array: ', numberOrig)
console.log('splice() --> ', numbersArr.splice(2, 1)) // [1]
// check for changes to array
console.log('changed array: ', numbersArr) // changed --> 3rd item removed
console.log('change to array length: ', numbersArr.length - numberOrig.length) // -1
console.log('-----------------')

numbersArr = [...numberOrig] // reset numbers array to original
// 2) Method(s) that do NOT change the original array:
console.log('2) using array method(s) that do NOT modify')
console.log('original array: ', numberOrig)
console.log('[] notation --> ', numbersArr[2]) // 1
console.log('at() --> ', numbersArr.at(2)) // 1
console.log('slice() --> ', numbersArr.slice(2, 3)) // [1]
// check for changes to array
console.log('unchanged array: ', numbersArr) // unchanged
console.log('change to array length: ', numbersArr.length - numberOrig.length) // 0

console.log('----------------- -----------------')
// ---------------------------------------------

// ----------- Q) How do I GET the items between specified array indexes?  -----------
console.log('--- Ex.4: Get 3 array items starting at index 1 ---')
// 1) Method(s) that change the original array:
console.log('1) using method(s) that modify the array')
console.log('original array: ', numberOrig)
console.log('splice() --> ', numbersArr.splice(1, 3)) // [3, 1, 5]
// check for changes to array
console.log('changed array: ', numbersArr) // changed --> 3 items removed
console.log('change to array length: ', numbersArr.length - numberOrig.length) // -3
console.log('-----------------')

numbersArr = [...numberOrig] // reset numbers array to original
// 2) Method(s) that do NOT change the original array:
console.log('2) using method(s) that do NOT modify the array')
console.log('original array: ', numberOrig)
console.log('slice() --> ', numbersArr.slice(1, 4)) // [3, 1, 5]
// check for changes to array
console.log('unchanged array: ', numbersArr) // unchanged
console.log('change to array length: ', numbersArr.length - numberOrig.length) // 0

console.log('----------------- -----------------')
// ---------------------------------------------

// ----------- Q) How do I GET the first item passing a specified test -----------
console.log('--- Ex.5: Get the first item greater than 5 ---')
// 1) Method(s) that change the original array:
console.log('1) using method(s) that modify the array')
console.log('original array: ', numberOrig)
let indexNumGt5 = numbersArr.findIndex((num) => num > 5) // 6
console.log('findIndex() & splice() --> ', numbersArr.splice(indexNumGt5, 1)) // [9]
console.log('changed array: ', numbersArr) // changed --> 1 item removed
console.log('change to array length: ', numbersArr.length - numberOrig.length) // -1
console.log('-----------------')

numbersArr = [...numberOrig] // reset numbers array to original
// 2) Method(s) that do NOT change the original array:
console.log('2) using method(s) that do NOT modify the array')
console.log('original array: ', numberOrig)
console.log(
  'find() --> ',
  numbersArr.find((num) => num > 5)
) // 9
// check for changes to array
console.log('unchanged array: ', numbersArr) // unchanged
console.log('change to array length: ', numbersArr.length - numberOrig.length) // 0

console.log('----------------- -----------------')
// ---------------------------------------------

// ----------- Q) How do I GET all items that pass a specific test -----------
console.log('--- Ex.6: Get all numbers greater than 3 ---')
// 1) Method(s) that change the original array:
console.log('1) using method(s) that modify the array')
console.log('original array: ', numberOrig)
let indexNumGt3 = numbersArr.sort().findIndex((num) => num > 3)
console.log(
  'sort(), findIndex(), splice() --> ',
  numbersArr.splice(indexNumGt3)
) // [4, 5, 8, 9]
console.log('changed array: ', numbersArr) // changed --> sorted and 4 items removed
console.log('change to array length: ', numbersArr.length - numberOrig.length) // -4
console.log('-----------------')

numbersArr = [...numberOrig] // reset numbers array to original
// 2) Method(s) that do NOT change the original array:
console.log('2) using method(s) that do NOT modify the array')
console.log('original array: ', numberOrig)
console.log(
  'filter() --> ',
  numbersArr.filter((num) => num > 3)
) // [5, 4, 9, 8]
// check for changes to array
console.log('unchanged array: ', numbersArr) // unchanged
console.log('change to array length: ', numbersArr.length - numberOrig.length) // 0

console.log('----------------- -----------------')
// ---------------------------------------------

// ================================================ =============================
// ================================================ =============================

// =========== Methods that ADD item(s) ===========

// ----------- Q) How do I ADD item(s) at the start of an array
console.log('--- Ex.1: Add [11, 12] to start of the numbers array ---')
// 1) Method(s) that change the original array:
console.log('1) using method(s) that modify the array')
console.log('original array: ', numberOrig)
console.log('unshift() --> ', numbersArr.unshift(11, 12)) // adds items, returns array length
console.log('splice --> ', numbersArr.splice(0, 0, 11, 12)) // re-adds items
console.log('changed array: ', numbersArr) // changed --> added 2 items twice
console.log('change to array length: ', numbersArr.length - numberOrig.length) // 4
console.log('-----------------')

numbersArr = [...numberOrig] // reset numbers array to original
// 2) Method(s) that do NOT change the original array:
console.log('2) using method(s) that do NOT modify the array')
console.log('original array: ', numberOrig)
console.log('concat() --> ', [11, 12].concat(numbersArr)) // [11, 12, 2, 3, …]
console.log('toSpliced() --> ', numbersArr.toSpliced(0, 0, 11, 12)) // [11, 12, 2, 3, …]
console.log('spread (...) syntax --> ', [11, 12, ...numbersArr]) // [11, 12, 2, 3, …]
// check for changes to array
console.log('unchanged array: ', numbersArr) // unchanged
console.log('change to array length: ', numbersArr.length - numberOrig.length) // 0

console.log('----------------- -----------------')
// ---------------------------------------------

// ----------- Q) How do I ADD item(s) to the end of an array
console.log('--- Ex.2: Add [21, 22] to end of the numbers array ---')
// 1) Method(s) that change the original array:
console.log('1) using method(s) that modify the array')
console.log('original array: ', numberOrig)
console.log('push() --> ', numbersArr.push(21, 22)) // adds items, returns array length
console.log('splice() --> ', numbersArr.splice(numbersArr.length, 0, 21, 22)) //
console.log('changed array: ', numbersArr) // changed --> added 2 items twice
console.log('change to array length: ', numbersArr.length - numberOrig.length) // 4
console.log('-----------------')

numbersArr = [...numberOrig] // reset numbers array to original
// 2) Method(s) that do NOT change the original array:
console.log('2) using method(s) that do NOT modify the array')
console.log('original array: ', numberOrig)
console.log('concat() --> ', numbersArr.concat([21, 22])) // […, 2, 8, 11, 12]
console.log('spread (...) syntax --> ', [...numbersArr, 21, 22]) // […, 2, 8, 11, 12]
console.log(
  'toSpliced() --> ',
  numbersArr.toSpliced(numbersArr.length, 0, 21, 22)
)
// check for changes to array
console.log('unchanged array: ', numbersArr) // unchanged
console.log('change to array length: ', numbersArr.length - numberOrig.length) // 0

console.log('----------------- -----------------')
// ---------------------------------------------

// ----------- Q) How do I ADD item(s) into the middle of an array
console.log('--- Ex.3: Add [6, 7] at index 2 of our numbers array ---')
// 1) Method(s) that change the original array:
console.log('1) using method(s) that modify the array')
console.log('original array: ', numberOrig)
console.log('splice() --> ', numbersArr.splice(2, 0, 6, 7)) // adds items, returns []
console.log('changed array: ', numbersArr) // changed --> added 2 items
console.log('change to array length: ', numbersArr.length - numberOrig.length) // 2
console.log('-----------------')

numbersArr = [...numberOrig] // reset numbers array to original
// 2) Method(s) that do NOT change the original array:
console.log('2) using method(s) that do NOT modify the array')
console.log('original array: ', numberOrig)
console.log('toSpliced() --> ', numbersArr.toSpliced(2, 0, 6, 7)) // [2, 3, 6, 7, …]
// check for changes to array
console.log('unchanged array: ', numbersArr) // unchanged
console.log('change to array length: ', numbersArr.length - numberOrig.length) // 0

console.log('----------------- -----------------')
// ---------------------------------------------

// ----------- Q) How do I ADD items from one array to another array
console.log('--- Ex.4: Add letters array items to numbers array ---')
// 1) Method(s) that change the numbers array:
console.log('1) using method(s) that modify the numbers array')
console.log('original array: ', numberOrig)
console.log('push() --> ', numbersArr.push(...lettersArr)) // returns length of numbersArr
console.log('changed array: ', numbersArr) // changed --> added items in letters array
console.log('change to array length: ', numbersArr.length - numberOrig.length) // 12
console.log('-----------------')

numbersArr = [...numberOrig] // reset numbers array to original
// 2) Method(s) that do NOT change the original array:
console.log('2) using method(s) that does NOT modify numbers array')
console.log('original array: ', numberOrig)
console.log('concat() --> ', numbersArr.concat(lettersArr)) // [2, 3, …, "k", "m"]
console.log('spread --> ', [...numbersArr, ...lettersArr]) // [2, 3, …, "k", "m"]
// check for changes to array
console.log('unchanged array: ', numbersArr) // unchanged
console.log('change to array length: ', numbersArr.length - numberOrig.length) // 0

console.log('----------------- -----------------')
// ---------------------------------------------

// ================================================ =============================
// ================================================ =============================

// =========== Methods that EDIT item(s) ===========

// ----------- Ex #1: edit one item based on index
// 1) changing the array
// for example: change first item to 77
// numbersArr[0] = 77
// console.log(numbersArr)

// 2) creating a new array
// let newArr = numbersArr.with(0, 76)
// console.log(newArr)
// ... try with()

// ----------- Ex #2: edit one item based on value
// 1) changing the array
// for example: changing the 9 to 7
// ... try indexOf() then use bracket notation

// 2) creating a new array
// ... try indexOf then with()

// ----------- Ex #3: edit a group of items based on index
// 1) changing the array
// ... try splice()
// ... try forEach()

// 2) creating a new array
// ... try toSpliced()
// ... try map()

// ----------- Ex #4: edit a group of items based on value
// 1) changing the array
// ... try forEach()

// 2) creating a new array
// ... try map()

// ----------- Ex #5: edit all items
// 1) changing the array
// ... try forEach()

// 2) creating a new array
// let newMappedArr = numbersArr.map(num => num + 1)
// console.log(newMappedArr)

// ==================================================================
// ============= TOPICS FOR THE NEXT WORKSHOP =============
// ==================================================================

// Delete item(s)
//  delete first item
//  ... changing the array
//  ... creating a new array
//  delete last item
//  ... changing the array
//  ... creating a new array
//  delete a group of items based on index
//  ... changing the array
//  ... creating a new array
//  delete a group of items based on what the item is
//  ... changing the array
//  ... creating a new array

// Check item(s)
//  check if empty array
//  check if non-empty array
//  check if specific item is in array
//  check if all items meet a requirement
//  check if some items meet a requirement

// Evaluate item(s)
//  length of array
//  index of specific item
//  index of first item meeting a requirement
//  number of times a specific value is in the array (tricky?)
//  accumulated value of all items
//  --> eg. sum of array of numbers
