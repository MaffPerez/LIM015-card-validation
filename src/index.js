
import validator from './validator.js';

let btnvalidar = document.getElementById("validar");

const capturavalores=(event) => {

    event.preventDefault();
    let cardNumber = document.getElementById("number_card").value;
    let cardValidator = validator.isValid(cardNumber);

    if (cardValidator === true){
        alert("es valida")
    }
    else{
        alert("no es valida")
    }

}

//Eventos del DOM para llamar a las funciones
btnvalidar.addEventListener("click",capturavalores)



