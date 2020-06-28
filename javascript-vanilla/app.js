// empty array
// const arrayTest = []

// **********************************************
// WITH values
// **********************************************

// const arrayWithValues = [1,2,3,4,5,6];

// **********************************************
// checking the number of items in an array
// **********************************************

// const arrayLength = ['a','b','c','d']

// console.log(arrayLength.length)

// **********************************************
// getting the value of an item
// **********************************************

// const getValueOfArray = ['one','two','three']

// const valueOne = getValueOfArray[0]
// const valueTwo = getValueOfArray[1]
// const valueThree = getValueOfArray[2]

// console.log(valueOne)
// console.log(valueTwo)
// console.log(valueThree)


// **********************************************
// getting items from the end 
// **********************************************

// const listItems = ['milk','eggs','bacon','ham','bread','cheese']

// const itemEnd = listItems[listItems.length - 1]
// const itemSecondToLast = listItems[listItems.length - 2]
// const itemThirdToLast = listItems[listItems.length - 3]

// console.log(itemEnd)
// console.log(itemSecondToLast)
// console.log(itemThirdToLast)


// **********************************************
//setting the value
// **********************************************
// const valueSet = ['a','b','c','d','e']
// console.log(valueSet)

// valueSet[0] = 1
// console.log(valueSet)



// excercise arrays
// let people = [
//     'Franklin Roosevelt',
//     'Thomas Edison',
//     'Benjamin Franklin'
// ]


// const personListOne = people[0]
// const personListTwo = people[1]
// const personListThree = people[2]


// people[1] = 'Inventor of the lightbulb'


// console.log(people[0])
// console.log(personListOne)
// console.log(personListTwo)
// console.log(personListThree)

// console.log(people)


// **********************************************
// Array Methods 
// **********************************************

// **********************************************
// finding the position of an item. Use indexOf
// const index = array.indexOf(thing)
// **********************************************

// const fruitBasket = ['apple','banana','orange','pear']

// const postOfBana = fruitBasket.indexOf('banana');

// console.log(postOfBana) // 1


// const postOfKiwi = fruitBasket.indexOf('kiwi')
// console.log(postOfKiwi) // -1 


// **********************************************
// Adding item to the start - Unshift
// **********************************************

// const array = [3,4,5]
// console.log(array)

// array.unshift(2)
// console.log(array)


// **********************************************
// Adding items to the end - push
// **********************************************

// const arrayPush = [3,4,5]
// console.log(arrayPush)

// arrayPush.push(6)
// console.log(arrayPush)

// **********************************************
// removing items from the start - shift
// **********************************************

// const arrayShift = [3,4,5]
// const removeItemOne = arrayShift.shift()
// const removeItemTwo = arrayShift.shift()
// const removeItemThree = arrayShift.shift()

// console.log(removeItemOne) // remove 3
// console.log(removeItemTwo) // removes 4
// console.log(removeItemThree) // removes 5

// console.log(arrayShift)


 // **********************************************
        // removing items from the end - pop
// **********************************************

// const arrayPop = [3,4,5]
// console.log(arrayPop) // [3, 4, 5]

// const lastItem = arrayPop.pop()
// console.log(arrayPop) //[3, 4]

// const lastIemTwo = arrayPop.pop()
// console.log(arrayPop) // [3]

// const lastIemThree = arrayPop.pop()
// console.log(arrayPop) // []


// console.log(lastItem)      // 5
// console.log(lastIemTwo)    // 4 
// console.log(lastIemThree)  // 3
// console.log(arrayPop)  // []


 // **********************************************
        // splice method - splice()
// **********************************************

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // const deletedItems = array.splece(index, deleteCount, itemsToAdd)

    // index is the position to start modifying the array
    // deleteCount is the number of items you want to delete
    // itemsToAdd is items you want to add, each seperated by ,
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

 // **********************************************
 //          adding items with splice() 
 // **********************************************

// **********************************************
//          add items to the start 
// **********************************************
// const arraySplice = [3, 4, 5];
// console.log(arraySplice)

// arraySplice.splice(0, 0, 1, 2)

// console.log(arraySplice)


// ********************************************************************************************
//          add items to the end with splice() but easier to use push()
// ********************************************************************************************

// const arraySpliceEnd = [6, 7, 8]
// arraySpliceEnd.splice(arraySpliceEnd.length, 0, 9, 10, 11)

// console.log(arraySpliceEnd)


// ********************************************************************************************
//          add items to the middle with splice()
// ********************************************************************************************

// const arrayMiddle = [3, 4, 5, 9]
// console.log(arrayMiddle)

// arrayMiddle.splice(3, 0, 6, 7, 8)

// console.log(arrayMiddle)



// ********************************************************************************************
//          remove items from the end with splice()
// ********************************************************************************************
// const arrayRemoveSplice = [3, 4, 5]
// console.log(arrayRemoveSplice)


// const removeEnd = arrayRemoveSplice.splice(arrayRemoveSplice.length - 1, 2)
// console.log(arrayRemoveSplice) // [3, 4]

// const removeEnd = arrayRemoveSplice.splice(arrayRemoveSplice.length - 2, 2)
// console.log(arrayRemoveSplice) // [3]


// ********************************************************************************************
//          remove items from the middle with splice()
// ********************************************************************************************

// const arraySpliceMiddle = [3, 4, 9, 8, 5]

// const removeItems = arraySpliceMiddle.splice(2, 2)

// console.log(removeItems) // [9, 8]
// console.log(arraySpliceMiddle) // [3, 4, 5]


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// let people = [
//     'Benjamin Franklin',
//     'Thomas Edison',
//     'Franklin Roosevelt',
//     'Mahatma Gandhi',
//     'Napoleon Bonaparte',
//     'Abraham Lincoln'
//   ]

// 1. 
// const copy = people.slice()
// console.log(copy)
// console.log(copy.indexOf('Mahatma Gandhi'))

// alternative 
// const arrayMG = people.indexOf('Mahatma Gandhi')
// console.log(arrayMG) // 3
// console.log(copy)

// 2. A
// const addUnshift = people.unshift('Winston Churchill', 'Albert Einstein')
// console.log(addUnshift) // 8 
// console.log(people) // ["Winston Churchill", "Albert Einstein", "Benjamin Franklin", "Thomas Edison", "Franklin Roosevelt", "Mahatma Gandhi", "Napoleon Bonaparte", "Abraham Lincoln"]

// 2. B
// const addSplice = people.splice(0, 0, 'Winston Churchill', 'Albert Einstein')
// console.log(people) // ["Winston Churchill", "Albert Einstein", "Benjamin Franklin", "Thomas Edison", "Franklin Roosevelt", "Mahatma Gandhi", "Napoleon Bonaparte", "Abraham Lincoln"]


// 3. A
// const addEndPush = people.push('Charles Darwin', 'Walt Disney')
// console.log(people) // ["Benjamin Franklin", "Thomas Edison", "Franklin Roosevelt", "Mahatma Gandhi", "Napoleon Bonaparte", "Abraham Lincoln", "Charles Darwin", "Walt Disney"]

// 3. B
// const addEndSplice = people.splice(people.length, 0, "Charles Darwin", "Walt Disney")
// console.log(people) //["Benjamin Franklin", "Thomas Edison", "Franklin Roosevelt", "Mahatma Gandhi", "Napoleon Bonaparte", "Abraham Lincoln", "Charles Darwin", "Walt Disney"]

// 4. 
// const addAfterSplice = people.splice(4, 0, 'Pablo Picasso', 'Ludwig van Beethoven')
// console.log(people) // ["Benjamin Franklin", "Thomas Edison", "Franklin Roosevelt", "Mahatma Gandhi", "Pablo Picasso", "Ludwig van Beethoven", "Napoleon Bonaparte", "Abraham Lincoln"]

// 5. A shift
// console.log(people) //["Benjamin Franklin", "Thomas Edison", "Franklin Roosevelt", "Mahatma Gandhi", "Napoleon Bonaparte", "Abraham Lincoln"]

// const removeWithShiftFirst = people.shift("Benjamin Franklin")
// console.log(removeWithShiftFirst) // Benjamin Franklin
// console.log(people) // ["Thomas Edison", "Franklin Roosevelt", "Mahatma Gandhi", "Napoleon Bonaparte", "Abraham Lincoln"]

// const removeWithShiftSecond = people.shift("Thomas Edison")
// console.log(removeWithShiftSecond) //Thomas Edison
// console.log(people) // ["Franklin Roosevelt", "Mahatma Gandhi", "Napoleon Bonaparte", "Abraham Lincoln"]

// 5. B splice
// const removeWithSplice = people.splice(0, 2)
// console.log(people) // ["Franklin Roosevelt", "Mahatma Gandhi", "Napoleon Bonaparte", "Abraham Lincoln"]


// 6. A pop()
// const removePop1 = people.pop()
// console.log(removePop1) // Abraham Lincoln

// const removePop2 = people.pop()
// console.log(removePop2) // Napoleon Bonaparte

// console.log(people) // ["Benjamin Franklin", "Thomas Edison", "Franklin Roosevelt", "Mahatma Gandhi"]


// 6. B 
// const removeSpliceVersion = people.splice(people.length - 2, 2)
// console.log(removeSpliceVersion) //["Napoleon Bonaparte", "Abraham Lincoln"]
// console.log(people) // ["Benjamin Franklin", "Thomas Edison", "Franklin Roosevelt", "Mahatma Gandhi"]


// 7. 
// const removeGandhi = people.splice(3, 1)
// console.log(removeGandhi) // ["Mahatma Gandhi"]
// console.log(people) // ["Benjamin Franklin", "Thomas Edison", "Franklin Roosevelt", "Napoleon Bonaparte", "Abraham Lincoln"]
















// ******************************************************************************
//           ************************** redo **************************
// ****************************************************************************** 
let people = [
    'Benjamin Franklin',
    'Thomas Edison',
    'Franklin Roosevelt',
    'Mahatma Gandhi',
    'Napoleon Bonaparte',
    'Abraham Lincoln'
  ]


// 1. What is the index of Mahatma Gandhi in this list of people? Use indexOf.
// const array = people.slice()
// array.indexOf('Mahatma Gandhi')
// console.log(array.indexOf('Mahatma Gandhi')) // 3



// 2. Add Winston Churchill and Albert Einstein to the start of the list.
// - unshift
// const array = people.slice()
// console.log(array)
// array.unshift('Winston Churchill', 'Albert Einstein')
// console.log(array)

// - splice
// const array = people.slice()
// array.splice(0, 0, 'Winston Churchill', 'Albert Einstein')
// console.log(array)


// 3. 
// - push 
// const array = people.slice()
// array.push('Charles Darwin', 'Walt Disney')

// console.log(array)

// - splice
// const array = people.slice()
// array.splice(array.length, 0, 'Charles Darwin', 'Walt Disney')
// console.log(array)

// 4. Add Pablo Picasso and Ludwig van Beethoven after Mahatma Gandhi. Use splice. 
// const array = people.slice()
// array.splice(4, 0, 'Pablo Picasso', 'Ludwig van Beethoven')
// console.log(array)

// 5. Remove Benjamin Franklin and Thomas Edison

// - shift 
// const array = people.slice()
// console.log(array) // ["Benjamin Franklin", "Thomas Edison", "Franklin Roosevelt", "Mahatma Gandhi", "Napoleon Bonaparte", "Abraham Lincoln"]
// array.shift()
// console.log(array) // ["Thomas Edison", "Franklin Roosevelt", "Mahatma Gandhi", "Napoleon Bonaparte", "Abraham Lincoln"]
// array.shift()
// console.log(array) // ["Franklin Roosevelt", "Mahatma Gandhi", "Napoleon Bonaparte", "Abraham Lincoln"]


// - splice
// const array = people.slice()
// console.log(array)

// const deleted = array.splice(0, 2)
// console.log(deleted)
// console.log(array)


// 6. 
// - pop
// const array = people.slice()
// console.log(array)
// array.pop()
// console.log(array)
// array.pop()
// console.log(array)

// - splice

// const array = people.slice()
// console.log(array)
// const copy = array.splice(array.length - 2, 2)

// console.log(copy)
// console.log(array)


// 7.  
// const array = people.slice()
// console.log(array) // ["Benjamin Franklin", "Thomas Edison", "Franklin Roosevelt", "Mahatma Gandhi", "Napoleon Bonaparte", "Abraham Lincoln"]
// const storeAnswer = array.splice('Mahatma Gandhi', 1)

// console.log(storeAnswer)

// const storeAnswer2 = array.splice(2, 1)
// console.log(storeAnswer2)

// console.log(array) 






















