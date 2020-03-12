let input = document.createElement('input')
let btn = document.createElement('button')
btn.innerText = 'Upper it !!'
let text = document.createElement('p')
text.innerText = 'Your result will appear here'
let body = document.getElementById('body')
body.appendChild(input)
body.appendChild(btn)
body.appendChild(text)
input.placeholder = 'Enter your name'
let newText = document.createElement('p')
body.appendChild(newText)
btn.addEventListener('click',function(){
    newText.innerText = ''
    newText.innerText = input.value.toUpperCase()
})