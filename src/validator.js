
const validator = {
  //Captura los numeros
  isValid: function(number){
// Convierte los numeros en un array e invierte el orden
  let numberArray = number.split("").reverse("").map(Number);

   console.log(numberArray);
}

}


export default validator;
