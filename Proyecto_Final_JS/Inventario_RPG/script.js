// Autor: Daniel Benjamyn Prado Farfán

// Estadísticas base del personaje desnudo
var vidaBase = 100;
var ataqueBase = 10;
var defensaBase = 10;

// Inventario inicial con objetos de ejemplo que afectan múltiples stats
var inventario = [
    { id: 1, nombre: "Espada de Hierro", tipo: "arma", modVida: 0, modAtaque: 12, modDefensa: 2, equipado: false },
    { id: 2, nombre: "Túnica de Cuero", tipo: "armadura", modVida: 10, modAtaque: 0, modDefensa: 15, equipado: false },
    { id: 3, nombre: "Ojo de Demonio (Maldito)", tipo: "accesorio", modVida: -30, modAtaque: 25, modDefensa: -5, equipado: false }
];

var contadorId = 4;

function mostrarInventario(filtro) {
    var lista = document.getElementById("listaObjetos");
    var htmlTexto = "";
    
    // Variables para calcular las stats finales
    var vidaFinal = vidaBase;
    var ataqueFinal = ataqueBase;
    var defensaFinal = defensaBase;

    for (var i = 0; i < inventario.length; i++) {
        var obj = inventario[i];
        
        // Renderizar según el filtro
        if (filtro === "todos" || obj.tipo === filtro) {
            var estadoEquipado = "";
            if (obj.equipado === true) {
                estadoEquipado = "<span class='equipado'>[EN USO]</span>";
            }
            
            // Construimos la carta del objeto
            htmlTexto = htmlTexto + "<li>" + 
                        "<strong>" + obj.nombre + "</strong> " + estadoEquipado + "<br>" +
                        "<small>Tipo: " + obj.tipo + " | Vida: " + obj.modVida + " | Ataque: " + obj.modAtaque + " | Def: " + obj.modDefensa + "</small><br>" +
                        "<button class='btn-accion' onclick='equiparObjeto(" + obj.id + ")'>Equipar/Quitar</button> " +
                        "<button class='btn-tirar' onclick='eliminarObjeto(" + obj.id + ")'>Descartar</button>" +
                        "</li>";
        }

        // Sumar o restar atributos si el objeto está en uso
        if (obj.equipado === true) {
            vidaFinal = vidaFinal + obj.modVida;
            ataqueFinal = ataqueFinal + obj.modAtaque;
            defensaFinal = defensaFinal + obj.modDefensa;
        }
    }

    // Actualizar el HTML
    lista.innerHTML = htmlTexto;
    document.getElementById("totalVida").innerHTML = vidaFinal;
    document.getElementById("totalAtaque").innerHTML = ataqueFinal;
    document.getElementById("totalDefensa").innerHTML = defensaFinal;
    document.getElementById("cantidadMochila").innerHTML = inventario.length;

    // Si por culpa de un objeto maldito tu vida llega a 0...
    if (vidaFinal <= 0) {
        alert("¡Cuidado! Los objetos malditos han drenado toda tu vida. ¡Estás muerto!");
    }
}

function agregarObjeto() {
    if (inventario.length >= 10) {
        alert("El inventario está lleno (Máximo 10 objetos). Tira algo primero.");
        return;
    }

    var nombreStr = document.getElementById("nuevoNombre").value;
    var tipoStr = document.getElementById("nuevoTipo").value;
    // Si dejan el campo vacío, asumimos que es 0
    var valVida = parseInt(document.getElementById("modVida").value) || 0;
    var valAtaque = parseInt(document.getElementById("modAtaque").value) || 0;
    var valDefensa = parseInt(document.getElementById("modDefensa").value) || 0;

    if (nombreStr === "") {
        alert("El objeto debe tener un nombre.");
        return;
    }

    var nuevoItem = {
        id: contadorId,
        nombre: nombreStr,
        tipo: tipoStr,
        modVida: valVida,
        modAtaque: valAtaque,
        modDefensa: valDefensa,
        equipado: false
    };

    inventario.push(nuevoItem);
    contadorId++;
    
    // Limpiar formulario
    document.getElementById("nuevoNombre").value = "";
    document.getElementById("modVida").value = "";
    document.getElementById("modAtaque").value = "";
    document.getElementById("modDefensa").value = "";
    
    mostrarInventario("todos");
}

function eliminarObjeto(idItem) {
    var nuevoInventario = [];
    
    for (var i = 0; i < inventario.length; i++) {
        if (inventario[i].id !== idItem) {
            nuevoInventario.push(inventario[i]);
        }
    }
    
    inventario = nuevoInventario;
    mostrarInventario("todos");
}

function equiparObjeto(idItem) {
    var objSeleccionado;
    
    // Buscar el objeto por su ID usando un bucle for (como se aprendió en clase)
    for (var i = 0; i < inventario.length; i++) {
        if (inventario[i].id === idItem) {
            objSeleccionado = inventario[i];
        }
    }

    // Reglas de equipamiento SOLO si nos lo vamos a poner (equipado === false)
    if (objSeleccionado.equipado === false) {
        var conteoArmas = 0;
        var conteoArmaduras = 0;
        var conteoAccesorios = 0;

        // Contar qué tenemos puesto actualmente
        for (var j = 0; j < inventario.length; j++) {
            if (inventario[j].equipado === true) {
                if (inventario[j].tipo === "arma") conteoArmas++;
                if (inventario[j].tipo === "armadura") conteoArmaduras++;
                if (inventario[j].tipo === "accesorio") conteoAccesorios++;
            }
        }

        // Lógica de validación
        if (objSeleccionado.tipo === "arma" && conteoArmas >= 2) {
            alert("Ya tienes las manos ocupadas con 2 armas. Quítate una primero.");
            return; 
        }
        if (objSeleccionado.tipo === "armadura" && conteoArmaduras >= 1) {
            alert("Ya llevas una armadura puesta. ¡No puedes usar dos a la vez!");
            return;
        }
        if (objSeleccionado.tipo === "accesorio" && conteoAccesorios >= 2) {
            alert("Solo puedes llevar 2 accesorios mágicos al mismo tiempo.");
            return;
        }
    }

    // Si pasamos las validaciones, cambiamos el estado (true a false o false a true)
    if (objSeleccionado.equipado === true) {
        objSeleccionado.equipado = false;
    } else {
        objSeleccionado.equipado = true;
    }

    mostrarInventario("todos");
}

// Iniciar el panel al cargar la página
mostrarInventario("todos");