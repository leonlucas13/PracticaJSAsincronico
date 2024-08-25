
const myPromises = new Promise ((resolve, reject) =>{

    const random = Math.round(Math.random()*10)

    setTimeout(() => {
        resolve(random)
    }, 500);
})

const isEven = number => {
    const even = number % 2 == 1 ? 'es impar' : 'es par'
    document.getElementById('loading').innerHTML=''
    document.getElementById('response').innerHTML= `El numero generado ${number} ${even}`
}

document.getElementById('loading').innerHTML='Cargando...'

myPromises.then(isEven
).catch(error => {
    document.getElementById('loading').innerHTML=''
    document.getElementById('response').innerHTML= error
    console.error(error)
})

