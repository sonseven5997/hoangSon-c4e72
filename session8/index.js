const pElement = document.querySelectorAll('.text')
const inputElement = document.getElementById('input')
for (let i=0; i<pElement.length; i++){
    pElement[i].addEventListener('click', function(e){
        // pElement[i].style.color = 'red'
        // console.log(e)
        e.target.style.color = 'red'
    })
    
}
console.log(pElement)
const textContainer= document.getElementsByTagName('h1')[0]
const bodyElement = document.querySelector('body')
const button = document.querySelector('button')
const newElement = document.createElement('p')
inputElement.addEventListener('input', function(){
    console.dir(inputElement.value)
    newElement.innerText = inputElement.value
    bodyElement.appendChild(newElement)
})


// const pElement1 = document.getElementsByTagName('p')
// console.log(pElement1)
// const  pElement2 = document.getElementsByClassName('text')
// console.log(pElement2)
// const pElement3 = document.getElementById('paragraph')
// console.log(pElement3)


// const container = document.getElementById('container')
// console.dir(container)

