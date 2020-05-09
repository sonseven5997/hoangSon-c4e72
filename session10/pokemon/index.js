
async function fetchData(){
    const data = await fetch('https://pokeapi.co/api/v2/pokemon/3/')
    const item = await data.json()
    return item
}
fetchData()

async function render(){
    const item = await fetchData()
    const name = item.name
    const weight = item.weight
    const abilities = item.abilities
    const rootElement = document.getElementById('root')
    const html = `
        <p>Name: ${name} </p>
        <p>Weight: ${weight} </p>

    `
//    rootElement.insertAdjacentHTML('beforeend',html)
    abilities.forEach(function(param){
        console.log(param.ability.name)
    })
    const type =  item.types
    type.forEach(function(param){
        console.log(param.type.name)
    })
        
}

render()