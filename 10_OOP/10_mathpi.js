Object.getOwnPropertyDescriptor(Math,"PI")
//  find all hidden deatails and properties of object...
const obj = {
    name: "suraj",
    id: 1314,
    email: "ksadfgidfg"
}
const varr1 = Object.getOwnPropertyDescriptor(obj,"name")  
console.log(varr1)

Object.defineProperty(obj,'name',{
    // modify of properties of object
       writeable: false,
       enumerable: false,
       configurable: false
})
console.log(Object.getOwnPropertyDescriptor(obj,"name"))