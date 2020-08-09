// XMLHttpRequest
// construct the request 
// request.open(method, link)
// send the request out 

// const request = new XMLHttpRequest()
// request.addEventListener('load', e => {
//     const repos = JSON.parse(e.target.response)
//     const data = repos.map(repo => {
//         return {
//             films: repo['https://swapi.dev/api/films/'],
//             people: repo['https://swapi.dev/api/people/'],
//             planets:repo['https://swapi.dev/api/planets/']
//         }
//     })
//     const ol = document.createElement('ol')

//     ol.innerHTML = data.map(repo => {
//     return `<li>
//                  <a href="${repo.url}">${repo.name} (${repo.stars} stars)</a>
//            </li>`
//     }).join('')

//     document.body.appendChild(ol)
// })
// request.open('get', 'https://api.github.com/users/zellwk/repos')
// request.send();








// const request = new XMLHttpRequest()
// request.addEventListener('load', ev => {
//   const repos = JSON.parse(ev.target.response)
//   const htmlString = repos.map(repo => {
//     return {
//       name: repo.name,
//       url: repo['html_url'],
//       stars: repo['stargazers_count']
//     }
//   })
//     .filter(repo => repo.stars > 50)
//     .map(repo => `<li>${repo.name}: ${repo.stars} stars</li>`)
//     .join('')

//   const ol = document.createElement('ol')
//   ol.innerHTML = htmlString
//   document.body.appendChild(ol)
// })
// request.open('get', 'https://api.github.com/users/zellwk/repos')
// request.send()