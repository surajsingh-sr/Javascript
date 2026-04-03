class User{
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(emailValue){
        return this._email = emailValue
    }
    get password(){
        return this._password
        // return this._password.toUpperCase()
        // return `${this._password}surajsinghrajput@@@`
    }
    set password(value){
        return this._password = value.toUpperCase()
        // return this._password = value
    }
}
const suraj = new User("suraj","s@dasipda","abcdef")
console.log(suraj.password)
console.log(suraj.email)