var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
    url: "tile.png",
    cargaOK: false
};
var vaca = {
    url: "vaca.png",
    cargaOk: false
};
var cerdo = {
    url: "cerdo.png",
    cargaOk: false
};
var pollo = {
    url: "pollo.png",
    cargaOk: false
};
var min = 0;
var max = 25;
var cantidadv = aleatorio(min, max);
var cantidadc = aleatorio(min, max);
var cantidadp = aleatorio(min, max);
fondo.imagen = new Image(); //crear
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo() {
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas() {
    vaca.cargaOK = true;
    dibujar();
}

function cargarCerdos() {
    cerdo.cargaOK = true;
    dibujar();
}
function cargarPollos() {
    pollo.cargaOK = true;
    dibujar();
}

function dibujar() {
    if (fondo.cargaOK) {
        papel.drawImage(fondo.imagen, 0, 0);
    }

    if (vaca.cargaOK) {
        console.log(cantidadv);
        for (var v = 0; v < cantidadv; v++) {
            var x = aleatorio(0, 7)
            var y = aleatorio(0, 7)
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(vaca.imagen, x, y);
        }


    }
    if (cerdo.cargaOK) {
        console.log(cantidadc);
        for (var v = 0; v < cantidadc; v++) {
            var x = aleatorio(0, 7)
            var y = aleatorio(0, 7)
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(cerdo.imagen, x, y);
        }
    }
    if (pollo.cargaOK) {
        console.log(cantidadp);
        for (var v = 0; v < cantidadp; v++) {
            var x = aleatorio(0, 7)
            var y = aleatorio(0, 7)
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(pollo.imagen, x, y);
        }
    }
}

function aleatorio(min, maxi) {
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}