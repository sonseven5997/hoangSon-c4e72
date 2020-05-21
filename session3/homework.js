// //Bài 1:
// let a = 5
// let b = 6
// console.log(a,b)

// let c = 0
// c = a
// a = b
// b = c
// console.log(a,b)
// let a = 1,
//     b = 2;
// [a, b] = [b, a];

// console.log('a:', a, 'b:', b);
// Bài 2
// const s = 'Hello beauty there'
// s1 = s.split(' ')
// console.log(s1)

// Bài 3
// const a = [4, 5, 7, -8];
// console.log(...a);

// Bài 4 làm rồi nha

//Bài 5
// let string = prompt('Enter a sequence of Number, seperated by comas')
// let array = string.split(',')
// console.log(...array)
// let sum = 0
// for (i=0; i<array.length; i++){
//     sum += Number(array[i])
// }
// console.log(`the sum of them is ${sum}`)

//Bài 6
// let string = prompt('Enter a sequence of Number, seperated by comas')
// let array = string.split(',')
// console.log(...array)
// console.log(`The smallest number is ${Math.min(...array)}`)
//Bài 7
// const arr = [3, 4, 6, -9, 10, -88, 2]
// let typedNumber = Number(prompt('Enter a number'))
// let flag = false
//     index = 0
// for (let i=0; i<arr.length;  i++){
//     if(typedNumber !== arr[i]){

//     }
//     else {
//         flag = true
//         index = i
//     }   
// }
// if (flag == true){
//     console.log(`${typedNumber} is found in my array at index ${index}`)
// }
// else{
//     console.log(`${typedNumber} is NOT found in my array`)
// }

// Bài 8.1, 8.2, 8.3, 8.4
// let n = Number(prompt('Enter number of sheeps'))
// let sheep = []
// for (let i=0; i<n; i++){
//     sheep[i] = prompt(`Enter the size of the ${i}th sheep`)
// }
// console.log(...sheep)
// console.log(`Now my biggest sheep has size ${Math.max(...sheep)}, let's shave it`)
// let maxIndex = sheep.indexOf(Math.max(...sheep).toString())
// sheep[maxIndex] = 8
// console.log('After shearing, here is my flock',...sheep)
// console.log('MONTH 1')
// for (let i=0; i<sheep.length; i++){
//     sheep[i] = Number(sheep[i])
//     sheep[i] += 50
// }
// console.log('One month has passed, my sheeps have grown, here are their sizes',...sheep)

// Bài 8.5 8.6

// let n = Number(prompt('Enter number of sheeps'))
// let sheep = []
// for (let i=0; i<n; i++){
//     sheep[i] = prompt(`Enter the size of the ${i}th sheep`)
// }
// console.log(...sheep)
// let month = Number(prompt('Enter number of months'))
// for (let i=0; i<month; i++){
//     for (let i=0; i<sheep.length; i++){
//         sheep[i] = Number(sheep[i])
//     }
    
//     console.log(`Now my biggest sheep has size ${Math.max(...sheep)}, let's shave it`)
//     let maxIndex = sheep.indexOf(Math.max(...sheep))
//     sheep[maxIndex] = 8
//     console.log('After shearing, here is my flock',...sheep)
//     console.log(`MONTH ${i+1}`)
//     for (let i=0; i<sheep.length; i++){
//         sheep[i] = Number(sheep[i])
//         sheep[i] += 50
//     }
// console.log('One month has passed, my sheeps have grown, here are their sizes',...sheep)
// }
// let sum = 0
// for (let i=0; i<sheep.length; i++){
//     sheep[i] = Number(sheep[i])
//     sum += sheep[i]
// }
// console.log(`My flock has size in total: ${sum}`)
// console.log(`I would get ${sum}*2 = ${sum*2}$`)

// Bài 9
// clear()
// setshape('car')
// const colors = ['red', 'gray', 'blue', 'purple', 'cyan'];
// for (let i=0; i<colors.length; i++){
//   color(colors[i])
//   for(let j=0; j<4; j++){
//     fd(30*(i+1))
//     lt(270)
//   }
// }

// Bài 10
// let name = prompt('Enter a sequence of names, seperated by comas')
// let nameArray = name.split(',')
// console.log(...nameArray)
// for (let i=0; i<nameArray.length; i++){
//     nameArray[i] = '<' + nameArray[i] + '>'
// }
// console.log(...nameArray)

// Bài 11
let number = prompt('Enter a sequence of numbers, seperated by comas')
let numberArray = number.split(',')
console.log(...numberArray)
for (let i=0; i<numberArray.length; i++){
        if (numberArray[i]%2 === 1){

        }
        else {
            numberArray.splice(i,1)
        }
} 
console.log(...numberArray)