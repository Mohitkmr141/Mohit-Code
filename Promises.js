// const proOne = new Promise(function(resolve , reject){


//     setTimeout(function(){
//         console.log(`Async task 2`)
//         resolve()
//   },1000)
// }).then(function(){
//     console.log("Promise Consumed")
// })

// const proTwo = new Promise((resolve , reject)=>{

//     setTimeout(()=>{

//     resolve({username:"Mohit" , email:"Mohitkmr" ,isLogged:false})},1000)
// }).then((user)=>{
//     console.log(user.email)
// })

const proFour = new Promise((resolve , reject)=>{


    setTimeout(()=>{
        let error = false
        if(!false){
            resolve({username:"Mohit" , email:"Mohitkmr"})
            
        }else{
           reject( console.log(`Something went Wrong`))
        }
},1000)
}).then((user)=>{
console.log(user.username)
return user.username
}).then((name)=>{
    console.log(name)})

proFour.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log(`Chalega hi`)
})
 async function promiseFive(){
    const response = await proFour
    console.log(response)
}

promiseFive()
console.log(1234)
