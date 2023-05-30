var cadena = prompt("Introduce un Texto que contenga paréntesis:");
//Longitud de la cadena
var numchar = cadena.length;
var j;
var car;
var salida = "";
var copiar = false;

for (j = 0; j < numchar; j++) {
    car = cadena.charAt(j);    // recupera el caracter i del string.
    if (car == ")") {
        copiar = false;
    }
    if (copiar) {
        salida = salida + car;
    }
    if (car == "(") {
        copiar = true;
    }
}
document.write(salida);