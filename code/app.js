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
