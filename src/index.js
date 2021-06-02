import validator from './validator.js';

let btnvalidar=document.getElementById("validar")
const capturavalores=(event) => {
    event.preventDefault();
    let numerodetarjeta=document.getElementById("number_card").value;
    console.log(numerodetarjeta);
    validator.isValid(numerodetarjeta)
}
btnvalidar.addEventListener("click",capturavalores)

console.log(validator);
