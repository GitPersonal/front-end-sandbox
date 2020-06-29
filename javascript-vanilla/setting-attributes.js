// Setting Attributes

// Element.setAttribute('name-of-attribute', 'value to set')


// The first argument is the name of the attribute you want to set. The second argument is the value of the attribute you wish to set.

// const element = document.querySelector('element')
// element.setAttribute('checked', true)



// You can also set custom attributes with Element.setAttribute.

// You can also set custom attributes with Element.setAttribute.
// element.setAttribute('data-color', 'red')

// ****************************************************
// ************* Reading Attribute *************
// ****************************************************

// Element.getAttribute('name-of-attribute')

// const clownHat = document.querySelector('.clown-hat')
// const dataColor = clownHat.getAttribute('data-color')
// const numStripes = clownHat.getAttribute('data-num-stripes')
// const numStripes2 = parseInt(clownHat.getAttribute('data-num-stripes'))

// clownHat.removeAttribute('data-color');



// console.log(dataColor)
// console.log(numStripes)
// console.log(numStripes2)
// console.log(clownHat.dataset)




// Exercise
// Practice adding, and removing attributes with Element.getAttribute, Element.setAttribute and Element.dataset.

// Try these tasks:

// Set an attribute with Element.setAttribute
  // console.log(starwars)


// Get an attribute with Element.getAttribute
// console.log(gold)


// Set an attribute with Element.dataset
// Get an attribute with Element.dataset
// Remove attribute with Element.removeAttribute






// const gold = starwars.setAttribute('color', 'gold');
// const getGold = starwars.getAttribute('data-color');

// const colorDataSet = starwars.dataset.color


// console.log(starwars)
// console.log(getGold)

// dataset 
// console.log(starwars.dataset)

const starwars = document.querySelector('.star-wars')
starwars.removeAttribute('data-num-stripes')


// console.log(colorDataSet) 





