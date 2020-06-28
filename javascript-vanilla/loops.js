// ******************************** for loop *********************************

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// *****************************************************************
// *****************************************************************
// for (initialExpression; condition; incrementExpression) {
//     statement
//   }

// function bounceBall(){
      
// }


// for (let i = 0; i < 10; i++) {
//     bounceBall()
//     const timesBounced = i + 1
//     console.log('The ball has bounced ' + timesBounced + ' times')
// }

// console.log('next line of code')




// for (let i = 0; i < 10; i++) {
//     const timesBounced = i + 1
//     console.log('The Ball has bounced ' + timesBounced + ' times')
// }

// console.log('next line of code')





// array.forEach((currentValue, index, array)) => {
//     // your loop here
// }


// Array.forEach(currentValue => {

// })



// const fruitBasket = ['banana', 'peat', 'guava']

// forEach loop

// fruitBasket.forEach(function(fruit){
//     console.log(fruit)
// })


// with arrow functions 

// fruitBasket.forEach(fruit => console.log(fruit))


// for of 

// for (let fruit of fruitBasket) {
//     console.log(fruit)
// }

// for loop 

// for (let i = 0; i < fruitBasket.length; i++) {
//     console.log(fruitBasket[i])
// };

// |||||||||||||||||||||||||||||||||||||||||||||||||
//                      exercise 
// |||||||||||||||||||||||||||||||||||||||||||||||||

const people = [
    { firstName: 'Benjamin', lastName: 'Franklin', yearOfDeath: 1790 },
    { firstName: 'Thomas', lastName: 'Edison', yearOfDeath: 1931 },
    { firstName: 'Franklin', lastName: 'Roosevelt', yearOfDeath: 1945 },
    { firstName: 'Napolean', lastName: 'Bonaparte', yearOfDeath: 1821 },
    { firstName: 'Abraham', lastName: 'Lincoln', yearOfDeath: 1865 },
    { firstName: 'Mother', lastName: 'Theresa', yearOfDeath: 1962 },
    { firstName: 'Mahatma', lastName: 'Gandhi', yearOfDeath: 1948 },
    { firstName: 'Winston', lastName: 'Churchill', yearOfDeath: 1965 },
    { firstName: 'Charles', lastName: 'Darwin', yearOfDeath: 1882 },
    { firstName: 'Albert', lastName: 'Einstein', yearOfDeath: 1955 },
    { firstName: 'Pablo', lastName: 'Picasso', yearOfDeath: 1973 },
    { firstName: 'Ludwig', lastName: 'Beethoven', yearOfDeath: 1827 },
    { firstName: 'Walt', lastName: 'Disney', yearOfDeath: 1966 },
    { firstName: 'Henry', lastName: 'Ford', yearOfDeath: 1947 },
    { firstName: 'Steve', lastName: 'Jobs', yearOfDeath: 2012 }
  ]


// people.forEach(person => console.log(person.firstName)); 



let arrayFirstName = []
let arrayLastName = []

// people.forEach(firstOnly => console.log(firstOnly.firstName))


people.forEach(function(firstOnly){
    arrayFirstName = firstOnly;
    console.log(arrayFirstName.firstName)
})


people.forEach(function(lastOnly){
    arrayLastName = lastOnly;
    console.log(arrayLastName.lastName)
})


// fruitBasket.forEach(function(fruit){
//     console.log(fruit)
// })

