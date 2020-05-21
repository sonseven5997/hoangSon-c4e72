let uname = document.getElementById('uname')
let password = document.getElementById('pw')
let confirmPassword = document.getElementById('confirmpw')
let loginBtn = document.getElementById('login')
async function getData(){
    const api = await fetch('https://5ec285c88ebdcc0016a59e59.mockapi.io/session12')
    const data = await api.json()
    let output = []
    console.log(data)
    return data
}

async function render(){
    const data = await getData()
    loginBtn.addEventListener('click', function(x){
        x.preventDefault()
        let findUser = data.find(function(x){
            return ((x['uname'] == uname.value) && (x['password'] == password.value))
        })
        let findIndex = data.findIndex(function(x){
            return ((x['uname'] == uname.value) && (x['password'] == password.value))
        })
        if (findUser != undefined){
            window.location.href = 'file:///E:/c4e72/hoangSon-c4e72/session12/content.html'
            sessionStorage.setItem('uname', uname.value)
            sessionStorage.setItem('password', password.value)
            sessionStorage.setItem('id', data[findIndex]['id'])
        }
        else {
            alert ('Wrong input')
        }
    })
}

render()