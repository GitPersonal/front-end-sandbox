// const beatles = []

// beatles[0] = 'Lennon',
// beatles[1] = 'McCartney',
// beatles[2] = 'Harrison',
// beatles[3] = 'Ringo'

// console.log(beatles)


// creating arrays
// const emptyArray =[]

// const expenses = [100.10, 45. -45]

// const data = [true, 12, 'Andrew']

// *****************************************

// reading array values
// const names = ['Andrew', 'Viknam','Zhu']

// console.log(names[0]);

// console.log(names[names.length -1])

// *****************************************

// Adding items to an array
// const nums = [1] 
// nums.push(12) //before
// nums.unshift(3) //after

// console.log(nums)

// *****************************************

// splice 
// const nums = [99, 199, 299]

// nums.splice(1, 0 , 399);
// console.log(nums)

// nums.splice(nums.length, 0, 'cool')
// console.log(nums)

// *****************************************

// remove items
// const numbers = [10, 20, 30, 40]
// numbers.pop()   // [10,20,30]
// numbers.pop()   // [10,20]
// numbers.shift() // [20]
// console.log(numbers)


// const numbSplice = [99, 199, 299]
// numbSplice.splice(1, 1) // remove the second item in the list
// console.log(numbSplice) // [99, 299]


// *****************************************

// Changing Array items

// const numSpliceChange = [10,20,30,40]
// numSpliceChange.splice(0, 1, 2000)
// console.log(numSpliceChange) // [ 2000, 20, 30, 40 ]



// *****************************************

// for Each 
// const todos = ['order cat food','clean kitchen','buy food','do work','exercise']

// todos.forEach(function(todo, index){
//     const num = index + 1
//     console.log(`${num}. ${todo}`)
// })

// for loop 

// const players = ['Breanna','Kathi','Hunter','Andrew',]

// for(let count = 0; count < 3 && count < players.length; count++) {
//     const num = count + 1
//     const player = players[count]
//     console.log(`${num}. ${player}`) 
// }



// *****************************************

// Searching Arrays 
//  indexOf
// const places = ['Philadelphis','Texas','Vermont']

// const index = places.indexOf('Vermont')

// console.log(index) // 2


// let beatlesNames = ['John','Paul','George','Ringo']

// beatlesNames.sort()

// console.log(beatlesNames)


// let numberSort = [520, 33, 9, 199, 100001.02, 1, 630, 395];

// numberSort.sort(function (a, b) {
//     return a - b;   
// });

// console.log(numberSort)


// ********** sort **********

// let years = [1984,1980,1988,1985,1982,1987,1986,1981,1989,1983,]

// years.sort(function (a,b) {
//     return a - b; // asending order
//     return b - a; // decending order
// })

// console.log(years) 
        //[ 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989 ] assending order
        // [ 1989, 1988, 1987, 1986, 1985, 1984, 1983, 1982, 1981, 1980 ] decending order



// const people = [
//     {
//         name:'Chuck',
//         age: 25
//     },
//     {
//         name:'Mark',
//         age: 50
//     },
//     {
//         name:'Amy',
//         age: 85
//     }
// ];

// const sortByAge = people.sort(function (a,b) {
//         return a.name - b.age;
// });

// console.log(sortByAge);



// const alphaLetters = ['f','e','b','d','a','c'];

// alphaLetters.sort();

// console.log(alphaLetters)

function cool() {
    document.write('cool');
}

cool();