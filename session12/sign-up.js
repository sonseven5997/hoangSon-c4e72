let id = document.getElementById('uname')
let password = document.getElementById('pw')
let confirmPassword = document.getElementById('confirmpw')
let submitBtn = document.getElementById('submit')

async function postData(url,data){
    await fetch(url,
    {method:'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
}

submitBtn.addEventListener('click',async function(e){
    e.preventDefault()
    if (confirmPassword.value == password.value){
        let data = {
            'uname' : id.value,
            'password': password.value
        }
        await postData('https://5ec285c88ebdcc0016a59e59.mockapi.io/session12',data)
        window.location.href = 'file:///E:/c4e72/hoangSon-c4e72/session12/index.html'
    }
    else {
        alert('Wrong input, try again')
    }
    
})