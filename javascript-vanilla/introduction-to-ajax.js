// XMLHttpRequest
// construct the request 
// request.open(method, link)
// send the request out 

const request = new XMLHttpRequest()
request.addEventListener('load', e => {
    console.log(e.target.response)
})
request.open('get', 'https://api.github.com/users/Gitpersonal/repos')
request.send();



