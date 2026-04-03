class Student{
    constructor(username,email){
        this.username = username
        this.email = email
    }
    logMe(){
        console.log("it's present")
    }
    static changeName(){
        // static keyword == this method not access object (constructor)
        return `${this.username.toUpperCase}`
    }
}
const name = new Student("Suraj","email@gmail.com")
// console.log(name.changeName()) // this is not access
name.logMe()

class Teacher extends Student{
    constructor(username,email){
        super(username)
        this.username = username
        this.email = email
    }
    logMe(){
        console.log("it's present in teacher")
    }
    static changeName(){
        // static keyword == this method not access object (constructor)
        return `${this.username.toUpperCase}`
    }
}

const name1 = new Teacher("Suraj singh","www.gmail.com")
name1.logMe()
// console.log(name.changeName()) // this is not access