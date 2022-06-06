const div = document.createElement('div')
const p = document.createElement("p")
const heading = document.createElement("h3")
p.style.color = 'red'
p.innerText = 'Hey, iam red'
heading.style.color = "blue"
heading.innerText = "Hey, iam blue h3"
div.style.border = 'black'
div.style.backgroundColor ='pink'


const content = document.querySelector('.content')
content.appendChild(p)
content.appendChild(heading)
content.appendChild(div)
const container = document.querySelector('#container')
container.appendChild(content)

function alertFn(e) {
  console.log(e.target)
  e.target.style.backgroundColor = 'red'
  alert('Hello world')
}

const btn = document.querySelector('#btn')
btn.addEventListener('click', alertFn)