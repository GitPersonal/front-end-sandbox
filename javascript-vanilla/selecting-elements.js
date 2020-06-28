// querySelectorAll

// const paragraphs = document.querySelectorAll('p');

// const items = document.querySelectorAll('.item')
// console.log(items)


// for(let item of items){
//     item.classList.add('blue')
// }

// items.forEach(item => item.classList.add('red'))


// items.forEach(function(item){
//     item.classList.add('red')
// })


// const items = document.querySelectorAll('.item')

// // items.forEach(item => item.classList.add('blue'))

// const firstItem = items[0];

// console.log(firstItem)

// const secondItem = items[1];

// console.log(firstItem)

// const thirdItem = items[2];

// console.log(firstItem)



// ------------------------------------
//              Exercise
// ------------------------------------


// 1. Select all good guys with attributes
    const gooodGuys =  document.querySelectorAll('[data-type="good-guy"]')
console.log(gooodGuys)

// 2. Give good guys a yay class
const yay = document.querySelectorAll('[data-type="good-guy"]')
    // forEach
    yay.forEach(yays => yays.classList.add('yay-forEach'))

    // for of
    // for(let yayClass of yay){
    //     yayClass.classList.add('yay')
    // }

     
    


// 3. Select all villains with attributes
const villians = document.querySelectorAll('[data-type="villian"]')
console.log(villians)


// 4. Give villains a nay class
const empire = document.querySelectorAll('[data-type="villain"]')
// for(let nayClass of empire){
//     nayClass.classList.add('nay')
// }

    // forEach 
    empire.forEach(evil => evil.classList.add('nay-ForEach'))


// 5. Select all characters through the character class
const character = Array.from(document.querySelectorAll('.character'))

// 6. Give all characters a star-wars class

     // forEach 
    character.forEach(charactersForEach => charactersForEach.classList.add('starwars'))

    // for of 
//         for(let characters of character){
//     characters.classList.add('starwars')
// }

// for loop 
// for(let i = 0; i < character.length; i++){
//     const characters = character[i];
//     characters.classList.add('cool')
// }




// forEach need to convert the results of querySelectorAll from a Nodelist into an Array. 
// we can do this with Array.from 

// const accordions = Array.from(document.querySelectorAll('.accordion'))





















