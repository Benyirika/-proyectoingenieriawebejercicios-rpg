// Autor: Daniel Benjamyn Prado Farfán
function calcular() {
    var num1 = parseFloat(document.getElementById("nro1").value);
    var num2 = parseFloat(document.getElementById("nro2").value);

    document.getElementById("resSuma").innerHTML = num1 + num2;
    document.getElementById("resResta").innerHTML = num1 - num2;
    document.getElementById("resMulti").innerHTML = num1 * num2;
    
    if (num2 !== 0) {
        document.getElementById("resDiv").innerHTML = num1 / num2;
    } else {
        document.getElementById("resDiv").innerHTML = "No se puede dividir entre 0";
    }
}