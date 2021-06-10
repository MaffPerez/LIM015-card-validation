/* eslint-disable no-console */
import validator from './validator.js';

let btnvalidar = document.getElementById("validar")

const capturavalores=(event) => {

    event.preventDefault();
    let cardNumber = document.getElementById("number_card").value;
    console.log(cardNumber);
    validator.isValid(cardNumber);

}
btnvalidar.addEventListener("click",capturavalores)



console.log(validator);
