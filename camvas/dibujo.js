var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var col = "#FAA";

for(l=0; l<lineas; l++)
{
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea("#AAF",0,yi,xf,300);
    console.log("linea" + l);
}

dibujarLinea(col,1,1,1,299 );
dibujarLinea(col,1,299,299,299 );
function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
