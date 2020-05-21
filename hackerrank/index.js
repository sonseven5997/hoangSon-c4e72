function multiple(x,y){
    x = x.toString().split('')
    let z = []
    x = x.map(function(t){
        return Number(t)
    })
    y = splitANumber(y)
    for (let j=0; j<y.length; j++){
        let c = []
        let y1 = y[j].subString(1)
        for (let i=0; i<x.length; i++){
            c.push((Number(y[j][0]) * x[i]).toString() + y1)
        }
        z.push(c)
    }
    for (let i=0; i<z.length; i++){
        z[i] = z[i].split('')
    }
    for (let i=1; i<z.length; i++){
        while (z[i].length < z[0].length){
            z[i].unshift('0')
        }
        for (let j=0; j<z[i].length; j++){
            z[i][j] = Number(z[i][j])
        }
    }
    let ans = []
    for (let i=1; i<z.length; i++){
        for (let j=0; j<z[0].length; j++){
            
        }
    }

}

function splitANumber(x){
    let a = 10
    x = x.toString()
    let arr = []
    for (let i=0; i<x.length; i++){
        let b =  x[i]* Math.pow(10,x.length-i-1)
        b = b.toString()
        arr.push(b)
    }
    return arr
}