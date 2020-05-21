// // define
// // parameter:  Tham so dau vao
// function greeting(array) {
//     console.log('Hello',name[0])
// }


// //call
// greeting('Hieu')
// greeting('Nam')

// function sum(a, b){
//     let c = a + b
//     return c
// }

// function loop(array, action){
//     for (let i=0; i<array.length; i++){
//         action(array[i], i)
//     }
// }

// function action(item){
//     console.log(item)
// }

// function action2(item, index){
//     string = String(item)
//     console.log(string)
// }
// loop([1, 2, 3,  4, 5],action)  //callback

// loop([1, 2, 3,  4, 5],action2)
// let result = sum
// console.log(result)
// let total = result(3,4)

// console.log(total)

// setTimeout(action, 2000)

// array = ['a', 'b', 'c']
// function action(item, i){
//     console.log(i)
//     console.log(item)
// }


//array.forEach(action)

// array.forEach(function(item){
//     console.log(item)
// })

// array.filter()
// array.map()
// array.reduce()

const array = [1, 2, 3, 4, 5, 6, 7]
sum = array.reduce((x,y) => x+y)
console.log(sum)

// () => {} : function ko co return
// (c) => c+1:  return c+1  
total = array.reduce(function(previousValue, item){
    return previousValue + item
}, 0)
console.log(total)