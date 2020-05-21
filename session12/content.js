async function getData(){
    const api = await fetch('https://5ec285c88ebdcc0016a59e59.mockapi.io/session12')
    const data = await api.json()
    let output = []
    console.log(data)
    return data
}

let submitBtn = document.getElementById('submit')
let content = document.getElementById('content')
async function submit(){
    submitBtn.addEventListener('click',async function(e){
        e.preventDefault()
        await fetch(`https://5ec285c88ebdcc0016a59e59.mockapi.io/session12/${sessionStorage.getItem('id')}`,{
            method: 'PUT',
            body: JSON.stringify({
                'content': content.value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    })
}

logoutBtn = document.getElementById('logout')
logoutBtn.addEventListener('click', function(){
    sessionStorage.clear()
    window.location.href = 'file:///E:/c4e72/hoangSon-c4e72/session12/index.html'
})

async function render(){
    await getData()
    await submit()
}

render()