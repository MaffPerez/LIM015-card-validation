import validator from './validator.js';

const btnvalidar = document.getElementById("validar");

btnvalidar.addEventListener("click", () => {
    let cardNumber = document.getElementById("number_card").value;
    let validatorCard = validator.isValid(cardNumber);
        if (validatorCard === true && cardNumber!== ""){
            alert("tarjeta correcta");
        }
        else if (validatorCard === "") {
            alert("Ingrese el número de tarjeta")
        }
        else{
            alert("tarjeta incorrecta")
        }
});



