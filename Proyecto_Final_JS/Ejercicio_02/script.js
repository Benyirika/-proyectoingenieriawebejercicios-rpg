// Autor: Daniel Benjamyn Prado Farfán

function cambiarTamano() {
    var anchoImg = document.getElementById("ancho").value;
    var largoImg = document.getElementById("largo").value;

    
    if (anchoImg < 0 || largoImg < 0) {
        alert("¡No puedes usar valores negativos para el tamaño!");
        return; 
    }

    var imagen = document.getElementById("miImagen");

    
    imagen.style.width = anchoImg + "px";
    imagen.style.height = largoImg + "px";
}