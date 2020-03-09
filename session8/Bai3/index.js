let timeSheetData = [
    {
        'Project': 'Learn front-end',
        'Task': 'Learn HTML',
        'Time Spend': 6
    },
    {
        'Project': 'Learn front-end',
        'Task': 'Learn CSS',
        'Time Spend': 8
    },
    {
        'Project': 'Learn front-end',
        'Task': 'Learn JS Variables and Data Types',
        'Time Spend': 6
    },
    {
        'Project': 'Learn git',
        'Task': 'Learn git basics',
        'Time Spend': 2
    }
]
console.log(timeSheetData)

let table =  document.getElementById('table')
let row = table.insertRow(1)
let cell0 = row.insertCell(0);
let cell1 = row.insertCell(1);
let cell2 = row.insertCell(2);
cell0.innerHTML = 'Project Test 1'
cell1.innerHTML = 'Task test 1'
cell2.innerHTML = '0'

function createRow(rowNo, value1, value2, value3){
    let table =  document.getElementById('table')
    let row = table.insertRow(rowNo)
    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    cell0.innerHTML = value1
    cell1.innerHTML = value2
    cell2.innerHTML = value3    
}

//createRow(2, timeSheetData[0].Project, timeSheetData[0].Task, timeSheetData[0]['Time Spend'])

for(let i=0; i<timeSheetData.length; i++){
    createRow(i+2, timeSheetData[i].Project, timeSheetData[i].Task, timeSheetData[i]['Time Spend'])
}

document.getElementById('table').deleteRow(1)

let input = document.getElementById('input')
let inputProject = document.createElement('input')
input.appendChild(inputProject)
let inputTask = document.createElement('input')
input.appendChild(inputTask)
let inputTimeSpend = document.createElement('input')
input.appendChild(inputTimeSpend)
let btn = document.createElement('button')
btn.innerText = 'Add'
input.appendChild(btn)
// let h1 = document.getElementById('h1').innerText
// let h2 = document.getElementById('h2').innerText
// let h3 = document.getElementById('h3').innerText
btn.addEventListener('click', function(){
    let newObj = {}
    newObj['Project'] = inputProject.value
    newObj['Task'] = inputTask.value
    newObj['Time Spend'] = inputTimeSpend.value
    timeSheetData.push(newObj)
    //document.getElementById('table').innerText = ''
    createRow(document.getElementById('table').rows.length,newObj['Project'],newObj['Task'],newObj['Time Spend'])
    // for(let i=0; i<timeSheetData.length; i++){
    //     createRow(i+1, timeSheetData[i].Project, timeSheetData[i].Task, timeSheetData[i]['Time Spend'])
    // }
})

for (let i=0; i<document.getElementById('table').rows.length; i++){
    document.getElementById('table').rows[i].insertCell()
}
let action = document.createElement('th')
action.innerText = 'Action'
document.getElementById('table').rows[0].cells[3].appendChild(action)
delButtonArr = []
// function removeLine(i){
//     document.getElementById('table').deleteRow(i)
// }
for (let i=1; i<document.getElementById('table').rows.length; i++){
    let delButton = document.createElement('button')
    delButton.innerHTML = '<i class="far fa-times-circle"></i>' 
    document.getElementById('table').rows[i].cells[3].appendChild(delButton)
   delButtonArr.push(delButton)
}
// document.getElementById('table').rows[1].cells[3].appendChild(delButton)
// document.getElementById('table').rows[2].cells[3].appendChild(delButton)

// for (let i=1; i<document.getElementById('table').rows.length; i++){
//     document.getElementById('table').rows[i].cells[3].innerHTML.addEventListener('click',function(){
//         document.getElementById('table').deleteRow(i)
//     })
// }
// for (let i=0; i<delButtonArr.length; i++){
//     delButtonArr[i].addEventListener('click', function(){
//         document.getElementById('table').deleteRow(i+1)
//     })
// }

function delRow(i){
    delButtonArr[i].addEventListener('click', function(){
        document.getElementById('table').rows[i+1].innerHTML = ''
        for (let j=i+1; j<document.getElementById('table').rows.length-1; j++){
            // let tmp = 0
            // tmp = document.getElementById('table').rows[j]
            // document.getElementById('table').rows[j] = document.getElementById('table').rows[j+1]
            // document.getElementById('table').rows[j+1] = tmp
            document.getElementById('table').insertBefore(document.getElementById('table').rows[i+2],document.getElementById('table').rows[i+1])
        }
        document.getElementById('table').deleteRow(document.getElementById('table').rows.length-1)
    })
        
}

delRow(0);
delRow(1);
delRow(2);
delRow(3);
let updButtonArr = []
for (let i=1; i<document.getElementById('table').rows.length; i++){
    let updButton = document.createElement('button')
    updButton.innerHTML += '<i class="fas fa-pen"></i>' 
    document.getElementById('table').rows[i].cells[3].appendChild(updButton)
   updButtonArr.push(updButton)
}
function update(i){
    updButtonArr[i].addEventListener('click', function(){
        document.getElementById('table').rows[i+1].cells[0].innerText = inputProject.value
        document.getElementById('table').rows[i+1].cells[1].innerText = inputTask.value
        document.getElementById('table').rows[i+1].cells[2].innerText = inputTimeSpend.value
    })
}

update(0);
update(1);
update(2);
update(3);
