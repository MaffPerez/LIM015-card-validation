const validator = {
//isValid es un objeto que almacenara la funcion que validara los numeros de la tarjeta.
  isValid: function (validationCardNumber) {

    //Primero convertimos los numeros en un Array, despues invertimos el orden y los juntamos.
    let cardNumber = validationCardNumber.split("").reverse().join("");

    //Para aplicar el algoritmo de Luhn trabajaremos con tres variables: variable numeroPar (para el orden par)
    //variable numeroImpar(para el orden impar) y la variable todoSumado (la cual almacena la suma de los numeros pares + los impares).
    let todoSumado = 0;

    // Para el orden par:
    //Primero vamos a seleccionar a los que estan en el orden par y multiplicaremos por 2 (se empieza a contar en 0 entonces el n=1 es para pares y el n=0 para impares)
      for (let i=1; i < cardNumber.length; i+=2) {
          let numeroPar = parseInt(cardNumber.charAt(i) * 2);
            //Si el resultado de los numeros son mayores o igual a 10 se sumaran los digitos entre ellos (por ejemplo: 10 = 1+2=3. 3 seria el digito final)
        if (numeroPar >= 10){
          let convirtiendoPar = numeroPar.toString();
          let sumarEntreDigitos =  parseInt(convirtiendoPar.charAt(0)) + parseInt(convirtiendoPar.charAt(1));
          //Si se cumple la condición mayor o igual a 10 lo iremos sumando al total
          todoSumado = todoSumado + sumarEntreDigitos;
        }
        //Si los numeros no son mayores o iguales a 10 los sumaremos de frente al total 
        else {
          todoSumado = todoSumado + numeroPar;
        }
      }

    //Para el orden impar:
    //Seleccionaremos los del orden impar y los sumaremos al total
      for (let i=0; i < cardNumber.length; i+=2) {
          let numeroImpar = parseInt(cardNumber.charAt(i));
          todoSumado = todoSumado + numeroImpar;
      }
    //Si la suma total entre pares e impares la dividimos entre 10 y nos da un residuo 0 se retorna el valor de true (tarjeta valida)
      if (todoSumado % 10 === 0 ) {
        return true;
      }
      //si el residuo no es 0 retona false (tarjeta invalida)
      else {
        return false;
      }
  },
  //Funcion ocultar todos los digitos menos los ultimos 4
  maskify: function mostrar(validationCardNumber) {
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