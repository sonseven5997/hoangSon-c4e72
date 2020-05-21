
let bodyElement = document.querySelector("#count")
bodyElement.innerText = Number(0)

let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
plus.addEventListener('click', function(){
    bodyElement.innerText = Number(bodyElement.innerText) + 1
})
minus.addEventListener('click', function(){
    bodyElement.innerText = Number(bodyElement.innerText) - 1
})