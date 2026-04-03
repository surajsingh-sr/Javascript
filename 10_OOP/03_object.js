function multipleBy5(num){
    return num*5
}
multipleBy5.power = 2
console.log(multipleBy5(5))
console.log(multipleBy5.power)
console.log(multipleBy5.prototype)

function createUser(username,score){
    this.username = username
    this.score = score
}
// Manually add prototype-------
createUser.prototype.increament = function(){
    console.log(`score rohit: ${this.score++}`)
}
createUser.prototype.printMe = function(){
    console.log(`score virat: ${this.score}`)
}
const chai = new createUser("virat",69)
const tea = new createUser("Rohit",78)
chai.printMe()
tea.increament()