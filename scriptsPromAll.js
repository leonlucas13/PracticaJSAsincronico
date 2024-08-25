const promise1 = new Promise ((res, rej) =>{
    setTimeout(() => {
        res('Respuesta de la promesa 1')
        
    }, 5000);
})

const promise2 = new Promise ((res, rej) =>{
    setTimeout(() => {
        res('Respuesta de la promesa 2')
        
    }, 2000);
})

const promise3 = new Promise ((res, rej) =>{
    setTimeout(() => {
        res('Respuesta de la promesa 3')
        
    }, 3000);
})

Promise.all([promise1,promise2, promise3])
.then(res => {
    console.log(res[0])
    console.log(res[1])
    console.log(res[2])
})
.catch(error => {
    console.error(error)
})


// promise1.then(res => {
//     console.log(res)
// })

// promise2.then(res => {
//     console.log(res)
// })

// promise3.then(res => {
//     console.log(res)
// })