let heading = document.createElement('h1')
heading.innerText = 'Your Belonging'
document.querySelector('body').insertAdjacentElement('beforebegin',heading)
let items = ['Backpack', 'MiBand Watch', 'Ring']
console.dir(items)
let list = document.createElement('table')
document.querySelector('body').appendChild(list)
let container = document.createElement('ul')
list.appendChild(container)
for  (let i=0; i<items.length;i++){
    container.insertAdjacentHTML('beforeend', `<li>${items[i]}</li>`)
}
let btn = document.createElement('button')
document.querySelector('body').insertAdjacentElement('afterbegin',btn)
let input = document.createElement('input')
document.querySelector('body').insertAdjacentElement('afterbegin',input)
btn.innerText = 'Add'
input.placeholder = 'New item'
addRemoveButton()
btn.addEventListener('click',function(){
    items.push(input.value)
    container.innerText = ''
    for  (let i=0; i<items.length;i++){
        container.insertAdjacentHTML('beforeend', `<li>${items[i]}</li>`)
    }         
    addRemoveButton()
})


function addRemoveButton(){
    for  (let i=0; i<items.length;i++){
        let remove = document.createElement('button')
        remove.innerHTML = '<i class="fas fa-minus-circle"></i>'
        container.querySelectorAll('li')[i].appendChild(remove)
    }             
}
// for(let i=0; i<items.length;i++){
//     document.querySelectorAll('li')[i].remove.addEventListener('click', function(){
//         items.splice(i,1)
//         container.innerText = ''
//         for  (let j=0; j<items.length;j++){
//             container.insertAdjacentHTML('beforeend', `<li>${items[j]}</li>`)
//         }  
//         addRemoveButton()       
//     })
// }
function remove(i){
    document.querySelectorAll('li')[i].querySelector('button').addEventListener('click', function(){
        document.querySelectorAll('li')[i].innerText = ''
        for (let j=i; j<items.length; j++){
            document.querySelector('table').insertBefore(document.querySelectorAll('li')[j+1],document.querySelectorAll('li')[j])
        }
        document.getElementById('table').deleteRow(document.getElementById('table').rows.length-1)
    })
}

remove(0);
remove(1);
remove(2)