// // let monAn = ['pho', 'com', 'my', 'bun', 'chao', 'thit cho'] // INIT
// // console.log(monAn)
// // // let a = prompt()
// // // let b = prompt()
// // monAn.splice(0, 2) //DELETE: xoá từ  vị trí 0 -> đủ 2 phần tử.  Thường điền monAn.splice(0, 1) xoá  1  phần tử
// // monAn[1] =  'bun dau mam tom' //UPDATE
// // monAn.push('thit lon') //CREATE 
// // for(let i=0; i<monAn.length; i++){ //READ
// //     console.log(i,monAn[i])
// // }



// let clothes = [
//     'T-shirt', 
//     'Jeans', 
//     'Shirt', 
//     'Skirt'
// ]
// console.log(clothes)
// let option  = prompt('Nhap vao gia tri C/R/U/D').toLowerCase()
// if (option === 'c'){
//     let a = prompt('Nhap gia tri muon them vao')
//     clothes.push(a)
// }
// else  if (option === 'r'){
//     for(let i=0; i<clothes.length; i++){
//         console.log(i, clothes[i])
//     }     
// }
// else if (option === 'u'){
//     let a = Number(prompt('Nhap vi tri muon sua'))
//     let b = prompt('Nhap gia tri muon sua')
//     clothes[a] = b
// }
// else if (option === 'd'){
//     let b = prompt('Nhap vi tri phan tu muon xoa')
//     clothes.splice(b, 1)
// }
// else {
//     console.log('Ban nhap sai gia tri. Vui long reload lai trang de nhap lai')
// }
// console.log(clothes)
//  /// Number.isNaN(Value): kiểm tra xem Value có phải number không. True =>  không; False => có

let person  = {
    name: 'Cuong',
    yob: 96,
    home: 'Ha Noi',
    job: {
        name: 'dev',
        language:  ['js', 'python']
    },
    backpack: [5000, 'laptop', 'phone']
} //INIT
// let key = prompt()
job = person.job
job.name
backpack = person.backpack
// console.log(person.name) //READ
// console.log(person[key]) //ưu tiên dùng cái này
// person.backpack.push -> OKAY
person['height'] = 175 //CREATE
person.height = 175 //CREATE

person.home = 'My Tho' // UPDATE
delete person.backpack[0]  // DELETE
for (let k in person){
    console.log(k, person[k])
}

