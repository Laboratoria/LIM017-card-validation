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

let meses = ["01" , "02" , "03" , "04" , "05" , "06" , "07" , "08" , "09" , "10" , "11" , "12"]


for (let i = 0; i < meses.length; i++) {
    let option = new Option (meses[i], meses[i])
    document.getElementById("months").appendChild(option)
}

for (let i = 0; i < 5; i++) {
    let years = 2022 + i
    let option = new Option (years, years)
    document.getElementById("year").appendChild(option)
}

