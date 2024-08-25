//TRY intentar //CATCH atrapar //FINALLY finalmente //THORW lanzar

// try{
//    alert('Hola Mundo!!')
// }
// catch(error){
//     console.log(error)
//     document.getElementById('error').innerHTML = error.message;
// }

const testNumber = () => {
    const message = document.getElementById('res')
    message.innerHTML = ''

    let num = document.getElementById('input').value;

    try{
        if(num.trim() == '') throw 'Vacio'
        if(isNaN(num)) throw 'No es un Numero'
        num = Number(num)
        if(num < 1 ) throw 'muy bajo'
        if(num > 10 ) throw 'muy alto'
        message.innerHTML = 'El dato ingresado es: ' + num;
    }
    catch(error){
        message.innerHTML= 'El dato ingresado es: ' + error;
    }

}