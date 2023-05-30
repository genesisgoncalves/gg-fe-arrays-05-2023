var cadena = prompt("Introduce un Texto para Comprobar si es un Palíndromo:");
var numchar = cadena.length;
// Ponemos la cadena en minúsculas
cadena = cadena.toLowerCase();
var j;
var car;
var salida = "";
var cadena_espac = "";
var cadena_reves = "";
// Bucle que recorre toda la cadena y va concatenando en dos variables y eliminando espacios
for (i = 0; i < numchar; i++) {
    car = cadena.charAt(i);
    //Si el caracter es un espacio
    if (car != " ") {
        cadena_espac += car;
        cadena_reves = car + cadena_reves;
    }
}
if (cadena_espac == cadena_reves) {
    document.write("El texto es un palíndromo");
}
else {
    document.write("El texto No es un palíndromo");
}