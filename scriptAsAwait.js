// //FUNCION SINCRONA NORMAL
// function myFunction(){
//     return 'Hola Mundo'
// }

// //FUNCION ASINCRONA USANDO PROMISE
// function myFunction(){
//     return Promise.resolve('Hola Mundo!')
// }

// //FUNCION ASINCRONA USANDO ASYNC
// async function myFunction(){
//     return 'Hola Mundo Async!'
// }

// //FUNCION LANDA SINCRONA NORMAL
// const myFunction = () => 'Hola Mundo!'

// //FUNCION LANDA ASINCRONA USANDO PROMISE
//  const myFunction2 = () => Promise.resolve('Hola Mundo!')

// //FUNCION LANDA ASINCRONA USANDO ASYNC
// const myFunction3 = async () => 'Hola Mundo Async!'

// function changeText(text){
//     document.getElementById('async-text').innerHTML=text
// }

// async function myFunctions(){
//     return 'Hola Mundo'
// }

// myFunctions().then(
//     function(value){
//         changeText(value)
//     }
// )

// const changeTexts = async () => {
//     const myPromise = new Promise (res => {
//         setTimeout(() => {
//             res('Hola Mundo!!')            
//         }, 3000);
//     })

//     document.getElementById('async-text').innerHTML = await myPromise

// }

// changeTexts()




const fechtData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/0')

        if(!response.ok){
            throw new Error ('Hubo un problema llamando a la api')
        }

        const data = await response.json();
        document.getElementById('async-text').innerHTML = data.title

    }
    catch(error){
        document.getElementById('async-text').innerHTML= error
    }

}

fechtData()