// async function fetchData(){
//     const pokemonData = fetch('https://pokeapi.co/api/v2/ability/31/')
//     const realData = await pokemonData.json()
//     console.log(realData)
// }
// fetchData()

function diCho(){
    //console.log('Di cho xong roi')
    return new Promise(function(resolve, reject){
        const random = Math.random()
        console.log(random)
        if (random<0.5){
            const item = 'mo rau'
            resolve(item)
     
        }
        else {
            reject()
        }
        const item = 'mo rau'
        resolve(item)
    })
}

// diCho().then(function(data){
//     console.log(data)
// }).catch(function(){
//     console.log('khong co gi het')
// })

// const action = diCho()
// console.log(action)
// setTimeout(diCho,5)
// console.log('rau cua me day')

fetch('https://pokeapi.co/api/v2/ability/31/').then(function(data){
    data.json().then(function(realData){
        console.log(realData)
    })
    
})


async function fetchData(){
    try {
        const item = await diCho()
        console.log(item)
    }
    catch(erros){
        console.log(erros)
    }
}
