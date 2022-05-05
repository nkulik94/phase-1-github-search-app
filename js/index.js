document.addEventListener('DOMContentLoaded', programButton)
function programButton() {
    document.getElementById('github-form').addEventListener('submit', e => handleSearch(e))
}

function handleSearch(e) {
    e.preventDefault()
    const input = e.target.querySelector('#search')
    if (input.value !== '') {
        fetch(`https://api.github.com/search/users?q=${input.value}`)
        .then(res => res.json())
        .then(userData => {
            const li = document.createElement('li')
            li.textContent = 'Click on a user to view a list of their repositories'
            li.style.margin = '10px'
            document.getElementById('user-list').appendChild(li)
            userData.items.map(user => handleData(user))
        })
        input.value = ''
    }
}
function handleData(userData) {
    const li = document.createElement('li')
    const avatar = document.createElement('img')
    avatar.src = userData.avatar_url
    li.appendChild(avatar)
    const username = document.createElement('h4')
    username.textContent = userData.login
    li.appendChild(username)
    const link = document.createElement('a')
    link.href = userData.html_url
    link.textContent = `Check out ${username.textContent}'s profile`
    li.appendChild(link)
    li.className = `${username.textContent}-card`
    styleUser(li)
    document.getElementById('user-list').appendChild(li)
    li.addEventListener('click', e => listRepos(li.className, e.target))
}
function styleUser(user) {
    user.style.margin = '10px'
    user.style.padding = '10px'
    user.style.border = '1px solid black'
    user.style.textAlign = 'center'
    user.querySelector('img').style.width = '150px'
    user.querySelector('img').style.height = '150px'
}
function listRepos(listClass, target) {
    const li = document.querySelector(`.${listClass}`)
    if ((target === li.querySelector('a') || target === li.querySelector('button')) === false) {
        
    }
}
console.log('hey')