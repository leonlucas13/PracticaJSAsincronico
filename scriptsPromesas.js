const number = prompt('Completa con un numero del 1 al 10')


const myPromises = new Promise ((resolve, reject) =>{

    const random = Math.round(Math.random()*10)

    setTimeout(() => {
        
        if(random == number){
            resolve('Felicitaciones Ganaste el Juego!!')
        }else if (random > number){
            reject(`El numero ${number} fue mas pequeño que ${random}`)
        }else{
            reject(`El numero ${number} fue mas grande que ${random}`)
        }
        
    }, 3000);
})


// const myPromise = new Promise ((resolve, reject) =>{

//     setTimeout(() => {
//         const success = true

//         if(success){
//             resolve('Esta operacion ha sido Exitosa!!')
//         }else{
//             reject('Ha fallado la operacion')
//         }
        
//     }, 5000);
// })

document.getElementById('loading').innerHTML='Cargando...'

myPromises.then(res => {
    document.getElementById('loading').innerHTML=''
    document.getElementById('response').innerHTML= res
    console.log(res)
}).catch(error => {
    document.getElementById('loading').innerHTML=''
    document.getElementById('response').innerHTML= error
    console.error(error)
})

// myPromise.then(res => {
//     document.getElementById('loading').innerHTML=''
//     document.getElementById('response').innerHTML= res
//     console.log(res)
// }).catch(error => {
//     document.getElementById('loading').innerHTML=''
//     document.getElementById('response').innerHTML= error
//     console.error(error)
// }).finally(
//     console.log('Esto se ejecuta siempre')
// )