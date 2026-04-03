const user = {
    _email: "S@gmail.com",
    _password: "ksghsdufgv",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}
// Object create
const suraj = Object.create(user)
console.log(suraj.email)