let items = ['Backpack', 'MiBand Watch', 'Ring']
let content = document.getElementById('content')
let input = document.getElementById('input')
let delBtnArr = []
let arr = []
addItem()
function addItem(){    
    content.innerHTML = ''
    for (let i=0; i<items.length; i++){
        content.innerHTML += `<li id=${-i-1}>` + items[i] + ' ' + `<button id=${i+1}> Delete </button>` + '</li>'
    }
}
let addBtn = document.getElementById('add')
addBtn.addEventListener('click',function(){
    items.push(input.value)
    addItem()
    document.getElementById('input').value = ''
    delObj()
})
function delObj(){
    for (let i=0; i<items.length; i++){
        document.getElementById(i+1).addEventListener('click',function(e){
            items.splice(i,1)
            addItem()
            delObj()
        })
    }
    
}