import validator from './validator.js';

//console.log(validator);
//validator.isvalid
document.getElementById("botonVerificar").addEventListener("click", clickAlBoton)
function clickAlBoton (){
    let tarjetaDeCredito = document.getElementById("creditCardNumber").value
    if (tarjetaDeCredito == "") {
        alert("Coloca los números de tu tarjeta de crédito")
    } else  {
        let resultadoCheck = validator.isValid(tarjetaDeCredito)
        if (resultadoCheck) {
            let enmascarar = validator.maskify(tarjetaDeCredito)
            alert("La tarjeta de crédito es válida")
            document.getElementById("creditCardNumber").value = enmascarar
        } else {
            alert("La tarjeta de crédito no es válida. Ingresa otra tarjeta")
        }
}
}
