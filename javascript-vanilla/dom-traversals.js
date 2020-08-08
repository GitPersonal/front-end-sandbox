// const component = document.querySelector('.component');
// const componentTitle = document.querySelector('.component__title');

// const lionEmoji = document.querySelector('.lion')
// const watchEmoji = document.querySelector('.watch')
// const coffeeEmoji = document.querySelector('.coffee')
// const peaceEmoji = document.querySelector('.peace')

// console.log(component)
// console.log(componentTitle)
// console.log(lionEmoji)
// console.log(watchEmoji)
// console.log(coffeeEmoji)
// console.log(peaceEmoji)

// const list = document.querySelector('.list');
// const listItems = list.children;

// console.log(listItems);


// const array = Array.from(HTMLCollection);
// array.forEach(el => {
// // do something
// });



// =============================================
    // Selecting a specific child 
// =============================================
// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++ firstElementChild +++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// you can also select the first element with *** firstElementChild ***
// const list = document.querySelectorAll('li');
// const firstItem = list[0];
// console.log(firstItem)
//             // ==== OR ==== 
// const list = document.querySelectorAll('.list');
// const firstItem = list.firstElementChild;

//////////////////////////////////////////////////////////////////////////////////////////////
// you can select the first element with children like this: const firstItem = listItems[0];

// const listItems = document.querySelectorAll('.list');

// const firstItem = listItems[0];
// const secondItem = listItems[1];
// const thirdItem = listItems[2];
// const fourthItem = listItems[3];
// const fifthItem = listItems[4];



// console.log(firstItem);
// console.log(secondItem);
// console.log(thirdItem);
// console.log(fourthItem);
// console.log(fifthItem);





// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++ Traversing upwards +++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++


// There are two ways to traverse upwards 
// 1. parentElement
// 2. closet


  // <<<<<<<<<<<<<<<<<<<< parentElement >>>>>>>>>>>>>>>>
  // const firstListItem = document.querySelector('li');
  // const list = firstListItem.parentElement
  // console.log(list) 



  // <<<<<<<<<<<<<<<<<<<< closest >>>>>>>>>>>>>>>>
  // To find an element that can be multiple levels above the current element 
  // const closestAncestor = Element.closest(selector)

// const firstLink = document.querySelector('a')

// const list = firstLink.closest('.list') 
// console.log(list)




// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++ Traversing sideways +++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// There are three ways to traverse sideways:

// 1. nextElementSibling
// 2. previousElementSibling
// 3. Combining parentElement, children, and index

// <<<<<<<<<<<<<<<<<<<< nextElementSibling >>>>>>>>>>>>>>>>
// const nextElem = Node.nextElementSibling;
// console.log(nextElem)


const firstListItem = document.querySelector('li');

const secondListItem = firstListItem.nextElementSibling
console.log(secondListItem)






