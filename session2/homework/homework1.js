for(let i=0;i<7;i++){
    console.log(i)
}
console.log('=========')

let n1 = prompt('Nhap n = ')
for(let i=0;i<n1;i++){
    console.log(i)
}
console.log('==========')

let n2 = prompt('Nhap n = ')
{
for(let i=3;i<n2;i++){
    console.log(i)
}}
console.log('==========')

let n3 = Number(prompt('Nhap n = '))
let c1 = Number(prompt('Nhap c = '))
for(let i=c1;i<n3;i++){
    console.log(i)
}
console.log('==========')


let n4 = Number(prompt('Nhap n = '))
let c2 = Number(prompt('Nhap c = '))
for(let i=c2;i<n4;i+=3){
    console.log(i)
}
console.log('==========')

let n5 = Number(prompt('Nhap n = '))
let c3 = Number(prompt('Nhap c = '))
let s = Number(prompt('Nhap s ='))
for(let i=c3;i<n5;i+=s){
    console.log(i)
}
console.log('==========')

let n = Number(prompt('Nhap n ='))
let k = 1
for(let i=1;i<=n;i++){
    k=k*i
}
console.log(`The factorial of ${n} is ${k}`)
console.log('============')
