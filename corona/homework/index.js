let score = document.getElementById('score')
let disp = document.getElementById('calc')
let trueBtn = document.getElementById('true')
let falseBtn = document.getElementById('false')
let ans
let timer = document.getElementById('timer')
let time = 5
interval = setInterval(function(){
    timer.innerHTML = 'TIME: ' + time
    time--
    if (time<0){
        clearInterval(interval)
        score.innerText = 'SCORE: ' + 0
    }
},1000)
function randomMath(){
    let a = Math.floor(Math.random() * 10)
    let b = Math.floor(Math.random() * 10)
    let c = Math.round(Math.sin((Math.random() * 181) * Math.PI / 180))
    disp.innerText = `${a} + ${b} = ${a + b + c}`
    if ((a+b) === (a+b+c)){
        ans = true
    }
    else{
        ans = false
    }
    time = 5
    return ans
}
score.innerText = 'SCORE: ' + 0
let  s = 0
randomMath()
trueBtn.addEventListener('click', function(){
    if  (ans){
        s++
        score.innerText = 'SCORE: ' + s 
        randomMath()
        interval
    }
    else {
        s = 0
        score.innerText = 'SCORE: ' + s
        randomMath()
        interval
    }
})
falseBtn.addEventListener('click', function(){
    if  (!ans){
        s++
        score.innerText = 'SCORE: ' + s
        randomMath()
    }
    else {
        s = 0
        score.innerText = 'SCORE: ' + s
        randomMath()
    }
})
