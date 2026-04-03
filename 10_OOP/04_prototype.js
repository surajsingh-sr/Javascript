// const myname = "suraj    "
// const myname1 = "singh    "

// console.log(myname.truelength)

let myHeros = ["spiderman","thor"]

const heros = {
    thar: "thar",
    spiderman: "spiderman",

    getheros: function(){
        console.log("suraj prototype is present in this object")
    }
}
// Add manually prototype in object
Object.prototype.suraj = function(){
    console.log("suraj prototype is present in this object")
}

// heros.suraj()
// myHeros.suraj()

// Add manually prototype in Array
Array.prototype.heysuraj = function(){
    console.log("suraj prototype Add in Array")
}
// heros.heysuraj()   // heros is a object and prototype add in array not object
myHeros.heysuraj()

// +++++++++++++++++++ Inheritance +++++++++++++++++++

const user = {
    username: "Sanjay"
}
const RCB = {
    player1: "Virat kohli"
}
const MI = {
    player2: "Rohit Sharma"
}
const DC = {
    player3: "K.L Rahul"
}
const CSK ={
    player4: "M.S DHONI",
    __proto__: DC          // inheritance object 
}

MI.__proto__ = RCB        // inheritance object

let username = "Virat kohli      "

String.prototype.truelength = function(){
    console.log(`${this}`)
    console.log(`true length: ${this.trim().length}`)
    
}
username.truelength()
"Rohit Sharma".truelength()