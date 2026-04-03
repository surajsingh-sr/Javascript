const promiseOne = new Promise(function(resolve,reject){
    // Do all async task
    // DB calls,  cyrptography,  network,
    setTimeout(function(){
        console.log("Async task complete")   
        resolve()    // this method connect by .then()
    },1000)
})
promiseOne.then(function(){
    console.log("Promise consumed")
})

// ++++++++++++++++++++++++++++++++++++++++
// Promise Two

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 complete")
        resolve()
    },1000)
}).then(function(){
    console.log("Promised consumed 2")
})

// Promise Three
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Suraj Singh",email: "xyz@gmail.com"})

    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})

// Promise Four
const promiseFour = new Promise(function(resolve, reject){
    let error = true;
    if(!error){
        resolve({
            username: "Suraj Singh Rajput",
            id: 23453,
            floorNo: 5,
            emailID: "jdfhdfj@gmail.com"
        })
    }else{
        reject('Error: Something went wrong')
    }
})
promiseFour.then(function(user){
       console.log(user)
       return user.username;
}).then(function(username){
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(() => console.log("the promise is either resolved or rejected"))

//  Promise Five  (async and await keywords use)

const promiseFive = new Promise(function(resolve,reject){
    let error = true
        if(!error){
            resolve({
                username: "javascript",
                id: 2123,
                price: 19999
            })
        }else{
            reject("Error: Data not found")
        }
})
async function consumPromiseFive(){
    try{
        const response = await promiseFive
        console.log(response)
    }catch(error){
        console.log(error)
    }
}
consumPromiseFive()

fetch('https://api.github.com/users/surajsingh-sr')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})