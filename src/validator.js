const validator = {
  isValid: function (creditCardNumber) {
    let totalFinal = 0; // contador
    for (let posicion = creditCardNumber.length - 1; posicion >= 0; posicion--) { //lee de  n a 0 (al reves)
      if (posicion % 2 != 0) { //detecta si es cada segundo digito
        let doblePares = creditCardNumber[posicion] * 2; //multiplica el segundo digito
          if (doblePares > 9 ) { //aplica  a cualquier numero de 2 digitos
          doblePares = doblePares.toString(); //convierto a string
          doblePares = parseInt(doblePares[0]) + parseInt(doblePares[1]);
        }
        totalFinal = totalFinal + doblePares; //se suma al total y se guarda
      } else {
         //si es impar lo suma y lo agrega sin hacer nada mas
        totalFinal = totalFinal + parseInt(creditCardNumber[posicion]);
      }
    }
    if (totalFinal % 10 == 0) { // si es multiplo de 10
      return true;
    } else {
      return false;
    }
  },
};

//maskify: function (creditCardNumber) {
//return creditCardNumber;
export default validator;
