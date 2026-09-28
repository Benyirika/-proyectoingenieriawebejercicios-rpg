// Autor: Daniel Benjamyn Prado Farfán
function invertirPalabra() {
    var palabra = document.getElementById("palabraIngresada").value;
    var inversa = "";

    for (var i = palabra.length - 1; i >= 0; i--) {
        inversa = inversa + palabra[i];
    }

    document.getElementById("resultadoInversa").value = inversa;
}