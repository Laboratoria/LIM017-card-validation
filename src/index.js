import validator from './validator.js';

//console.log(validator);
//validator.isvalid
document.getElementById("botonVerificar").addEventListener("click", clickAlBoton)
function clickAlBoton (){
    let sinNumero = document.getElementById("creditCardNumber").value
    if (sinNumero.value == "") {
        alert("Coloca los numero de tu tarjeta de crédito")
    } else  {
        let resultadoCheck = validator.isValid(sinNumero)
        if (resultadoCheck) {
            let enmascarar = validator.maskify(sinNumero)
            alert("La tarjeta de crédito es válida")
            document.getElementById("creditCardNumber").value = enmascarar
        } else {
            alert("La tarjeta de crédito no es válida. Ingresa otra tarjeta")
        }
}
}
