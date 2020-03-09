let input = document.querySelector('#input')
let time = 0
input.addEventListener('input', function(){
    time = Number(input.value) + 1
})
let startButton = document.querySelector('.start')
let stopButton = document.querySelector('.stop')

startButton.addEventListener('click', function(){
    let countdown = setInterval(function(){
        time--
        document.querySelector('h3').innerText = time
        if (time === 0){
            clearInterval(countdown)
            document.querySelector('h3').innerText = `Time's up `
        }
    },1000)
})

stopButton.addEventListener('click', function(){
    setInterval(function(){
        document.querySelector('h3').innerText = 'Stopped';
    },0)
})
