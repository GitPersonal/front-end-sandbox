// **************************************************************
    // >>>>>>>>>>>>>>>>>>>  preventDefault <<<<<<<<<<<<<<<<<<<
// **************************************************************
// event.addEventListener('click', evt => evt.preventDefault())


// Element.addEventListener('click', e => {
//     evt.preventDefault()
//     console.log(evt.preventDefault())
// })

// const button = document.querySelector('button')
// button.addEventListener('click', evt => {
//     evt.preventDefault()
//     console.log(evt.preventDefault())
//     // console.log(button)
// })

const anchor = document.querySelector('a');

anchor.addEventListener('click', evt =>{
    evt.preventDefault();
    console.log(evt.preventDefault())
})

