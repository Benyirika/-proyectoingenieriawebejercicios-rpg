// Autor: Daniel Benjamyn Prado Farfán
function ordenar() {
    var numeros = [];
    numeros[0] = parseInt(document.getElementById("n1").value);
    numeros[1] = parseInt(document.getElementById("n2").value);
    numeros[2] = parseInt(document.getElementById("n3").value);
    numeros[3] = parseInt(document.getElementById("n4").value);
    numeros[4] = parseInt(document.getElementById("n5").value);

    
    for (var i = 0; i < numeros.length; i++) {
        for (var j = 0; j < numeros.length - 1; j++) {
            if (numeros[j] > numeros[j + 1]) {
                var aux = numeros[j];
                numeros[j] = numeros[j + 1];
                numeros[j + 1] = aux;
            }
        }
    }

    var textoResultado = "";
    for (var k = 0; k < numeros.length; k++) {
        textoResultado = textoResultado + numeros[k] + " ";
    }

    document.getElementById("resultado").innerHTML = textoResultado;
}