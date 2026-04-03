function setUsername(username){
    this.username = username
    console.log("called")
}
function createUser(username,email,password){
    setUsername.call(this,username)  // store refernce of outer function
    this.email =email
    this.password = password
}
const chai = new createUser("virat","viii@gmail.com",123415)
console.log(chai)