  let arr = [10,20,30,40]
let  a = arr.map((value)=>{
  console.log(value+2)
  
})

let arrry2 = [2,5,6,4,0,3,5]
let a2 = arrry2.filter((value)=>{
    return value < 5
})
console.log(a2)

const arr3 = [2,3,34,4,44,66]
const a4 = arr3.reduce((a,b)=>{
    return a+b
})
console.log(a4)