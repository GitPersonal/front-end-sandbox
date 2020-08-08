// XMLHttpRequest
// construct the request 
// request.open(method, link)
// send the request out 

const request = new XMLHttpRequest()
request.addEventListener('load', e => {
    const repos = JSON.parse(e.target.response)
    console.log(repos)
})
request.open('get', 'https://api.github.com/users/Gitpersonal/repos')
request.send();



const data = repos.map(repo => {
    return {
        name: repo.name,
        url: repo['html_url'],
        stars:repo['stargazers_count']
    }
})