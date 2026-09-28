// Autor: Daniel Benjamyn Prado Farfán
var posicionX = 280;
var posicionY = 280;

function mover(direccion) {
    var objeto = document.getElementById("objeto");
    var velocidad = 20;

    switch(direccion) {
        case 'arriba':
            if (posicionY - velocidad >= 0) posicionY = posicionY - velocidad;
            break;
        case 'abajo':
            if (posicionY + velocidad <= 560) posicionY = posicionY + velocidad;
            break;
        case 'izquierda':
            if (posicionX - velocidad >= 0) posicionX = posicionX - velocidad;
            break;
        case 'derecha':
            if (posicionX + velocidad <= 560) posicionX = posicionX + velocidad;
            break;
    }

    objeto.style.top = posicionY + "px";
    objeto.style.left = posicionX + "px";
}