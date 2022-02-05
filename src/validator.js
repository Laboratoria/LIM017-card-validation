const validator = {
  isValid: function (creditCardNumber) {
    let reverse = creditCardNumber.split("").reverse().join("");
    let totalFinal = 0;
    for (let posicion = 0; posicion < reverse.length; posicion++) {
      if (posicion % 2 != 0) {
        let doblePares = reverse[posicion] * 2;
        reverse[posicion] * 2;
        if (doblePares > 9) {
          doblePares = doblePares.toString();
          doblePares = parseInt(doblePares[0]) + parseInt(doblePares[1]);
        }
        totalFinal = totalFinal + doblePares;
      } else {
        totalFinal = totalFinal + parseInt(reverse[posicion]);
      }
    }
    if (totalFinal % 10 == 0) {
      return true;
    }
    else {
      return false;
    }
  },
};

//maskify: function (creditCardNumber) {
//return creditCardNumber;
export default validator;
