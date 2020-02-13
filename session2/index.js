    // for(let i=1;i<=20; i++ ) 
    //     {
    //         console.log(i)
    //     }
        
    // for(let i=0;i<=100; i+=2 ) 
    // {
    //     console.log(i)
    // }
    // for(let i=100;i>=1; i-- ) 
    // {
    //     console.log(i)
//     // }
//  yob = prompt('Nhập năm sinh')
//  age = 2020 - yob
//  console.log(age)
//  if(age > 18){
//      console.log('enjoy yourself')
//  } else if(age>21){
//     console.log('Vợ bạn có biết bạn vào đây không?')
//  }else{
//     console.log('Go Back')
//  }
let a = prompt('nhap a =')
let b = prompt('nhap b =')
let c = prompt('nhap c =')
let delta = b**2 - 4*a*c
if (delta < 0){
    console.log('PT vo nghiem')
}
else if(delta === 0){
    let result = -b / (2*a)
    console.log('Nghiem  kep cua phuong trinh la:',result)
}
else {
    let result1 = (-b + (delta)**0.5)/(2*a)
    let result2 = (-b - (delta)**0.5)/(2*a)
    console.log(`Hai nghiem cua phuong trinh la: x1 = ${result1}, x2 = ${result2}`)
    //console.log('Hai nghiem cua phuong trinh la: ','x1 = ',result1,' , ','x2 = ',result2)
}


