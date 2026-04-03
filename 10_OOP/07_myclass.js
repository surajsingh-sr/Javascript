// ES6

// it's class
class User{
    // it's method
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `${this.password}#@!34%`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai = new User("virat","viratvvvv@gmail.com",13241)
console.log(chai)
console.log(chai.encryptPassword())
console.log(chai.changeUsername())

// behind the sence how to work

function User2(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}
User2.prototype.encryptPassword = function(){
    return `${this.password}@#$%`
}
User2.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const player = new User2("Rohit","rohit@gmail.com",1234)
console.log(player.encryptPassword())
console.log(player.changeUsername())
console.log(player)