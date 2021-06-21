const validator = {
//isValid es un objeto que almacenara la funcion que validara los numeros de la tarjeta.
  isValid: function (validationCardNumber) {

    //Primero convertimos los numeros en un Array, despues invertimos el orden y los juntamos.
    let cardNumber = validationCardNumber.split("").reverse().join("");

    //Para aplicar el algoritmo de Luhn trabajaremos con tres variables: variable evenNumber (para el orden par)
    //variable oddNumber(para el orden impar) y la variable totalSum (la cual almacena la suma de los numeros pares + los impares).
    let totalSum = 0;

    // Para el orden par:
    //Primero vamos a seleccionar a los que estan en el orden par y multiplicaremos por 2 (se empieza a contar en 0 entonces el n=1 es para pares y el n=0 para impares)
      for (let i=1; i < cardNumber.length; i+=2) {
          let evenNumber = parseInt(cardNumber.charAt(i) * 2);
            //Si el resultado de los numeros son mayores o igual a 10 se sumaran los digitos entre ellos (por ejemplo: 10 = 1+2=3. 3 seria el digito final)
        if (evenNumber >= 10){
          let convertingEvenNumbers = evenNumber.toString();
          let sumBetweenDigits =  parseInt(convertingEvenNumbers.charAt(0)) + parseInt(convertingEvenNumbers.charAt(1));
          //Si se cumple la condición mayor o igual a 10 lo iremos sumando al total
          totalSum = totalSum + sumBetweenDigits;
        }
        //Si los numeros no son mayores o iguales a 10 los sumaremos de frente al total
        else {
          totalSum = totalSum + evenNumber;
        }
      }

    //Para el orden impar:
    //Seleccionaremos los del orden impar y los sumaremos al total
      for (let i=0; i < cardNumber.length; i+=2) {
          let oddNumber = parseInt(cardNumber.charAt(i));
          totalSum = totalSum + oddNumber;
      }
    //Si la suma total entre pares e impares la dividimos entre 10 y nos da un residuo 0 se retorna el valor de true (tarjeta valida)
      if (totalSum % 10 === 0 ) {
        return true;
      }
      //si el residuo no es 0 retona false (tarjeta invalida)
      else {
        return false;
      }
  },
  //Funcion ocultar todos los digitos menos los ultimos 4
  maskify: function (validationCardNumber) {
    let numberOcult ="";
    for(let i=0; i < validationCardNumber.length; i++){
      if(i<= validationCardNumber.length-5){
        numberOcult = numberOcult + "#"
      }else{
        numberOcult = numberOcult + validationCardNumber[i]
      }
    }
      //console.log(numberOcult);
    return numberOcult;
  }
};
export default validator;