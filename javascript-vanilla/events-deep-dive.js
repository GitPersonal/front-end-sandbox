// const button = document.querySelector('button')
// button.addEventListener('click', e => {
//     button.style.color = 'blue'
//     button.style.fontSize = '3rem'
//     button.style.textTransform = 'uppercase'
// })


// creating a callback
// const changeColorToBlue = e => {
//     button.style.color = 'blue'
// }


// const button = document.querySelector('button')
// button.addEventListener('click', changeColorToBlue)


// this keyword
// const changeColorToRed = e =>{
//     button.style.color = 'red'
// }


// const button = document.querySelector('button')
// button.addEventListener('click', function(e){
//     console.log(this)
//     // this.style.color = 'red'
// })



// Event.currentTarget
const button = document.querySelector('button')
// button.addEventListener('click', event => {
//     console.log(event.currentTarget)
// })


button.addEventListener('click', event => {
    event.currentTarget.style.color = 'red';
})



