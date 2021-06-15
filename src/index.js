import validator from './validator.js';
let textVacio = document.getElementById("tarjeta_vacia");
let textValid = document.getElementById("tarjeta_valida");
let textInvalid = document.getElementById("tarjeta_invalida");
let inputNumeros = document.getElementById("number_card")

const btnValid = document.getElementById("validar");
const btnPay = document.getElementById("pagar");

btnValid.addEventListener("click", () => {
    let cardNumber = inputNumeros.value;
    let validatorCard = validator.isValid(cardNumber);

        if (validatorCard === true && cardNumber!== "" ){
            textValid.style.display="block";
            textInvalid.style.display="none";
            textVacio.style.display="none";
            btnValid.style.display="none";
            inputNumeros.value = validator.maskify(cardNumber);
            btnPay.style.display = "block";

        }
        else if (cardNumber === "") {
            textVacio.style.display="block";
            textValid.style.display="none";
            textInvalid.style.display="none";

        }else{
            textInvalid.style.display="block";
            textValid.style.display="none";
            textVacio.style.display="none";
        }

});



