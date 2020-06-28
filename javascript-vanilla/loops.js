/////////////////////////////////////////////
// older version start

// #########################################################################
// for(let i = 0; i < 10; i++){
//   const num = i + 1
//   console.log('Number ' +  num  + ' added')
// }

// console.log('Next number to add?')



const numbers = [1, 12, 4, 18, 9, 7, 11, 3, 50, 5, 6]

// for of 
// 1.
// for(let num of numbers){
//   console.log("Short version for of " + num);
// }

//.2 

// for(let num of numbers){
//   if(num > 5){
//     console.log(num)
//   }
// }


let array = []

// for(const num of numbers){
//   if(num > 10){
//     // array.push(num * 5);
//     console.log(array.push(num * 5))
//   }
// }



// let timesNum = [];

// for(let num of numbers){
//   timesNum = num * 5;
//   console.log(timesNum)
// }



// for (let i = 0; i < numbers.length; i++){
//     const num = numbers [i]
//     console.log('Long version for loop' + num)
// }

// for(let i = 0; i < numbers.length; i++){
//   const num = numbers[i];
//   if(num < 20){
//     console.log(num + ' Is less than 20')
//   }
// }

// const numbers = [25,22,12,56,8,18,340,50,60,100,200,300,400,500,600]

// for(let i = 0; i < numbers.length; i++){
//   const num = numbers[i];
//   if(num > 20){
//     console.log(num + ' Is less than 20')
//   }
// }


// Exercise
// const numbers = [1, 12, 4, 18, 9, 7, 11, 3, 50, 5, 6]
// 1.
// for(let i = 0; i < numbers.length; i++){
//   num = numbers[i];
//   console.log('Number ' + num); // Number 1 Number 12 Number 4 Number 18 Number 9 Number 7 Number 11 Number 3 Number 50 Number 5 Number 6
// }


// 2.
// for(let i = 0; i < numbers.length; i++){
//   const num = numbers[i];
//   if(num > 5) {
//     console.log(num); // 12 18 9 7 11 50 6
//   }
// }


//3.
// let numGreaterThan = []
// for(let i = 0; i < numbers.length; i++) {
//   const ngt = numbers[i]

//   numGreaterThan = ngt;

//   if (ngt > 10) {
//     console.log(ngt);  
//   }  
// }



// 4.

// let numMultiply = []

// for(let i = 0; i < numbers.length; i++){
//   const times = numbers[i];
//     numMultiply = times * 5;
//       console.log(numMultiply) // 5 60 20 90 45 35 55 15 250 25 30
// }





// const fruitBasket = ['banana', 'pear', 'guava']

// for(let fruit of fruitBasket){
//   console.log("There's a " + fruit + " in the basket");
// }









 
	// <![CDATA[  <-- For SVG support
	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}
	// ]]>

// older version end
// #########################################################################

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

