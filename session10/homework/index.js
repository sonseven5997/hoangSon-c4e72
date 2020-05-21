//BAI 1
// function  promise(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             return resolve('Promise is da best')
//         }, 5000);
//     })
// } 

// promise().then(function(output){
//     console.log(output)
// })

// async function promise2(){
//     const prom = await promise()
//     await console.log(prom)
    
// }
//promise2()

//Bai 4
// function random(){
//     return (Math.random()*11)
// }

//Bai 5
// function random(x1,x2){
//     return Math.random()*(x2-x1) + x1
// }

//Bai 6
// function distance(x1,y1,x2,y2){
//     return Math.sqrt((Math.pow(x2-x1),2) + (Math.pow(y2-y1),2))
// }

//Bai 7
async function fetchData(){
    const API = await fetch('http://quotes.rest/qod.json')
    const data = await API.json()
    console.log(data)
    return data
}

async function render(){
    const data = await fetchData()
    document.getElementById('quote').innerHTML = await data.contents.quotes[0].quote
    document.getElementById('author').innerHTML = await data.contents.quotes[0].author
}

render()
