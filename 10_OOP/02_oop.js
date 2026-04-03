const user = {
    username: "suraj singh",
    age: 22,
    signedIn: true,
    getDetails: function(){
        // ++++  this use for current context in data access
    //   console.log(this.username)
    console.log(this)
    }
}
console.log(user.getDetails())
console.log(this)

// +++++++++++++++++ Constructor ++++++++++++++

function userData(username,age,inLoggedIn,id){
    this.username = username
    this.age = age
    this.inLoggedIn = inLoggedIn
    this.id = id
// by default return value always (if you write reture or not write reture)
     return this
}

// create constructor

const userOne1 = userData("suraj",22,true,2345)
console.log(userOne1)

// use 'new' keywords

/*
1. when use 'new; keyword than a new object create
2. constructor function call by new keyword
3. this keyword inject value in empty object 
 */
const userOne = new userData("virat kohli",38,true,18)
console.log(userOne)

const userTwo = new userData("Rohit sharma",40,true,45)
console.log(userTwo)
console.log(userTwo.constructor)   // this property of constructor
console.log(userOne instanceof userData)
