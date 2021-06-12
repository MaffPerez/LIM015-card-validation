
const validator = {
  isValid: function(validationCardNumber) { //Captura los numeros de la tarjeta
    let totalSum = 0;
    let valid;
    let cardNumber = validationCardNumber.split("").reverse().join("");// Convierte los numeros en un array e invierte el orden
    console.log(" Array junto invertido " + cardNumber);
//Si el número esta en orden par
    for(let i = 1; i < cardNumber.length; i+=2){
      let numberPair = parseInt(cardNumber.charAt(i)) * 2;
      console.log("Numero de orden par = " + cardNumber.charAt(i));
      console.log("Numero par multiplicado x 2 = " + numberPair);
      if (numberPair >= 10){
        let multiplyString = numberPair.toString();
        let sumDigits = parseInt(multiplyString.charAt(0)) + parseInt(multiplyString.charAt(1));
        totalSum = totalSum + sumDigits;
      }
      else {
        totalSum = totalSum + numberPair;
      }
    }
//Si el número esta en orden impar
  for ( let i = 0; i < cardNumber.lengt; i+=2){
      let numberImpair = parseInt(cardNumber.charAt(i));
//Suma de los números pares e impares
      totalSum = totalSum + numberImpair;
    if(totalSum % 10 === 0){
      valid = true;
    }
    else{
      valid = false;
    }
    return valid;
  }}
};


export default validator;
