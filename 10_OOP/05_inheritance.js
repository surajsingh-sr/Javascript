class Student{
    constructor(username,email,password){
        this.username = username
        this.password = password
        this.email = email
    }
    logMe(){
        return `student login in portal ${this.username}`
    }
}
class Teacher extends Student{
    // Overriding of methods
    constructor(username,email,password){
        super(username)   // super keyword call parent class constructor
       // super.method call parent class methods 
        this.username = username
        this.email = email
        this.password = password
    }
    checkUsername(){
        return`it's present in my database ${this.usernmae}`
    }
}
const student = new Teacher("virat","student@gmail.com",1234456)
console.log(student.checkUsername())
console.log(student.logMe())