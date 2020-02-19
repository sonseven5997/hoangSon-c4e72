let age = Number(prompt('How old are you?'))
if(age<14){
    console.log('You are not old enough to view this content')
}
else{
    console.log('Enjoy!')
}
console.log('=====================================')
let number = Number(prompt('Enter a number:'))
if(number>=(9/2)){
    console.log('Higher half of 9')
}
else{
    console.log('Lower half of 9')
}

console.log('=====================================')
let n = Number(prompt('n = '))
let x = Number(prompt('x = '))
if(x>=(n/2)){
    console.log(`${x} is in Higher half of ${n}`)
}
else{
    console.log(`${x} is in Lower half of ${n}`)
}
console.log('======================================')

let x2 = Number(prompt('x = '))
if(x2 % 2 === 0){
    console.log(`${x2} is an even number`)
}
else{
    console.log(`${x2} is an odd number`)
}
console.log('===========================================')
let x = prompt('nhap x =')
let countL = 0
let countH = 0
for(let i = 0;i<x;i++){
    if(i<x/2){
        countL+=1

    }else{
        countH+=1
    }
}
console.log(`${countL} L, ${countH} H`)

console.log('==============================================')
let x = prompt('Nhap x = ')
for(let i = 0;i<x;i++){
    if(i%2 === 0){
        console.log('0')
    }
    else {
        console.log('1')
    }
}
let mass = prompt('Your weight in kg?')
let height = prompt('Your height in cm?')
let BMI = mass / ((height/100))**2
alert(`Your BMI is ${BMI}`)
if (BMI<16){
    console.log('Severely underweight')
}else if(16<=BMI && BMI<18.5){
    console.log('Underweight')
}else if(18.5<=BMI  && BMI<25){
    console.log('Normal')
}else if(25<=BMI  && BMI<30){
    console.log('Overweight')
}else {
    console.log('Obese')
}
