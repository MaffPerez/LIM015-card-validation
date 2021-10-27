import validator from './validator.js';
const textVacio = document.getElementById("tarjeta_vacia");
const textValid = document.getElementById("tarjeta_valida");
const textInvalid = document.getElementById("tarjeta_invalida");
let inputNumeros = document.getElementById("number_card")

const btnValid = document.getElementById("validar");
const btnPay = document.getElementById("pagar");
// Al hacer click el boton valida los numeros de tarjeta de credito
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

//Al hacer click en pagar, refresca toda la pagina

btnPay.addEventListener("click", () => {
    alert("¡Gracias por su compra :D!")
    inputNumeros.value="";
    btnValid.style.display="block";
    btnPay.style.display="none";
    textValid.style.display="none";
    });
